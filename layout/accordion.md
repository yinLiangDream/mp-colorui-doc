## 使用指南

```js
import { ClAccordion } from 'mp-colorui'
```

## 一般用法

### 卡片模式

```html
<ClAccordion card>
	...
</ClAccordion>
```

### 禁止动画

```html
<ClAccordion animation={false}>
	...
</ClAccordion>
```

### 展开速度

```html
<ClAccordion speed={0.3}>
	...
</ClAccordion>
```

## 参数说明

### Accordion 参数

| 参数      | 说明               | 类型    | 可选值 | 默认值    |
| --------- | ------------------ | ------- | ------ | --------- |
| title     | *手风琴标题*       | string  | -      | -         |
| open      | *是否展开*         | boolean | -      | *`false`* |
| animation | *开启动画效果*     | boolean | -      | *`true`*  |
| card      | *是否使用卡片形式* | boolean | -      | *`false`* |
| speed     | *展开速度*         | number  | -      | *`0.15`*  |

### Accordion 事件

| 事件名称 | 说明           | 返回参数 |
| -------- | -------------- | -------- |
| onClick  | 点击手风琴事件 | boolean  |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览会有无法触发 touch 事件等问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/accordion/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/accordion/index",
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
