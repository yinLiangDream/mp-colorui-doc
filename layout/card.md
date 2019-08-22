****

## 使用说明

```jsx
import {ClCard} from 'mp-colorui'
```



## 一般用法

### 卡片类型

```jsx
<ClCard type='card'>我是卡片</ClCard>
```

### 背景色

```jsx
<ClCard bgColor='blue'>背景是蓝色的</ClCard>
```





## 参数说明

### Card 参数

| 参数    | 说明               | 类型    | 可选值                         | 默认值   |
| ------- | ------------------ | ------- | ------------------------------ | -------- |
| type    | *卡片组件类型选择* | string  | *`card`*,*`full`*              | *`card`* |
| bgColor | *卡片背景色设置*   | string  | 参考文档 [默认色](/home/color) | -        |
| shadow  | *卡片阴影设置*     | boolean | -                              | *`true`* |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览可能会有些许问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/card/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/card/index",
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
