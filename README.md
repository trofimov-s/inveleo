# Inveleo

A booking service for independent professionals, built as a TypeScript fullstack learning project.

The planned product lets each professional manage a profile, services, availability, and appointments, with a personal booking page for clients. Clients will be able to book without creating an account.

## Technology

- **Frontend:** React, TypeScript, Vite, Axios.
- **Backend:** NestJS, TypeScript, Express.
- **Planned persistence:** PostgreSQL with Prisma.
- **Planned hosting:** Render for the frontend and API, Neon for PostgreSQL.

## Project structure

```text
frontend/   React application
backend/    NestJS API
```

Each application has its own `package.json` and `package-lock.json`.

## Local development

Prerequisites: Node.js 24 and npm. The local environment used during development is Node.js 24.15.0 with npm 11.12.1.

From the project root, start the backend in one terminal:

```sh
cd backend
npm ci
npm run start:dev
```

Start the frontend in another terminal:

```sh
cd frontend
npm ci
npm run dev -- --port 5173 --strictPort
```

Open <http://localhost:5173>. The API listens on <http://localhost:3000> by default.

The current frontend configuration uses `http://localhost:3000` as its API base URL, and the backend allows browser requests from `http://localhost:5173`. Keep these addresses aligned when changing the local ports. The backend port can also be set through the `PORT` environment variable.

## API

`GET /api/message` returns HTTP 200 with a JSON object:

```json
{
  "message": "Hello World!"
}
```

## Frontend build

Run `npm run build` from `frontend/` to check TypeScript and generate the production assets in `frontend/dist/`. Run `npm run preview` from the same directory to inspect the build locally.
