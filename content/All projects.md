=== PROJECT 01 ===

--- CARD FIELDS ---

slug:
prodsense

name:
ProdSense AI

type:
AI Product Intelligence Platform

date:
Q2 2026

one_liner:
An AI-native Product Operating System that transforms scattered signals into roadmap decisions.

card_description:
ProdSense AI is an end-to-end intelligence platform built for modern Product Managers. It consolidates customer feedback, analytics, competitor movements, meeting transcripts, and research into a single evidence-backed workspace that automatically identifies emerging opportunities, drafts PRDs, and accelerates strategic decision-making.

feature_bullets:
- Built a multi-agent intelligence pipeline for continuous product discovery.
- Automated PRD creation using RAG and evidence-backed reasoning.
- Clustered customer feedback into actionable product opportunities.
- Surfaced emerging trends before they became roadmap priorities.

stack_tags:
REACT
TYPESCRIPT
VITE
TAILWIND CSS
SHADCN UI
TANSTACK QUERY
REACT HOOK FORM
ZOD
RECHARTS

------------------------------------------------------------

title:
ProdSense AI

lede:

Product managers spend more time gathering information than making decisions. Feedback lives across support tickets, Slack, analytics dashboards, research documents, competitor updates, and meeting transcripts. ProdSense AI brings every signal into one intelligent workspace, continuously transforming fragmented information into prioritized product opportunities, evidence-backed PRDs, and strategic recommendations.

------------------------------------------------------------

meta_role:
Founder • Product Manager

meta_built:
Q2 2026

meta_updated:
Q3 2026

meta_visit:
Live demo

meta_team:
Solo Builder

repo:
https://github.com/Somacharan5/Prodsenseai

live:
https://prodsenseai.vercel.app

toolkit:

React

TypeScript

Vite

Tailwind CSS

shadcn/ui

TanStack Query

React Hook Form

Zod

Recharts

Lucide

PapaParse

------------------------------------------------------------

section_01_why:

Every product team claims to be "data-driven," yet the reality is the opposite. Valuable insights are scattered across customer interviews, Slack conversations, feature requests, support tickets, analytics dashboards, roadmap discussions, and competitor announcements. Teams spend days manually gathering information before they can even begin prioritizing work.

The larger the organization becomes, the worse this fragmentation gets.

**The real bottleneck wasn't writing PRDs—it was discovering the right problems worth solving.**

I wanted to build an operating system that continuously listened to every product signal, organized it automatically, and surfaced opportunities before they became obvious.

Instead of replacing Product Managers, the goal was to remove repetitive synthesis work so PMs could focus on strategy, customer understanding, and decision-making.

------------------------------------------------------------

section_02_approach:

I designed ProdSense AI as a collection of specialized AI agents instead of a single large assistant.

Each agent owned one responsibility.

• Feedback Intelligence Agent continuously analyzed customer conversations.

• Competitor Intelligence Agent monitored market movements.

• Analytics Agent identified unusual behavioral changes.

• Research Agent summarized interviews and documents.

These outputs flowed into a centralized knowledge layer backed by semantic embeddings using pgvector, allowing related information to connect regardless of where it originated.

Rather than generating generic summaries, the platform accumulated evidence over time.

When enough supporting signals emerged around a customer problem, the system automatically elevated it into a product opportunity, complete with supporting evidence, affected users, business impact, and recommended next steps.

This transformed discovery from an occasional workshop into a continuous operating process.

------------------------------------------------------------

section_03_decisions:

One of the biggest design decisions was rejecting a traditional chatbot interface.

Most AI products force users to ask questions.

I wanted the opposite.

**The product should proactively discover opportunities instead of waiting for someone to ask.**

Another deliberate decision was building evidence-first PRDs.

Instead of allowing AI to invent convincing product requirements, every recommendation had to reference actual customer feedback, analytics, competitor insights, or research documents.

This dramatically increased trust while reducing hallucinations.

I also separated long-term memory from generation.

Embeddings stored organizational knowledge permanently while language models only synthesized information when required.

This architecture reduced costs, improved consistency, and allowed the platform to scale as more product data accumulated.

------------------------------------------------------------

section_04_learned:

Building ProdSense AI reinforced a lesson I've repeatedly seen across product organizations:

**Information isn't the scarce resource—clarity is.**

Companies already possess enormous amounts of customer knowledge.

The real challenge is connecting fragmented signals quickly enough to make confident product decisions.

Rather than building another AI assistant, I learned that the highest leverage comes from designing systems that continuously organize organizational knowledge and present it exactly when strategic decisions need to be made.

------------------------------------------------------------

--- IMAGES ---

cover:
project-images/prodsense/cover.jpg

shots:

project-images/prodsense/01.jpg
Architecture Overview

project-images/prodsense/02.jpg
Multi-Agent Workflow

project-images/prodsense/03.jpg
PRD Auto Builder

