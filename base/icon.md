****

## 使用指南

在 `Taro` 文件中引入组件

```jsx
import { ClIcon } from 'mp-colorui'
```

## 一般用法

```html
<ClIcon iconName='activity' size='large' color='cyan' />
```



## 使用第三方图标库

栗子：我在[阿里巴巴图标库](https://www.iconfont.cn/)添加了第三方图标，请下载至本地打开

![Xnip2019-08-23_10-47-21](https://md-1255362963.cos.ap-chengdu.myqcloud.com/2019-08-23-024942.jpg)

再打开下载文件中的 iconfont.css 文件，文件类似于以下格式：

![Xnip2019-08-23_10-49-19](https://md-1255362963.cos.ap-chengdu.myqcloud.com/2019-08-23-024951.jpg)

最后再将此文件内容复制到项目的 css 中，即完成引用。

使用方式如下：

```jsx
<ClIcon iconName='iconfont icon-RectangleCopy' other />
```



## 参数说明

### Icon 参数

| 参数     | 说明               | 类型            | 可选值                                          | 默认值     |
| :------- | :----------------- | :-------------- | :---------------------------------------------- | :--------- |
| iconName | 图标图案           | string          | 参考下表                                        | -          |
| size     | 图标大小           | string / Number | 大于10的整数或者默认支持大小                    | *`normal`* |
| color    | 图标颜色           | string          | 参考文档 [默认色-标准色](/home/color?id=标准色) | -          |
| other    | 是否为第三方图标库 | boolean         | -                                               | `false`    |

### size

| 参数      | 说明     | 对应尺寸 |
| --------- | -------- | -------- |
| *xsmall*  | 非常小   | 40       |
| *small*   | 略小     | 48       |
| *normal*  | 正常     | 56       |
| *large*   | 略大     | 64       |
| *xlarge*  | 略略大   | 72       |
| *xxlarge* | 很大     | 88       |
| *slarge*  | 超大     | 160      |
| *xslarge* | 比大还大 | 240      |

### iconName

<div style='display: flex; flex-wrap: wrap; justify-content: flex-start'>
  <div :style='`border-radius: 8px; width: 100px; height: 60px;display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px`' v-for="item in icons" >
    <i :class="`cuIcon-${item.name}`"></i>
    <div>{{item.name}}</div>
  </div>
</div>

<script>
  new Vue({
    el: '#main',
    data: {
      icons: [
        {name: 'appreciate'},
        {name: 'check'},
        {name: 'close'},
        {name: 'edit'},
        {name: 'emoji'},
        {name: 'favorfill'},
        {name: 'favor'},
        {name: 'loading'},
        {name: 'locationfill'},
        {name: 'location'},
        {name: 'phone'},
        {name: 'roundcheckfill'},
        {name: 'roundcheck'},
        {name: 'roundclosefill'},
        {name: 'roundclose'},
        {name: 'roundrightfill'},
        {name: 'roundright'},
        {name: 'search'},
        {name: 'taxi'},
        {name: 'timefill'},
        {name: 'time'},
        {name: 'unfold'},
        {name: 'warnfill'},
        {name: 'warn'},
        {name: 'camerafill'},
        {name: 'camera'},
        {name: 'commentfill'},
        {name: 'comment'},
        {name: 'likefill'},
        {name: 'like'},
        {name: 'notificationfill'},
        {name: 'notification'},
        {name: 'order'},
        {name: 'samefill'},
        {name: 'same'},
        {name: 'deliver'},
        {name: 'evaluate'},
        {name: 'pay'},
        {name: 'send'},
        {name: 'shop'},
        {name: 'ticket'},
        {name: 'back'},
        {name: 'cascades'},
        {name: 'discover'},
        {name: 'list'},
        {name: 'more'},
        {name: 'scan'},
        {name: 'settings'},
        {name: 'questionfill'},
        {name: 'question'},
        {name: 'shopfill'},
        {name: 'form'},
        {name: 'pic'},
        {name: 'filter'},
        {name: 'footprint'},
        {name: 'top'},
        {name: 'pulldown'},
        {name: 'pullup'},
        {name: 'right'},
        {name: 'refresh'},
        {name: 'moreandroid'},
        {name: 'deletefill'},
        {name: 'refund'},
        {name: 'cart'},
        {name: 'qrcode'},
        {name: 'remind'},
        {name: 'delete'},
        {name: 'profile'},
        {name: 'home'},
        {name: 'cartfill'},
        {name: 'discoverfill'},
        {name: 'homefill'},
        {name: 'message'},
        {name: 'addressbook'},
        {name: 'link'},
        {name: 'lock'},
        {name: 'unlock'},
        {name: 'vip'},
        {name: 'weibo'},
        {name: 'activity'},
        {name: 'friendaddfill'},
        {name: 'friendadd'},
        {name: 'friendfamous'},
        {name: 'friend'},
        {name: 'goods'},
        {name: 'selection'},
        {name: 'explore'},
        {name: 'present'},
        {name: 'squarecheckfill'},
        {name: 'square'},
        {name: 'squarecheck'},
        {name: 'round'},
        {name: 'roundaddfill'},
        {name: 'roundadd'},
        {name: 'add'},
        {name: 'notificationforbidfill'},
        {name: 'explorefill'},
        {name: 'fold'},
        {name: 'game'},
        {name: 'redpacket'},
        {name: 'selectionfill'},
        {name: 'similar'},
        {name: 'appreciatefill'},
        {name: 'infofill'},
        {name: 'info'},
        {name: 'forwardfill'},
        {name: 'forward'},
        {name: 'rechargefill'},
        {name: 'recharge'},
        {name: 'vipcard'},
        {name: 'voice'},
        {name: 'voicefill'},
        {name: 'friendfavor'},
        {name: 'wifi'},
        {name: 'share'},
        {name: 'wefill'},
        {name: 'we'},
        {name: 'lightauto'},
        {name: 'lightforbid'},
        {name: 'lightfill'},
        {name: 'camerarotate'},
        {name: 'light'},
        {name: 'barcode'},
        {name: 'flashlightclose'},
        {name: 'flashlightopen'},
        {name: 'searchlist'},
        {name: 'service'},
        {name: 'sort'},
        {name: 'down'},
        {name: 'mobile'},
        {name: 'mobilefill'},
        {name: 'copy'},
        {name: 'countdownfill'},
        {name: 'countdown'},
        {name: 'noticefill'},
        {name: 'notice'},
        {name: 'upstagefill'},
        {name: 'upstage'},
        {name: 'babyfill'},
        {name: 'baby'},
        {name: 'brandfill'},
        {name: 'brand'},
        {name: 'choicenessfill'},
        {name: 'choiceness'},
        {name: 'clothesfill'},
        {name: 'clothes'},
        {name: 'creativefill'},
        {name: 'creative'},
        {name: 'female'},
        {name: 'keyboard'},
        {name: 'male'},
        {name: 'newfill'},
        {name: 'new'},
        {name: 'pullleft'},
        {name: 'pullright'},
        {name: 'rankfill'},
        {name: 'rank'},
        {name: 'bad'},
        {name: 'cameraadd'},
        {name: 'focus'},
        {name: 'friendfill'},
        {name: 'cameraaddfill'},
        {name: 'apps'},
        {name: 'paintfill'},
        {name: 'paint'},
        {name: 'picfill'},
        {name: 'refresharrow'},
        {name: 'colorlens'},
        {name: 'markfill'},
        {name: 'mark'},
        {name: 'presentfill'},
        {name: 'repeal'},
        {name: 'album'},
        {name: 'peoplefill'},
        {name: 'people'},
        {name: 'servicefill'},
        {name: 'repair'},
        {name: 'file'},
        {name: 'repairfill'},
        {name: 'taoxiaopu'},
        {name: 'weixin'},
        {name: 'attentionfill'},
        {name: 'attention'},
        {name: 'commandfill'},
        {name: 'command'},
        {name: 'communityfill'},
        {name: 'community'},
        {name: 'read'},
        {name: 'calendar'},
        {name: 'cut'},
        {name: 'magic'},
        {name: 'backwardfill'},
        {name: 'playfill'},
        {name: 'stop'},
        {name: 'tagfill'},
        {name: 'tag'},
        {name: 'group'},
        {name: 'all'},
        {name: 'backdelete'},
        {name: 'hotfill'},
        {name: 'hot'},
        {name: 'post'},
        {name: 'radiobox'},
        {name: 'rounddown'},
        {name: 'upload'},
        {name: 'writefill'},
        {name: 'write'},
        {name: 'radioboxfill'},
        {name: 'punch'},
        {name: 'shake'},
        {name: 'move'},
        {name: 'safe'},
        {name: 'activityfill'},
        {name: 'crownfill'},
        {name: 'crown'},
        {name: 'goodsfill'},
        {name: 'messagefill'},
        {name: 'profilefill'},
        {name: 'sound'},
        {name: 'sponsorfill'},
        {name: 'sponsor'},
        {name: 'upblock'},
        {name: 'weblock'},
        {name: 'weunblock'},
        {name: 'my'},
        {name: 'myfill'},
        {name: 'emojifill'},
        {name: 'emojiflashfill'},
        {name: 'flashbuyfill'},
        {name: 'text'},
        {name: 'goodsfavor'},
        {name: 'musicfill'},
        {name: 'musicforbidfill'},
        {name: 'card'},
        {name: 'triangledownfill'},
        {name: 'triangleupfill'},
        {name: 'roundleftfill-copy'},
        {name: 'font'},
        {name: 'title'},
        {name: 'recordfill'},
        {name: 'record'},
        {name: 'cardboardfill'},
        {name: 'cardboard'},
        {name: 'formfill'},
        {name: 'coin'},
        {name: 'cardboardforbid'},
        {name: 'circlefill'},
        {name: 'circle'},
        {name: 'attentionforbid'},
        {name: 'attentionforbidfill'},
        {name: 'attentionfavorfill'},
        {name: 'attentionfavor'},
        {name: 'titles'},
        {name: 'icloading'},
        {name: 'full'},
        {name: 'mail'},
        {name: 'peoplelist'},
        {name: 'goodsnewfill'},
        {name: 'goodsnew'},
        {name: 'medalfill'},
        {name: 'medal'},
        {name: 'newsfill'},
        {name: 'newshotfill'},
        {name: 'newshot'},
        {name: 'news'},
        {name: 'videofill'},
        {name: 'video'},
        {name: 'exit'},
        {name: 'skinfill'},
        {name: 'skin'},
        {name: 'moneybagfill'},
        {name: 'usefullfill'},
        {name: 'usefull'},
        {name: 'moneybag'},
        {name: 'redpacket_fill'},
        {name: 'subscription'},
        {name: 'loading1'},
        {name: 'github'},
        {name: 'global'},
        {name: 'settingsfill'},
        {name: 'back_android'},
        {name: 'expressman'},
        {name: 'evaluate_fill'},
        {name: 'group_fill'},
        {name: 'play_forward_fill'},
        {name: 'deliver_fill'},
        {name: 'notice_forbid_fill'},
        {name: 'fork'},
        {name: 'pick'},
        {name: 'wenzi'},
        {name: 'ellipse'},
        {name: 'qr_code'},
        {name: 'dianhua'},
        {name: 'icon'},
        {name: 'loading2'},
        {name: 'btn'}
      ]
    }
  });
</script>



