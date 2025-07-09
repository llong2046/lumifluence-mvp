# Lumifluence Admin UI Quick Reference Guide

## 🌌 Theme Overview
**Dark Mode + High-Tech + Glassmorphism**

## 🎨 Core Colors
```css
/* Backgrounds */
--admin-bg-primary: #0F172A;     /* Main dark bg */
--admin-bg-secondary: #1E293B;   /* Card bg */
--admin-glass-dark: rgba(30, 41, 59, 0.7);

/* Theme Colors */
--admin-primary: #3B82F6;         /* Blue */
--admin-accent: #8B5CF6;          /* Purple */
--admin-gradient: linear-gradient(135deg, #3B82F6, #8B5CF6);

/* Text */
--admin-text-primary: #F1F5F9;    /* Light text */
--admin-text-secondary: #94A3B8;  /* Muted text */
```

## 🧱 Layout
- **Grid**: 12 columns, 20px gap
- **Sidebar**: 260px glassmorphic
- **Header**: 72px sticky top bar
- **Container**: Max 1440px

## 📦 Quick Component Reference

### Sidebar Navigation
```css
.admin-nav-item {
  /* Glassmorphic with glow on hover */
  /* Active state has gradient left border */
}
```

### Buttons
```css
.admin-btn-primary    /* Gradient bg with ripple effect */
.admin-btn-secondary  /* Outlined with glow */
.admin-btn-ghost      /* Transparent hover */
```

### Cards
```css
.admin-card           /* Dark bg with hover lift */
.admin-card-glass     /* Glassmorphic variant */
```

### Data Display
```css
.admin-table          /* Dark striped rows */
.admin-kpi-card       /* Big number displays */
.admin-tag-[status]   /* success/warning/error/info */
```

### Form Elements
```css
.admin-input          /* Dark bg, glow focus */
.admin-select         /* Custom arrow */
.admin-toggle         /* Animated switch */
```

## ✨ Effects

### Glow Classes
```css
.glow-blue            /* Blue shadow */
.glow-purple          /* Purple shadow */
.glow-pulse           /* Animated glow */
```

### Hover Effects
```css
.hover-lift           /* translateY(-4px) */
.hover-glow           /* Box shadow glow */
.hover-border-glow    /* Animated border */
```

### Loading States
```css
.admin-skeleton       /* Shimmer effect */
.admin-spinner        /* Rotating circle */
.admin-dots           /* 3 pulsing dots */
```

## 📊 Module Examples

### Influencer Table Row
- Avatar (48px) with verified badge
- Platform tags (colored pills)
- Stats in columns
- Action buttons

### Campaign Card
- Progress bar with shimmer
- KPI metrics
- Status tags
- Gradient hover effect

### Analytics Dashboard
- 4-column KPI grid
- Line/bar charts with neon colors
- Filter controls
- Export actions

## 📱 Responsive
- **Desktop**: Full layout (>1024px)
- **Tablet**: Collapsible sidebar
- **Mobile**: Stacked layout (<640px)

## 🎯 Design Tips
1. Use gradients sparingly - mainly for primary actions
2. Glow effects should be subtle (25% opacity)
3. Maintain 16px minimum touch targets
4. Test in dark environments
5. Ensure 4.5:1 contrast ratio for text

## 🔗 Related Files
- Full specs: `admin-ui-design-system.md`
- Frontend guide: `UI-DESIGN-GUIDE.md`
- Main website styles: `styles.css`

---

Quick CSS starter:
```css
/* Base admin layout */
body.admin {
  background: #0F172A;
  color: #F1F5F9;
  font-family: 'Inter', sans-serif;
}

/* Quick gradient button */
.btn-glow {
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  box-shadow: 0 4px 24px rgba(59, 130, 246, 0.25);
}
``` 