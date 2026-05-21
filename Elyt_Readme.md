# Elyt (AutoFlow)

AI-powered browser automation commercial product with multi-profile orchestration, humanization technology, and multi-provider LLM integration.

Elyt is currently available exclusively to enterprise customers.

**Status:** Live

---

## Overview

Elyt (internally codenamed AutoFlow / 2js) is a production-grade AI-powered browser automation platform designed for:

- Mass intelligent automation of web tasks
- Workflow orchestration across multiple browser profiles
- Advanced anti-bot evasion with humanization technology
- Multi-provider AI integration for intelligent task execution
- Cross-platform deployment (web, desktop, extension)

---

## Architecture

3-Tier Distributed Architecture:

```
ExpressUI (Vanilla JS Frontend)
    | HTTP REST
ExpressAPI (Node.js Backend Orchestrator)
    | HTTP REST
Python Local API (FastAPI Automation Engine)
    |
Playwright + Browser-Use + Humanizer
    |
Anti-Detect Browser (AdsPower, MoreLogin, GoLogin)
```

---

## Technology Stack

### Frontend (ExpressUI)

- **Language:** Vanilla JavaScript (ES2025)
- **Framework:** None (vanilla DOM manipulation)
- **HTTP Client:** Fetch API
- **Storage:** LocalStorage, SessionStorage
- **Styling:** CSS/SCSS
- **Module Pattern:** Feature-based organization
- **Shared Components:** 13 reusable utilities/services
- **Logging:** Client-side file logging system

### Backend (ExpressAPI)

- **Framework:** Express.js 4.21.2
- **Runtime:** Node.js 18+ (ES modules)
- **Language:** JavaScript (ES2025)
- **Database:** LowDB 7.0.1 (JSON-based, no external DB needed)
- **Job Queue:** BullMQ 5.49.0 with Redis 5.8.2
- **Authentication:** JWT (jsonwebtoken 9.0.2) + nonce-based auth
- **API Documentation:** NSwag 13.19.0 (Swagger/OpenAPI)
- **File Upload:** Multer 1.4.5
- **Email:** Nodemailer 7.0.5
- **Logging:** Winston 3.17.0
- **Data Validation:** AJV 8.17.1 + ajv-formats 3.0.1
- **HTTP Client:** Axios 1.8.4

Key stats:
- 23 API routes (workflow, profile, auth, scheduling, etc.)
- 22+ service modules organized by feature
- Middleware for error handling, async wrapping
- Database abstraction layer over LowDB
- 303 Controllers total across system

### Python Local API (FastAPI)

- **Framework:** FastAPI 0.120.0
- **HTTP Server:** Uvicorn[standard] 0.38.0 with WebSocket
- **Language:** Python 3.12+ (strict type checking)
- **Data Validation:** Pydantic 2.12.3 + pydantic-settings 2.11.0

**Browser Automation:**
- Browser-Use 0.9.0 (LLM-powered automation framework)
- Playwright 1.55.0 (browser control)
- Humanizer: Custom mouse/typing pattern generation
- Computer Vision: Element detection via LLM vision

**AI/LLM Integration:**
- OpenAI 1.109.1 (GPT-4, GPT-3.5-turbo)
- Anthropic 0.71.0 (Claude models)
- Google GenAI (Gemini models)
- Groq API integration
- Ollama (local model support)
- Langchain: langchain-core, langchain-openai, langchain-anthropic
- MCP Support 1.19.0 (Model Context Protocol)

**Additional Libraries:**
- Redis 5.3.1 (hiredis) async caching
- HTTP Clients: httpx 0.28.1, aiohttp 3.12.15, requests 2.32.5
- Async Utilities: asyncio-throttle 1.0.2, tenacity 8.5.0
- File Processing: aiofiles 25.1.0, ReportLab 4.4.4 (PDF), Pillow 12.0.0 (images)
- Web Parsing: BeautifulSoup4 4.14.2
- Logging: Structlog 23.3.0 (JSON structured logging)
- JSON: orjson 3.11.3 (fast serialization)
- System Monitoring: psutil 7.1.1

### Desktop Application (Tauri)

- **Framework:** Tauri 1.x (Rust-based)
- **UI Technology:** WebView2 (embedded Chromium)
- **Runtime Language:** Rust (async, tokio)
- **Build Tool:** NSIS/MSI installer generation
- **Code Signing:** Cryptographic update verification
- **Python Bundling:** PyInstaller embedded runtime

### Build & Development Tools

- Bundler: No bundling (files served as-is)
- Transpiler: Babel 7.23.0
- Linting: ESLint 8.50.0 (2025 strict config)
- Formatter: Prettier 3.6.2
- Type Checking: Pyright (Python, strict mode)
- Process Manager: PM2 6.0.5
- Environment: cross-env 10.1.0, dotenv 16.4.5
- OpenAPI Generation: @openapitools/openapi-generator-cli 2.25.0

### Testing Framework

