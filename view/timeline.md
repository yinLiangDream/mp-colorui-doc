****

## 使用说明

```jsx
import {ClTimeline} from 'mp-colorui'
```



## 一般用法

###	 时间轴数组

```html
<ClTimeline times={[]} />
```



## 参数说明

### Timeline 参数

| 参数  | 说明         | 类型    | 可选值                          | 默认值 |
| ----- | ------------ | ------- | ------------------------------- | ------ |
| times | *时间轴数组* | times[] | [详情](/view/timeline?id=times) | []     |

### times

| 参数      | 说明                           | 类型     | 可选值                                             | 默认值 |
| --------- | ------------------------------ | -------- | -------------------------------------------------- | ------ |
| content   | *包含的内容*                   | string[] | -                                                  | -      |
| bgColor   | *背景色*                       | string   | 参考文档 [默认色](/home/color)                     | -      |
| iconColor | *图标颜色*                     | string   | 参考文档 [默认色-标准色](/home/color?id=标准色)    | -      |
| icon      | 节点图标                       | string   | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |
| title     | *标题*                         | string   | -                                                  | -      |
| node      | *节点(若存在则会忽略其他属性)* | string   | -                                                  | -      |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral"><p>请使用手机扫二维码预览。</p>
	<button id='showDemo'> 隐藏/显示 </button></div>
<iframe id='iframe' style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/timeline/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/timeline/index",
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
