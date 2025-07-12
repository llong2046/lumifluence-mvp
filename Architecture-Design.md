# Lumifluence 系统架构设计文档

版本：1.0  
日期：2025-07-12

---

## 1. 系统架构总览

### 1.1 架构原则
- **微服务架构**：服务解耦，独立部署
- **API优先**：所有功能通过API暴露
- **云原生**：容器化，弹性伸缩
- **AI驱动**：深度集成AI能力
- **事件驱动**：异步处理，高性能

### 1.2 技术栈选型

#### 前端技术栈
```yaml
框架: Vue.js 3.4+ (Composition API)
语言: TypeScript 5.0+
构建工具: Vite 5.0
状态管理: Pinia
路由: Vue Router 4
UI组件: Element Plus + TailwindCSS
HTTP客户端: Axios
国际化: Vue I18n
SEO: Nuxt.js 3 (SSR/SSG)
```

#### 后端技术栈
```yaml
语言: Python 3.11+
框架: FastAPI 0.104+
ORM: SQLAlchemy 2.0 + Alembic
验证: Pydantic V2
认证: JWT (PyJWT)
异步: asyncio + aiohttp
任务队列: Celery + Redis
API文档: 自动生成 OpenAPI
```

#### 基础设施
```yaml
容器: Docker + Kubernetes
数据库: PostgreSQL 15 + TimescaleDB
缓存: Redis 7.0
搜索: Elasticsearch 8.0
消息队列: RabbitMQ
对象存储: AWS S3 / 阿里云OSS
监控: Prometheus + Grafana
日志: ELK Stack
CI/CD: GitLab CI / GitHub Actions
```

## 2. 详细架构设计

### 2.1 前端架构

#### 多端应用架构
```
┌─────────────────────────────────────────────────────┐
│                  Nginx (反向代理)                     │
└──────────────────┬──────────────────────────────────┘
                   │
    ┌──────────────┼──────────────┬───────────────────┐
    │              │              │                   │
┌───▼───┐    ┌────▼────┐    ┌────▼────┐      ┌──────▼──────┐
│品牌方端│    │创作者端  │    │管理后台  │      │ 公开官网    │
│  SPA  │    │   SPA   │    │   SPA   │      │  SSR/SSG   │
└───────┘    └─────────┘    └─────────┘      └─────────────┘
    │              │              │                   │
    └──────────────┴──────────────┴───────────────────┘
                            │
                    ┌───────▼────────┐
                    │  共享组件库     │
                    │  UI/业务组件   │
                    └────────────────┘
```

#### 前端项目结构
```
lumifluence-frontend/
├── apps/
│   ├── brand-portal/      # 品牌方应用
│   ├── creator-portal/    # 创作者应用
│   ├── admin-portal/      # 管理后台
│   └── public-site/       # 公开官网(Nuxt)
├── packages/
│   ├── ui-components/     # 共享UI组件
│   ├── api-client/        # API客户端SDK
│   ├── utils/            # 工具函数
│   └── types/            # TypeScript类型定义
└── infrastructure/
    ├── docker/
    └── k8s/
```

### 2.2 后端微服务架构

#### 服务划分
```
┌─────────────────────────────────────────────────────────┐
│                      API Gateway                         │
│              (Kong / Traefik + 认证中间件)               │
└────┬─────────┬──────────┬──────────┬──────────┬────────┘
     │         │          │          │          │
┌────▼───┐ ┌──▼───┐ ┌────▼───┐ ┌───▼───┐ ┌────▼────┐
│用户服务│ │匹配服务│ │内容服务│ │AI服务  │ │支付服务 │
│ 8001  │ │ 8002  │ │  8003  │ │ 8004  │ │  8005   │
└────┬───┘ └──┬───┘ └────┬───┘ └───┬───┘ └────┬────┘
     │         │          │          │          │
     └─────────┴──────────┴──────────┴──────────┘
                          │
              ┌───────────▼────────────┐
              │    消息总线(RabbitMQ)   │
              └────────────────────────┘
```

