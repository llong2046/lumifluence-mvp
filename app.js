// Lumifluence MVP - Main JavaScript

// Multi-language support
const translations = {
    en: {
        // Navigation
        "nav.features": "Features",
        "nav.solutions": "Solutions",
        "nav.pricing": "Pricing",
        "nav.resources": "Resources",
        "nav.login": "Login",
        "nav.getStarted": "Get Started",
        
        // Hero Section
        "hero.title1": "Amplify Your Brand with",
        "hero.title2": "Influencer Marketing",
        "hero.subtitle": "Connect with authentic creators, manage campaigns effortlessly, and measure real impact. Your all-in-one platform for influencer marketing success.",
        "hero.brandCta": "I'm a Brand",
        "hero.creatorCta": "I'm a Creator",
        
        // Stats
        "stats.creators": "Verified Creators",
        "stats.campaigns": "Campaigns Launched",
        "stats.satisfaction": "Client Satisfaction",
        
        // Trust Section
        "trust.title": "Trusted by leading brands worldwide",
        
        // Features
        "features.title": "Everything You Need to Succeed",
        "features.subtitle": "Powerful tools designed for modern influencer marketing",
        "features.discovery.title": "Smart Discovery",
        "features.discovery.description": "Find perfect creators with AI-powered search. Filter by niche, engagement rate, audience demographics, and more.",
        "features.discovery.point1": "10M+ verified profiles",
        "features.discovery.point2": "Real-time analytics",
        "features.discovery.point3": "Audience insights",
        "features.campaign.title": "Campaign Management",
        "features.campaign.description": "Streamline your workflow from brief to payment. Collaborate, approve content, and track everything in one place.",
        "features.campaign.point1": "Automated workflows",
        "features.campaign.point2": "Content approval",
        "features.campaign.point3": "Secure payments",
        "features.analytics.title": "Performance Analytics",
        "features.analytics.description": "Measure what matters. Track ROI, engagement, and reach with comprehensive reporting tools.",
        "features.analytics.point1": "Real-time tracking",
        "features.analytics.point2": "ROI measurement",
        "features.analytics.point3": "Custom reports",
        
        // CTA Section
        "cta.title": "Ready to Transform Your Marketing?",
        "cta.subtitle": "Join thousands of brands achieving incredible results with influencer marketing",
        "cta.startTrial": "Start Free Trial",
        "cta.bookDemo": "Book a Demo",
        
        // Footer
        "footer.copyright": "© 2024 Lumifluence. All rights reserved.",
        "footer.privacy": "Privacy",
        "footer.terms": "Terms",
        "footer.contact": "Contact",
        
        // Brand Login
        "brandLogin.title": "Welcome Back",
        "brandLogin.subtitle": "Sign in to manage your campaigns",
        "brandLogin.googleLogin": "Google",
        "brandLogin.facebookLogin": "Facebook",
        "brandLogin.orContinue": "or continue with email",
        "brandLogin.emailLabel": "Email Address",
        "brandLogin.passwordLabel": "Password",
        "brandLogin.forgotPassword": "Forgot password?",
        "brandLogin.rememberMe": "Remember me",
        "brandLogin.signIn": "Sign In",
        "brandLogin.noAccount": "Don't have an account?",
        "brandLogin.signUp": "Sign up",
        "brandLogin.areYouCreator": "Are you a creator?",
        "brandLogin.creatorLogin": "Login here",
        "brandLogin.hero.title": "Scale Your Brand with Data-Driven Influencer Marketing",
        "brandLogin.hero.subtitle": "Join 10,000+ brands using Lumifluence to discover creators, manage campaigns, and measure ROI.",
        "brandLogin.hero.benefit1.title": "Smart Matching",
        "brandLogin.hero.benefit1.desc": "AI-powered creator discovery",
        "brandLogin.hero.benefit2.title": "Real-time Analytics",
        "brandLogin.hero.benefit2.desc": "Track performance instantly",
        "brandLogin.hero.benefit3.title": "Secure & Compliant",
        "brandLogin.hero.benefit3.desc": "Enterprise-grade security",
        "brandLogin.hero.testimonial": "\"Lumifluence transformed how we approach influencer marketing. We've seen a 300% increase in ROI within 6 months.\"",
        
        // Creator Login
        "creatorLogin.title": "Welcome, Creator!",
        "creatorLogin.subtitle": "Sign in to access your opportunities",
        "creatorLogin.instagramLogin": "Instagram",
        "creatorLogin.youtubeLogin": "YouTube",
        "creatorLogin.orContinue": "or continue with email",
        "creatorLogin.emailLabel": "Email Address",
        "creatorLogin.passwordLabel": "Password",
        "creatorLogin.forgotPassword": "Forgot password?",
        "creatorLogin.rememberMe": "Keep me signed in",
        "creatorLogin.signIn": "Sign In",
        "creatorLogin.noAccount": "New to Lumifluence?",
        "creatorLogin.joinNow": "Join now",
        "creatorLogin.requirement.title": "Minimum Requirements",
        "creatorLogin.requirement.desc": "1,000+ followers on any major platform",
        "creatorLogin.areYouBrand": "Are you a brand?",
        "creatorLogin.brandLogin": "Login here",
        "creatorLogin.hero.badge": "Top creators earn $10K+ monthly",
        "creatorLogin.hero.title": "Turn Your Influence into Income",
        "creatorLogin.hero.subtitle": "Connect with premium brands, create authentic content, and grow your career as a creator.",
        "creatorLogin.hero.stat1": "Paid to creators",
        "creatorLogin.hero.stat2": "Active creators",
        "creatorLogin.hero.stat3": "Brand partners",
        "creatorLogin.hero.benefit1": "Set your own rates",
        "creatorLogin.hero.benefit2": "Choose brands you love",
        "creatorLogin.hero.benefit3": "Get paid on time, every time",
        "creatorLogin.hero.benefit4": "Access exclusive opportunities"
    },
    zh: {
        // Navigation
        "nav.features": "功能特性",
        "nav.solutions": "解决方案",
        "nav.pricing": "价格",
        "nav.resources": "资源",
        "nav.login": "登录",
        "nav.getStarted": "开始使用",
        
        // Hero Section
        "hero.title1": "通过网红营销",
        "hero.title2": "提升您的品牌影响力",
        "hero.subtitle": "连接真实创作者，轻松管理营销活动，衡量真实影响力。您的一站式网红营销平台。",
        "hero.brandCta": "我是品牌方",
        "hero.creatorCta": "我是创作者",
        
        // Stats
        "stats.creators": "认证创作者",
        "stats.campaigns": "已发布活动",
        "stats.satisfaction": "客户满意度",
        
        // Trust Section
        "trust.title": "全球领先品牌的信赖之选",
        
        // Features
        "features.title": "成功所需的一切",
        "features.subtitle": "为现代网红营销设计的强大工具",
        "features.discovery.title": "智能发现",
        "features.discovery.description": "通过AI驱动的搜索找到完美的创作者。按细分市场、参与率、受众人口统计等进行筛选。",
        "features.discovery.point1": "超过1000万认证档案",
        "features.discovery.point2": "实时分析",
        "features.discovery.point3": "受众洞察",
        "features.campaign.title": "活动管理",
        "features.campaign.description": "从简报到付款，简化您的工作流程。在一个地方协作、批准内容并跟踪一切。",
        "features.campaign.point1": "自动化工作流",
        "features.campaign.point2": "内容审批",
        "features.campaign.point3": "安全支付",
        "features.analytics.title": "效果分析",
        "features.analytics.description": "衡量重要指标。使用全面的报告工具跟踪投资回报率、参与度和覆盖范围。",
        "features.analytics.point1": "实时跟踪",
        "features.analytics.point2": "ROI测量",
        "features.analytics.point3": "自定义报告",
        
        // CTA Section
        "cta.title": "准备好改变您的营销方式了吗？",
        "cta.subtitle": "加入数千个通过网红营销取得惊人成果的品牌",
        "cta.startTrial": "开始免费试用",
        "cta.bookDemo": "预约演示",
        
        // Footer
        "footer.copyright": "© 2024 Lumifluence. 保留所有权利。",
        "footer.privacy": "隐私政策",
        "footer.terms": "使用条款",
        "footer.contact": "联系我们",
        
        // Brand Login
        "brandLogin.title": "欢迎回来",
        "brandLogin.subtitle": "登录以管理您的营销活动",
        "brandLogin.googleLogin": "Google",
        "brandLogin.facebookLogin": "Facebook",
        "brandLogin.orContinue": "或使用邮箱继续",
        "brandLogin.emailLabel": "电子邮箱",
        "brandLogin.passwordLabel": "密码",
        "brandLogin.forgotPassword": "忘记密码？",
        "brandLogin.rememberMe": "记住我",
        "brandLogin.signIn": "登录",
        "brandLogin.noAccount": "还没有账户？",
        "brandLogin.signUp": "注册",
        "brandLogin.areYouCreator": "您是创作者吗？",
        "brandLogin.creatorLogin": "点击这里登录",
        "brandLogin.hero.title": "通过数据驱动的网红营销扩大品牌规模",
        "brandLogin.hero.subtitle": "加入10,000+品牌，使用Lumifluence发现创作者、管理活动并衡量投资回报率。",
        "brandLogin.hero.benefit1.title": "智能匹配",
        "brandLogin.hero.benefit1.desc": "AI驱动的创作者发现",
        "brandLogin.hero.benefit2.title": "实时分析",
        "brandLogin.hero.benefit2.desc": "即时跟踪效果",
        "brandLogin.hero.benefit3.title": "安全合规",
        "brandLogin.hero.benefit3.desc": "企业级安全保障",
        "brandLogin.hero.testimonial": "\"Lumifluence改变了我们进行网红营销的方式。在6个月内，我们的投资回报率增长了300%。\"",
        
        // Creator Login
        "creatorLogin.title": "欢迎，创作者！",
        "creatorLogin.subtitle": "登录以访问您的机会",
        "creatorLogin.instagramLogin": "Instagram",
        "creatorLogin.youtubeLogin": "YouTube",
        "creatorLogin.orContinue": "或使用邮箱继续",
        "creatorLogin.emailLabel": "电子邮箱",
        "creatorLogin.passwordLabel": "密码",
        "creatorLogin.forgotPassword": "忘记密码？",
        "creatorLogin.rememberMe": "保持登录状态",
        "creatorLogin.signIn": "登录",
        "creatorLogin.noAccount": "初次使用Lumifluence？",
        "creatorLogin.joinNow": "立即加入",
        "creatorLogin.requirement.title": "最低要求",
        "creatorLogin.requirement.desc": "任何主流平台1,000+粉丝",
        "creatorLogin.areYouBrand": "您是品牌方吗？",
        "creatorLogin.brandLogin": "点击这里登录",
        "creatorLogin.hero.badge": "顶级创作者月收入超过$10K",
        "creatorLogin.hero.title": "将您的影响力转化为收入",
        "creatorLogin.hero.subtitle": "与优质品牌合作，创作真实内容，发展您的创作者职业生涯。",
        "creatorLogin.hero.stat1": "已支付给创作者",
        "creatorLogin.hero.stat2": "活跃创作者",
        "creatorLogin.hero.stat3": "品牌合作伙伴",
        "creatorLogin.hero.benefit1": "自主定价",
        "creatorLogin.hero.benefit2": "选择您喜爱的品牌",
        "creatorLogin.hero.benefit3": "准时收款，每次都准时",
        "creatorLogin.hero.benefit4": "获得独家机会"
    }
};

