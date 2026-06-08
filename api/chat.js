export default function handler(req, res) {
  res.status(200).json({
    answer: "该问题建议按中风险隐患处理。请设置警戒区域、安排专业人员复核、形成整改工单，并在48小时内上传复查记录。"
  });
}
