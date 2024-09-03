# moderate-admin-react-antd5

## 温馨提示

拉取代码的时候，记得执行一下 `pnpm i` 一下，更新一下项目的依赖
如果遇到一切运行问题都可以直接提(在群里或者提 issue)，火速解决。

## 文档搭建中

[文档地址](https://dland-team.github.io/moderate-react-admin/)

我当前在学 Ai，苦学数学，概率中，以现在写文档的速度，估计黑神话悟空发布前，我应该能写完初版，不会那么细，如果有任何不理解或不全的随时 call，陆续完善。

## 进军路线

**大方向：对接若依后端主要功能，打造成为一个实用快捷的管理后台搬砖利器**

-   [x] 对接若依后端的登录。 ✅
-   [x] 对接若依后端的菜单权限控制。 ✅
-   [x] 前端完全可以脱离后端的权限控制，自行创建路由，如需后端控制，仅需简单配置即可，同时支持钱后端权限管理完美融合。✅
-   [x] 根据若依的权限数据，动态创建路由，无需再费劲鉴权（没权限就 404）。✅
-   [x] 路由和菜单拆分干净不耦合，菜单仅仅存路由 id 实现关联，路由跳转仅仅根据 id 就可以做到。 ✅
-   [x] 业务流转模式采用“真响应式”，即一处某特定事件发生，相关联位置自行响应做处理。✅
-   [x] 业务分层清晰 `UI 层` + `状态管理层`（`状态store`+`业务助手helper`）,UI 触发行为，状态流转事件，UI 响应刷新。 ✅
-   [x] 国际化，无脑使用 i18n。✅
-   [x] 继续整合 antd 的表单功能，能够随心所欲的配置生成。✅
-   [ ] 继续对接若依比较好的后端功能，诸如代码生成，角色管理等等。

## 技术选型

-   React18
-   Antd5
-   Redux 或 natur
-   react-router 6.4.3
-   vite
-   ts

## 功能点

-   约定式路由
-   路由，api，store 提供开发管理，可通过操作生成代码

# 启动

```shell
第一步
pnpm i

第二步
pnpm run start
```

这样，一个全栈项目就跑起来了。

当然，登录和获取权限都是根据若依后端提供的接口

有问题，欢迎来闲 D 岛 🏝️ 咨询 551406017
