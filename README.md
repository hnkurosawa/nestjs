# nestjs

## check
* ✅ pnpm
* ✅ nestjs
    * install
    * start
* ⬜️ prisma
    * ...
* ⬜️ husky
* ⬜️ commitlint


### Command

```shell
# package.json 作成
% pnpm init

# nestjs
# @link https://docs.nestjs.com/first-steps
% pnpm install @nestjs/cli

# project setup
% pnpm nest new {project-name}

⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use?
npm
yarn
pnpm <- selected

? Which package manager would you ❤️  to use? pnpm
CREATE server/.eslintrc.js (663 bytes)
CREATE server/.prettierrc (51 bytes)
CREATE server/README.md (3347 bytes)
CREATE server/nest-cli.json (171 bytes)
CREATE server/package.json (1937 bytes)
CREATE server/tsconfig.build.json (97 bytes)
CREATE server/tsconfig.json (546 bytes)
CREATE server/src/app.controller.spec.ts (617 bytes)
CREATE server/src/app.controller.ts (274 bytes)
CREATE server/src/app.module.ts (249 bytes)
CREATE server/src/app.service.ts (142 bytes)
CREATE server/src/main.ts (208 bytes)
CREATE server/test/app.e2e-spec.ts (630 bytes)
CREATE server/test/jest-e2e.json (183 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project server
👉  Get started with the following commands:

$ cd {project-name}
$ pnpm run start
                                         
                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.
                                         
                                         
               🍷  Donate: https://opencollective.com/nest

################################################################
# installation success ✨

% cd {project-name}
% pnpm run start

> server@0.0.1 start /Users/User/.../nestjs/{project-name}
> nest start

[Nest] 49608  - 2023/03/08 13:54:15     LOG [NestFactory] Starting Nest application...
[Nest] 49608  - 2023/03/08 13:54:15     LOG [InstanceLoader] AppModule dependencies initialized +6ms
[Nest] 49608  - 2023/03/08 13:54:15     LOG [RoutesResolver] AppController {/}: +2ms
[Nest] 49608  - 2023/03/08 13:54:15     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 49608  - 2023/03/08 13:54:15     LOG [NestApplication] Nest application successfully started +1ms

################################################################
# nestjs start success ✨

%

```