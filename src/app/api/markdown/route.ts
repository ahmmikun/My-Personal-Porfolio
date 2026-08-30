import { NextRequest, NextResponse } from "next/server";

const SITE_URL = "https://ahmmikun.vercel.app";

const MARKDOWN_PAGES: Record<string, { title: string; content: string }> = {
  "/": {
    title: "Salman Ahmad (ahmmikun) - Full Stack Developer Portfolio",
    content: `# Salman Ahmad (ahmmikun) - Full Stack Developer & Graphic Designer

> Official portfolio of Salman Ahmad (known as \`ahmmikun\`), Full Stack Developer, Graphic Designer, and Automation Engineer based in Lahore, Pakistan.

- **Canonical URL**: ${SITE_URL}
- **GitHub**: [https://github.com/ahmmikun](https://github.com/ahmmikun)
- **LinkedIn**: [https://www.linkedin.com/in/ahmmikun/](https://www.linkedin.com/in/ahmmikun/)
- **Instagram**: [https://instagram.com/ahmmikun](https://instagram.com/ahmmikun)
- **Email**: xheikhsalman4422@gmail.com
- **LLM Index**: [${SITE_URL}/llms.txt](${SITE_URL}/llms.txt)
- **Developer Documentation**: [${SITE_URL}/docs](${SITE_URL}/docs)
- **MCP Server Endpoint**: [${SITE_URL}/api/mcp](${SITE_URL}/api/mcp)

---

## 1. Professional Overview

Salman Ahmad is a passionate Full Stack Developer and Graphic Designer with extensive experience in architecting modern web applications, high-throughput REST APIs, automation bots, and interactive 3D WebGL interfaces. Operating under the developer handle **ahmmikun**, he specializes in building scalable frontend architectures (React, Next.js, Tailwind CSS) and robust backend microservices (Node.js, Express, Python, MongoDB).

### Key Metrics
- **Completed Projects**: 20+ applications, automation suites, and open-source tools
- **Years of Experience**: 3+ years active development and system design
- **Client Satisfaction**: 99% track record across freelancing and enterprise solutions

---

## 2. Core Technical Stack

### Languages
- **JavaScript (ES6+) / TypeScript**: Primary language for full-stack web and backend microservices.
- **Python**: Automation workflows, data scraping, generative AI integration, and scripting.
- **C / C++ / Assembly**: Fundamental systems programming, memory management, and algorithmic problem-solving.
- **HTML5 & CSS3**: Modern semantic markup, accessible layouts, responsive CSS grid, and animations.

### Frontend Engineering
- **React 19 & Next.js 16 (App Router)**: Server Components, dynamic streaming, content negotiation, SSR/SSG.
- **Tailwind CSS 4**: Modern styling token systems, responsive fluid layouts, cyberpunk dark themes.
- **Three.js & React Three Fiber (@react-three/fiber, @react-three/drei)**: 3D interactive graphics and WebGL shaders.
- **Framer Motion**: Gesture-driven animations, scroll-linked transitions, and layout morphing.

### Backend & API Architecture
- **Node.js & Express**: High-throughput RESTful APIs, middleware pipelines, webhook handlers.
- **Model Context Protocol (MCP)**: First-party MCP server exposing live portfolio tools to Claude, ChatGPT, and AI agents.
- **RESTful API Design & OpenAPI 3.1.0**: Standardized endpoints, JSON schemas, rate limiting, and documentation.
- **Nodemailer & Webhooks**: Automated transmission pipelines and transactional email delivery.

### Databases & Cloud Infrastructure
- **MongoDB & MySQL**: Relational and NoSQL database modeling, aggregation pipelines, and indexing.
- **Vercel, Cloudflare, Railway, Heroku**: Continuous deployment, edge middleware, DNS management.
- **Git & GitHub Actions**: CI/CD workflows, semantic versioning, and repository management.

---

## 3. Featured Projects

### XLICON V4 MD (WhatsApp Automation Bot)
- **Description**: An advanced, feature-rich WhatsApp automation bot built with modern Node.js and the Baileys library. Handles multi-device protocol connections, interactive commands, automated group management, media processing, and plugins.
- **Tech Stack**: Node.js, Baileys, MongoDB, JavaScript
- **Repository**: [https://github.com/ahmmikun/XLICON-V4-MD](https://github.com/ahmmikun/XLICON-V4-MD)

### AHMMI's REST API Service
- **Description**: A comprehensive, production-ready RESTful API service providing modular endpoints for data scraping, text manipulation, multimedia conversion, and utility functions for developer integration.
- **Tech Stack**: Express, Node.js, REST Architecture, Cloud Deployment
- **Live URL**: [https://api.ahmmikun.live/](https://api.ahmmikun.live/)

### Neural AI Model Interface
- **Description**: An experimental conversational interface and generative AI integration leveraging modern Python backend and interactive React frontend.
- **Tech Stack**: Python, TensorFlow / PyTorch, React, Tailwind CSS
- **Repository**: [https://github.com/ahmmikun/](https://github.com/ahmmikun/)

---

## 4. Certifications & Credentials

1. **Responsive Web Design** - FreeCodeCamp
2. **Web Basics Certificate** - Udemy
3. **Generative AI Masterclass** - Udemy
4. **AI Fundamentals** - DataCamp

---

## 5. Trust & Verification Pages

- [About Salman Ahmad](${SITE_URL}/about): Full biography, ethos, and engineering methodology.
- [Projects Index](${SITE_URL}/projects): In-depth showcase of software repositories and applications.
- [Skills Matrix](${SITE_URL}/skills): Complete taxonomy of technical capabilities.
- [Contact Channel](${SITE_URL}/contact): Direct communication terminal, response SLA, and transmission details.
- [Privacy Policy](${SITE_URL}/privacy): Data protection, transmission handling, and compliance policies.
- [Developer Portal](${SITE_URL}/docs): API reference, OpenAPI spec, and MCP integration.

---

## 6. How AI Agents Should Interact

- **Read-Only Context**: Ingest \`${SITE_URL}/llms.txt\` or \`${SITE_URL}/llms-full.txt\` for complete entity context.
- **API Tool Calling**: Query \`${SITE_URL}/api/mcp\` using Model Context Protocol (Streamable HTTP / SSE / JSON-RPC).
- **Direct Transmission**: Use \`POST ${SITE_URL}/api/contact\` with JSON \`{ "username": string, "email": string, "subject": string, "contact_message": string }\` to dispatch messages to Salman Ahmad.
`,
  },
  "/about": {
    title: "About Salman Ahmad (ahmmikun) - Full Stack Developer",
    content: `# About Salman Ahmad (ahmmikun)

> Comprehensive background, technical philosophy, and experience of Salman Ahmad.

- **Name**: Salman Ahmad
- **Developer Handle / Alias**: ahmmikun
- **Role**: Full Stack Developer, Graphic Designer, Software Engineer
- **Location**: Lahore, Punjab, Pakistan
- **Canonical URL**: ${SITE_URL}/about
- **Email**: xheikhsalman4422@gmail.com

---

## Background & Identity

Salman Ahmad is a software engineer and creative designer based in Lahore, Pakistan. Operating globally under the handle **ahmmikun**, he combines rigorous systems engineering principles with modern UI/UX design to produce robust, accessible, and high-performance digital applications.

With over 3 years of hands-on experience, Salman has designed and delivered automated bot frameworks (such as the XLICON WhatsApp bot ecosystem), RESTful API platforms, WebGL 3D graphical user interfaces, and enterprise full-stack web applications using React, Next.js, and Node.js.

---

## Core Engineering Competencies

### 1. Full-Stack Web Development
- Building performant, SEO-optimized, and agent-ready applications using **Next.js (App Router)** and **React**.
- Implementing type-safe frontends with **TypeScript** and modular styling architectures using **Tailwind CSS**.
- Engineering responsive, accessible interfaces that render cleanly with or without client-side JavaScript.

### 2. Microservices & API Engineering
- Designing RESTful APIs with **Express** and **Node.js** featuring clean routing, rate limiting, and structured OpenAPI 3.1.0 specifications.
- Building first-party **Model Context Protocol (MCP)** endpoints enabling native agentic tool-use by LLMs (Claude, ChatGPT, Perplexity).

### 3. Interactive WebGL & 3D Graphics
- Creating immersive 3D web environments with **Three.js** and **@react-three/fiber**.
- Balancing visual fidelity and computational efficiency to maintain 60 FPS performance across desktop and mobile devices.

### 4. Automation & Bot Architecture
- Engineering resilient automation scripts and bot platforms with **Node.js**, **Python**, and protocol libraries (e.g. Baileys).
- Building background schedulers, webhook consumers, and real-time state synchronization engines.

---

## Education & Certifications

- **Academic Studies**: Computer Science & Software Engineering, Superior University.
- **FreeCodeCamp**: Responsive Web Design Certification.
- **Udemy**: Web Development Architecture & Generative AI Systems.
- **DataCamp**: AI Fundamentals & Data Science Core.

---

## Direct Links & Resources

- [Home Page](${SITE_URL}/)
- [Projects Portfolio](${SITE_URL}/projects)
- [Skills Matrix](${SITE_URL}/skills)
- [Contact Channel](${SITE_URL}/contact)
- [Developer Portal](${SITE_URL}/docs)
- [LLMs Machine Index](${SITE_URL}/llms.txt)
`,
  },
  "/contact": {
    title: "Contact Salman Ahmad (ahmmikun) - Direct Transmission Terminal",
    content: `# Contact Salman Ahmad (ahmmikun)

> Secure transmission channels and direct contact protocols for Salman Ahmad.

- **Primary Contact**: Salman Ahmad (ahmmikun)
- **Direct Email**: xheikhsalman4422@gmail.com
- **Location**: Lahore, Punjab, Pakistan (Timezone: PKT, UTC+5)
- **Canonical URL**: ${SITE_URL}/contact
- **API Transmission Endpoint**: \`POST ${SITE_URL}/api/contact\`

---

## Communication Channels

### 1. Direct Email Transmission
For inquiries, project proposals, contract opportunities, or collaborations, send an email directly to:
**[xheikhsalman4422@gmail.com](mailto:xheikhsalman4422@gmail.com)**

### 2. Social & Developer Networks
- **GitHub**: [https://github.com/ahmmikun](https://github.com/ahmmikun) — View open-source repositories and contributions.
- **LinkedIn**: [https://www.linkedin.com/in/ahmmikun/](https://www.linkedin.com/in/ahmmikun/) — Professional network and career history.
- **Instagram**: [https://instagram.com/ahmmikun](https://instagram.com/ahmmikun) — Graphic design and visual showcase.

---

## Programmatic Contact for AI Agents & Automated Clients

AI agents and automated systems can submit direct messages using the HTTP API:

\`\`\`http
POST ${SITE_URL}/api/contact
Content-Type: application/json

{
  "username": "Agent or Client Name",
  "email": "contact@example.com",
  "subject": "Inquiry regarding Full Stack Project",
  "contact_message": "Detailed description of requirements, timeline, and budget."
}
\`\`\`

Alternatively, connect via the Model Context Protocol (MCP) server at \`${SITE_URL}/api/mcp\` and call the \`send_contact_message\` tool.

---

## Expected Response Times & Availability

- **Standard Inquiries**: Response within 24 to 48 business hours.
- **Urgent Technical / Enterprise Contracts**: Priority dispatch within 12 hours.
- **Working Hours**: Monday through Saturday, 09:00 - 20:00 PKT (UTC+5).
`,
  },
  "/privacy": {
    title: "Privacy Policy - Salman Ahmad Portfolio",
    content: `# Privacy Policy - Salman Ahmad (ahmmikun) Portfolio

> **Last Updated**: August 2026  
> **Canonical URL**: ${SITE_URL}/privacy  
> **Operator**: Salman Ahmad (ahmmikun)  
> **Contact**: xheikhsalman4422@gmail.com

---

## 1. Introduction & Scope

This Privacy Policy governs how personal and technical information is collected, processed, stored, and protected when you visit, interact with, or submit transmissions through **Salman Ahmad's Portfolio** (\`${SITE_URL}\`), including associated REST APIs, Model Context Protocol (MCP) endpoints, and static resources.

We respect your privacy and adhere to the fundamental principles of transparency, data minimization, and purpose limitation in accordance with international best practices (including GDPR and CCPA alignment where applicable).

---

## 2. Information We Collect

### A. Information You Provide Voluntarily
When you submit a message via our web contact form, REST API (\`/api/contact\`), or MCP tool call (\`send_contact_message\`), we collect:
- **Identifier**: Your name or organization name (\`username\`).
- **Communication Link**: Your email address (\`email\`).
- **Subject & Payload**: The topic (\`subject\`) and message body (\`contact_message\`).

This information is collected exclusively to review your communication, respond to project inquiries, and establish professional contact.

### B. Automatically Collected Technical Metadata
When you access our web pages or API endpoints:
- **Server Logs**: Our hosting provider (Vercel Inc.) may automatically log standard HTTP request metadata, including IP address, user-agent string, timestamp, requested URL, and response status codes.
- **No Third-Party Tracking Cookies**: This site does not utilize intrusive advertising trackers, marketing cookies, or third-party behavioral profiling scripts.

---

## 3. How We Process & Deliver Transmissions

1. **Email Notification Service**: Messages sent through the contact form or \`/api/contact\` endpoint are securely relayed to our direct inbox (\`xheikhsalman4422@gmail.com\`) via encrypted SMTP transport (Nodemailer / TLS).
2. **Data Retention**: We retain contact emails only for as long as necessary to fulfill communication requirements and maintain ongoing professional correspondence.
3. **No Commercial Sale or Sharing**: We do **not** sell, lease, or distribute your personal information to third-party advertisers or data brokers under any circumstances.

---

## 4. Hosting & Infrastructure Providers

This portfolio and its serverless API functions are deployed globally via **Vercel Inc.**. Technical logs and cached edge assets are processed in compliance with Vercel's global privacy and security certifications.

---

## 5. Rights of Individuals & Agents

You have the right to:
- Request access to any personal data you have transmitted to us.
- Request the correction or deletion of your transmitted contact data.
- Withdraw consent for future communication at any time by emailing \`xheikhsalman4422@gmail.com\`.

---

## 6. Contact for Privacy Matters

If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please reach out directly:

- **Entity**: Salman Ahmad (ahmmikun)
- **Location**: Lahore, Punjab, Pakistan
- **Email**: [xheikhsalman4422@gmail.com](mailto:xheikhsalman4422@gmail.com)
- **Website**: [${SITE_URL}](${SITE_URL})
`,
  },
  "/projects": {
    title: "Projects & Engineering Works - Salman Ahmad (ahmmikun)",
    content: `# Projects & Engineering Works - Salman Ahmad (ahmmikun)

> Software repositories, production systems, and automation projects engineered by Salman Ahmad.

- **Developer**: Salman Ahmad (ahmmikun)
- **GitHub Profile**: [https://github.com/ahmmikun](https://github.com/ahmmikun)
- **Canonical URL**: ${SITE_URL}/projects

---

## Featured Engineering Projects

### 1. XLICON V4 MD (WhatsApp Bot Ecosystem)
- **Category**: Automation & Messaging Protocols
- **Status**: Active & Maintained
- **Tech Stack**: Node.js, Baileys Library, MongoDB, JavaScript
- **Repository**: [https://github.com/ahmmikun/XLICON-V4-MD](https://github.com/ahmmikun/XLICON-V4-MD)
- **Overview**: An advanced, feature-rich multi-device WhatsApp automation bot built with modern Node.js and the Baileys library. Capable of handling hundreds of dynamic commands, media conversion, group security management, automated triggers, and extensible plugin architecture.

### 2. AHMMI's REST API Service
- **Category**: Backend Microservices & Data Pipelines
- **Status**: Live Production
- **Tech Stack**: Node.js, Express, REST Architecture, Cloud Hosting
- **Live Endpoint**: [https://api.ahmmikun.live/](https://api.ahmmikun.live/)
- **Overview**: High-throughput RESTful API microservice delivering modular utility endpoints for media scraping, data transformation, image generation, and third-party integrations for developer applications.

### 3. Neural AI Generative Interface
- **Category**: Artificial Intelligence & Conversational Systems
- **Status**: Under Active Development
- **Tech Stack**: Python, TensorFlow / PyTorch, React, Tailwind CSS
- **Repository**: [https://github.com/ahmmikun/](https://github.com/ahmmikun/)
- **Overview**: Next-generation conversational AI user interface designed for low-latency generative reasoning, context orchestration, and multimodal interactions.

---

## All Open Source Repositories
Explore Salman Ahmad's full portfolio of open-source software, scripts, and utilities on GitHub:
👉 **[https://github.com/ahmmikun](https://github.com/ahmmikun)**
`,
  },
  "/skills": {
    title: "Technical Skills & Competency Matrix - Salman Ahmad",
    content: `# Technical Skills & Competency Matrix - Salman Ahmad (ahmmikun)

> Comprehensive taxonomy of software engineering proficiencies, languages, tools, and frameworks.

- **Canonical URL**: ${SITE_URL}/skills
- **API Endpoint**: \`GET ${SITE_URL}/api/skills\`

---

## 1. Programming & Scripting Languages
- **JavaScript (ES2024+)**: Advanced asynchronous patterns, event loop optimization, closures, functional programming.
- **TypeScript**: Strict type systems, generics, interface modeling, full-stack type safety.
- **Python**: Scripting, bot frameworks, web scraping (BeautifulSoup, Scrapy), data pipelines, generative AI.
- **C & C++**: Algorithmic foundations, pointers, memory management, data structures.
- **Assembly Language**: CPU registers, instruction set architecture, low-level execution concepts.
- **HTML5 & CSS3**: Semantic HTML, Web Accessibility (ARIA), responsive CSS Grid, Flexbox, custom animations.

## 2. Frontend Engineering & Design Systems
- **React 19 & Next.js 16**: Server Components (RSC), App Router, dynamic routing, content negotiation, SSR/SSG/ISR.
- **Tailwind CSS 4**: Custom design systems, dark mode palettes, utility-first UI design, cyberpunk aesthetic styling.
- **Three.js & WebGL**: 3D scene creation, shader materials, interactive particle systems, 3D viewport canvas.
- **Framer Motion**: Smooth entry transitions, interactive micro-animations, layout animations.
- **Figma**: UI/UX prototyping, vector graphics, component systems, visual design tokens.

## 3. Backend & Cloud Infrastructure
- **Node.js & Express**: RESTful API design, middleware pipelines, error handling, rate limiting.
- **Model Context Protocol (MCP)**: Server implementations for Claude Desktop, Cursor, and AI agents.
- **Databases**: MongoDB (Mongoose ODM, aggregation pipelines), MySQL (relational schema design, queries).
- **Deployment & DevOps**: Vercel, Cloudflare, Railway, Heroku, Git version control, GitHub CI/CD workflows.
`,
  },
  "/docs": {
    title: "Developer Portal & API Documentation - Salman Ahmad",
    content: `# Developer Portal & API Documentation - Salman Ahmad (ahmmikun)

> Complete documentation for REST endpoints, Model Context Protocol (MCP) server, OpenAPI 3.1.0 specifications, and Agentic interfaces.

- **Base URL**: \`${SITE_URL}\`
- **OpenAPI 3.1.0 Specification**: [${SITE_URL}/openapi.json](${SITE_URL}/openapi.json)
- **MCP Discovery Endpoint**: [${SITE_URL}/.well-known/mcp.json](${SITE_URL}/.well-known/mcp.json)
- **Agent Instructions**: [${SITE_URL}/.well-known/agent-instructions](${SITE_URL}/.well-known/agent-instructions)
- **LLM Manifest**: [${SITE_URL}/llms.txt](${SITE_URL}/llms.txt)

---

## 1. Model Context Protocol (MCP) Server

Salman Ahmad's portfolio provides a first-party Model Context Protocol server exposing portfolio tools natively to LLMs and agent frameworks.

- **Transport**: Streamable HTTP / Server-Sent Events (SSE) and JSON-RPC 2.0
- **Endpoint**: \`POST ${SITE_URL}/api/mcp\`
- **Handshake / SSE Stream**: \`GET ${SITE_URL}/api/mcp\`
- **Manifest**: \`GET ${SITE_URL}/.well-known/mcp\`

### Available MCP Tools:
1. \`get_portfolio_summary\`: Returns full biography, role, location, contact, and core metrics.
2. \`get_skills\`: Returns structured JSON breakdown of all technical capabilities by category.
3. \`get_projects\`: Returns complete catalog of featured and open-source software projects.
4. \`get_developer_resources\`: Returns list of all machine-readable URLs, OpenAPI schemas, and documentation.
5. \`send_contact_message\`: Dispatches a contact inquiry to Salman Ahmad with \`username\`, \`email\`, \`subject\`, and \`contact_message\`.

---

## 2. REST API Endpoints

### Contact Transmission
- **Endpoint**: \`POST /api/contact\`
- **Content-Type**: \`application/json\`
- **Request Body**:
  \`\`\`json
  {
    "username": "Client or Agent Name",
    "email": "sender@domain.com",
    "subject": "Project Proposal / Collaboration",
    "contact_message": "Hello Salman, I would like to discuss a project..."
  }
  \`\`\`
- **Success Response**: \`200 OK\` -> \`{ "message": "Email sent successfully" }\`

### Health Check
- **Endpoint**: \`GET /api/health\`
- **Response**: \`200 OK\` -> \`{ "status": "healthy", "service": "ahmmikun-portfolio", "timestamp": "..." }\`

### Skills Matrix
- **Endpoint**: \`GET /api/skills\`
- **Response**: \`200 OK\` -> JSON array of categorized skill domains.

### Projects Catalog
- **Endpoint**: \`GET /api/projects\`
- **Response**: \`200 OK\` -> JSON array of software projects.

---

## 3. Markdown Content Negotiation (acceptmarkdown.com)

Every public route on this domain supports native Markdown content negotiation. To receive clean markdown without HTML wrapper tags, include the \`Accept\` header:

\`\`\`bash
curl -H "Accept: text/markdown" ${SITE_URL}/about
curl -H "Accept: text/markdown" ${SITE_URL}/projects
curl -H "Accept: text/markdown" ${SITE_URL}/
\`\`\`

All negotiated responses return:
- \`Content-Type: text/markdown; charset=utf-8\`
- \`Vary: Accept, Accept-Encoding\`
`,
  },
};

