# Job Board Monorepo

## `.env`
set the `.env` file in `packages/database`
```
DATABASE_URL="postgresql://admin:password@localhost:5432/job_board"
```

Up the postgres docker container for local development
```sh
docker compose up -d
```

### Dev

To develop all apps and packages, run the following command:

```
bun run dev
```

### Build

To build all apps and packages, run the following command:

```
bun run build
```