- **JavaScript:** Jest 29.7.0 (JSDOM, Supertest 7.1.4, jest-junit 16.0.0, Istanbul coverage)
- **Python:** pytest 7.4.0 (pytest-asyncio 0.21.0, pytest-cov, factories/fixtures/mocks)
- **E2E:** Playwright 1.40.0
- **Load Testing:** Artillery 2.0.0

### External Service Integrations

- Anti-Detect Providers: AdsPower, MoreLogin, GoLogin APIs
- CAPTCHA: 2Captcha (@2captcha/captcha-solver 1.3.0)
- SMS: FiveSim (node-five-sim)
- OAuth: Google Auth (google-auth-library 10.1.0)
- File Ops: Archiver 7.0.1, adm-zip 0.5.16

---

## Key Features

### 1. Workflow Engine
- Visual workflow builder with node-based composition
- AI-powered node creation with natural language prompts
- Sequential and parallel execution modes
- Real-time progress monitoring with detailed logs
- State management and recovery mechanisms
- Execution history with full state tracking
- Branching and error handling logic

### 2. Browser Profile Management
- Create realistic browser profiles (AI-powered with LLM-generated data)
- Multiple creation modes: fast, AI-powered, custom
- JSON Resume format support for realistic personas
- Integration with anti-detect providers (AdsPower, MoreLogin, GoLogin)
- Profile grouping for organizational purposes
- Custom fingerprint configuration
- MCP (Model Context Protocol) for extended AI interactions

### 3. Automation & Browser Control
- Browser-Use framework for intelligent automation
- Computer vision-based element detection
- Form filling, clicking, typing, scrolling
- Screenshot capture and conversation history
- Real-time browser state monitoring
- Error recovery and retry logic
- Multi-browser orchestration support

### 4. Advanced Humanization
- Mouse movement pattern generation (ghostCursor)
- Typing speed and pattern mimicking
- Behavioral randomization
- Device fingerprint spoofing
- Anti-bot detection evasion
- Real-time behavior customization

### 5. Multi-Provider AI Integration
- Seamless switching between AI providers (OpenAI, Claude, Google, Groq, Ollama)
- Dynamic provider selection per workflow
- Model chaining and prompt composition
- LangChain integration for complex prompts
- Context preservation across execution steps
- MCP (Model Context Protocol) support for custom AI capabilities

### 6. Job Scheduling & Queue Management
- Time-based workflow triggers
- Recurring schedule support (daily, weekly, monthly, custom)
- Timezone-aware scheduling
- Multi-profile batch execution
- BullMQ-backed persistent job queue
- Redis-based job state tracking
- Background polling service (60-second intervals)

### 7. Execution Monitoring & History
- Real-time execution state tracking
- Step-by-step progress monitoring
- Screenshot and conversation storage per execution
- Performance metrics and timing analysis
- Complete execution history with filtering/search
- Individual profile status within workflow
- Error logs and debugging information

### 8. User Management & Authentication
- Nonce-based authentication (2-minute expiry, one-time use)
- JWT token-based sessions (Web UI: 10-hour, Desktop: 30-day rolling)
- Role-based access control (Master User, User Admin, Standard User)
- Multi-factor token refresh mechanism
- Password reset with email verification
- Token revocation and cleanup
- Per-user token limits (max 5 concurrent)

### 9. CAPTCHA & Challenge Resolution
- 2Captcha integration for CAPTCHA solving
- SMS verification via FiveSim
- Automated challenge response
- Fallback mechanisms for failed resolutions

### 10. Multi-Language & Internationalization
- Multiple language support
- LocalStorage-based language preferences
- Locale-aware date and time handling
- Timezone support in scheduling

### 11. File & Document Management
- Screenshot capture and storage
- Conversation transcript logging
- PDF generation (ReportLab)
- Image processing and optimization
- Hierarchical file storage organization
- Execution artifact retrieval

### 12. API Contract Validation
- OpenAPI specification compliance
- Request/response model validation
- Automatic type generation (TypeScript, Python)
- Schema-based validation with AJV (JavaScript), Pydantic (Python)

### 13. Cross-Platform Deployment
- Web platform at http://localhost:3000
- Tauri desktop application with native integration
- Browser extension support (workflow-use module)
- Hybrid mode supporting both web and desktop workflows

### 14. Admin Controls
- System configuration management
- User administration
- Workflow templates
- Action library management
- System health monitoring
- License management

### 15. Logging & Diagnostics
- Client-side file logging (IndexedDB + download)
- Server-side structured logging (Winston)
- Python service JSON logging (Structlog)
- Real-time log viewing/export
- Performance monitoring (psutil)
- Error tracking and analysis

---

## Project Structure

