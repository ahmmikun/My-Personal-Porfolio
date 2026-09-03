# Salman Ahmad Portfolio (ahmmikun)

Official agent-ready web platform and developer portfolio for **Salman Ahmad (ahmmikun)**, Full Stack Developer & Systems Engineer based in Lahore, Punjab, Pakistan.

- **Canonical URL**: [https://salmanahmad.tech](https://salmanahmad.tech)
- **Developer Documentation**: [https://salmanahmad.tech/docs](https://salmanahmad.tech/docs)
- **OpenAPI 3.1.0 Specification**: [https://salmanahmad.tech/openapi.json](https://salmanahmad.tech/openapi.json)
- **Model Context Protocol Manifest**: [https://salmanahmad.tech/.well-known/mcp.json](https://salmanahmad.tech/.well-known/mcp.json)
- **LLM Agent Index**: [https://salmanahmad.tech/llms.txt](https://salmanahmad.tech/llms.txt)

---

## Official CLI Tool (`salmanahmad`)

Developers and AI agents can execute the official CLI tool with zero installation using `npx`:

```bash
# Print interactive portfolio summary
npx salmanahmad bio

# Retrieve technical skills matrix formatted as JSON
npx salmanahmad skills --category Backend --json

# Query software projects catalog
npx salmanahmad projects --filter ai --json

# Dispatch a verified contact message
npx salmanahmad contact --name "Jane Doe" --email "jane@example.com" --message "Project inquiry"

# Launch stdio Model Context Protocol (MCP) server
npx salmanahmad mcp
```

---

## Model Context Protocol (MCP) Server

Connect Claude Desktop, Cursor, ChatGPT, or autonomous agents to the live first-party MCP server:

- **Streamable HTTP & SSE Endpoint**: `https://salmanahmad.tech/api/mcp` (and `https://salmanahmad.tech/api/v1/mcp`)
- **Protocol Version**: `2024-11-05`
- **Exposed Tools**: `get_portfolio_summary`, `get_skills`, `get_projects`, `get_developer_resources`, `send_contact_message`

---

## REST API (v1)

- `POST /api/v1/contact`: Submit contact inquiries with RFC 9457 validation errors.
- `GET /api/v1/skills`: Query categorized skills matrix.
- `GET /api/v1/projects`: Query project catalog with keyword filters.
- `GET /api/v1/health`: System health and uptime monitoring.
- `GET/POST /api/v1/mcp`: Model Context Protocol server.

All API responses return standard RFC RateLimit headers (`RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`, `RateLimit-Policy`) and `Retry-After` on HTTP 429.

---

## Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run agent readiness verification tests
npm run test:agent

# Build optimized production bundle
npm run build
```
