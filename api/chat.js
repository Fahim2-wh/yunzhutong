export default async function handler(req, res) {
  const question = req.body?.question || "请分析当前工程风险";
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      real_deepseek: false,
      answer: "演示回答：该问题建议按中风险隐患处理。请设置警戒区域、安排专业人员复核、形成整改工单，并在48小时内上传复查记录。"
    });
  }
  try {
    const resp = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {"Content-Type":"application/json","Authorization":`Bearer ${apiKey}`},
      body: JSON.stringify({
        model:"deepseek-chat",
        temperature:0.3,
        messages:[
          {role:"system",content:"你是云筑天瞳AI工程安全员，请基于乡村建设安全、结构风险、整改闭环进行专业回答。"},
          {role:"user",content:question}
        ]
      })
    });
    const data = await resp.json();
    return res.status(200).json({real_deepseek:true, answer:data?.choices?.[0]?.message?.content || "DeepSeek返回为空"});
  } catch(e) {
    return res.status(500).json({error:String(e)});
  }
}
