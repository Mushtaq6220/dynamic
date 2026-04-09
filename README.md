# Dynamic Render Deployment

This repo is set up to deploy on Render as two Node services:

- `dynamic-frontend`: Next.js app from `frontend`
- `dynamic-backend`: Express API from `backend`

## Before You Deploy

Set these backend environment variables in Render:

- `MONGO_URI`
- `AVIATIONSTACK_API_KEY`
- `ADMIN_KEY`

The frontend `NEXT_PUBLIC_API_ORIGIN` value is wired automatically by `render.yaml`.

## Deploy Steps

1. Push this repository to GitHub.
2. In Render, create a new Blueprint instance from the repo.
3. Render will detect `render.yaml` and create both services.
4. Add the required secret environment variables when Render prompts for them.
5. Deploy the blueprint.

## Local Environment Files

Use these templates if you want local `.env` files without committing secrets:

- `frontend/.env.example`
- `backend/.env.example`

## Notes

- The frontend accepts either `NEXT_PUBLIC_API_ORIGIN` like `https://your-api.onrender.com` or `NEXT_PUBLIC_API_URL` with `/api` included.
- The backend currently allows all origins, which will work on Render without extra changes.
