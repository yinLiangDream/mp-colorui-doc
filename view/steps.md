****

## 使用说明

```js
import ClStep from 'mp-colorui'
```



## 一般用法



### 步骤条形状

```jsx
<ClStep type='arrow' />
```

### 激活色

```jsx
<ClStep activeColor='blue' />
```

### 默认激活第几步

```jsx
<ClStep step=0 />
```





## 参数说明

### Step 参数说明

| 参数              | 说明                     | 类型    | 可选值                                                       | 默认值     |
| ----------------- | ------------------------ | ------- | ------------------------------------------------------------ | ---------- |
| type              | *步骤条形状*             | String  | *`arrow`*,*`line`*                                           | *`line`*   |
| activeColor       | *激活的颜色*             | String  | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`blue`*   |
| step              | *默认激活第几步*         | Number  | -                                                            | 0          |
| stepIconType      | *每一步的样式，可自定义* | String  | *`number`*,*`space`*,*`custom`*                              | *`number`* |
| stepTitlePosition | *每一步提示文字位置*     | String  | *`top`*,*`bottom`*                                           | *`bottom`* |
| steps             | *每一步的内容            | steps[] | [详情](/view/steps?id=steps)                                 | -          |

### steps

| 参数  | 说明                                                         | 类型   | 可选值 | 默认值 |
| ----- | ------------------------------------------------------------ | ------ | ------ | ------ |
| title | 每一步提示文字                                               | String | -      | -      |
| icon  | *每一步的图标，可选类型请查看 参考文档 <br />[Icon-iconName](/base/icon?id=iconname)*(仅在`stepIconType === custom`时有效) | String | -      | -      |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border-radius: 30px; border: 1px solid antiquewhite" src="https://www.yysssl.com.cn/#/pages/components/steps/index" height="568" width="300"></iframe>
</div>
