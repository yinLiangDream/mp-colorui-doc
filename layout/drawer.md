****

## 使用说明

```jsx
import ClDrawer from 'mp-colorui'
```



## 一般用法

### 显示抽屉

```jsx
<ClDrawer show>内容</ClDrawer>
```

### 抽屉方向

```jsx
<ClDrawer direction='left' >内容</ClDrawer>
```

### 点击阴影关闭

```jsx
<ClDrawer closeWithShadow >内容</ClDrawer>
```



## 参数说明

### Drawer 参数

| 参数            | 说明           | 类型    | 可选值                        | 默认值     |
| --------------- | -------------- | ------- | ----------------------------- | ---------- |
| show            | *是否显示*     | boolean | *`true`*,*`false`*            | *`false`*  |
| direction       | *抽屉方向*     | string  | *`bottom`*,*`left`*,*`right`* | *`bottom`* |
| closeWithShadow | *点击阴影关闭* | boolean | *`true`*,*`false`*            | *`true`*   |



### Drawer 事件

| 事件名称 | 说明               | 参数返回 |
| -------- | ------------------ | -------- |
| onCancel | *点击阴影取消事件* | -        |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/drawer/index" height="568" width="375"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/drawer/index",
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