project-images/prodsense/04.jpg
Opportunity Dashboard


=== PROJECT 02 ===

--- CARD FIELDS ---

slug:
founderai

name:
Founder AI

type:
Executive AI Workflow

date:
Q2 2026

one_liner:
Scaling authentic founder engagement without sacrificing voice or trust.

card_description:
Designed and built a Human-in-the-Loop AI engagement system for Kavin Bharti Mittal (Founder, Hike) that transformed repetitive social interactions into a streamlined approval workflow. The platform preserved authenticity while dramatically reducing the time required for meaningful community engagement.

feature_bullets:
- Fine-tuned AI on founder writing style and communication patterns.
- Human-in-the-Loop approvals ensured complete brand safety.
- Reduced daily engagement effort by nearly two hours.
- Telegram-based approval workflow enabled responses within seconds.

stack_tags:
AI
AUTOMATION
SOCIAL
WORKFLOW
HITL

------------------------------------------------------------

title:
AI-Powered Founder Engagement Platform

lede:

Public founders face a constant trade-off between maintaining authentic relationships with their audience and protecting time for company building. I designed an AI-assisted engagement platform that drafts context-aware replies while keeping every public interaction under the founder's direct control through a Human-in-the-Loop approval workflow.

------------------------------------------------------------

meta_role:
Founder's Office • Product & AI Automation

meta_built:
Q2 2026

meta_updated:
Q2 2026

meta_visit:
Private (Internal)

meta_team:
Founder's Office

toolkit:

OpenAI

Telegram

n8n

Prompt Engineering

Knowledge Base

Human-in-the-Loop

Workflow Automation

------------------------------------------------------------

section_01_why:

For founders, social media is no longer optional—it has become an extension of customer support, recruiting, investor relations, and brand building. As engagement grows, however, every reply competes with strategic work for attention.

The challenge wasn't generating responses. Modern language models can already do that.

**The real challenge was preserving the founder's unique voice while ensuring that every public interaction remained trustworthy and intentional.**

A fully autonomous system risked damaging credibility, while a completely manual process became increasingly unsustainable.

The objective was to augment—not replace—the founder's communication process.

------------------------------------------------------------

section_02_approach:

I designed the product around a Human-in-the-Loop architecture rather than full automation.

Incoming mentions, replies, and conversations were first filtered to remove low-value interactions and identify messages requiring attention. Relevant conversations were enriched with historical context before being passed to a language model trained to mirror the founder's writing style and communication patterns.

Instead of publishing automatically, the generated response was delivered through Telegram as a lightweight approval interface. The founder could approve, edit, or reject every draft with a single action, keeping decision-making fast without sacrificing control.

The system emphasized reducing cognitive load rather than maximizing automation.

------------------------------------------------------------

section_03_decisions:

The most important product decision was intentionally rejecting end-to-end autonomy.

Although autonomous publishing could have saved a few additional minutes, the reputational cost of even one inaccurate public response outweighed the operational benefit.

Human approval therefore became a core product feature rather than a temporary limitation.

Another key decision was prioritizing contextual retrieval over increasingly complex prompts. By supplying historical conversations, company context, and previous communication patterns before generation, the platform consistently produced responses that felt authentic without requiring excessive prompt engineering.

This architecture improved reliability while keeping the system maintainable as communication styles evolved.

------------------------------------------------------------

section_04_learned:

This project reinforced that AI adoption is fundamentally a trust problem rather than a capability problem.

Users rarely resist automation because models are weak—they resist automation when they lose confidence in the outcome.

Designing systems where humans retain meaningful control dramatically increases adoption while still delivering significant productivity gains.

------------------------------------------------------------

--- IMAGES ---

cover:
project-images/founderai/cover.jpg

shots:

project-images/founderai/01.jpg
Overall Workflow

project-images/founderai/02.jpg
Telegram Approval Interface

project-images/founderai/03.jpg
Knowledge Base Architecture

project-images/founderai/04.jpg
Prompt & Response Pipeline

=== PROJECT 03 ===

--- CARD FIELDS ---

slug:
intel

name:
Competitive Intelligence

type:
Executive Intelligence Platform

date:
Q2 2026

one_liner:
Turning fragmented market signals into executive-ready strategic intelligence.

card_description:
Built an automated Competitive Intelligence platform that continuously monitors competitors, hiring activity, funding, product launches, and organizational changes, converting scattered market information into structured weekly reports for executive decision-making.

feature_bullets:
- Automated monitoring across multiple public intelligence sources.
- AI-powered categorization of product, hiring, and funding activity.
- Weekly executive reports delivered without manual research.
- Reduced repetitive competitive analysis by over 20 hours per week.

stack_tags:
STRATEGY
AI
INTELLIGENCE
AUTOMATION
MARKET

------------------------------------------------------------

title:
Competitive Intelligence Engine

lede:

