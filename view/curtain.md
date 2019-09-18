****

## 使用指南

```js
import { ClCurtain } from 'mp-colorui'
```

## 一般用法

> Curtain 幕帘是受控组件，参数 show 来控制是否显示，请关闭时在 onClose 事件中，手动将其参数设置为 false

### 关闭位置

```html
<ClCurtain closeBtnPosition='top'>
  ...
</ClCurtain>
```

### 点击阴影关闭

```html
<ClCurtain closeWithShadow >
  ...
</ClCurtain>
```

## 参数说明

### Curtain 参数

| 参数             | 说明               | 类型    | 可选值                                                                         | 默认值     |
| ---------------- | ------------------ | ------- | ------------------------------------------------------------------------------ | ---------- |
| show             | *是否显示*         | boolean |                                                                                | `false`    |
| closeWithShadow  | *是否点击阴影关闭* | boolean |                                                                                | *`false`*  |
| closeBtnPosition | *关闭按钮位置*     | string  | *`top`*,*`top-ledt`*,*`top-right`*,*`bottom`*,*`bottom-left`*,*`bottom-right`* | *`bottom`* |

### Curtain 事件

| 事件名称 | 说明             | 返回参数 |
| -------- | ---------------- | -------- |
| onClick  | 点击幕帘事件     | -        |
| onClose  | 点击关闭按钮事件 | -        |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览会有无法触发 touch 事件等问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/curtain/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/curtain/index",
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