// Current language (default to English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage(currentLanguage);
    updateLanguageButton();
});

// Toggle language dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguage(lang);
    updateLanguageButton();
    
    // Close dropdown
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

// Update all text elements with translations
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Update language button display
function updateLanguageButton() {
    const langButton = document.querySelector('.current-lang');
    if (langButton) {
        const langMap = {
            'en': 'EN',
            'zh': '中文',
            'es': 'ES',
            'fr': 'FR'
        };
        langButton.textContent = langMap[currentLanguage] || 'EN';
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const selector = document.querySelector('.language-selector');
    const dropdown = document.getElementById('languageDropdown');
    
    if (selector && dropdown && !selector.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add loading animation to buttons on click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && e.target.type === 'submit') {
        e.target.classList.add('animate-pulse');
        setTimeout(() => {
            e.target.classList.remove('animate-pulse');
        }, 1000);
    }
});

// Form validation
document.addEventListener('submit', function(e) {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        
        // Basic validation
        const emailInput = e.target.querySelector('input[type="email"]');
        const passwordInput = e.target.querySelector('input[type="password"]');
        
        if (emailInput && passwordInput) {
            if (!emailInput.value || !passwordInput.value) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Show loading state
            const submitBtn = e.target.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'Loading...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    alert('Login functionality will be implemented in the next phase');
                    submitBtn.textContent = translations[currentLanguage]['brandLogin.signIn'] || 'Sign In';
                    submitBtn.disabled = false;
                }, 1500);
            }
        }
    }
}); 