Competitive analysis often becomes outdated the moment it is presented. I designed an intelligence platform that continuously monitored the market, transformed unstructured information into strategic insights, and delivered leadership-ready reports every week without requiring manual research.

------------------------------------------------------------

meta_role:
Founder's Office • Product Manager

meta_built:
Q2 2026

meta_updated:
Q2 2026

meta_visit:
Private (Internal)

meta_team:
Founder's Office

toolkit:

n8n

OpenAI

Web Scraping

Google Sheets

Notion

Automation

LLMs

------------------------------------------------------------

section_01_why:

Most organizations perform competitive analysis as a periodic activity. Teams spend days manually gathering information, only for reports to become outdated almost immediately.

Meanwhile, meaningful competitive signals—executive hiring, funding announcements, feature launches, acquisitions, and organizational restructuring—appear continuously across blogs, LinkedIn, company websites, and news platforms.

**The challenge wasn't finding information; it was identifying which signals actually mattered before competitors reacted to them.**

The goal was to create a living intelligence system rather than another static report.

------------------------------------------------------------

section_02_approach:

The platform continuously collected information from multiple public sources, including company blogs, LinkedIn updates, news publications, and product announcements.

Rather than storing raw articles, an AI classification layer converted each item into structured business intelligence, categorizing events such as product launches, hiring momentum, funding activity, partnerships, and leadership changes.

Every week, the system automatically generated executive-ready summaries highlighting only the developments with meaningful strategic implications, reducing noise while preserving context.

This transformed competitive monitoring into a repeatable operational capability rather than a manual research exercise.

------------------------------------------------------------

section_03_decisions:

A deliberate design decision was to prioritize signal quality over information volume.

Instead of maximizing the number of tracked events, the platform emphasized changes most likely to influence strategic planning.

Another important decision involved separating data collection from interpretation. Scraping pipelines remained independent of the AI reasoning layer, allowing data sources to evolve without affecting downstream analysis.

This modular architecture improved reliability, simplified maintenance, and made it easier to introduce new competitors or information sources over time.

------------------------------------------------------------

section_04_learned:

Competitive intelligence creates value only when it changes decisions.

Automating collection is useful, but the real leverage comes from helping leadership recognize patterns early enough to act.

The project reinforced the importance of designing systems that reduce information overload while increasing strategic clarity.

------------------------------------------------------------

--- IMAGES ---

cover:
project-images/intel/cover.jpg

shots:

project-images/intel/01.jpg
Weekly Intelligence Dashboard

project-images/intel/02.jpg
Data Collection Pipeline

project-images/intel/03.jpg
AI Categorization Engine

project-images/intel/04.jpg
Executive Weekly Report

=== PROJECT 05 ===

slug:
automateai

name:
AutomateAI

type:
AI Services Marketplace

date:
Q2 2026

one_liner:
Connecting businesses with AI automation experts through intelligent project matching.

card_description:
Designed AutomateAI, a marketplace that simplifies AI automation adoption for SMBs by translating business problems into structured technical scopes and matching them with verified automation specialists.

feature_bullets:
- AI-generated project scope documents from natural language.
- Intelligent matching between businesses and automation experts.
- Standardized delivery process for AI workflow projects.
- Reduced ambiguity during project discovery and scoping.

stack_tags:
REACT
TYPESCRIPT
VITE
TAILWIND CSS
SHADCN UI
REACT ROUTER

------------------------------------------------------------

title:
AutomateAI

lede:

Small businesses increasingly want AI automation but struggle to define technical requirements or identify trustworthy implementation partners. AutomateAI bridges this gap by acting as an AI-native project discovery and matching platform.

------------------------------------------------------------

meta_role:
Founder • Product Manager

meta_built:
Q2 2026

meta_updated:
Q3 2026

meta_visit:
Live demo

meta_team:
Solo Builder

repo:
https://github.com/Somacharan5/automate-link

live:
https://automate-marketplace.vercel.app

toolkit:

React

TypeScript

Vite

Tailwind CSS

shadcn/ui

React Router

Lucide

------------------------------------------------------------

section_01_why:

Most automation projects fail before development begins because businesses describe outcomes while engineers require structured technical specifications.

**The gap wasn't talent availability—it was translation.**

The opportunity was to build a marketplace that converted vague business goals into implementation-ready automation briefs.

------------------------------------------------------------

section_02_approach:

The platform introduced an AI Project Manager as the first interaction layer. Rather than asking users technical questions, it explored workflows, bottlenecks, existing software, business goals, and expected outcomes before automatically generating an Automation Scope Document.

This standardized every project before expert matching began.

------------------------------------------------------------

section_03_decisions:

Instead of becoming another freelancer marketplace, the product focused on workflow quality and implementation consistency.

Verified specialists, standardized documentation, structured delivery milestones, and AI-assisted quality reviews improved trust while reducing project failure.

------------------------------------------------------------

section_04_learned:

