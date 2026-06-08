export default function handler(req, res) {
  res.status(200).json({
    project: "C村公共服务中心改造项目",
    risk_level: "Ⅱ级风险",
    max_stress_mpa: 18.6,
    max_displacement_mm: 4.2,
    advice: "立即设置警戒区域，进行临时支撑和局部加固，48小时内完成复查。"
  });
}