#### 服务职责定义

**用户服务 (User Service)**
```python
# 端口: 8001
# 职责:
- 用户注册/登录/认证
- 角色权限管理
- 个人资料管理
- KYC认证流程

# 主要模型:
- User
- Brand
- Creator
- Authentication
```

**匹配服务 (Matching Service)**
```python
# 端口: 8002
# 职责:
- 创作者搜索与筛选
- AI匹配算法
- 推荐系统
- 匹配历史记录

# 主要模型:
- MatchingCriteria
- MatchResult
- Recommendation
```

**内容服务 (Content Service)**
```python
# 端口: 8003
# 职责:
- 营销活动管理
- 合作申请处理
- 内容审核
- 效果追踪

# 主要模型:
- Campaign
- Application
- Content
- Performance
```

**AI服务 (AI Service)**
```python
# 端口: 8004
# 职责:
- 内容分析(Whisper集成)
- ROI预测
- 趋势分析
- 自然语言处理

# 主要集成:
- OpenAI API
- Whisper API
- 自研ML模型
```

### 2.3 数据库设计

#### 主数据库架构 (PostgreSQL)
```sql
-- 用户相关表
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    company_name VARCHAR(255) NOT NULL,
    industry VARCHAR(100),
    website VARCHAR(255),
    description TEXT,
    logo_url VARCHAR(500),
    verified BOOLEAN DEFAULT false,
    budget_range JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE creators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    display_name VARCHAR(255) NOT NULL,
    bio TEXT,
    avatar_url VARCHAR(500),
    categories TEXT[],
    languages TEXT[],
    countries TEXT[],
    platforms JSONB, -- {instagram: {handle, followers}, youtube: {...}}
    metrics JSONB,   -- {avg_engagement: 0.05, total_reach: 100000}
    pricing JSONB,   -- {post: 500, story: 200, video: 1000}
    portfolio_urls TEXT[],
    verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 活动相关表
CREATE TABLE campaigns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID REFERENCES brands(id),
    title VARCHAR(500) NOT NULL,
    description TEXT,
    budget_min DECIMAL(10,2),
    budget_max DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'USD',
    collaboration_type VARCHAR(50), -- fixed, cpm, cps
    requirements JSONB,
    timeline JSONB,
    status VARCHAR(50) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id UUID REFERENCES campaigns(id),
    creator_id UUID REFERENCES creators(id),
    proposal TEXT,
    quoted_price DECIMAL(10,2),
    status VARCHAR(50) DEFAULT 'pending',
    reviewed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(campaign_id, creator_id)
);

-- 索引优化
CREATE INDEX idx_creators_categories ON creators USING GIN (categories);
CREATE INDEX idx_creators_countries ON creators USING GIN (countries);
CREATE INDEX idx_campaigns_status ON campaigns(status);
CREATE INDEX idx_applications_status ON applications(status);
```

#### 缓存策略 (Redis)
```yaml
缓存内容:
  - 用户会话: session:{user_id} (TTL: 24h)
  - 热门创作者: popular:creators:{category} (TTL: 1h)
  - 搜索结果: search:{hash} (TTL: 10m)
  - API限流: rate:{user_id}:{endpoint} (TTL: 1h)

缓存更新策略:
  - Cache-Aside: 读时缓存
  - Write-Through: 关键数据写时更新
  - TTL过期: 自动失效
```

### 2.4 AI集成架构

#### AI服务流程
```
┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│   客户端请求  │────▶│  AI Service │────▶│ OpenAI API   │
└──────────────┘     └──────┬──────┘     └──────────────┘
                            │
                            │ 异步处理
                            ▼
                    ┌───────────────┐
                    │  任务队列      │
                    │  (Celery)     │
                    └───────┬───────┘
                            │
                    ┌───────▼────────┐
                    │  结果存储       │
                    │  (Redis/DB)    │
                    └────────────────┘
```

