# 云筑天瞳 公网部署版（Vercel Ready）

## 这是什么
这是可部署到 Vercel 的公网网站版本。部署后会得到一个网址，评委和队友可以直接访问。

## 已包含
- 高级首页驾驶舱
- AI视觉识别演示
- BIM-CAD解析演示
- ABAQUS仿真演示
- 数字孪生监管
- AI安全员Agent
- 报告中心
- Vercel Serverless API
- DeepSeek API预留接口

## 如何部署到 Vercel
1. 注册 GitHub
2. 新建一个仓库，例如 yunzhutong
3. 上传本文件夹内所有文件
4. 打开 https://vercel.com/
5. 使用 GitHub 登录
6. Add New Project
7. 选择 yunzhutong 仓库
8. 点击 Deploy
9. 部署完成后会得到公开网址

## 接入真实 DeepSeek
在 Vercel 项目设置里：
Settings → Environment Variables
添加：
DEEPSEEK_API_KEY = 你的DeepSeek API Key

然后重新 Deploy。

## 重要说明
Vercel 适合部署前端网站和轻量 API。
真实 YOLOv8、ABAQUS、MySQL 后端不建议直接放 Vercel：
- YOLOv8需要GPU/模型环境
- ABAQUS需要本地/服务器授权
- MySQL需要独立数据库服务

建议架构：
Vercel：部署前端和AI安全员轻量API
Render/Railway/阿里云：部署Python后端
Supabase/PlanetScale/阿里云RDS：部署数据库
本地/实验室服务器：运行ABAQUS
