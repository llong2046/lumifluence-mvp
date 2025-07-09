# Lumifluence Admin UI Design System

## 🌌 设计理念 Design Philosophy

### 核心价值观 Core Values

- **高科技感 High-Tech**: 深色背景配合发光效果，营造未来科技感
- **数据驱动 Data-Driven**: 清晰的数据可视化和信息层级
- **高效操作 Efficiency First**: 为长时间使用优化，减少视觉疲劳
- **品牌一致性 Brand Consistency**: 延续主站的蓝紫色调和设计语言

### 设计原则 Design Principles

1. **暗色优先 Dark First**: 深色背景减少眼部疲劳，突出数据内容
2. **层次分明 Clear Hierarchy**: 通过颜色、大小、间距建立信息层级
3. **微光效果 Subtle Glow**: 适度的发光效果增强科技感
4. **玻璃态美学 Glassmorphism**: 半透明叠加创造深度感

## 🎨 色彩系统 Color System

### 背景色 Background Colors

```css
:root {
  /* Dark Backgrounds */
  --admin-bg-primary: #0F172A;      /* Main background */
  --admin-bg-secondary: #1E293B;    /* Card background */
  --admin-bg-tertiary: #1E1B2F;     /* Panel background */
  --admin-bg-elevated: #2A2744;     /* Elevated surface */
  
  /* Glassmorphic Backgrounds */
  --admin-glass-dark: rgba(30, 41, 59, 0.7);
  --admin-glass-light: rgba(51, 65, 85, 0.3);
  --admin-glass-border: rgba(148, 163, 184, 0.1);
}
```

### 主题色 Theme Colors

```css
:root {
  /* Primary Blue - 数据和交互 */
  --admin-primary-600: #3B82F6;
  --admin-primary-500: #60A5FA;
  --admin-primary-400: #93C5FD;
  --admin-primary-glow: rgba(59, 130, 246, 0.25);
  
  /* Accent Purple - 创意和强调 */
  --admin-accent-600: #8B5CF6;
  --admin-accent-500: #A78BFA;
  --admin-accent-400: #C084FC;
  --admin-accent-glow: rgba(139, 92, 246, 0.25);
  
  /* Gradient Combinations */
  --admin-gradient-primary: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  --admin-gradient-surface: linear-gradient(180deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.04) 100%);
  --admin-gradient-glow: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
}
```

### 语义色 Semantic Colors

```css
:root {
  /* Status Colors */
  --admin-success: #10B981;
  --admin-success-glow: rgba(16, 185, 129, 0.25);
  
  --admin-warning: #F59E0B;
  --admin-warning-glow: rgba(245, 158, 11, 0.25);
  
  --admin-error: #EF4444;
  --admin-error-glow: rgba(239, 68, 68, 0.25);
  
  --admin-info: #06B6D4;
  --admin-info-glow: rgba(6, 182, 212, 0.25);
}
```

### 文本色 Text Colors

```css
:root {
  /* Text Hierarchy */
  --admin-text-primary: #F1F5F9;     /* Primary text */
  --admin-text-secondary: #94A3B8;   /* Secondary text */
  --admin-text-muted: #64748B;       /* Muted/disabled */
  --admin-text-inverse: #0F172A;     /* On light backgrounds */
}
```

## 🔤 字体系统 Typography System

### 字体家族 Font Family

