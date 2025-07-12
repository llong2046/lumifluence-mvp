# Lumifluence API 设计文档

版本：1.0  
日期：2025-07-12  
基于：OpenAPI 3.0 规范

---

## 1. API 概述

### 基础信息
- **基础URL**: `https://api.lumifluence.com/v1`
- **认证方式**: Bearer Token (JWT)
- **内容类型**: `application/json`
- **API版本**: v1

### 认证流程
```
1. 用户通过 /auth/login 获取 access_token 和 refresh_token
2. 请求头携带: Authorization: Bearer {access_token}
3. Token过期后使用 refresh_token 更新
```

## 2. API 端点设计

### 2.1 认证服务 (Auth Service)

#### 注册
```yaml
POST /auth/register
Request:
  {
    "email": "string",
    "password": "string",
    "role": "brand|creator",
    "profile": {
      "name": "string",
      "company": "string (for brand)",
      "platforms": ["string"] (for creator)
    }
  }
Response:
  {
    "user_id": "uuid",
    "email": "string",
    "role": "string",
    "access_token": "string",
    "refresh_token": "string"
  }
```

#### 登录
```yaml
POST /auth/login
Request:
  {
    "email": "string",
    "password": "string"
  }
Response:
  {
    "access_token": "string",
    "refresh_token": "string",
    "expires_in": 3600
  }
```

### 2.2 品牌方 API (Brand API)

#### 创建营销活动
```yaml
POST /brands/campaigns
Request:
  {
    "title": "string",
    "description": "string",
    "budget": {
      "min": 1000,
      "max": 5000,
      "currency": "USD"
    },
    "collaboration_type": "fixed|cpm|cps",
    "requirements": {
      "platforms": ["instagram", "youtube"],
      "categories": ["fashion", "lifestyle"],
      "min_followers": 10000,
      "countries": ["US", "UK"]
    },
    "timeline": {
      "start_date": "2025-08-01",
      "end_date": "2025-08-31"
    }
  }
Response:
  {
    "campaign_id": "uuid",
    "status": "draft",
    "created_at": "datetime"
  }
```

#### 搜索创作者
```yaml
POST /brands/creators/search
Request:
  {
    "filters": {
      "platforms": ["string"],
      "categories": ["string"],
      "follower_range": {
        "min": 1000,
        "max": 1000000
      },
      "engagement_rate": {
        "min": 0.02
      },
      "countries": ["string"],
      "languages": ["string"]
    },
    "ai_match": {
      "enabled": true,
      "target_audience": "string",
      "brand_values": ["string"]
    },
    "sort": {
      "field": "relevance|followers|engagement",
      "order": "asc|desc"
    },
    "pagination": {
      "page": 1,
      "limit": 20
    }
  }
Response:
  {
    "creators": [
      {
        "creator_id": "uuid",
        "profile": {
          "name": "string",
          "avatar": "url",
          "bio": "string"
        },
        "metrics": {
          "total_followers": 50000,
          "engagement_rate": 0.045,
          "avg_views": 10000
        },
        "platforms": [
          {
            "name": "instagram",
            "followers": 30000,
            "url": "string"
          }
        ],
        "ai_match_score": 0.92,
        "pricing": {
          "post": 500,
          "story": 200,
          "video": 1000
        }
      }
    ],
    "total": 150,
    "page": 1,
    "pages": 8
  }
```

#### 发送合作邀请
```yaml
POST /brands/invitations
Request:
  {
    "campaign_id": "uuid",
    "creator_ids": ["uuid"],
    "message": "string",
    "proposed_budget": 1000,
    "deliverables": [
      {
        "type": "post|story|video",
        "quantity": 2,
        "platform": "instagram"
      }
    ]
  }
Response:
  {
    "invitation_ids": ["uuid"],
    "status": "sent"
  }
```

### 2.3 创作者 API (Creator API)

#### 获取机会列表
```yaml
GET /creators/opportunities
Query Parameters:
  - status: open|closed
  - categories: fashion,tech
  - min_budget: 500
  - sort: relevance|budget|created_at
  - page: 1
  - limit: 20

Response:
  {
    "opportunities": [
      {
        "campaign_id": "uuid",
        "brand": {
          "name": "string",
          "logo": "url",
          "verified": true
        },
        "title": "string",
        "budget_range": {
          "min": 1000,
          "max": 5000
        },
        "requirements": {},
        "ai_match_score": 0.88,
        "applications_count": 25,
        "deadline": "datetime"
      }
    ],
    "total": 50
  }
```