export async function GET(request: NextRequest) {
  const headerPath = request.headers.get("x-target-path");
  const queryPath = request.nextUrl?.searchParams?.get("path") || new URL(request.url).searchParams.get("path");
  let targetPath = headerPath || queryPath || "/";

  // Normalize path
  if (!targetPath.startsWith("/")) {
    targetPath = "/" + targetPath;
  }
  // Strip trailing slash if not root
  if (targetPath.length > 1 && targetPath.endsWith("/")) {
    targetPath = targetPath.slice(0, -1);
  }

  const page = MARKDOWN_PAGES[targetPath];

  if (page) {
    return new NextResponse(page.content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, Accept-Encoding",
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  // If path is not found, return an agent-friendly 404 Markdown recovery response
  const notFoundMarkdown = `# 404 - Resource Not Found

The requested path \`${targetPath}\` does not exist on Salman Ahmad's portfolio (${SITE_URL}).

## Recovery & Discovery Links for AI Agents

- **LLM Index**: [${SITE_URL}/llms.txt](${SITE_URL}/llms.txt) - Machine-readable site guide
- **Full LLM Context**: [${SITE_URL}/llms-full.txt](${SITE_URL}/llms-full.txt) - Complete knowledge base
- **XML Sitemap**: [${SITE_URL}/sitemap.xml](${SITE_URL}/sitemap.xml) - Index of all valid URLs
- **OpenAPI Specification**: [${SITE_URL}/openapi.json](${SITE_URL}/openapi.json) - REST API schema
- **MCP Server Manifest**: [${SITE_URL}/.well-known/mcp.json](${SITE_URL}/.well-known/mcp.json) - Model Context Protocol
- **Agent Instructions**: [${SITE_URL}/.well-known/agent-instructions](${SITE_URL}/.well-known/agent-instructions)

## Valid Available Pages
- **Home**: [${SITE_URL}/](${SITE_URL}/)
- **About**: [${SITE_URL}/about](${SITE_URL}/about)
- **Projects**: [${SITE_URL}/projects](${SITE_URL}/projects)
- **Skills**: [${SITE_URL}/skills](${SITE_URL}/skills)
- **Developer Docs**: [${SITE_URL}/docs](${SITE_URL}/docs)
- **Contact**: [${SITE_URL}/contact](${SITE_URL}/contact)
- **Privacy Policy**: [${SITE_URL}/privacy](${SITE_URL}/privacy)
`;

  return new NextResponse(notFoundMarkdown, {
    status: 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Vary": "Accept, Accept-Encoding",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