```css
:root {
  /* 与主站保持一致 */
  --admin-font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --admin-font-display: 'Poppins', 'Inter', sans-serif;
  --admin-font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### 字体规模 Type Scale

```css
:root {
  /* Display */
  --admin-text-4xl: 2.5rem;     /* 40px - Dashboard title */
  --admin-text-3xl: 2rem;       /* 32px - Page title */
  --admin-text-2xl: 1.5rem;     /* 24px - Section title */
  --admin-text-xl: 1.25rem;     /* 20px - Card title */
  --admin-text-lg: 1.125rem;    /* 18px - Emphasis */
  
  /* Body */
  --admin-text-base: 1rem;      /* 16px - Body text */
  --admin-text-sm: 0.875rem;    /* 14px - Small text */
  --admin-text-xs: 0.75rem;     /* 12px - Caption */
  
  /* Data */
  --admin-text-data-lg: 2.5rem; /* 40px - Big numbers */
  --admin-text-data-md: 1.5rem; /* 24px - Medium numbers */
}
```

## 🧱 布局系统 Layout System

### 网格系统 Grid System

```css
:root {
  /* Grid Configuration */
  --admin-columns: 12;
  --admin-gap: 20px;
  --admin-sidebar-width: 260px;
  --admin-header-height: 72px;
  
  /* Container */
  --admin-container-max: 1440px;
  --admin-container-padding: 24px;
}

/* Dashboard Layout */
.admin-layout {
  display: grid;
  grid-template-columns: var(--admin-sidebar-width) 1fr;
  grid-template-rows: var(--admin-header-height) 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  min-height: 100vh;
  background-color: var(--admin-bg-primary);
}
```

### 间距系统 Spacing System

```css
:root {
  /* 基于 4px 单位 */
  --admin-space-1: 4px;
  --admin-space-2: 8px;
  --admin-space-3: 12px;
  --admin-space-4: 16px;
  --admin-space-5: 20px;
  --admin-space-6: 24px;
  --admin-space-8: 32px;
  --admin-space-10: 40px;
  --admin-space-12: 48px;
  --admin-space-16: 64px;
}
```

## 📦 组件库 Component Library

### 侧边栏 Sidebar

```css
.admin-sidebar {
  grid-area: sidebar;
  background: var(--admin-glass-dark);
  backdrop-filter: blur(12px);
  border-right: 1px solid var(--admin-glass-border);
  padding: var(--admin-space-6);
}

.admin-nav-item {
  display: flex;
  align-items: center;
  gap: var(--admin-space-3);
  padding: var(--admin-space-3) var(--admin-space-4);
  border-radius: 12px;
  color: var(--admin-text-secondary);
  transition: all 0.2s ease;
  position: relative;
}

.admin-nav-item:hover {
  color: var(--admin-text-primary);
  background: var(--admin-primary-glow);
}

.admin-nav-item.active {
  color: var(--admin-primary-400);
  background: var(--admin-primary-glow);
}