#### AI功能模块
```python
# 内容分析模块
class ContentAnalyzer:
    async def analyze_video(self, video_url: str):
        # 1. 下载视频
        # 2. 提取音频
        # 3. Whisper转写
        # 4. NLP分析
        # 5. 标签提取
        return {
            "transcription": "...",
            "tags": ["fashion", "summer"],
            "sentiment": 0.85
        }

# ROI预测模块
class ROIPredictor:
    async def predict(self, campaign_data, creator_data):
        # 1. 历史数据分析
        # 2. 特征工程
        # 3. 模型预测
        # 4. 置信度计算
        return {
            "estimated_reach": 150000,
            "estimated_roi": 2.5,
            "confidence": 0.82
        }
```

### 2.5 自动化工作流 (N8n)

#### 工作流设计
```yaml
新用户注册流程:
  触发器: Webhook (用户注册成功)
  步骤:
    1. 发送欢迎邮件
    2. 创建入门任务列表
    3. 分配客户经理(品牌方)
    4. 触发数据分析(创作者)
    5. 更新CRM系统

创作者认证流程:
  触发器: 申请认证
  步骤:
    1. 验证社交媒体账号
    2. 分析历史内容质量
    3. 计算信用评分
    4. 人工审核(如需要)
    5. 更新认证状态

SEO内容生成:
  触发器: 定时任务(每日)
  步骤:
    1. 获取热门创作者
    2. 生成个人页面
    3. 更新站点地图
    4. 提交搜索引擎
```

## 3. 安全架构

### 3.1 认证与授权
```yaml
认证流程:
  - JWT Token (Access + Refresh)
  - OAuth2.0 (社交登录)
  - 2FA (双因素认证)

授权模型:
  - RBAC (基于角色)
  - 资源级权限
  - API端点权限

安全措施:
  - HTTPS强制
  - SQL注入防护
  - XSS防护
  - CSRF Token
  - Rate Limiting
```

### 3.2 数据安全
```yaml
加密:
  - 传输加密: TLS 1.3
  - 存储加密: AES-256
  - 密码: Argon2

合规:
  - GDPR合规
  - 数据最小化
  - 用户数据导出
  - 删除权保障
```

## 4. 性能优化

### 4.1 前端优化
- 代码分割与懒加载
- 图片CDN + WebP
- Service Worker缓存
- 虚拟滚动列表
- Web Workers处理

### 4.2 后端优化
- 数据库连接池
- 查询优化与索引
- 异步处理
- 批量操作
- 缓存预热

### 4.3 扩展性设计
- 水平扩展: K8s自动扩容
- 数据库分片: 按用户ID
- 读写分离: 主从复制
- CDN: 全球加速

## 5. 监控与运维

### 5.1 监控体系
```yaml
应用监控:
  - APM: Datadog/NewRelic
  - 错误追踪: Sentry
  - 日志: ELK Stack

基础设施监控:
  - Prometheus + Grafana
  - 告警: PagerDuty
  - 健康检查: K8s Probes

业务监控:
  - 自定义指标
  - 实时大屏
  - 业务告警
```

### 5.2 DevOps流程
```yaml
CI/CD Pipeline:
  1. 代码提交
  2. 自动化测试
  3. 代码质量检查
  4. 构建Docker镜像
  5. 推送镜像仓库
  6. 部署到K8s
  7. 健康检查
  8. 回滚机制

环境管理:
  - Development
  - Staging  
  - Production
  - Canary发布
```

## 6. 成本优化

### 6.1 资源预算
```yaml
初期(0-6个月):
  - 云服务器: $500/月
  - 数据库: $200/月
  - CDN: $100/月
  - AI API: $300/月
  - 监控: $100/月
  总计: ~$1,200/月

增长期(6-12个月):
  - 预计3-5倍增长
  - 考虑预留实例
  - 优化AI调用
```

### 6.2 优化策略
- Spot实例使用
- 自动扩缩容
- 缓存优化
- CDN策略
- API调用优化

---

*架构文档版本：1.0 | 最后更新：2025-07-12*