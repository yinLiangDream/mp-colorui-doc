****

## 使用指南

在 Taro 文件中引入组件

```js
import { ClButton } from 'mp-colorui'
```

## 一般用法

```html
<ClButton>按钮文案</ClButton>
```

```html
<ClButton bgColor='block'>按钮文案</ClButton>
```

```html
<ClButton shape='round'>按钮文案</ClButton>
```

### 不同尺寸

```html
<ClButton size='normal'>按钮文案</ClButton>
<ClButton size='small'>按钮文案</ClButton>
```

### 带 loading icon

```html
<ClButton loading type='primary'>按钮文案</ClButton>
```

## 参数说明

### Button 参数



| 参数      | 说明                         | 类型    | 可选值                                                                                                                                              | 默认值      |
| --------- | ---------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| shape     | *按钮形状设置*               | string  | *`round`*,*`radius`*                                                                                                                                | *`radius`*  |
| size      | *按钮大小设置*               | string  | *`small`*,`normal`,*`large`*                                                                                                                        | *`normal`*  |
| bgColor   | *按钮背景色设置*             | string  | *参考文档 [默认色](/home/color)*                                                                                                                    | *`blue`*    |
| plain     | *镂空设置*                   | boolean | *`true`*,*`false`*                                                                                                                                  | *`false`*   |
| plainSize | *镂空边框粗细设置*           | string  | *`default`*,*`bold`*                                                                                                                                | *`default`* |
| shadow    | *按钮阴影设置*               | boolean | *`true`*,*`false`*                                                                                                                                  | *`true`*    |
| disabled  | *是否禁用*                   | boolean | *`true`*,*`false`*                                                                                                                                  | *`false`*   |
| loading   | *显示加载图标*               | boolean | *`true`*,*`false`*                                                                                                                                  | *`false`*   |
| text      | *按钮文字(同直接在标签里写)* | string  | -                                                                                                                                                   | -           |
| long      | *`是否为长按钮`*             | boolean | -                                                                                                                                                   | `false`     |
| openType  | *开放能力*                   | string  | *`contact`*,*`getUserInfo`*,<br />*`getPhoneNumber`*,<br />*`openSetting`*,*`feedback`*,<br />*`getRealnameAuthInfo`*,<br />*`share`*,*`launchApp`* | -           |

### Button 事件



| 事件名称         | 说明                                                                                         | 返回参数   |
| ---------------- | -------------------------------------------------------------------------------------------- | ---------- |
| onClick          | 点击按钮时触发                                                                               | event 对象 |
| onGetUserInfo    | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onContact        | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onGetPhoneNumber | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onError          | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onOpenSetting    | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral"><p>请使用手机扫二维码预览。</p>
	<button id='showDemo'> 隐藏/显示 </button></div>
<iframe id='iframe' style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/button/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/button/index",
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
