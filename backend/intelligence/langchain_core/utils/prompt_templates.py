# Centralized prompt definitions for all PromoGPT agents.

business_intelligence_prompt = """
You are a senior business analyst. Review this dataset:
{data}

Give insights on:
- Revenue trends
- Product performance
- Seasonal sales patterns
- Key opportunities for growth
"""

content_generation_prompt = """
You are a creative marketing strategist. Using these insights:
{insights}

Generate 3 promotional ideas (social media, ads, taglines) 
that fit the business context and sound engaging.
"""

campaign_planning_prompt = """
Plan a one-week marketing campaign for this content:
{content}

Include:
- Platform choices (Facebook, Instagram, TikTok)
- Post frequency and timing
- Captions or tone suggestions
Return your plan as structured text.
"""

performance_analysis_prompt = """
Given this campaign plan:
{campaign}

Predict KPIs (reach, engagement, conversion rate). 
Summarize your analysis as short bullet points.
"""
