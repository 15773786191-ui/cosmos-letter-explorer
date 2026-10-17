# 宇宙来信 Cosmos Letter Explorer

一个面向所有好奇者的交互式天文与地理科普项目。从银河与太阳系出发，靠近星球、观察结构，再回到地球探索山川与城市，让知识随着你的观察与操作逐步展开。

支持连续缩放、拖动和点击天体部位；地球可按大洲、国家、省州、城市与已收录地点探索，介绍中的地名也能直接点击定位。适合自主探索、亲子共学，也适合对宇宙和地理感兴趣的你。

线上体验：https://cosmos-letter-explorer.pages.dev/galaxy-preview/

## 本地运行

需要 Node.js（建议 20 或更新版本）和 Python 3。

```sh
npm install
npm run dev
```

打开 http://127.0.0.1:8766/galaxy-preview/ 。停止服务按 Ctrl+C。

## 构建与部署

```sh
npm run build
```

静态网站输出至 `share-site/dist/`，可部署到 Cloudflare Pages 等静态托管服务。Cloudflare Pages 的构建命令填 `npm run build`，输出目录填 `share-site/dist`。本仓库不包含部署授权凭据。

## 主要目录

- `galaxy-preview/`：银河、太阳系、地球地图与地名介绍。
- `planet-spatial/`：太阳及其他天体的连续近景探索。
- `saturn-layout-preview/`：土星、星环与卫星交互。
- `stellar/vendor/`、`galaxy-preview/vendor/`：本地三维引擎依赖。
- `tools/`：网站构建、地名数据处理与浏览器检查脚本。
- 其余目录保留早期故事、动画与样式原型，当前上线入口为 `galaxy-preview/`。

## 数据与使用边界

地名和参考边界来自 Natural Earth；科学资料链接和素材署名见各页面。部分地球高分辨率影像和地形需要联网加载；本地概览影像可在外部服务不可用时继续显示。已收录地名约 1.4 万个，全球所有街道、商店和地址尚未覆盖。天体间距、大小和动画速度为展示而调整，具体比较和结构示意以页面说明为准。

第三方素材及依赖保留各自的许可证和署名；本项目没有将这些素材重新授权为自由使用。生成的部署目录、构建产物、压缩包与本地缓存不提交到 GitHub。

部分历史 Python 数据构建及 Playwright 检查脚本包含原开发机器路径，需要按自己的环境调整；正常运行网页不需要重新抓取知识数据。
