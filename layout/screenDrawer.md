****

## 使用说明

```jsx
import {ClScreenDrawer} from 'mp-colorui'
```



## 一般用法

### 显示全屏抽屉

```jsx
<ClScreenDrawer show >我是内容</ClScreenDrawer>
```



## 参数说明

### ScreenDrawer 参数

| 参数         | 说明                | 类型    | 可选值             | 默认值    |
| ------------ | ------------------- | ------- | ------------------ | --------- |
| show         | *显示 screenDrawer* | boolean | *`true`*,*`false`* | *`false`* |
| renderPage   | 页面显示内容        | Element | -                  | -         |
| renderDrawer | 抽屉显示的内容      | Element | -                  | -         |



### ScreenDrawer 事件

| 事件名称 | 说明                 | 参数返回 |
| -------- | -------------------- | -------- |
| onHide   | *点击返回小箭头触发* | -        |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览可能会有些许问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/screenDrawer/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/screenDrawer/index",
					width: 128,
					height: 128,
					colorDark : "#000000",
					colorLight : "#ffffff",
					correctLevel : QRCode.CorrectLevel.H
				});
			});
		}
	})
</script>
