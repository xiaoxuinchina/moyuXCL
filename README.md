# 爱摸鱼的XCL · GitHub Pages PWA v1.1 安装修正版

## 上传方式
请把本目录中的所有文件直接上传到仓库 `moyuXCL` 的根目录，不要再套一层文件夹。

部署地址：
`https://xiaoxuinchina.github.io/moyuXCL/`

## 本版重点修正
- manifest 使用固定 GitHub Pages 项目路径 `/moyuXCL/`
- 新增稳定的 `id`、`scope`、`start_url`
- 普通图标与 maskable 图标分开声明
- 新增 Android / Apple Touch 图标
- Service Worker 使用固定 scope，并加入 skipWaiting / clients.claim
- HTML 导航使用 network-first，避免更新后一直读旧缓存
- 外部天气 API 不经过 Service Worker
- 新增 `.nojekyll`
- 新增 `pwa-check.html` 安装诊断页

## 重新上传后必须做
1. 等 GitHub Pages 部署完成。
2. Android Chrome 打开：
   `https://xiaoxuinchina.github.io/moyuXCL/pwa-check.html`
3. 如果各项均为 ✅，再回首页。
4. Chrome → 网站设置 → 清除该站点数据（用于清掉旧版 PWA/SW 缓存）。
5. 完全关闭 Chrome 后重新打开首页。
6. 菜单 → “安装并创建快捷方式” → “安装”。

注意：GitHub Pages 与 PWA 安装是两回事。页面可访问只说明部署成功；手机是否生成 WebAPK 还会受 Chrome/Android 系统环境影响。
