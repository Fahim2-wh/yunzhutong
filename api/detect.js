export default function handler(req, res) {
  res.status(200).json({
    risk_level: "中高风险",
    detections: [
      { label: "未佩戴安全帽", confidence: 0.91 },
      { label: "临边防护缺失", confidence: 0.87 },
      { label: "墙体裂缝", confidence: 0.82 }
    ],
    advice: "建议设置警戒区域，安排安全员复核，并在48小时内完成整改闭环。"
  });
}
