## 使用说明

```jsx
import {ClGrid} from 'mp-colorui'
```



## 一般用法

### 分割成几格

```jsx
<ClGrid col={4} ></ClGrid>
```



## 参数说明

### Grid 参数

| 参数 | 说明             | 类型   | 可选值                | 默认值     |
| ---- | ---------------- | ------ | --------------------- | ---------- |
| col  | *一行分割成几格* | number | `2`,`3`,`4`,`5`       | 3          |
| mode | *类型*           | string | *`square`*,*`normal`* | *`normal`* |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览可能会有些许问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/grid/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/grid/index",
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
