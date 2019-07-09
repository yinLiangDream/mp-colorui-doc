
<div>
    <div v-for="item in updateList">
        <h2>Version: {{item.version}}</h1>
        <p style="color: cadetblue">发布时间: {{item.time}}</p>
        <div v-for="item in item.desc" style="color: grey">
            <h3 style="color: grey">{{item.title}}</h2>
            <ul>
                <li v-for="item in item.desc">{{item}}</li>
            </ul>
        </div>
    </div>
</div>

<script>
function generatorData(version, time, desc) {
  return {
    version,
    time,
    desc
  }
}

new Vue({
    el: '#main',
    data() {
      return {
        updateList: [
          generatorData('0.2.0', '2019-07-09', [
            {
              title: 'COMPONENT',
              desc: ['新增垂直导航 ClVerticalTab, ClVerticalTabCell 组件']
            }
          ]),
          generatorData('0.1.7', '2019-07-07', [
            {
              title: 'API',
              desc: ['新增 titleBar 组件 renderRight 属性']
            }, {
              title: 'BUG',
              desc: ['解决 浅色 light-pink 失效问题']
            }
          ]),
          generatorData('0.1.6', '2019-07-05', [
            {
              title: 'API',
              desc: ['新增 MenuList list 下 disabled 属性']
            },
            {
              title: 'BUG',
              desc: ['MenuList 点击失效问题']
            }
          ]),
          generatorData('0.1.5', '2019-07-05', [
            {
              title: 'API',
              desc: ['新增 Radio 组件 type 属性下的 list 属性']
            }
          ]),
          generatorData('0.1.4', '2019-07-04', [
            {
              title: 'COMPONENT',
              desc: [
                '新增 Animation 动画组件'
              ]
            }, {
              title: 'API',
              desc: [
                '修改 Timeline 组件 times 属性下 content 格式(string --> string[])',
                  '新增 Timeline 组件 times 属性下 title 属性(string)',
                  '新增 Timeline 组件 times 属性下 node 属性(string)'
              ]
            }
          ]),
          generatorData('0.1.3', '2019-07-02', [
            {
              title: 'BUG_FIX',
              desc: [
                '修复 H5 Button 无动效问题',
                '修复 H5 Timeline 线条过细问题',
                '修复 H5 Swiper 未铺满问题',
                '修复 H5 MenuList 图片过大问题'
              ]
            }
          ]),
          generatorData('0.1.1', '2019-07-01', [
            {
              title: 'BUG_FIX',
              desc: [
                '修复 H5 适配的部分问题',
                '修复 H5 Radio 样式问题'
              ]
            }
          ]),
          generatorData('0.1.0', '2019-06-25',
            [
              {
                title: 'FATURE',
                desc: [
                  'MP-ColorUI 测试版上线'
                ]
              }
            ]
          )
        ]
      }
    }
})
</script>
