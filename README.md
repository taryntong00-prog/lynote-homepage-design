# Lynote 首页双排信任横条设计稿

## 最新交付：单排首页（2026-09-20）

请打开 `single-row.html` 查看最新版本，开发说明见 `DEVELOPER-HANDOFF.md`。首屏顺序为 1M+ users、4.9 / 5、Product Hunt、Trendshift Python #3；灰色媒体 Logo 位于首屏外的独立白底横条。原 `index.html` 双排版保留用于对比，下面的双排说明仅描述旧版。

在线预览：https://taryntong00-prog.github.io/lynote-homepage-design/single-row.html

Humanizer 同步单排版：https://taryntong00-prog.github.io/lynote-homepage-design/ai-humanizer/single-row.html 。背书顺序、Python #3 徽章与独立白底媒体条和最新首页一致；原 Humanizer 双排版继续保留。

## AI Humanizer 适配预览

打开 `ai-humanizer/index.html` 查看背书横条在 Humanizer 页的效果。保留工具优先的侧栏、输入和结果双栏布局；横条位于编辑器正下方，与工具区共享背景，在本设计稿中替代原有三项大数字统计区。复用首页 styles.css、官方徽章与媒体素材，桌面端高约 120px，手机约 114px。

这是设计预览，未修改官网。设置切换、示例文本、字数统计、TXT 文件本地读取和轮播暂停可操作；无 AI 后端，Humanize Now 跳转官网，不传输输入内容。首页设计不受影响。保留父级 assets/ 和 styles.css 路径，勿单独移动 ai-humanizer 文件夹。

页面布局参考：https://lynote.ai/ai-humanizer

## 当前版本

已移除新增的完整工具集版块，保留首屏和紧凑双排信任横条。第一排使用蓝紫色月桂叶装饰及品牌文案 “Better Writing. More Confidence.”，不将装饰标为具体获奖或认证；现有官方徽章保持不变。首屏默认工具为 AI Humanizer，介绍文案已缩短，上下间距收紧；首屏与横条之间无分隔线。工具图标素材保留以便未来使用，但不在页面展示。

打开 index.html 预览。独立静态 HTML / CSS / JS，无构建依赖。保留首页首屏作为上下文，主要交付是 `.trust-strip` 版块，两排总高桌面约 120px、手机约 114px。

- 第一排：Product Hunt 官方徽章、4.9 / 5、1M+ users、Trendshift Python #3 与全语言 #8 官方徽章。
- 第二排：官网截图对应的 11 个媒体 Logo，原始素材保留原色，通过 CSS 灰度与透明度弱化显示，单行循环。
- 两排均自动无缝向左滚动；鼠标悬停、键盘聚焦可暂停相应行；右上角暂停按钮控制两排。系统减少动态效果开启时停止自动滚动，并允许手动横向查看。
- Product Hunt / Trendshift 徽章可点击跳转来源。排名为历史单日排名，不代表当前排名；完整范围及日期见链接 title。素材快照获取于 2026-09-19。
- 4.9 及 1M+ 沿用用户需求及 Lynote 官网现有数据，不标为 Product Hunt 评分。正式上线请业务方确认这些数据仍有效。
- 素材均在 assets/，仅 Inter 字体需访问 Google Fonts，离线时回退系统字体。
- 周边工具仅为交互预览，不接 AI 服务；主按钮跳转现有官网工具。
- 本项目为独立的首页设计稿，使用 GitHub Pages 发布，不修改 Press 页。

来源：https://lynote.ai/ 、https://trendshift.io/repositories/35405
