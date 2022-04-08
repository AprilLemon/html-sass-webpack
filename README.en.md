# 单HTML开发模板
解决痛点：在HTML中，前端无法使用SASS等工具实现样式隔离，只能通过BEM，长子级选择器等等模式，来自我驱动并规范开发。

完成度：sass支持，图片资源支持，热更新资源文件。

## 文件夹说明
- index.html 模板文件，dom结构编写都在此处。
- public 资源文件，所有index.html引入文件存放位置。
- src/styles 样式文件,例如编写class。
- src/assets 样式资源文件，例如使用background-image: url('../assets/xx.pn')

## 使用方法
- 准备工作 pnpm install
- 开发 pnpm run dev，执行完成后自动打开页面。
- 发布 pnpm run build，执行完成后用于dist文件夹。
