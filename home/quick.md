****

## 使用前准备

在使用之前，推荐学习 `Taro` 和 `ES2015`，并正确配置 `Node.js` v8.x 或以上版本



## 如何使用

#### 引入所需组件

在代码中 `import` 需要的组件并按照文档说明使用

```js
// page.js
import { ClButton } from 'mp-colorui'
// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'mp-colorui/dist/style/index.scss' // 全局引入一次即可
```

**引入组件样式的两种方式**

- **全局引入（JS中）：** 在入口文件中引入 `taro-ui` 所有的样式

```js
@import "~mp-colorui/dist/style/index.scss"; // 引入组件样式 - 方式二
```

 

- **全局引入（CSS中）：** 在 `app.scss` 样式文件中 `import` 组件样式并按照文档说明使用

```scss
@import "~mp-colorui/dist/style/index.scss"; // 引入组件样式 - 方式二
```

 

## 示例

在 `/myApp/src/pages/index/index.tsx` 文件添加以下代码

```tsx
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClButton } from 'mp-colorui'
import './index.scss'
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  
  render () {
    return (
      <View className='index'>
         <ClButton shape='round'>按钮文案</AtButton>
      </View>
    )
  }
}
```

在 `/myApp/src/app.scss` 文件中添加如下代码

```scss
@import "~mp-colorui/dist/style/index.scss"; // 引入组件样式，仅需引入一次即可
```