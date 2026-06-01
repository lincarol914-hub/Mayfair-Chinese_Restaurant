# 餐厅网站模板使用指南 / Restaurant Site Template Guide

这个网站可作为模板复用。中英双语、移动端自适应、菜单图片点击放大、
自动部署到 GitHub Pages。建新餐厅站时，按下面步骤改即可。

---

## 1. 改基础信息（最常改）→ 只动 `site-config.js`

打开 **`site-config.js`**，修改：

- `brand` — 中/英文店名、首页英文大标题、slogan
- `phone` — `display`（显示号码）和 `dial`（tel: 拨号，国际格式无空格，如 `+442392297777`）
- `address` — 地址两行 + `mapsQuery`（Google 地图查询串，空格写 `%20`，逗号写 `%2C`）
- `hours` — 营业时间，每行一条
- `heroImage` — 首页全屏大图路径
- `theme` — 主题配色（`accent` 强调色、`wine`/`wine2` 深色块、`ink` 正文色）

> 改 `theme` 里的颜色会**整站换色**（按钮、链接、Hero 遮罩、火锅面板、CTA）。
> 改 `phone.dial` 会自动更新所有 `tel:` 链接。

> ⚠️ 注意：当前页面里的文字（店名、地址、营业时间）**也直接写在 HTML 里**，
> 配置文件用于主题色和拨号链接的自动应用。要彻底换店名/地址文字，
> 建议用编辑器全局替换（见第 4 节），最稳妥。

---

## 2. 改菜单 → 编辑 `menu.html`

菜单每一项是一行：

```html
<li class="dish"><span class="idx">01</span>
  <span class="names"><span class="zh-n">中文菜名</span><span class="en-n">English name</span></span>
  <span class="price">£0.00</span></li>
```

- **加辣味标记**：在 `</span>` 后加 `<span class="spicy">🌶</span>`（紧跟 names 之后）。
- **加「查看图片」按钮**：把 `class="dish"` 改成 `class="dish has-img"`，并在 price 前插入：
  ```html
  <button class="photo-btn" type="button" data-img="dish-images/分类/文件名.jpg" data-cap="中文菜名">
    <svg class="svg-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="15" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-4-7 6"/></svg>
    <span class="lang-zh">查看图片</span><span class="lang-en">View Photo</span></button>
  ```
- **整段分区**用 `<div class="menu-section">` 包裹，标题用 `<h3>`。

---

## 3. 换图片 → `dish-images/` 目录

- 把菜品照片放进 `dish-images/`（可分子目录），在菜单或首页卡片里
  用 `data-img="dish-images/.../文件名.jpg"` 引用。
- 首页 Hero 大图、招牌卡、分类卡的图片在 `index.html` 里直接改 `src` / `data-img`。
- 所有 `<img>` 都带 `onerror` 回退，图丢失不会显示破图。

---

## 4. 彻底替换店名/地址文字（建议）

用编辑器在全部 `.html` 里全局替换：

- `美味庄园` → 新中文店名
- `Mayfair Chinese Restaurant` → 新英文店名
- `Mayfair`（首页英文大标题）→ 新英文短名
- `023 9229 7777` → 新显示号码；`+442392297777` → 新拨号号码
- 地址 `2A, Guildhall Square, Southsea,` / `Portsmouth PO1 2DB` → 新地址
- 营业时间文字（搜 `11:30`、`周一至周六`、`Mon–Sat`）

---

## 5. 缓存版本号

改完静态资源后，把各 HTML 里的 `?v=NN`（`style.css?v=NN` / `app.js?v=NN` /
`site-config.js?v=NN`）号码 +1，强制浏览器加载新文件。

---

## 6. 部署

推送到默认分支 `main` → GitHub Actions 自动发布到 Pages
（`.github/workflows/deploy-pages.yml`，约 15–30 秒）。
仓库 Settings → Pages → Source 需设为 **GitHub Actions**。

---

## 文件结构

```
index.html        首页（Hero / 关于 / 招牌 / 火锅 / 浏览 / CTA / 页脚）
menu.html         完整菜单（分区 + 图片点击放大）
map.html          地图与到店信息
contact.html      联系 / 营业时间
site-config.js    ★ 站点配置（店名/电话/地址/时间/配色）
assets/style.css  全站样式（顶部 :root 为配色变量）
assets/app.js     语言切换 / 移动端导航 / 图片灯箱 / 配置应用
dish-images/      菜品图片
.github/workflows/deploy-pages.yml  自动部署
```
