****

## 使用说明

```jsx
import ClLayout from 'mp-colorui'
```



## 一般用法

### 浮动

```jsx
<ClLayout float='left' ></ClLayout>
```

### 内边距

```jsx
<ClLayout padding='normal' paddingDirection='around' ></ClLayout>
```

### 外边距

```jsx
<ClLayout margin='normal' marginDirection='round' ></ClLayout>
```



## 参数说明

### Layout 参数

| 参数             | 说明                             | 类型   | 可选值                                                       | 默认值     |
| ---------------- | -------------------------------- | ------ | ------------------------------------------------------------ | ---------- |
| float            | *浮动方向， 默认不浮动*          | String | *`left`*,*`right`*                                           | -          |
| padding          | *padding 距离，默认没有 padding* | String | *`xsmall`*,*`small`*,*`normal`*,<br />*`large`*,*`xlarge`*   | -          |
| paddingDirection | *padding 方向*                   | String | *`around`*,*`horizontal`*,*`vertical`*,<br />*`left`*,*`right`*,*`top`* | *`around`* |
| margin           | *margin 距离，默认没有 margin*   | String | *`xsmall`*,*`small`*,*`normal`*,<br />*`large`*,*`xlarge`*   | -          |
| marginDirection  | *margin 方向*                    | String | *`around`*,*`horizontal`*,*`vertical`*,<br />*`left`*,*`right`*,*`top`* | *`around`* |