Marketplaces succeed when they reduce uncertainty for both sides. The biggest product challenge wasn't matching people—it was creating enough clarity for both businesses and experts to start projects confidently.

=== PROJECT 06 ===

slug:
drivolo

name:
Drivolo

type:
Vertical SaaS

date:
Q1 2025

one_liner:
Digitizing India's driving schools through a mobile-first operations platform.

card_description:
Led product strategy for Drivolo, a SaaS platform replacing manual registers with digital operations across driving schools, helping owners manage instructors, students, schedules, and business performance.

feature_bullets:
- Mobile-first ERP for driving schools.
- Student and instructor lifecycle management.
- Financial and operational dashboards.
- Simplified daily operations for school owners.

stack_tags:
SAAS
ERP
MOBILE
OPERATIONS
B2B

------------------------------------------------------------

title:
Drivolo

lede:

Driving schools largely rely on paper registers and fragmented communication. Drivolo reimagined daily operations through a unified mobile platform that digitized scheduling, student progress, instructor management, and business reporting.

------------------------------------------------------------

meta_role:
Lead Product Manager

meta_built:
Q1 2025

meta_updated:
Q2 2025

meta_visit:
Live · iOS & Android

meta_team:
Flutter + Firebase Team

live:
https://play.google.com/store/apps/details?id=com.shubhamarora9878.drivoloapp&hl=en_IN
https://apps.apple.com/in/app/drivolo/id6759315211

toolkit:

Flutter

Firebase

Figma

User Research

Roadmapping

Analytics

------------------------------------------------------------

section_01_why:

Conversations with driving school owners revealed a common operational challenge: every critical process depended on paper records, phone calls, or spreadsheets.

**Owners lacked visibility into both operations and business performance.**

The objective became creating a lightweight operational platform that digitized the complete customer journey.

------------------------------------------------------------

section_02_approach:

Rather than replicating existing software, the platform prioritized workflows owners repeated every day—student onboarding, lesson scheduling, instructor assignments, attendance tracking, payments, and reporting.

Each feature reduced operational friction rather than adding administrative overhead.

------------------------------------------------------------

section_03_decisions:

The product deliberately adopted a mobile-first strategy because most owners and instructors managed operations directly from their phones.

Offline-friendly workflows, simplified interfaces, and minimal training requirements became core design principles.

------------------------------------------------------------

section_04_learned:

The best vertical SaaS products disappear into daily operations. Success depended less on advanced functionality and more on making routine tasks dramatically easier.

=== PROJECT 07 ===

slug:
callintel

name:
Call Intelligence

type:
AI Analytics Platform

date:
Q2 2026

one_liner:
Transforming thousands of customer conversations into actionable business intelligence.

card_description:
Designed an AI-powered transcription and analysis pipeline that converted over 1,300 customer conversations into structured insights, enabling scalable quality reviews, coaching, and strategic decision-making.

feature_bullets:
- Automated transcription pipeline for large audio libraries.
- AI-generated sentiment and action-item extraction.
- Structured analytics exported into reporting dashboards.
- Reduced manual review effort while improving consistency.

stack_tags:
AI
ANALYTICS
VOICE
TRANSCRIPTION
INSIGHTS

------------------------------------------------------------

title:
Enterprise Call Intelligence Platform

lede:

Customer conversations contain an organization's richest product insights, yet reviewing thousands of recordings manually is impossible. This platform transformed raw audio into searchable business intelligence through scalable AI-powered transcription and analysis.

------------------------------------------------------------

meta_role:
Product Manager

meta_built:
Q2 2026

meta_updated:
Q2 2026

meta_visit:
Private

meta_team:
Solo Builder

toolkit:

Python

Sarvam AI

Claude

Google Sheets

Automation

Analytics

------------------------------------------------------------

section_01_why:

Organizations record thousands of customer conversations but rarely learn from them because manual review is prohibitively expensive.

**Every call represented customer knowledge waiting to be discovered.**

The goal was to convert conversations into searchable organizational intelligence.

------------------------------------------------------------

section_02_approach:

The pipeline processed recordings asynchronously, generating transcripts before passing them through semantic analysis to identify sentiment, recurring themes, commitments, objections, and coaching opportunities.

Structured outputs were automatically exported for operational review.

------------------------------------------------------------

section_03_decisions:

The architecture emphasized reliability over processing speed.

Batch execution, retry mechanisms, duplicate detection, and progress tracking ensured large recording libraries could be processed consistently without unnecessary API costs.

------------------------------------------------------------

section_04_learned:

The hardest part of AI analytics isn't transcription accuracy—it's presenting insights in a format that changes operational decisions. Actionable intelligence always matters more than raw data.

=== PROJECT 08 ===

--- CARD FIELDS ---

slug:
leadforge

name:
LeadForge AI

type:
AI Sales Intelligence

date:
Q2 2026

