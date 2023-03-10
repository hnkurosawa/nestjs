# nestjs

- [nestjs](#nestjs)
  - [check](#check)
  - [construct..](#construct)
    - [pnpm, nestjs](#pnpm-nestjs)
  - [husky, commitlint](#husky-commitlint)
    - [husky](#husky)
      - [install](#install)
      - [create a hook](#create-a-hook)
    - [c.f.](#cf)
    - [commitlint](#commitlint)
    - [husky設定](#husky設定)
  - [prisma, docker](#prisma-docker)
    - [prisma](#prisma)
    - [docker](#docker)


## check
* [x] pnpm
* [x] nestjs - install and start
* [x] pre-commit
    * [x] husky - install and test
    * [x] commitlint - install and setting
    * [x] husky - set `commitlint`
* [ ] prisma
    * ...
* [ ] docker


## construct..

### pnpm, nestjs
* https://pnpm.io/ja/motivation
* https://docs.nestjs.com/first-steps


```shell
# package.json 作成
% pnpm init

# nestjs
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

```

## husky, commitlint

### husky
https://typicode.github.io/husky/#/

#### install
```shell
# root
% pnpm add -D husky
```

> To automatically have Git hooks enabled after install, edit package.json
> インストール後にGit Hooks を自動的に有効にする?

```shell 
# ❓設定する理由
% pnpm pkg set scripts.prepare="husky install"
```

```json
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```
```shell
% pnpm husky install
or 🐤
% pnpm prepare

> nestjs@1.0.0 prepare /Users/.../nestjs
> husky install

husky - Git hooks installed
# .husky が作成される
```

#### create a hook

```shell
% pnpm husky add .husky/pre-commit "echo 'test'"

husky - created .husky/pre-commit
# .husky 配下の pre-commit に記載される
```

### c.f.
- https://github.com/pnpm/pnpm/issues/4657

### commitlint
https://commitlint.js.org/#/

```shell
# install
% pnpm add @commitlint/{cli,config-conventional}

# moduleの作成
% echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

### husky設定
huskyでcommitlintの実行を走らせる

```shell
% pnpm husky add .husky/commit-msg "pnpm commitlint --edit ${1}"

```

テストしてみる
```shell
% git add .

### エラーを出してみる
% git commit -m 'testdayo'
⧗   input: testdayo
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)

### 正しい
% git commit -m 'chore: readme'
[develop b2835be] chore: readme
 1 file changed, 1 insertion(+)

### 正しいのでpushする
% git push origin develop
```

## prisma, docker

### prisma

- [公式](https://www.prisma.io/docs/getting-started/quickstart)
- [[Zenn]Prismaチュートリアル](https://zenn.dev/thirosue/books/49a4ee418743ed)
- [[Zenn]1. Prismaのセットアップ　Prisma 入門ワークショップ(2021) ](https://zenn.dev/kanasugi/articles/7f90078574bb69)

```shell
% pnpm add prisma -D
% pnpm prisma init
```

### docker

- [[Zenn]【Docker】postgresqlの構築](https://zenn.dev/re24_1986/articles/b76c3fd8f76aec)

docker-compose.yml 生成

```shell
## 起動
% docker-compose up -d 

## 停止
% docker-compose stop
```

- [[Qiita]初心者向けdocker-composeコマンド逆引き](https://qiita.com/okyk/items/a374ddb3f853d1688820)