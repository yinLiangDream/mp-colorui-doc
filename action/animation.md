

## 使用说明

```jsx
import {ClAnimation} from 'mp-colorui'
```



## 一般用法

### animation 类型

```jsx
<ClAnimation type='fade'>
	...
</ClAnimation>
```

### animation 动画翻转

```jsx
<ClAnimation type='fade' reserve>
	...
</ClAnimation>
```



## 参数说明

### Animation 参数

| 参数     | 说明       | 类型    | 可选值                                                       | 默认值    |
| -------- | ---------- | ------- | ------------------------------------------------------------ | --------- |
| type     | *动画类型* | string  | *`fade`*, *`scale-up`*, *`scale-down`*, *`slide-top`*, <br />*`slide-bottom`*, *`slide-left`*, *`slide-right`*, *`shake`* | *`fade`*  |
| reserve  | *动画反转* | boolean | `true`, `false`                                              | *`false`* |
| delay    | *延迟执行* | number  | -                                                            | 0         |
| duration | 动画时间   | number  | -                                                            | 0.5       |



## Animation 事件

| 事件名称         | 说明         | 参数 |
| ---------------- | ------------ | ---- |
| onAnimationStart | 动画开始触发 | -    |
| onAnimationEnd   | 动画结束触发 | -    |



<div style="position: fixed; right:10px; top: 5%">
	<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
	<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/animation/index" height="568" width="375"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/animation/index",
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
