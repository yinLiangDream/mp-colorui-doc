****

## 使用说明

```jsx
import {ClSwitch} from 'mp-colorui'
```



## 一般用法

### Switch 表现形式

```jsx
<ClSwitch type='form' />
```



### Switch 形状

```jsx
<ClSwitch shape='radius' />
```



### 选中状态

```jsx
<ClSwitch checked />
```



## 参数说明

### Switch 参数

| 参数    | 说明          | 类型    | 可选值                                          | 默认值     |
| ------- | ------------- | ------- | ----------------------------------------------- | ---------- |
| type    | *switch 类型* | string  | *`normal`*,*`form`*                             | *`normal`* |
| title   | *标题*        | string  | -                                               | -          |
| shape   | *形状*        | string  | *`normal`*,*`radius`*                           | *`normal`* |
| color   | *选中颜色*    | string  | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`green`*  |
| checked | *是否选中*    | boolean | *`true`*,*`false`*                              | *`false`*  |



### Switch 事件

| 事件名称 | 说明                 | 参数返回       |
| -------- | -------------------- | -------------- |
| onChange | *改变选中状态时触发* | flag，选中状态 |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览会有无法触发 touch 事件等问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/switch/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/switch/index",
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
