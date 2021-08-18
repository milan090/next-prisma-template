# Nextjs Prisma Template

This template was made to save time since I often used the same stack and tools

## Features
- Nextjs
- Prisma (Postgres)
- Tailwind
- Next-Auth (google oauth)
- Axios (react query)
- React Hot Toast
- Next connect (api handler)
- Eslint and prettier

## Setup
- `yarn install`
- Start postgres `docker-compose -f ./docker-compose.test.yml up -d`
- Apply migrations`yarn prisma migrate dev`
- Duplicate .env.example to .env and edit contents accordingly.
- Setup and Google credentials https://console.cloud.google.com/apis/credentials and edit in .env
- `yarn dev`