
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
          generatorData('0.1.3', '2019-07-02', [
            {
              title: 'BugFix',
              desc: [
                '修复 H5 button 无动效问题',
                '修复 H5 timeline 线条过细问题',
                '修复 H5 swiper 未铺满问题',
                '修复 H5 menuList 图片过大问题'
              ]
            }
          ]),
          generatorData('0.1.1', '2019-07-01', [
            {
              title: 'BugFix',
              desc: [
                '修复 H5 适配的部分问题',
                '修复 H5 Radio 样式问题'
              ]
            }
          ]),
          generatorData('0.1.0', '2019-06-25',
            [
              {
                title: 'Fature',
                desc: [
                  'MP-ColorUI 正式版上线'
                ]
              }
            ]
          )
        ]
      }
    }
})
</script>
