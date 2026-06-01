/* ============================================================
   美味庄园 · 站点配置 / SITE CONFIG
   ── 建新餐厅网站时，основном只改这个文件即可 ──
   This is the ONE file to edit when reusing this site as a template.
   餐厅名、电话、地址、营业时间、主色调、首页大图都在这里。
   菜单内容仍在 menu.html（见 TEMPLATE.md 说明）。
   ============================================================ */
window.SITE_CONFIG = {
  brand: {
    zh: "美味庄园",                       // 中文店名
    en: "Mayfair Chinese Restaurant",     // 英文店名（导航/页脚副标题）
    enShort: "Mayfair",                   // 英文版首页大标题
    tagline_zh: "正宗中餐 · 热辣开席",
    tagline_en: "Authentic Chinese, Served Hot"
  },

  phone: {
    display: "023 9229 7777",             // 显示用号码
    dial: "+442392297777"                 // 拨号用（tel: 链接，国际格式无空格）
  },

  address: {
    line1: "2A, Guildhall Square, Southsea,",
    line2: "Portsmouth PO1 2DB",
    // 地图查询串（用于 Google Maps 链接，空格用 %20，逗号用 %2C）
    mapsQuery: "2A%20Guildhall%20Square%2C%20Southsea%2C%20Portsmouth%20PO1%202DB"
  },

  // 营业时间：每行一条，{zh, en}
  hours: [
    { zh: "午市 · 周一至周六", en: "Lunch · Mon–Sat", time: "11:30 – 15:30" },
    { zh: "晚市 · 周一至周六", en: "Dinner · Mon–Sat", time: "16:30 – 21:00" },
    { zh: "外卖配送",        en: "Delivery",        time: "11:30 – 20:30" },
    { zh: "周日",            en: "Sunday",          time: "休息 / Closed" }
  ],
  hoursShort_zh: "周一至周六 11:30–15:30 · 16:30–21:00 · 周日休息",
  hoursShort_en: "Mon–Sat 11:30–15:30 & 16:30–21:00 · Closed Sun",

  // 首页全屏大图（相对路径）
  heroImage: "dish-images/hotpot.png",

  // 主题配色（留空则用 CSS 默认）。改这里即可整站换色。
  theme: {
    accent:  "#9a2a1c",   // 主强调红（按钮 hover、链接、标签）
    wine:    "#5a1414",   // 深色块（Hero 遮罩、火锅面板、CTA）
    wine2:   "#471010",   // 更深酒红
    ink:     "#1b1714"    // 正文近黑
  }
};