#### 申请合作
```yaml
POST /creators/applications
Request:
  {
    "campaign_id": "uuid",
    "proposal": "string",
    "quoted_price": 1500,
    "portfolio_items": ["uuid"],
    "availability": {
      "start": "2025-08-05",
      "end": "2025-08-20"
    }
  }
Response:
  {
    "application_id": "uuid",
    "status": "pending"
  }
```

### 2.4 AI 服务 API

#### 内容分析
```yaml
POST /ai/content/analyze
Request:
  {
    "content_url": "string",
    "content_type": "video|audio|image",
    "analysis_type": ["transcription", "tags", "sentiment", "audience"]
  }
Response:
  {
    "transcription": "string",
    "tags": ["fashion", "summer", "ootd"],
    "sentiment": {
      "positive": 0.75,
      "neutral": 0.20,
      "negative": 0.05
    },
    "predicted_audience": {
      "age_groups": {
        "18-24": 0.45,
        "25-34": 0.35
      },
      "interests": ["fashion", "lifestyle"]
    }
  }
```

#### ROI 预测
```yaml
POST /ai/roi/predict
Request:
  {
    "campaign_id": "uuid",
    "creator_ids": ["uuid"],
    "budget": 5000,
    "objectives": ["awareness", "engagement"]
  }
Response:
  {
    "predictions": {
      "estimated_reach": 150000,
      "estimated_engagement": 7500,
      "roi_range": {
        "min": 1.5,
        "max": 2.8
      },
      "confidence": 0.82
    },
    "recommendations": [
      {
        "type": "budget_allocation",
        "suggestion": "Allocate 60% to Creator A for better ROI"
      }
    ]
  }
```

### 2.5 消息服务 API

#### 发送消息
```yaml
POST /messages
Request:
  {
    "recipient_id": "uuid",
    "campaign_id": "uuid",
    "content": "string",
    "attachments": ["url"]
  }
Response:
  {
    "message_id": "uuid",
    "sent_at": "datetime"
  }
```

## 3. 错误处理

### 标准错误响应
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  },
  "request_id": "uuid"
}
```

### 错误代码
| 代码 | HTTP状态 | 说明 |
|------|----------|------|
| UNAUTHORIZED | 401 | 未认证或token无效 |
| FORBIDDEN | 403 | 无权限访问 |
| NOT_FOUND | 404 | 资源不存在 |
| VALIDATION_ERROR | 400 | 请求参数验证失败 |
| RATE_LIMIT | 429 | 请求频率超限 |
| SERVER_ERROR | 500 | 服务器内部错误 |

## 4. 限流策略

### 速率限制
- 认证用户：1000请求/小时
- 未认证用户：100请求/小时
- AI服务：100请求/小时

### 响应头
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1628856000
```

## 5. Webhooks

### 事件类型
```yaml
campaign.created
campaign.updated
application.received
application.accepted
message.received
payment.completed
```

### Webhook负载
```json
{
  "event": "application.received",
  "data": {
    "application_id": "uuid",
    "campaign_id": "uuid",
    "creator_id": "uuid"
  },
  "timestamp": "2025-07-12T10:00:00Z",
  "signature": "sha256=..."
}
```

## 6. SDK 示例

### JavaScript/TypeScript
```typescript
import { LumifluenceClient } from '@lumifluence/sdk';

const client = new LumifluenceClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// 搜索创作者
const creators = await client.brands.searchCreators({
  filters: {
    platforms: ['instagram'],
    minFollowers: 10000
  },
  aiMatch: {
    enabled: true,
    targetAudience: 'Young professionals interested in tech'
  }
});

// 创建活动
const campaign = await client.brands.createCampaign({
  title: 'Summer Fashion Campaign',
  budget: { min: 1000, max: 5000 },
  collaborationType: 'cpm'
});
```

### Python
```python
from lumifluence import Client

client = Client(api_key="your-api-key")

# 获取机会列表
opportunities = client.creators.get_opportunities(
    categories=["fashion", "lifestyle"],
    min_budget=500,
    sort="relevance"
)

# 申请合作
application = client.creators.apply(
    campaign_id="campaign-uuid",
    proposal="I'd love to work on this campaign...",
    quoted_price=1500
)
```

---

*API文档版本：1.0 | 最后更新：2025-07-12*