****

## 使用说明

```jsx
import {ClStep} from 'mp-colorui'
```



## 一般用法



### 步骤条形状

```jsx
<ClStep type='arrow' />
```

### 激活色

```jsx
<ClStep activeColor='blue' />
```

### 默认激活第几步

```jsx
<ClStep step=0 />
```





## 参数说明

### Step 参数说明

| 参数              | 说明                     | 类型    | 可选值                                          | 默认值     |
| ----------------- | ------------------------ | ------- | ----------------------------------------------- | ---------- |
| type              | *步骤条形状*             | string  | *`arrow`*,*`line`*                              | *`line`*   |
| activeColor       | *激活的颜色*             | string  | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`blue`*   |
| step              | *默认激活第几步*         | number  | -                                               | 0          |
| stepIconType      | *每一步的样式，可自定义* | string  | *`number`*,*`space`*,*`custom`*                 | *`number`* |
| stepTitlePosition | *每一步提示文字位置*     | string  | *`top`*,*`bottom`*                              | *`bottom`* |
| steps             | *每一步的内容            | steps[] | [详情](/view/steps?id=steps)                    | -          |

### steps

| 参数  | 说明                                                                                                                       | 类型   | 可选值 | 默认值 |
| ----- | -------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| title | 每一步提示文字                                                                                                             | string | -      | -      |
| icon  | *每一步的图标，可选类型请查看 参考文档 <br />[Icon-iconName](/base/icon?id=iconname)*(仅在`stepIconType === custom`时有效) | string | -      | -      |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral"><p>请使用手机扫二维码预览。</p>
	<button id='showDemo'> 隐藏/显示 </button></div>
<iframe id='iframe' style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/steps/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/steps/index",
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
