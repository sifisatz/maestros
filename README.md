# Maestros.fm

Find more of the events you love


## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`:  [Next.js](https://nextjs.org/) app
- `api`:  [Nest.js](https://nestjs.com/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```bash
cd maestros
npm build
```


### Start a postgresql server
```bash
cd maestros/apps/api
docker-compose up -d


```
### Migration (optional)

```bash
prisma migrate dev --name init
```
### Introspection (optional)
[Make sure your Prisma schema is in sync with your database schema. This should already be true if you are using a previous version of Prisma Migrate.](https://www.prisma.io/docs/orm/prisma-migrate/getting-started#introspect-to-create-or-update-your-prisma-schema)

### Develop

To develop all apps and packages, run the following command:

```bash
cd maestros
npm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more :

- [Passport](https://docs.nestjs.com/recipes/passport)
- [JWT-Auth](https://docs.nestjs.com/security/authentication#jwt-token)
- [Nextjs - Turbopack](https://nextjs.org/docs/architecture/turbopack)
- [Nextjs - Monorepo](https://docs.nestjs.com/cli/monorepo#monorepo-mode)

### JWT architecture documents can be found here: 
<img src="docs/auth/image.png" alt="alt text" width="200">

