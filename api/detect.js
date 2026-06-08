export default function handler(req, res) {
  res.status(200).json({risk_level:"中高风险", advice:"建议设置警戒区域，安排安全员复核。"});
}