one_liner:
Transforming business ideas into qualified sales pipelines through autonomous prospecting.

card_description:
Designed an AI-native lead generation platform that converts ideal customer profiles into validated prospect databases using Gemini-powered customer understanding, intelligent web scraping, enrichment, and automated CRM population.

feature_bullets:
- AI-generated Ideal Customer Profile from business context.
- Autonomous prospect discovery across multiple public sources.
- Automated enrichment and lead qualification.
- CRM-ready pipeline for personalized outreach.

stack_tags:
AI
SALES
AUTOMATION
CRM
LEADS

------------------------------------------------------------

title:
LeadForge AI

lede:

Traditional prospecting forces sales teams to spend hours identifying, researching, validating, and organizing potential customers before meaningful conversations even begin. LeadForge AI automates the entire discovery process, allowing teams to focus on selling rather than searching.

------------------------------------------------------------

meta_role:
Founder • Product Manager

meta_built:
Q2 2026

meta_updated:
Q2 2026

meta_visit:
Private

meta_team:
Solo Builder

toolkit:

Gemini

Apify

PhantomBuster

Google Sheets

n8n

OpenAI

CRM Automation

------------------------------------------------------------

section_01_why:

Prospecting has always been one of the least scalable parts of outbound sales. Every campaign starts with manually defining target companies, identifying decision makers, validating contact information, and organizing data before outreach even begins.

**The bottleneck wasn't outreach—it was building high-quality prospect lists consistently.**

I wanted to remove repetitive research entirely by designing a system capable of understanding a business first, then autonomously identifying companies and people most likely to benefit from its solution.

------------------------------------------------------------

section_02_approach:

Instead of asking users to manually define search filters, the system first analyzed the business itself.

A Gemini-powered discovery layer extracted customer personas, industry segments, pain points, buying triggers, and ideal customer characteristics. These structured insights became search parameters for automated prospect discovery using multiple scraping and enrichment services.

Qualified leads passed through validation before being normalized into a CRM-ready structure, ensuring downstream outreach systems always received clean, standardized datasets.

------------------------------------------------------------

section_03_decisions:

Rather than maximizing the number of leads collected, I optimized for relevance.

Poor-quality automation simply generates larger databases filled with unusable contacts. By emphasizing qualification before enrichment, the platform reduced downstream cleanup while improving campaign quality.

The architecture also separated customer understanding from data collection, making it easy to support new industries without redesigning the scraping infrastructure.

------------------------------------------------------------

section_04_learned:

Automation creates value only when it improves decision quality.

Generating thousands of leads is meaningless if sales teams lose confidence in the data. Building trust through intelligent qualification proved far more valuable than maximizing volume.

------------------------------------------------------------

--- IMAGES ---

cover:
project-images/leadforge/cover.jpg

shots:

project-images/leadforge/01.jpg
Customer Discovery Flow

project-images/leadforge/02.jpg
Lead Qualification Pipeline

project-images/leadforge/03.jpg
CRM Dashboard

project-images/leadforge/04.jpg
Automation Workflow

=== PROJECT 09 ===

slug:
mailpilot

name:
MailPilot AI

type:
AI Communication Platform

date:
Q2 2026

one_liner:
Managing business email through intelligent prioritization, drafting, and workflow automation.

card_description:
Designed an AI-powered email management platform that classifies incoming conversations, drafts contextual responses, prioritizes important communication, and integrates seamlessly into existing workflows while preserving human oversight.

feature_bullets:
- AI-based inbox prioritization and categorization.
- Context-aware email drafting with approval workflows.
- Automated follow-up reminders and task creation.
- Human-in-the-loop review for critical conversations.

stack_tags:
EMAIL
AI
WORKFLOW
AUTOMATION
PRODUCTIVITY

------------------------------------------------------------

title:
MailPilot AI

lede:

Modern professionals spend a significant portion of every day triaging inboxes rather than making decisions. MailPilot AI transforms email from a reactive communication channel into an intelligent workspace that prioritizes action over administration.

------------------------------------------------------------

meta_role:
Founder • Product Manager

meta_built:
Q2 2026

meta_updated:
Q2 2026

meta_visit:
Private

meta_team:
Solo Builder

toolkit:

Gmail API

OpenAI

n8n

Prompt Engineering

Workflow Design

Automation

------------------------------------------------------------

section_01_why:

Email overload is rarely caused by message volume alone. The real challenge is context switching between conversations with different urgency, stakeholders, and expected actions.

**The problem wasn't reading email—it was deciding what deserved attention first.**

------------------------------------------------------------

section_02_approach:

The platform continuously classified incoming conversations by urgency, business function, stakeholder importance, and required action.

Instead of automatically responding, AI generated context-aware drafts that incorporated previous conversations and organizational knowledge while allowing users to retain full approval authority.

------------------------------------------------------------

section_03_decisions:

Human review remained mandatory for sensitive communication.

