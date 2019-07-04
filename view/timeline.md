****

## 使用说明

```jsx
import ClTimeline from 'mp-colorui'
```



## 一般用法

###	 时间轴数组

```html
<ClTimeline times={[]} />
```



## 参数说明

### Timeline 参数

| 参数  | 说明         | 类型    | 可选值                          | 默认值 |
| ----- | ------------ | ------- | ------------------------------- | ------ |
| times | *时间轴数组* | times[] | [详情](/view/timeline?id=times) | []     |

### times

| 参数      | 说明                           | 类型     | 可选值                                             | 默认值 |
| --------- | ------------------------------ | -------- | -------------------------------------------------- | ------ |
| content   | *包含的内容*                   | String[] | -                                                  | -      |
| bgColor   | *背景色*                       | String   | 参考文档 [默认色](/home/color)                     | -      |
| iconColor | *图标颜色*                     | String   | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |
| icon      | 节点图标                       | String   | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| title     | *标题*                         | String   | -                                                  | -      |
| node      | *节点(若存在则会忽略其他属性)* | String   | -                                                  | -      |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/timeline/index" height="568" width="375"></iframe>
</div>
