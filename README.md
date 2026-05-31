# 美味庄园 · Mayfair Chinese Restaurant

朴次茅斯正宗中餐厅官网 · Official website for Mayfair Chinese Restaurant, Portsmouth.

A static, bilingual (中文 / English) website with a language toggle, built as
plain HTML/CSS/JS and auto-deployed to **GitHub Pages**.

## 页面 / Pages

| 页面 | Page | 文件 |
|------|------|------|
| 首页 | Home | `index.html` |
| 菜单 | Menu | `menu.html` |
| 地图 | Map  | `map.html` |
| 联系 | Contact | `contact.html` |

## 餐厅信息 / Restaurant

- **地址 / Address:** 2A, Guildhall Square, Portsmouth PO1 2DB
- **电话 / Phone:** 07455 021149
- **营业时间 / Hours:** 周一–周五 / Mon–Fri 11:30–21:30 · 周六 / Sat 12:00–22:00

## 部署 / Deployment

Pushes to the default branch (`main`) trigger
`.github/workflows/deploy-pages.yml`, which publishes the site to GitHub Pages
via `actions/upload-pages-artifact` + `actions/deploy-pages`.

> Settings → Pages → Source must be set to **GitHub Actions**.
