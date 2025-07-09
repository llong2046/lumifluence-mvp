# Lumifluence UI Design Guide (Quick Reference)

## 🎯 Design Philosophy
**Professional Trust + Artistic Expression**

## 🎨 Core Colors
```css
/* Primary - Trust Blue */
--primary-600: #2563EB;

/* Accent - Creative Purple */  
--accent-600: #7C3AED;

/* Gradients */
background: linear-gradient(135deg, #3B82F6, #8B5CF6);
```

## 📝 Typography
- **Headings**: Poppins (Display Font)
- **Body**: Inter (Primary Font)
- **Scale**: 12px → 48px

## 🧩 Key Components

### Buttons
- `.btn-primary` - Main actions (Trust Blue)
- `.btn-accent` - Creator actions (Creative Purple)
- `.btn-secondary` - Secondary actions
- `.btn-ghost` - Tertiary actions

### Cards
- `.card` - Base card with subtle shadow
- `.card-gradient` - Special cards with gradient border on hover

### Layout
- **Container**: Max 1280px
- **Grid**: 12 columns
- **Spacing**: 4px base unit (4, 8, 12, 16, 24, 32px...)

## 📱 Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Special Effects
- **Gradient Text**: `.gradient-text`
- **Glass Effect**: `backdrop-filter: blur(10px)`
- **Hover Lift**: `transform: translateY(-2px)`
- **Loading**: `.animate-pulse`

## 🌍 Multi-language
- Supported: EN, 中文, ES, FR
- Use `data-i18n` attributes
- Language stored in localStorage

## ♿ Accessibility
- Focus states: 3px outline
- ARIA labels required
- Contrast ratio: WCAG AA
- Keyboard navigation

## 🎭 Role-Specific Design

### Brand Login
- Professional blue gradient
- Data-driven messaging
- Enterprise security focus

### Creator Login  
- Creative purple gradient
- Earning potential highlight
- Social media integration

---

For full documentation, see `my-ux.mdc` 