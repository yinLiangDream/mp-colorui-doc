****

## 使用说明

```jsx
import ClImagePicker from 'mp-colorui'
```



## 一般用法

### 图片列表

```jsx
<ClImagePicker imgList={[]} />
```

### 选择图片参数

```jsx
<ClImagePicker chooseImgObj={{
  count: 3,
  sourceType: ['album', 'camera'],
  sizeType: ['original', 'compressed'],
  success: () => { },
  fail: () => { },
  complete: () => { }
}} />
```



## 参数说明

### ImagePicker 参数

| 参数         | 说明           | 类型           | 可选值                                    | 默认值 |
| ------------ | -------------- | -------------- | ----------------------------------------- | ------ |
| chooseImgObj | *选择图片对象* | chooseImgObj[] | [详情](/form/imagePicker?id=chooseimgobj) | []     |
| imgList      | *图片列表*     | string[]       | -                                         | -      |



### chooseImgObj

| 参数       | 说明               | 类型     | 可选值                      | 默认值                     |
| ---------- | ------------------ | -------- | --------------------------- | -------------------------- |
| count      | *选择图片个数*     | number   | -                           | 9                          |
| sizeType   | *所选的图片的尺寸* | string[] | *`original`*,*`compressed`* | ['original', 'compressed'] |
| sourceType | *选择图片的来源*   | string[] | *`album`*,*`camera`*        | ['album']                  |
| success    | *选择成功回调函数* |          |                             |                            |

### chooseImgObj 事件

| 事件名称 | 说明                                               | 参数返回 |
| -------- | -------------------------------------------------- | -------- |
| success  | *选择成功回调函数*                                 | -        |
| fail     | *选择失败回调函数*                                 | -        |
| complete | *接口调用结束的回调函数（调用成功、失败都会执行）* | -        |



### ImagePicker 事件

| 事件名称  | 说明               | 参数返回 |
| --------- | ------------------ | -------- |
| beforeDel | *删除之前确认函数* | index    |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/imagePicker/index" height="568" width="375"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/imagePicker/index",
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