The platform also separated message understanding from response generation, allowing future improvements to the language model without affecting workflow logic or organizational memory.

------------------------------------------------------------

section_04_learned:

Communication products succeed when they reduce mental effort rather than simply reducing clicks. Intelligent prioritization proved more valuable than complete automation.

=== PROJECT 10 ===

slug:
calendarai

name:
Calendar Concierge

type:
AI Scheduling Platform

date:
Q2 2026

one_liner:
Natural language scheduling powered by multiple AI agents working together.

card_description:
Designed a conversational scheduling assistant capable of booking, rescheduling, cancelling, and managing appointments through natural language while synchronizing directly with Google Calendar.

feature_bullets:
- Multi-agent scheduling architecture.
- Natural language booking conversations.
- Automated conflict detection and resolution.
- Calendar synchronization with human confirmation.

stack_tags:
AI
CALENDAR
MULTIAGENT
WORKFLOW
AUTOMATION

------------------------------------------------------------

title:
Calendar Concierge

lede:

Scheduling appears simple until conversations involve changing availability, conflicting meetings, cancellations, recurring events, and human preferences. Calendar Concierge transforms these complexities into a natural conversational experience.

------------------------------------------------------------

meta_role:
Founder • Product Manager

meta_built:
Q2 2026

meta_updated:
Q2 2026

meta_visit:
Private

meta_team:
Solo Builder

toolkit:

Google Calendar API

Telegram

n8n

OpenAI

Workflow Automation

------------------------------------------------------------

section_01_why:

Traditional scheduling tools force users to think like software instead of communicating naturally.

**The opportunity was to let people schedule appointments exactly the way they speak.**

------------------------------------------------------------

section_02_approach:

Rather than relying on a single conversational agent, the system divided responsibilities across specialized agents responsible for intent detection, confirmation, calendar operations, and exception handling.

This modular architecture improved reliability while simplifying future expansion.

------------------------------------------------------------

section_03_decisions:

Scheduling operations directly affect user commitments.

Every destructive action—rescheduling or cancellation—required explicit confirmation before execution, ensuring user trust remained central to the experience.

------------------------------------------------------------

section_04_learned:

The most effective AI assistants don't replace existing workflows—they quietly disappear into them, making everyday interactions feel effortless.

=== PROJECT 11 ===

slug:
commercebot

name:
Commerce AI

type:
Conversational Commerce Platform

date:
Q2 2026

one_liner:
Turning WhatsApp into a complete sales, support, and fulfillment platform.

card_description:
Designed an AI-native commerce assistant that manages customer conversations from discovery to fulfillment, integrating order processing, support, knowledge retrieval, and human escalation into a unified conversational workflow.

feature_bullets:
- Intent-aware customer conversation engine.
- Automated order management.
- Integrated RAG knowledge base.
- Human escalation for sensitive interactions.

stack_tags:
WHATSAPP
AI
COMMERCE
RAG
AUTOMATION

------------------------------------------------------------

title:
Commerce AI

lede:

Messaging has become the primary customer interface for many businesses, yet most conversations still require constant manual intervention. Commerce AI enables organizations to manage sales, support, and fulfillment through a single conversational platform.

------------------------------------------------------------

meta_role:
Founder • Product Manager

meta_built:
Q2 2026

meta_updated:
Q2 2026

meta_visit:
Private

meta_team:
Solo Builder

toolkit:

WhatsApp API

OpenAI

RAG

n8n

Knowledge Base

Automation

------------------------------------------------------------

section_01_why:

Businesses increasingly sell through messaging platforms, but operational workflows remain fragmented across multiple systems.

**Customers don't distinguish between sales, support, and fulfillment—they simply expect one continuous conversation.**

------------------------------------------------------------

section_02_approach:

The platform classified every message by customer intent before routing it through specialized workflows for commerce, knowledge retrieval, order management, or human escalation.

This created a unified customer experience while preserving operational flexibility behind the scenes.

------------------------------------------------------------

section_03_decisions:

Rather than maximizing automation, emotionally sensitive conversations and exceptional scenarios were intentionally escalated to human operators.

Trust remained a product requirement, not an operational compromise.

------------------------------------------------------------

section_04_learned:

Conversational commerce succeeds when businesses think in journeys instead of transactions. Every interaction contributes to long-term customer relationships rather than isolated sales.

=== PROJECT 12 ===

--- CARD FIELDS ---

slug:
drone

name:
Project Garuda

type:
Industrial Hardware Platform

date:
Q4 2024

one_liner:
Building an India-first industrial drone platform through indigenous product development.

card_description:
Led the end-to-end product development of an industrial quadcopter platform focused on reducing import dependency. Managed component sourcing, prototype validation, hardware architecture, vendor coordination, and roadmap planning while achieving approximately 90% indigenous sourcing.

