
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
          generatorData('0.3.2', '2019-07-31', [
            {
              title: 'ADAPTATION',
              desc: [
                'Switch H5 适配'
              ]
            }
          ]),
          generatorData('0.3.1', '2019-07-30', [
            {
              title: 'ADAPTATION',
              desc: [
                'Checkbox H5 适配'
              ]
            }
          ]),
          generatorData('0.3.0', '2019-07-28', [
            {
              title: 'COMPONENT',
              desc: [
                '新增 Form, FormItem 组件'
              ]
            }, {
               title: 'API',
               desc: [
                 '新增内置校验函数'
               ]
            }, {
               title: 'BUG',
               desc: [
                 '修复 Message 代码不提示问题',
                 '修复文档引入组件描述错误',
                 '修复 Input 组件 H5 下由于 value 绑定而无法输入的 bug（Taro 的 bug）'
               ]
            }
          ]),
          generatorData('0.2.7', '2019-07-23', [
            {
              title: 'COMPONENT',
              desc: [
                '新增 Divider 分割线组件'
              ]
            }, {
              title: 'BUG',
              desc: [
                '修复 Timeline H5 适配问题',
                '修复 Timeline node 节点展示不正确问题'
              ]
            }
          ]),
          generatorData('0.2.6', '2019-07-19', [
            {
              title: 'API',
              desc: [
                'Card 组件新增 shadow 属性'
              ]
            },
            {
              title: 'BUG',
              desc: [
                '修复 Message 的一些小问题'
              ]
            }
          ]),
          generatorData('0.2.5', '2019-07-18', [
            {
              title: 'BUG',
              desc: [
                '修复 Message 重复提示文字消失问题',
                '补全 Message 代码提示'
              ]
            }
          ]),
          generatorData('0.2.4', '2019-07-18', [
            {
              title: 'COMPONENT',
              desc: [
                '新增 Message 消息提示组件'
              ]
            },
            {
              title: 'API',
              desc: [
                '新增 Animation 组件 duration 属性'
              ]
            },
            {
              title: 'BUG',
              desc: [
                '修复 FloatButton 组件拖动穿透事件，拖动卡顿问题，提升动画速度，并新增收拢动画'
              ]
            }
          ]),
          generatorData('0.2.3', '2019-07-15', [
            {
              title: 'COMPONENT',
              desc: [
                '新增 FloatButton 浮动按钮组件'
              ]
            }
          ]),
          generatorData('0.2.2', '2019-07-13', [
            {
              title: 'COMPONENT',
              desc: [
                '新增 Accordion 手风琴组件'
              ]
            }
          ]),
          generatorData('0.2.1', '2019-07-11', [
            {
              title: 'API',
              desc: [
                'Animation 组件',
                '新增 onAnimationStart、onAnimationEnd 事件',
                'Tabs 组件',
                '新增 tabs 属性下的 id 属性',
                '新增 touchMove 可滑动属性',
                'VerticalTab 组件',
                '新增 backTop 属性'
              ]
            }, {
                title: 'BUG',
                desc: [
                  'Card 组件',
                  '修复插入 children 内容时的异常提醒（不影响使用）'
                ]
            }
          ]),
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