.admin-nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 24px;
  background: var(--admin-gradient-primary);
  border-radius: 0 3px 3px 0;
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
}
```

### 顶部导航 Header

```css
.admin-header {
  grid-area: header;
  background: var(--admin-glass-dark);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--admin-glass-border);
  padding: 0 var(--admin-space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.admin-search {
  background: var(--admin-bg-tertiary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 12px;
  padding: var(--admin-space-2) var(--admin-space-4);
  color: var(--admin-text-primary);
  width: 320px;
  transition: all 0.3s ease;
}

.admin-search:focus {
  border-color: var(--admin-primary-500);
  box-shadow: 0 0 0 3px var(--admin-primary-glow);
  outline: none;
}
```

### 卡片 Cards

```css
.admin-card {
  background: var(--admin-bg-secondary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 16px;
  padding: var(--admin-space-6);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.admin-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--admin-gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.admin-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.admin-card:hover::before {
  opacity: 1;
}

/* Glass Card Variant */
.admin-card-glass {
  background: var(--admin-glass-dark);
  backdrop-filter: blur(16px);
  border: 1px solid var(--admin-glass-border);
}
```

### 按钮 Buttons

```css
/* Primary Button - Gradient */
.admin-btn-primary {
  background: var(--admin-gradient-primary);
  color: var(--admin-text-inverse);
  padding: var(--admin-space-3) var(--admin-space-6);
  border-radius: 10px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.admin-btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.admin-btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px var(--admin-primary-glow);
}

.admin-btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

/* Secondary Button - Outlined */
.admin-btn-secondary {
  background: transparent;
  color: var(--admin-primary-400);
  border: 2px solid var(--admin-primary-500);
  padding: var(--admin-space-3) var(--admin-space-6);
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.admin-btn-secondary:hover {
  background: var(--admin-primary-glow);
  box-shadow: 0 0 16px var(--admin-primary-glow);
}

/* Ghost Button */
.admin-btn-ghost {
  background: transparent;
  color: var(--admin-text-secondary);
  border: none;
  padding: var(--admin-space-2) var(--admin-space-4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.admin-btn-ghost:hover {
  background: var(--admin-glass-light);
  color: var(--admin-text-primary);
}
```

### 表格 Tables

```css
.admin-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.admin-table thead {
  background: var(--admin-bg-tertiary);
}

.admin-table th {
  padding: var(--admin-space-4);
  text-align: left;
  font-weight: 500;
  color: var(--admin-text-secondary);
  font-size: var(--admin-text-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--admin-glass-border);
}

.admin-table tbody tr {
  border-bottom: 1px solid var(--admin-glass-border);
  transition: all 0.2s ease;
}

.admin-table tbody tr:hover {
  background: var(--admin-glass-light);
}

.admin-table td {
  padding: var(--admin-space-4);
  color: var(--admin-text-primary);
}

/* Cell with Avatar */
.admin-table-user {
  display: flex;
  align-items: center;
  gap: var(--admin-space-3);
}

.admin-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--admin-glass-border);
}
```

### 标签/状态 Tags & Status

```css
.admin-tag {
  display: inline-flex;
  align-items: center;
  padding: var(--admin-space-1) var(--admin-space-3);
  border-radius: 20px;
  font-size: var(--admin-text-xs);
  font-weight: 500;
  transition: all 0.2s ease;
}

/* Status Variants */
.admin-tag-success {
  background: var(--admin-success-glow);
  color: var(--admin-success);
  border: 1px solid var(--admin-success);
}

.admin-tag-warning {
  background: var(--admin-warning-glow);
  color: var(--admin-warning);
  border: 1px solid var(--admin-warning);
}

.admin-tag-error {
  background: var(--admin-error-glow);
  color: var(--admin-error);
  border: 1px solid var(--admin-error);
}

.admin-tag-info {
  background: var(--admin-info-glow);
  color: var(--admin-info);
  border: 1px solid var(--admin-info);
}

.admin-tag-accent {
  background: var(--admin-accent-glow);
  color: var(--admin-accent-400);
  border: 1px solid var(--admin-accent-500);
}
```

### 表单元素 Form Elements

```css
/* Input Field */
.admin-input {
  background: var(--admin-bg-tertiary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 10px;
  padding: var(--admin-space-3) var(--admin-space-4);
  color: var(--admin-text-primary);
  width: 100%;
  transition: all 0.3s ease;
}

.admin-input:focus {
  border-color: var(--admin-primary-500);
  box-shadow: 0 0 0 3px var(--admin-primary-glow);
  outline: none;
}

.admin-input::placeholder {
  color: var(--admin-text-muted);
}

/* Select Dropdown */
.admin-select {
  background: var(--admin-bg-tertiary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 10px;
  padding: var(--admin-space-3) var(--admin-space-4);
  color: var(--admin-text-primary);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 48px;
}

/* Toggle Switch */
.admin-toggle {
  position: relative;
  width: 48px;
  height: 24px;
  background: var(--admin-bg-tertiary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.admin-toggle.active {
  background: var(--admin-gradient-primary);
  border-color: transparent;
}

.admin-toggle-handle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background: var(--admin-text-secondary);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.admin-toggle.active .admin-toggle-handle {
  left: 26px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

### 数据可视化 Data Visualization

```css
/* KPI Card */
.admin-kpi-card {
  background: var(--admin-bg-secondary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 16px;
  padding: var(--admin-space-6);
  position: relative;
  overflow: hidden;
}

.admin-kpi-value {
  font-size: var(--admin-text-data-lg);
  font-weight: 700;
  color: var(--admin-text-primary);
  line-height: 1;
  margin-bottom: var(--admin-space-2);
}

.admin-kpi-label {
  font-size: var(--admin-text-sm);
  color: var(--admin-text-secondary);
  margin-bottom: var(--admin-space-4);
}

.admin-kpi-trend {
  display: inline-flex;
  align-items: center;
  gap: var(--admin-space-1);
  padding: var(--admin-space-1) var(--admin-space-2);
  border-radius: 6px;
  font-size: var(--admin-text-xs);
  font-weight: 500;
}

.admin-kpi-trend.up {
  background: var(--admin-success-glow);
  color: var(--admin-success);
}

.admin-kpi-trend.down {
  background: var(--admin-error-glow);
  color: var(--admin-error);
}

/* Chart Container */
.admin-chart-container {
  background: var(--admin-bg-secondary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 16px;
  padding: var(--admin-space-6);
  min-height: 320px;
}

.admin-chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--admin-space-6);
}

.admin-chart-title {
  font-size: var(--admin-text-xl);
  font-weight: 600;
  color: var(--admin-text-primary);
}

/* Chart Colors */
.admin-chart-colors {
  --chart-primary: #3B82F6;
  --chart-secondary: #8B5CF6;
  --chart-success: #10B981;
  --chart-warning: #F59E0B;
  --chart-error: #EF4444;
  --chart-gradient-1: linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 100%);
  --chart-gradient-2: linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0) 100%);
}
```

### 模态框 Modals

```css
.admin-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.admin-modal {
  background: var(--admin-bg-secondary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 20px;
  padding: var(--admin-space-8);
  max-width: 560px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
}

.admin-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--admin-space-6);
}

.admin-modal-title {
  font-size: var(--admin-text-2xl);
  font-weight: 600;
  color: var(--admin-text-primary);
}
```

### 通知 Notifications

```css
.admin-notification {
  background: var(--admin-glass-dark);
  backdrop-filter: blur(12px);
  border: 1px solid var(--admin-glass-border);
  border-radius: 12px;
  padding: var(--admin-space-4);
  display: flex;
  align-items: flex-start;
  gap: var(--admin-space-3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.admin-notification::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--admin-gradient-primary);
}

.admin-notification.success::before {
  background: var(--admin-success);
}

.admin-notification.error::before {
  background: var(--admin-error);
}

.admin-notification.warning::before {
  background: var(--admin-warning);
}
```

## 📊 特定模块设计 Module Designs

### 网红列表 Influencer Table

```css
.influencer-table-row {
  display: grid;
  grid-template-columns: 300px 120px 150px 100px 120px 100px;
  gap: var(--admin-space-4);
  align-items: center;
  padding: var(--admin-space-4);
  border-bottom: 1px solid var(--admin-glass-border);
}

.influencer-profile {
  display: flex;
  align-items: center;
  gap: var(--admin-space-3);
}

.influencer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--admin-accent-glow);
  position: relative;
}

.influencer-verified {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  background: var(--admin-gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.influencer-stats {
  display: flex;
  flex-direction: column;
  gap: var(--admin-space-1);
}

.influencer-stat-value {
  font-weight: 600;
  color: var(--admin-text-primary);
}

.influencer-stat-label {
  font-size: var(--admin-text-xs);
  color: var(--admin-text-muted);
}
```

### 营销活动概览 Campaign Overview

```css
.campaign-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--admin-space-6);
}

.campaign-card {
  background: var(--admin-bg-secondary);
  border: 1px solid var(--admin-glass-border);
  border-radius: 16px;
  padding: var(--admin-space-6);
  position: relative;
  overflow: hidden;
}

.campaign-progress {
  margin-top: var(--admin-space-4);
}

.campaign-progress-bar {
  height: 8px;
  background: var(--admin-bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.campaign-progress-fill {
  height: 100%;
  background: var(--admin-gradient-primary);
  border-radius: 4px;
  transition: width 0.6s ease;
  position: relative;
}

.campaign-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(100px); }
}
```

### 工作流程构建器 Workflow Builder

```css
.workflow-canvas {
  background: var(--admin-bg-primary);
  background-image: 
    radial-gradient(circle at 20px 20px, var(--admin-glass-border) 1px, transparent 1px);
  background-size: 40px 40px;
  border-radius: 16px;
  min-height: 600px;
  position: relative;
}

.workflow-node {
  background: var(--admin-bg-secondary);
  border: 2px solid var(--admin-glass-border);
  border-radius: 12px;
  padding: var(--admin-space-4);
  position: absolute;
  cursor: move;
  transition: all 0.2s ease;
  min-width: 200px;
}

.workflow-node:hover {
  border-color: var(--admin-primary-500);
  box-shadow: 0 0 24px var(--admin-primary-glow);
}

.workflow-node.active {
  border-color: var(--admin-accent-500);
  box-shadow: 0 0 32px var(--admin-accent-glow);
}

.workflow-connector {
  stroke: var(--admin-primary-500);
  stroke-width: 2;
  fill: none;
  filter: drop-shadow(0 0 4px var(--admin-primary-glow));
}
```

## ✨ 特效和动画 Effects & Animations

### 发光效果 Glow Effects

```css
.glow-blue {
  box-shadow: 0 0 20px var(--admin-primary-glow);
}

.glow-purple {
  box-shadow: 0 0 20px var(--admin-accent-glow);
}

.glow-text {
  text-shadow: 0 0 10px currentColor;
}

/* Animated Glow */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px var(--admin-primary-glow); }
  50% { box-shadow: 0 0 40px var(--admin-primary-glow), 0 0 60px var(--admin-primary-glow); }
}

.glow-pulse {
  animation: pulse-glow 2s infinite;
}
```

### 加载状态 Loading States

```css
/* Skeleton Loader */
.admin-skeleton {
  background: linear-gradient(
    90deg,
    var(--admin-bg-tertiary) 25%,
    var(--admin-glass-light) 50%,
    var(--admin-bg-tertiary) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Spinner */
.admin-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--admin-glass-border);
  border-top-color: var(--admin-primary-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Dots Loader */
.admin-dots {
  display: flex;
  gap: 8px;
}

.admin-dot {
  width: 8px;
  height: 8px;
  background: var(--admin-primary-500);
  border-radius: 50%;
  animation: dot-pulse 1.4s infinite ease-in-out both;
}

.admin-dot:nth-child(1) { animation-delay: -0.32s; }
.admin-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes dot-pulse {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
```

## 🔌 交互状态 Interactive States

### 悬停效果 Hover Effects

```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
}

.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 24px var(--admin-primary-glow);
}

.hover-border-glow {
  position: relative;
  overflow: hidden;
}

.hover-border-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--admin-primary-glow), transparent);
  transition: left 0.5s;
}

.hover-border-glow:hover::before {
  left: 100%;
}
```

### 焦点状态 Focus States

```css
.focus-glow:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--admin-primary-glow);
}

.focus-within-glow:focus-within {
  box-shadow: 0 0 0 3px var(--admin-accent-glow);
}
```

## 📱 响应式设计 Responsive Design

### 断点 Breakpoints

```css
:root {
  --admin-screen-sm: 640px;
  --admin-screen-md: 768px;
  --admin-screen-lg: 1024px;
  --admin-screen-xl: 1280px;
  --admin-screen-2xl: 1536px;
}

/* Tablet and below */
@media (max-width: 1024px) {
  .admin-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
  }
  
  .admin-sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    bottom: 0;
    width: var(--admin-sidebar-width);
    z-index: 999;
    transition: left 0.3s ease;
  }
  
  .admin-sidebar.open {
    left: 0;
  }
}

/* Mobile */
@media (max-width: 640px) {
  :root {
    --admin-container-padding: 16px;
    --admin-gap: 16px;
  }
  
  .admin-table {
    display: block;
    overflow-x: auto;
  }
  
  .campaign-grid {
    grid-template-columns: 1fr;
  }
}
```

## 🎯 最佳实践 Best Practices

### Do's ✅

1. **保持深色主题一致性**：避免使用纯白色，使用 `--admin-text-primary`
2. **适度使用发光效果**：发光效果应该微妙，避免过度使用
3. **层次分明**：通过背景色深浅创建视觉层次
4. **玻璃态效果**：在叠加元素上使用半透明和模糊效果
5. **数据优先**：确保数据的可读性始终是第一优先级

### Don'ts ❌

1. **避免高对比度**：深色背景上避免使用纯白文字
2. **避免过亮的颜色**：使用柔和的颜色避免视觉疲劳
3. **避免过多动画**：动画应该快速且有目的性
4. **避免小字体**：最小字体不应小于 12px
5. **避免忽视焦点状态**：所有交互元素都需要清晰的焦点指示

## 🔧 实施示例 Implementation Examples

### 网红管理页面

```html
<div class="admin-layout">
  <!-- Sidebar -->
  <aside class="admin-sidebar">
    <div class="admin-logo">
      <img src="logo.svg" alt="Lumifluence Admin">
    </div>
    <nav class="admin-nav">
      <a href="#" class="admin-nav-item active">
        <svg><!-- Dashboard Icon --></svg>
        <span>Dashboard</span>
      </a>
      <a href="#" class="admin-nav-item">
        <svg><!-- Influencers Icon --></svg>
        <span>Influencers</span>
      </a>
      <a href="#" class="admin-nav-item">
        <svg><!-- Campaigns Icon --></svg>
        <span>Campaigns</span>
      </a>
    </nav>
  </aside>
  
  <!-- Header -->
  <header class="admin-header">
    <input type="search" class="admin-search" placeholder="Search...">
    <div class="admin-header-actions">
      <button class="admin-btn-ghost">
        <svg><!-- Notification Icon --></svg>
      </button>
      <img src="avatar.jpg" class="admin-avatar" alt="User">
    </div>
  </header>
  
  <!-- Main Content -->
  <main class="admin-main">
    <div class="admin-container">
      <!-- KPI Cards -->
      <div class="admin-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 32px;">
        <div class="admin-kpi-card">
          <div class="admin-kpi-value">125K</div>
          <div class="admin-kpi-label">Total Influencers</div>
          <span class="admin-kpi-trend up">
            <svg><!-- Up Arrow --></svg>
            +12.5%
          </span>
        </div>
        <!-- More KPI cards... -->
      </div>
    
      <!-- Influencer Table -->
      <div class="admin-card">
        <div class="admin-card-header">
          <h2 class="admin-card-title">Recent Influencers</h2>
          <button class="admin-btn-primary">Add New</button>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Influencer</th>
              <th>Platform</th>
              <th>Followers</th>
              <th>Engagement</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="admin-table-user">
                  <img src="avatar.jpg" class="admin-avatar" alt="Influencer">
                  <div>
                    <div class="admin-text-primary">Sarah Johnson</div>
                    <div class="admin-text-secondary admin-text-sm">@sarahjohnson</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="admin-tag admin-tag-info">Instagram</span>
              </td>
              <td>125K</td>
              <td>4.8%</td>
              <td>
                <span class="admin-tag admin-tag-success">Active</span>
              </td>
              <td>
                <button class="admin-btn-ghost">View</button>
              </td>
            </tr>
            <!-- More rows... -->
          </tbody>
        </table>
      </div>
    </div>
  </main>
</div>
```

---

此管理系统UI设计规范延续了Lumifluence品牌的专业与创意结合的理念，采用深色主题减少长时间使用的视觉疲劳，同时通过蓝紫渐变和发光效果营造高科技感，为管理后台提供了完整的设计指导。
