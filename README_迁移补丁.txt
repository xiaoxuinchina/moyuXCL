爱摸鱼的XCL v3.0.9 直接迁移补丁

修复：
- 不再把 Android 系统剪贴板作为主要迁移通道。
- 旧 APP 会把记录 JSON 用 gzip 压缩并编码进 moyuwb://import 深链接。
- 新“摸鱼工作台”被唤起时即可同时收到迁移数据。
- 若设备不支持 CompressionStream，仍保留旧剪贴板方式作为备用。

使用：
1. 覆盖上传到旧 moyuXCL 网页仓库。
2. 安装“摸鱼工作台 Android v1.0.2”。
3. 旧 APP → 全部记录 → 一键迁移到摸鱼工作台。
