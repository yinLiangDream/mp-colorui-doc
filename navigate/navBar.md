****

## 使用说明

```jsx
import {ClNavBar} from 'mp-colorui'
```



## 一般用法

### 背景色

```jsx
<ClNavBar bgColor='blue' ></ClNavBar>
```

### 标题

```jsx
<ClNavBar title='我是标题' ></ClNavBar>
```

### 增加图标

```jsx
const leftIcon = [{
  icon: 'round',
  color: 'black',
  text: '圆形'
}]
const rightIcon = [{
  icon: 'round',
  color: 'blue'
}]

<ClNavBar leftIcon={leftIcon} rightIcon={rightIcon} ></ClNavBar>
```



## 参数说明

### NavBar 参数

| 参数      | 说明         | 类型        | 可选值                                | 默认值    |
| --------- | ------------ | ----------- | ------------------------------------- | --------- |
| bgColor   | *背景色*     | string      | 参考文档 [默认色](/home/color)        | *`white`* |
| title     | *中间标题*   | string      | -                                     | -         |
| leftIcon  | *左侧图标组* | leftIcon[]  | [详情](/navigate/navBar?id=lefticon)  | []        |
| rightIcon | *右侧图标组* | rightIcon[] | [详情](/navigate/navBar?id=rightIcon) | []        |

### leftIcon

| 参数  | 说明       | 类型   | 可选值                                             | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------- | ------ |
| icon  | *图标*     | string | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| color | *图标颜色* | string | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |
| text  | *左侧文字* | string | -                                                  | -      |



### rightIcon

| 参数  | 说明       | 类型   | 可选值                                             | 默认值 |
| ----- | ---------- | ------ | -------------------------------------------------- | ------ |
| icon  | *图标*     | string | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| color | *图标颜色* | string | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |



### NavBar 事件

| 事件名称         | 说明               | 参数返回 |
| ---------------- | ------------------ | -------- |
| onClickLeftIcon  | *点击左侧图标事件* | index    |
| onClickRightIcon | *点击右侧图标事件* | index    |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral"><p>请使用手机扫二维码预览。</p>
	<button id='showDemo'> 隐藏/显示 </button></div>
<iframe id='iframe' style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/navBar/index" height="568" width="316"></iframe>
<div>
		<p>H5 演示</p>
		<div id='qrcode'></div>
	</div>
</div>

<script>
	new Vue({
		el: '#main',
		mounted() {
			setTimeout(() => {
				const id = document.getElementById("qrcode");
				new QRCode(id, {
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/navBar/index",
					width: 128,
					height: 128,
					colorDark : "#000000",
					colorLight : "#ffffff",
					correctLevel : QRCode.CorrectLevel.H
				});
				document.querySelector('#showDemo').onclick = function() {
					document.querySelector('#iframe').style.visibility = document.querySelector('#iframe').style.visibility === 'hidden' ? '' : 'hidden';
				}
			});
		}
	})
</script>
