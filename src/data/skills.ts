export interface Skill {
  id: string;
  name: string;
  icon?: string;
}

export interface SkillSubsection {
  title: string;
  skills: Skill[];
}

export interface SkillCategory {
  id: string;
  title: string;
  previewIcons: { src: string; alt: string }[];
  subsections: SkillSubsection[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    previewIcons: [
      { src: '/logos/csharp.svg', alt: 'C#' },
      { src: '/logos/typescript.svg', alt: 'TypeScript' },
    ],
    subsections: [
      {
        title: 'Expert',
        skills: [
          { id: 'csharp', name: 'C#', icon: '/logos/csharp.svg' },
          { id: 'javascript', name: 'JavaScript (ES2025)', icon: '/logos/javascript.svg' },
          { id: 'typescript', name: 'TypeScript', icon: '/logos/typescript.svg' },
          { id: 'plsql', name: 'PL/SQL', icon: '/logos/oracle.svg' },
          { id: 'sql', name: 'SQL', icon: '/logos/postgresql.svg' },
        ],
      },
      {
        title: 'Proficient',
        skills: [
          { id: 'python', name: 'Python 3.12+', icon: '/logos/python.svg' },
          { id: 'c', name: 'C', icon: '/logos/c.svg' },
        ],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    previewIcons: [
      { src: '/logos/dotnet.svg', alt: '.NET' },
      { src: '/logos/postgresql.svg', alt: 'PostgreSQL' },
    ],
    subsections: [
      {
        title: '.NET Ecosystem',
        skills: [
          { id: 'dotnet8', name: '.NET 8', icon: '/logos/dotnet.svg' },
          { id: 'dotnet48', name: '.NET Framework 4.8', icon: '/logos/dotnet.svg' },
          { id: 'aspnet-core', name: 'ASP.NET Core', icon: '/logos/dotnet.svg' },
          { id: 'aspnet-mvc', name: 'ASP.NET MVC 5', icon: '/logos/dotnet.svg' },
          { id: 'aspnet-webapi', name: 'ASP.NET Web API', icon: '/logos/dotnet.svg' },
          { id: 'ef-core', name: 'Entity Framework Core 8', icon: '/logos/dotnet.svg' },
          { id: 'nhibernate', name: 'NHibernate' },
          { id: 'fluent-nhibernate', name: 'FluentNHibernate' },
        ],
      },
      {
        title: 'Node.js',
        skills: [
          { id: 'express', name: 'Express.js 4.x', icon: '/logos/express.svg' },
          { id: 'fastify', name: 'Fastify', icon: '/logos/fastify.svg' },
        ],
      },
      {
        title: 'Python',
        skills: [
          { id: 'fastapi', name: 'FastAPI', icon: '/logos/fastapi.svg' },
          { id: 'uvicorn', name: 'Uvicorn', icon: '/logos/python.svg' },
        ],
      },
      {
        title: 'API Standards',
        skills: [
          { id: 'rest', name: 'REST' },
          { id: 'grpc', name: 'gRPC', icon: '/logos/grpc.svg' },
          { id: 'soap', name: 'SOAP' },
          { id: 'graphql', name: 'GraphQL', icon: '/logos/graphql.svg' },
        ],
      },
      {
        title: 'Databases',
        skills: [
          { id: 'oracle', name: 'Oracle 11g+', icon: '/logos/oracle.svg' },
          { id: 'postgresql', name: 'PostgreSQL', icon: '/logos/postgresql.svg' },
          { id: 'mysql', name: 'MySQL', icon: '/logos/mysql.svg' },
          { id: 'mssql', name: 'MsSql', icon: '/logos/mssql.svg' },
          { id: 'neon', name: 'Neon.tech', icon: '/logos/neon.svg' },
          { id: 'lowdb', name: 'LowDB' },
          { id: 'json-storage', name: 'JSON-based storage' },
        ],
      },
      {
        title: 'ORM & Data Access',
        skills: [
          { id: 'odp-net', name: 'ODP.NET', icon: '/logos/oracle.svg' },
          { id: 'dapper', name: 'Dapper', icon: '/logos/dotnet.svg' },
        ],
      },
      {
        title: 'Database Tools',
        skills: [
          { id: 'dbeaver', name: 'DBeaver', icon: '/logos/dbeaver.svg' },
          { id: 'ssms', name: 'SQL Server Management Studio', icon: '/logos/mssql.svg' },
          { id: 'pgadmin', name: 'pgAdmin', icon: '/logos/postgresql.svg' },
          { id: 'mysql-workbench', name: 'MySQL Workbench', icon: '/logos/mysql.svg' },
          { id: 'plsql-dev', name: 'PL/SQL Developer', icon: '/logos/oracle.svg' },
        ],
      },
      {
        title: 'Caching & Queuing',
        skills: [
          { id: 'redis', name: 'Redis', icon: '/logos/redis.svg' },
          { id: 'system-caching', name: 'System.Runtime.Caching', icon: '/logos/dotnet.svg' },
          { id: 'bullmq', name: 'BullMQ', icon: '/logos/nodejs.svg' },
          { id: 'job-scheduling', name: 'Job Scheduling' },
        ],
      },
      {
        title: 'Authentication & Security',
        skills: [
          { id: 'jwt', name: 'JWT', icon: '/logos/jwt.svg' },
          { id: 'oauth2', name: 'OAuth 2.0' },
          { id: 'sso', name: 'SSO' },
          { id: 'rbac', name: 'RBAC' },
          { id: 'mfa', name: 'Multi-factor Authentication' },
          { id: 'nonce-auth', name: 'Nonce-based Authentication' },
          { id: 'google-auth', name: 'Google Auth Library' },
          { id: 'b2b-sso', name: 'Custom Enterprise B2B SSO' },
          { id: 'better-auth', name: 'Better auth' },
        ],
      },
      {
        title: 'API Development',
        skills: [
          { id: 'swagger', name: 'Swagger/OpenAPI', icon: '/logos/swagger.svg' },
          { id: 'nswag', name: 'NSwag', icon: '/logos/swagger.svg' },
          { id: 'postman', name: 'Postman', icon: '/logos/postman.svg' },
          { id: 'api-versioning', name: 'API Versioning' },
          { id: 'contract-first', name: 'Contract-first development' },
          { id: 'ajv', name: 'AJV', icon: '/logos/nodejs.svg' },
          { id: 'pydantic', name: 'Pydantic', icon: '/logos/pydantic.svg' },
        ],
      },
      {
        title: 'HTTP Clients',
        skills: [
          { id: 'axios', name: 'Axios', icon: '/logos/axios.svg' },
          { id: 'restsharp', name: 'RestSharp', icon: '/logos/dotnet.svg' },
          { id: 'httpx', name: 'httpx', icon: '/logos/python.svg' },
          { id: 'aiohttp', name: 'aiohttp', icon: '/logos/aiohttp.svg' },
          { id: 'requests', name: 'requests', icon: '/logos/python.svg' },
          { id: 'fetch-api', name: 'Fetch API', icon: '/logos/javascript.svg' },
        ],
      },
      {
        title: 'Logging',
        skills: [
          { id: 'winston', name: 'Winston', icon: '/logos/nodejs.svg' },
          { id: 'log4net', name: 'log4net', icon: '/logos/dotnet.svg' },
        ],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    previewIcons: [
      { src: '/logos/angular.svg', alt: 'Angular' },
      { src: '/logos/tailwindcss.svg', alt: 'Tailwind CSS' },
    ],
    subsections: [
      {
        title: 'Frameworks',
        skills: [
          { id: 'angular', name: 'Angular 17-18', icon: '/logos/angular.svg' },
          { id: 'astro', name: 'Astro', icon: '/logos/astro.svg' },
          { id: 'react', name: 'React (basic)', icon: '/logos/react.svg' },
          { id: 'blazor', name: 'Blazor (basic)', icon: '/logos/blazor.svg' },
          { id: 'vanilla-js', name: 'Vanilla JS (ES2025)', icon: '/logos/javascript.svg' },
          { id: 'jquery', name: 'jQuery 3.5+', icon: '/logos/jquery.svg' },
        ],
      },
      {
        title: 'State Management',
        skills: [
          { id: 'rxjs', name: 'RxJS', icon: '/logos/rxjs.svg' },
          { id: 'angular-signals', name: 'Angular Signals', icon: '/logos/angular.svg' },
        ],
      },
      {
        title: 'UI Components',
        skills: [
          { id: 'primeng', name: 'PrimeNG', icon: '/logos/angular.svg' },
          { id: 'syncfusion', name: 'SyncFusion' },
          { id: 'dhtmlx', name: 'DHTMLX' },
        ],
      },
      {
        title: 'Styling',
        skills: [
          { id: 'bootstrap', name: 'Bootstrap 4-5', icon: '/logos/bootstrap.svg' },
          { id: 'tailwind', name: 'Tailwind CSS', icon: '/logos/tailwindcss.svg' },
          { id: 'scss', name: 'SCSS/SASS', icon: '/logos/sass.svg' },
        ],
      },
      {
        title: 'Templating',
        skills: [
          { id: 'razor', name: 'Razor View Engine', icon: '/logos/dotnet.svg' },
          { id: 'handlebars', name: 'HandlebarsJS', icon: '/logos/handlebars.svg' },
          { id: 'ejs', name: 'EJS', icon: '/logos/nodejs.svg' },
        ],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    previewIcons: [
      { src: '/logos/docker.svg', alt: 'Docker' },
      { src: '/logos/git.svg', alt: 'Git' },
    ],
    subsections: [
      {
        title: 'Version Control',
        skills: [
          { id: 'git', name: 'Git', icon: '/logos/git.svg' },
          { id: 'github', name: 'GitHub', icon: '/logos/github.svg' },
          { id: 'github-actions', name: 'GitHub Actions', icon: '/logos/github.svg' },
          { id: 'gitlab', name: 'GitLab', icon: '/logos/gitlab.svg' },
          { id: 'gitea', name: 'Gitea', icon: '/logos/gitea.svg' },
        ],
      },
      {
        title: 'Project Management',
        skills: [
          { id: 'azure-devops', name: 'Azure DevOps', icon: '/logos/azuredevops.svg' },
          { id: 'jira', name: 'Jira', icon: '/logos/jira.svg' },
        ],
      },
      {
        title: 'Containerization & Cloud',
        skills: [
          { id: 'docker', name: 'Docker', icon: '/logos/docker.svg' },
          { id: 'azure', name: 'Microsoft Azure', icon: '/logos/azure.svg' },
          { id: 'vercel', name: 'Vercel', icon: '/logos/vercel.svg' },
          { id: 'linux', name: 'Linux', icon: '/logos/linux.svg' },
        ],
      },
      {
        title: 'Development Tools',
        skills: [
          { id: 'vscode', name: 'VS Code', icon: '/logos/vscode.svg' },
          { id: 'visualstudio', name: 'Visual Studio', icon: '/logos/visualstudio.svg' },
          { id: 'webstorm', name: 'WebStorm', icon: '/logos/webstorm.svg' },
          { id: 'vim', name: 'Vim', icon: '/logos/vim.svg' },
          { id: 'dbeaver', name: 'DBeaver', icon: '/logos/dbeaver.svg' },
          { id: 'plsql-dev', name: 'PL/SQL Developer', icon: '/logos/oracle.svg' },
        ],
      },
      {
        title: 'Testing',
        skills: [
          { id: 'tdd', name: 'TDD' },
          { id: 'jest', name: 'Jest', icon: '/logos/jest.svg' },
          { id: 'xunit', name: 'xUnit', icon: '/logos/dotnet.svg' },
          { id: 'pytest', name: 'pytest', icon: '/logos/pytest.svg' },
          { id: 'moq', name: 'Moq', icon: '/logos/dotnet.svg' },
          { id: 'fluent-assertions', name: 'FluentAssertions', icon: '/logos/dotnet.svg' },
          { id: 'autofixture', name: 'AutoFixture', icon: '/logos/dotnet.svg' },
        ],
      },
      {
        title: 'Validation & Mapping',
        skills: [
          { id: 'ajv-validation', name: 'AJV', icon: '/logos/nodejs.svg' },
          { id: 'ajv-formats', name: 'ajv-formats', icon: '/logos/nodejs.svg' },
          { id: 'pydantic-validation', name: 'Pydantic', icon: '/logos/pydantic.svg' },
          { id: 'jquery-validation', name: 'jQuery.Validation', icon: '/logos/jquery.svg' },
          { id: 'mapster', name: 'Mapster', icon: '/logos/dotnet.svg' },
          { id: 'automapper', name: 'AutoMapper', icon: '/logos/dotnet.svg' },
        ],
      },
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    previewIcons: [
      { src: '/logos/openai.svg', alt: 'OpenAI' },
      { src: '/logos/playwright.svg', alt: 'Playwright' },
    ],
    subsections: [
      {
        title: 'LLM Providers',
        skills: [
          { id: 'openai', name: 'OpenAI API', icon: '/logos/openai.svg' },
          { id: 'anthropic', name: 'Anthropic API', icon: '/logos/anthropic.svg' },
          { id: 'google-genai', name: 'Google Gemini API', icon: '/logos/gemini.svg' },
        ],
      },
      {
        title: 'AI Frameworks',
        skills: [
          { id: 'langchain', name: 'Langchain', icon: '/logos/langchain.svg' },
          { id: 'mcp', name: 'MCP (Model Context Protocol)', icon: '/logos/anthropic.svg' },
          { id: 'prompt-engineering', name: 'Prompt Engineering', icon: '/logos/openai.svg' },
          { id: 'scrollhelp', name: 'ScrollHelp Documentation AI' },
        ],
      },
      {
        title: 'Browser Automation',
        skills: [
          { id: 'playwright', name: 'Playwright', icon: '/logos/playwright.svg' },
          { id: 'puppeteer', name: 'Puppeteer', icon: '/logos/puppeteer.svg' },
          { id: 'selenium', name: 'Selenium', icon: '/logos/selenium.svg' },
        ],
      },
      {
        title: 'AI Automation Frameworks',
        skills: [
          { id: 'browser-use', name: 'Browser-use', icon: '/logos/python.svg' },
          { id: 'skyvern', name: 'Skyvern', icon: '/logos/python.svg' },
          { id: 'stagehand', name: 'Stagehand', icon: '/logos/typescript.svg' },
          { id: 'la-vague', name: 'La vague', icon: '/logos/python.svg' },
          { id: 'magnitude', name: 'Magnitude', icon: '/logos/python.svg' },
          { id: 'browsergym', name: 'BrowserGym', icon: '/logos/python.svg' },
        ],
      },
      {
        title: 'Web Scraping',
        skills: [
          { id: 'beautifulsoup', name: 'BeautifulSoup4', icon: '/logos/python.svg' },
          { id: 'apify', name: 'Apify' },
          { id: 'firecrawl', name: 'FireCrawl' },
          { id: 'crawlee', name: 'Crawlee', icon: '/logos/nodejs.svg' },
        ],
      },
      {
        title: 'Browser Infrastructure',
        skills: [
          { id: 'browserbase', name: 'BrowserBase' },
          { id: 'steel-browser', name: 'Steel browser' },
        ],
      },
      {
        title: 'Anti-Detect',
        skills: [
          { id: 'adspower', name: 'AdsPower' },
          { id: 'morelogin', name: 'MoreLogin' },
          { id: 'gologin', name: 'GoLogin' },
          { id: 'camoufox', name: 'Camoufox', icon: '/logos/python.svg' },
          { id: 'undetected-chromedriver', name: 'Undetected Chromedriver', icon: '/logos/python.svg' },
          { id: 'selenium-stealth', name: 'selenium stealth', icon: '/logos/selenium.svg' },
          { id: 'playwright-stealth', name: 'playwright stealth', icon: '/logos/playwright.svg' },
          { id: 'puppeteer-stealth', name: 'Puppeteer stealth', icon: '/logos/puppeteer.svg' },
        ],
      },
      {
        title: 'CAPTCHA',
        skills: [
          { id: '2captcha', name: '2Captcha' },
        ],
      },
      {
        title: 'Workflow Automation',
        skills: [
          { id: 'n8n', name: 'n8n', icon: '/logos/n8n.svg' },
          { id: 'activepieces', name: 'Activepieces' },
          { id: 'sim-ai', name: 'Sim.ai' },
          { id: 'autoflow', name: 'AutoFlow (custom)' },
          { id: 'bullmq-workflow', name: 'BullMQ', icon: '/logos/nodejs.svg' },
          { id: 'custom-schedulers', name: 'Custom job schedulers' },
        ],
      },
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized',
    previewIcons: [
      { src: '/logos/tauri.svg', alt: 'Tauri' },
      { src: '/logos/unity.svg', alt: 'Unity' },
    ],
    subsections: [
      {
        title: 'Architecture',
        skills: [
          { id: 'solid', name: 'SOLID principles' },
          { id: 'system-design', name: 'System Design' },
          { id: 'repository-pattern', name: 'Repository pattern' },
          { id: 'service-layer', name: 'Service layer architecture' },
        ],
      },
      {
        title: 'Desktop Development',
        skills: [
          { id: 'wpf', name: 'WPF (.NET)', icon: '/logos/dotnet.svg' },
          { id: 'tauri', name: 'Tauri (Rust + WebView2)', icon: '/logos/tauri.svg' },
          { id: 'pyinstaller', name: 'PyInstaller', icon: '/logos/python.svg' },
          { id: 'nsis', name: 'NSIS/MSI installers' },
        ],
      },
      {
        title: 'Hardware Integration',
        skills: [
          { id: 'thermal-printers', name: 'Thermal printers' },
          { id: 'barcode-scanners', name: 'Barcode scanners' },
          { id: 'card-readers', name: 'Card readers/encoders' },
          { id: 'access-gates', name: 'Access gates' },
        ],
      },
      {
        title: 'PDF Processing',
        skills: [
          { id: 'rotativa', name: 'Rotativa', icon: '/logos/dotnet.svg' },
          { id: 'reportlab', name: 'ReportLab', icon: '/logos/python.svg' },
          { id: 'pdfsharp', name: 'PDFSharp', icon: '/logos/dotnet.svg' },
          { id: 'ng2-pdfjs', name: 'ng2-pdfjs-viewer', icon: '/logos/angular.svg' },
        ],
      },
      {
        title: 'Excel & CSV',
        skills: [
          { id: 'epplusfree', name: 'EPPlusFree', icon: '/logos/dotnet.svg' },
          { id: 'exceljs', name: 'ExcelJS', icon: '/logos/nodejs.svg' },
          { id: 'xlsx', name: 'XLSX', icon: '/logos/nodejs.svg' },
          { id: 'exceldatareader', name: 'ExcelDataReader', icon: '/logos/dotnet.svg' },
          { id: 'csvhelper', name: 'CsvHelper', icon: '/logos/dotnet.svg' },
        ],
      },
      {
        title: 'Compression',
        skills: [
          { id: 'jszip', name: 'JSZip', icon: '/logos/javascript.svg' },
          { id: 'archiver', name: 'Archiver', icon: '/logos/nodejs.svg' },
          { id: 'adm-zip', name: 'adm-zip', icon: '/logos/nodejs.svg' },
          { id: 'ionic-zip', name: 'Ionic.Zip', icon: '/logos/dotnet.svg' },
        ],
      },
      {
        title: 'Barcodes & QR',
        skills: [
          { id: 'barcodelib', name: 'BarcodeLib', icon: '/logos/dotnet.svg' },
          { id: 'qrcoder', name: 'QRCoder', icon: '/logos/dotnet.svg' },
        ],
      },
      {
        title: 'Image Processing',
        skills: [
          { id: 'pillow', name: 'Pillow', icon: '/logos/python.svg' },
          { id: 'system-drawing', name: 'System.Drawing.Common', icon: '/logos/dotnet.svg' },
        ],
      },
      {
        title: 'External Services',
        skills: [
          { id: 'nodemailer', name: 'Nodemailer', icon: '/logos/nodejs.svg' },
          { id: 'resend', name: 'Resend', icon: '/logos/resend.svg' },
          { id: 'mailgun', name: 'Mailgun', icon: '/logos/mailgun.svg' },
          { id: 'fivesim', name: 'FiveSim' },
          { id: 'sms-providers', name: 'SMS providers' },
        ],
      },
      {
        title: 'Domain Experience',
        skills: [
          { id: 'multi-tenant', name: 'Multi-tenant B2B systems' },
          { id: 'pos', name: 'POS systems' },
          { id: 'reservation', name: 'Enterprise reservation & ticketing' },
          { id: 'accreditation', name: 'Accreditation management' },
          { id: 'anti-bot', name: 'Anti-bot detection' },
          { id: 'fingerprinting', name: 'Browser fingerprinting' },
          { id: 'computer-use', name: 'Computer-use' },
          { id: 'browser-use-exp', name: 'Browser-use' },
        ],
      },
      {
        title: 'Game Development',
        skills: [
          { id: 'unity', name: 'Unity', icon: '/logos/unity.svg' },
          { id: 'unity-ui', name: 'Unity UI', icon: '/logos/unity.svg' },
          { id: 'threejs', name: 'Three.js', icon: '/logos/threejs.svg' },
        ],
      },
    ],
  },
];

// Helper to get total skill count for a category
export function getSkillCount(category: SkillCategory): number {
  return category.subsections.reduce((total, sub) => total + sub.skills.length, 0);
}

export function getCategoryById(id: string): SkillCategory | undefined {
  return SKILL_CATEGORIES.find((cat) => cat.id === id);
}

export function getAllCategories(): SkillCategory[] {
  return SKILL_CATEGORIES;
}