feature_bullets:
- Led end-to-end hardware product development lifecycle.
- Achieved approximately 90% indigenous component sourcing.
- Reduced projected import costs by nearly 70%.
- Validated modular architecture for multiple industrial use cases.

stack_tags:
HARDWARE
DRONES
R&D
PRODUCT
OPERATIONS

------------------------------------------------------------

title:
Project Garuda — Industrial Drone Platform

lede:

India's commercial drone ecosystem continues to depend heavily on imported hardware. Project Garuda explored whether a modular industrial platform could be built primarily using locally sourced components without compromising flight performance, maintainability, or scalability.

------------------------------------------------------------

meta_role:
Founder & Product Manager

meta_built:
Q4 2024

meta_updated:
Q1 2025

meta_visit:
Private Prototype

meta_team:
Cross-functional Hardware Team

toolkit:

Hardware Product Management

Vendor Management

Electronics

Rapid Prototyping

Supply Chain

R&D

Flight Testing

------------------------------------------------------------

section_01_why:

Commercial drone platforms available in India relied heavily on imported components, increasing procurement costs, lead times, and supply-chain risks.

**The challenge extended far beyond designing a flying drone—it required designing a sustainable product ecosystem that could eventually scale within India.**

The objective was to prove that domestic sourcing and modular product architecture could coexist with industrial-grade reliability.

------------------------------------------------------------

section_02_approach:

Instead of treating the drone as a single integrated product, I decomposed it into independent subsystems: propulsion, flight controller, frame, power management, payload integration, and communication.

This modular architecture simplified vendor selection, reduced manufacturing complexity, and enabled future product variants for agriculture, surveillance, logistics, and industrial inspection.

Rapid prototyping and iterative flight validation informed component selection, balancing performance, reliability, and maintainability throughout development.

------------------------------------------------------------

section_03_decisions:

One major trade-off involved balancing component availability with long-term supply resilience.

Rather than selecting the highest-performing imported hardware in every category, preference was given to locally available alternatives that supported future manufacturing scalability.

The product was therefore optimized around sustainable product architecture rather than benchmark specifications alone.

------------------------------------------------------------

section_04_learned:

Hardware product management reinforced a lesson fundamentally different from software.

Every design decision affects procurement, manufacturing, logistics, servicing, and future iterations simultaneously.

Building great hardware requires designing the ecosystem—not merely the product itself.

------------------------------------------------------------

cover:
project-images/drone/cover.jpg

shots:

project-images/drone/01.jpg
Prototype Assembly

project-images/drone/02.jpg
Flight Architecture

project-images/drone/03.jpg
Electronics Stack

project-images/drone/04.jpg
Testing & Validation

=== PROJECT 13 ===

slug:
xads

name:
Xads

type:
Marketplace Platform

date:
Q1 2026

one_liner:
Digitizing India's outdoor advertising industry through a self-service marketplace.

card_description:
Designed a marketplace connecting advertisers with billboard owners through transparent discovery, pricing, campaign visualization, booking, and execution tracking.

feature_bullets:
- Searchable inventory across outdoor advertising assets.
- Live campaign visualization before booking.
- Real-time campaign execution tracking.
- Self-service booking for advertisers.

stack_tags:
MARKETPLACE
SAAS
MOBILE
B2B
PRODUCT

------------------------------------------------------------

title:
Xads

lede:

Outdoor advertising remains one of the least digitized marketing industries. Xads reimagines billboard discovery and booking as a modern marketplace where businesses can search inventory, preview creatives, and monitor campaigns from booking through installation.

------------------------------------------------------------

meta_role:
Founder • Product Manager

meta_built:
Q1 2026

meta_updated:
Concept

meta_visit:
Private Concept

meta_team:
Solo Builder

toolkit:

Marketplace Design

UI/UX

Maps

Pricing Systems

Product Strategy

------------------------------------------------------------

section_01_why:

Booking outdoor advertising remains fragmented across brokers, phone calls, spreadsheets, and disconnected vendor relationships.

**Businesses struggle to compare locations, estimate campaign impact, and monitor execution after payment.**

The opportunity was to redesign the entire buying experience around transparency and self-service.

------------------------------------------------------------

section_02_approach:

The marketplace treated every billboard as a searchable digital asset with standardized pricing, metadata, traffic estimates, availability, and location intelligence.

Creative previews allowed advertisers to visualize campaigns before purchasing, while campaign tracking extended visibility beyond booking into printing, logistics, installation, and verification.

------------------------------------------------------------

section_03_decisions:

Rather than competing solely on inventory, Xads focused on reducing purchasing uncertainty.

Transparency, visualization, and execution tracking became the primary product differentiators, improving confidence throughout the advertising lifecycle.

------------------------------------------------------------

section_04_learned:

Marketplaces succeed by reducing friction rather than adding features.

The greatest opportunity wasn't digitizing transactions—it was digitizing trust.

=== PROJECT 19 ===

slug:
priority