```
2js/
├── ExpressAPI/                    (Node.js Backend)
│   ├── routes/ (23 files)
│   ├── services/ (22+ modules)
│   ├── models/
│   ├── middleware/
│   ├── enums/ (StatusEnums - CRITICAL)
│   ├── config/
│   ├── db/ (LowDB layer)
│   ├── tests/
│   └── logs/
│
├── ExpressUI/                     (Vanilla JS Frontend)
│   ├── src/
│   │   ├── actions/
│   │   ├── auth/
│   │   ├── profiles/
│   │   ├── workflow/ & workflows/
│   │   ├── scheduling/
│   │   ├── admin/
│   │   ├── models/ (shared)
│   │   ├── enums/ (StatusEnums)
│   │   ├── shared/ (13 utilities)
│   │   └── logs/
│
├── TauriDesktop/                  (Desktop App)
│   └── AutoFlow/
│       ├── python-local-api/ (7,862 Python files)
│       │   ├── routers/
│       │   ├── services/
│       │   ├── models/ (20+ Pydantic)
│       │   ├── core/ (Browser-use)
│       │   ├── cache/ (Redis)
│       │   ├── middleware/
│       │   ├── tests/
│       │   └── utils/
│       ├── src-tauri/ (Rust source)
│       └── humanizer/
│
├── workflow-use/                  (Browser Extension)
│   ├── extension/
│   ├── ui/ (React-based)
│   └── workflows/ (Python backend)
│
├── docs/ (47+ Markdown guides)
├── api-contracts/ (OpenAPI YAML)
├── db/ (LowDB databases)
└── scripts/ (Setup/utilities)
```

---

## Integration Flows

### Workflow Execution

```
User clicks "Execute" in ExpressUI
  -> ExecutionRequest created
  -> POST /api/workflows/execute-workflow
  -> ExpressAPI WorkflowExecutionService
  -> HTTP POST to Python /execute-workflow
  -> Playwright + Browser-Use initialization
  -> Returns ExecutionResponse
  -> ExpressUI polls /workflow-state every 5s
  -> WorkflowPollingResponse updates in real-time
```

### Profile Creation

```
User creates AI-powered profile
  -> ProfileRequest with AI provider
  -> POST /api/profiles/create-ai-profile
  -> ExpressAPI calls Python /create-profile
  -> LLM generates realistic persona (name, email, location)
  -> Anti-detect provider integration
  -> ProfileResponse returned
```

### Scheduling

```
User sets workflow schedule
  -> ScheduleRequest stored in LowDB
  -> BullMQ job scheduled
  -> At trigger time, Python API polled
  -> Workflow auto-executed
  -> Result persisted and notified
```

---

## Development

### Commands

```bash
# Install & Development
npm install
npm start              # Start API + UI (production mode)
npm run dev            # Development mode
npm run dev:test       # Test mode

# Testing
npm test              # All tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
npm run test:contracts # API contract tests

# Desktop (Tauri)
npm run tauri:dev     # Development mode
npm run tauri:build   # Production build

# Python
pytest tests/         # Run Python tests

# OpenAPI & Type Generation
npm run generate:types       # Generate TypeScript
npm run generate:python      # Generate Python models
npm run generate:openapi     # OpenAPI spec
npm run watch:openapi        # Watch OpenAPI changes

# Debugging & Logging
npm run logs:view     # View logs (tail -f)
npm run type-check:python
```

### Configuration

- Environment: `.env` and `.env.run` files
- JWT: 10-hour web, 30-day desktop rolling expiration
- API: Express on port 3000, FastAPI on 8000
- Database: LowDB in `/db/` directory
- Redis: `redis://localhost:6379`
- Logging: Winston (ExpressAPI), Structlog (Python), custom FileLogger (ExpressUI)

---

## Testing

- **Unit Tests:** Service functionality, model validation
- **Integration Tests:** API endpoint + service interaction
- **E2E Tests:** Complete workflow execution (UI -> API -> Python)
- **Contract Tests:** OpenAPI specification compliance
- **Load Testing:** Artillery for performance testing

---

## Documentation

47+ comprehensive guides covering architecture overviews, authentication, workflow system, testing, humanizer/browser-use features, deployment, security integration, and code quality (SOLID principles).

---

## Notable Characteristics

### Strengths
- Type-safe across services (strict typing in JavaScript and Python with Pyright)
- Comprehensive testing (7,862 Python files include extensive test infrastructure)
- Production-ready (Tauri desktop with cryptographic updates, process management)
- Multi-AI support (seamless integration with OpenAI, Claude, Google, Groq, Ollama)
- Anti-bot evasion (sophisticated humanization + anti-detect provider integration)
- Excellent documentation (47+ guides)
- Service independence (loosely coupled, independently deployable)
- Strict architecture (clear separation of concerns, SOLID principles)

### Technical Considerations
- LowDB (JSON files) not suitable for massive scale
- StatusEnums must be manually kept in sync across 3 services
- No Redis clustering/high availability (suitable for current scale)
- Desktop app startup overhead due to PyInstaller
- Inherent unreliability of browser automation (network, crashes)
- 82,646 total files, multiple languages, steep learning curve

---

## Summary

Elyt is a sophisticated AI-powered browser automation platform demonstrating enterprise-grade architecture with three independent, type-safe services. It combines cutting-edge automation technology (Browser-Use + Playwright + Humanization), advanced multi-provider AI integration, and production-ready infrastructure with Tauri desktop, cryptographic signing, and comprehensive monitoring. Ideal for large-scale intelligent web automation with anti-bot evasion, multi-profile orchestration, and real-time monitoring capabilities.
