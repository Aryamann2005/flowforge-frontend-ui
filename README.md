# FlowForge Dashboard

Build a modern production-quality frontend dashboard for a developer-focused job orchestration platform called "FlowForge".

IMPORTANT:

- Frontend only.

- Do NOT create a backend.

- Do NOT create a database.

- Do NOT use Supabase.

- Do NOT replace or modify the backend architecture.

- The backend already exists as a Node.js + Express API using BullMQ and Redis.

- Build the UI so it can later connect to REST APIs.

TECH STACK:

- React

- Vite

- JavaScript

- React Router

- CSS

- Use clean reusable React components.

- Do not use Tailwind unless absolutely necessary; prefer normal CSS/CSS modules.

PRODUCT:

FlowForge is a job orchestration platform where users create, monitor and manage asynchronous background jobs.

DESIGN:

Create a premium developer-tool SaaS interface inspired by modern products such as Linear, Vercel and GitHub.

Dark-first design with a clean professional appearance.

Avoid excessive gradients, glassmorphism and flashy animations.

The UI should look like a real product that could be shown in a software engineering interview.

LAYOUT:

1. SIDEBAR

- FlowForge logo/name

- Dashboard

- Jobs

- Workers

- Queues

- Analytics

- Settings

Bottom of sidebar:

- User profile

- Connection status indicator

2. TOP NAVBAR

- Page title

- Search

- Notifications

- User avatar

3. DASHBOARD

Show summary cards:

- Total Jobs

- Active Jobs

- Waiting Jobs

- Completed Jobs

- Failed Jobs

Show a "Job Activity" section with a simple chart.

Show "Recent Jobs" table with:

- Job ID

- Job Type

- Priority

- Status

- Created At

- Actions

Status badges:

- WAITING

- ACTIVE

- COMPLETED

- FAILED

- DELAYED

4. CREATE JOB

Create a clean modal/page for creating a job.

Fields:

- Job Type dropdown

  - GENERATE_REPORT

  - SEND_EMAIL

  - PROCESS_DATA

- Priority selector from 1–10

- Create Job button

After creation, show a success notification containing the job ID.

5. JOB DETAILS

When clicking a job, show:

- Job ID

- Job type

- Priority

- Current status

- Created time

- Started time

- Completed time

- Retry attempts

- Error information if failed

Include a visual job lifecycle:

WAITING → ACTIVE → COMPLETED

or

WAITING → ACTIVE → FAILED → RETRY → ACTIVE → COMPLETED

6. JOBS PAGE

Create a full jobs management page.

Features:

- Search jobs

- Filter by status

- Filter by job type

- Sort by priority/date

- Pagination

- View job details

7. WORKERS PAGE

Show worker information:

- Worker status

- Active jobs

- Completed jobs

- Failed jobs

- Processing rate

Use realistic placeholder data for UI development only.

8. QUEUES PAGE

Show:

- Queue name

- Waiting jobs

- Active jobs

- Completed jobs

- Failed jobs

- Queue health

Main queue:

flowforge-jobs

9. ANALYTICS PAGE

Show:

- Jobs processed over time

- Success vs failure

- Average processing time

- Retry rate

- Jobs by type

10. VOICE ASSISTANT UI

Include a floating microphone button in the dashboard.

Clicking it opens a voice assistant panel called "FlowForge Assistant".

The UI should support future commands such as:

- "Create a high priority report job"

- "Show failed jobs"

- "How many jobs are currently running?"

- "Show me job 12"

For now, implement only the UI and simulated interaction.

Do NOT implement a fake backend.

Structure the component so a real voice API can be connected later.

API INTEGRATION:

Create a central API service such as:

src/services/api.js

The frontend will eventually connect to:

GET  http://localhost:5000/api/jobs

GET  http://localhost:5000/api/jobs/:id

POST http://localhost:5000/api/jobs

Do not hardcode fake API responses inside the UI.

Use a clean service layer so the API base URL can later be moved into an environment variable.

Create reusable components:

- Sidebar

- Navbar

- StatCard

- JobTable

- StatusBadge

- CreateJobModal

- JobDetails

- VoiceAssistant

- WorkerCard

- QueueCard

- AnalyticsChart

Make the application responsive for desktop, tablet and mobile.

Prioritize:

1. Professional UI

2. Clean component architecture

3. Good UX

4. Easy API integration

5. Maintainable React code

Do not over-engineer the frontend.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/12fc0399-87c1-4be7-abd5-8c33e7339845).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
