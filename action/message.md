

## 使用说明

```jsx
import ClMessage from 'mp-colorui'
```



## 注意

> 若引用该组件后 duration 发生变化，请自己手动设置 duration，由于单一实例问题，会默认使用前一个状态的 duration。

## 一般用法

### 类型

```jsx
<ClMessage type='success' message='我是消息' />
```

### 持续时间

```jsx
<ClMessage duration={2} message='我是消息' />
```





## 参数说明

### Message 参数

| 参数     | 说明                             | 类型    | 可选值                                             | 默认值    |
| -------- | -------------------------------- | ------- | -------------------------------------------------- | --------- |
| type     | *类型，在 custom 下可自定义颜色* | string  | *`success`*,*`error`*,*`warn`*,*`info`*,*`custom`* | *`info`*  |
| bgColor  | *背景色*                         | string  | 参考文档 [默认色](/home/color)                     | -         |
| message  | *消息文本*                       | number  | -                                                  | 0         |
| duration | *持续时间*                       | number  | -                                                  | 3         |
| show     | *是否显示*                       | boolean | -                                                  | *`false`* |



## Message 事件

| 事件名称    | 说明       | 参数 |
| ----------- | ---------- | ---- |
| **onClose** | 关闭时触发 | -    |



<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/message/index" height="568" width="375"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/message/index",
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