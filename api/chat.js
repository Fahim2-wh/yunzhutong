export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const question = req.body?.question || "请分析当前工程风险";
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      real_deepseek: false,
      answer: "演示回答：该问题建议按中风险隐患处理。请设置警戒区域、安排专业人员复核、形成整改工单，并在48小时内上传复查记录。部署到Vercel后，在环境变量中填写DEEPSEEK_API_KEY即可启用真实DeepSeek。"
    });
  }

  try {
    const resp = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        temperature: 0.3,
        messages: [
          { role: "system", content: "你是云筑天瞳AI工程安全员，请基于乡村建设安全、结构风险、整改闭环进行专业回答。不要编造法律条文，无法判断时建议现场复核。" },
          { role: "user", content: question }
        ]
      })
    });

    const data = await resp.json();
    const answer = data?.choices?.[0]?.message?.content || "DeepSeek返回为空，请检查API Key。";
    return res.status(200).json({ real_deepseek: true, answer });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