name:
Lead Intelligence Engine

type:
Decision Support Platform

date:
Q3 2026

one_liner:
Ranking opportunities through behavioral and contextual intelligence.

card_description:
Designed a lead prioritization engine that combined recency, acquisition source, engagement history, and business rules into a dynamic scoring model that helped counseling teams focus on the highest-value conversations.

feature_bullets:
- Dynamic lead scoring engine.
- Behavioral prioritization model.
- Automated counselor allocation.
- Operational dashboards for admissions teams.

stack_tags:
ANALYTICS
SCORING
CRM
PRODUCT
AI

------------------------------------------------------------

title:
Lead Intelligence Engine

lede:

Sales organizations rarely fail because they lack leads—they fail because they spend time on the wrong ones. This platform continuously ranked opportunities based on changing customer behavior and business priorities.

------------------------------------------------------------

meta_role:
Product Manager

meta_built:
Q3 2026

meta_updated:
Ongoing

meta_visit:
Private

meta_team:
Admissions Operations

toolkit:

Google Sheets

Apps Script

Analytics

Decision Systems

Automation

------------------------------------------------------------

section_01_why:

Static lead queues ignore changing customer intent.

**Prioritization should evolve as customer behavior changes.**

------------------------------------------------------------

section_02_approach:

The scoring model evaluated source quality, recency, engagement, historical interactions, counselor availability, and operational constraints before recommending the next best conversation.

------------------------------------------------------------

section_03_decisions:

Scores remained explainable.

Counselors could always understand why one lead ranked above another.

------------------------------------------------------------

section_04_learned:

Decision-support systems succeed when users trust both the recommendation and the reasoning behind it.

=== PROJECT 20 ===

--- CARD FIELDS ---

slug:
successthinks

name:
SuccessThinks

type:
EdTech Startup

date:
2021 – 2023

one_liner:
My first venture — a digital-marketing training platform for India's students.

card_description:
SuccessThinks was my first startup — an EdTech brand I built from the ground up, owning strategy, product, marketing, and operations end to end. I scaled it to 2,000+ learners and ₹39L+ revenue.

feature_bullets:
- Built the brand end to end — strategy, product, marketing, and operations.
- Scaled digital learning to 2,000+ learners and ₹39L+ revenue.
- Designed multi-step lead funnels — 15,000+ qualified leads at 12% conversion.
- Automated onboarding & reporting to run lean with limited resources.

stack_tags:
EDTECH
PRODUCT
GROWTH
MARKETING
AUTOMATION
FUNNELS

------------------------------------------------------------

title:
SuccessThinks

lede:

SuccessThinks was my first entrepreneurial venture — a digital-marketing training platform built to make practical skill development and career growth accessible to India's students and young professionals. I built the brand from the ground up and owned every function end to end.

------------------------------------------------------------

meta_role:
Founder • Product & Growth

meta_built:
2021

meta_updated:
2023

meta_visit:
Live demo

meta_team:
Solo Founder

repo:
https://github.com/Somacharan5/success-thinks

live:
https://successthinks.vercel.app

toolkit:

Product Strategy

Growth Experimentation

Marketing Automation

Funnel Design

User Research

Analytics

CRM

------------------------------------------------------------

section_01_why:

I started SuccessThinks with a simple conviction: practical skill development and real career growth were out of reach for most students and young professionals in India. Traditional education rarely prepared them for the skills the market actually rewarded.

**The gap wasn't ambition — it was access.**

I wanted to build a platform that made hands-on, career-focused learning affordable and reachable — and to prove I could take an idea from zero to a real business.

------------------------------------------------------------

section_02_approach:

I built the brand from the ground up, owning strategy, product, marketing, operations, and community growth in parallel.

I designed and launched digital learning initiatives, built scalable marketing funnels, and developed automation-driven workflows to streamline operations. Working directly with learners, creators, and partners gave me hands-on experience across user research, product iteration, growth experimentation, and data-driven decision-making.

Every function fed the next: research shaped the product, funnels drove acquisition, and automation kept operations lean enough for one founder to run.

------------------------------------------------------------

section_03_decisions:

With limited resources, speed and leverage mattered more than polish.

I prioritized **validating ideas quickly** over building perfectly, and leaned on automation to scale operations that would otherwise need a team — onboarding, reporting, and lead nurturing all ran on automated workflows.

Rather than chasing vanity reach, I optimized the funnel for qualified intent — which is how a multi-step lead engine converted 15,000+ leads at a 12% rate.

------------------------------------------------------------

section_04_learned:

More than a startup, SuccessThinks became the foundation of my product mindset.

It taught me how to identify real user problems, build solutions with limited resources, validate ideas fast, and scale systems through technology. That experience laid the groundwork for everything since — my later work in AI, automation, product management, and building data-driven platforms.

------------------------------------------------------------

--- IMAGES ---

cover:
project-images/successthinks/cover.jpg

