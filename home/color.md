***

`MP ColorUI` 有以下默认色

## 标准色

<div style='display: flex; flex-wrap: wrap; justify-content: flex-start'>
  <div :style='`border-radius: 8px; width: 120px; height: 60px; background-color: ${item.color}; color: ${item.fontColor}; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px`' v-for="item in baseColor" >
    <div>{{item.title}}</div>
    <div>{{item.color}}</div>
  </div>
</div>

## 浅色

<div style='display: flex; flex-wrap: wrap; justify-content: flex-start'>
  <div :style='`border-radius: 8px; width: 120px; height: 60px; background-color: ${item.color}; color: ${item.fontColor}; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px`' v-for="item in lightColor" >
    <div>{{item.title}}</div>
    <div>{{item.color}}</div>
  </div>
</div>

## 渐变色

<div style='display: flex; flex-wrap: wrap; justify-content: flex-start'>
  <div :style='`border-radius: 8px; width: 200px; height: 60px; background: linear-gradient(45deg, ${item.color[0]}, ${item.color[1]}); color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0 0 auto; margin: 10px`' v-for="item in gradualColor" >
    <div>{{item.title}}</div>
    <div>{{item.color[0]}} ~ {{item.color[1]}}</div>
  </div>
</div>

<div style="position: fixed; right:10px; top: 5%">
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/color/index" height="568" width="375"></iframe>
</div>

<script>
new Vue({
  el: '#main',
  data: {
      baseColor: [
        {
          title: 'red',
          color: '#e54d42',
          fontColor: '#ffffff'
        },
        {
          title: 'orange',
          color: '#f37b1d',
          fontColor: '#ffffff'
        },
        {
          title: 'yellow',
          color: '#fbbd08',
          fontColor: '#ffffff'
        },
        {
          title: 'olive',
          color: '#8dc63f',
          fontColor: '#ffffff'
        },
        {
          title: 'green',
          color: '#39b54a',
          fontColor: '#ffffff'
        },
        {
          title: 'cyan',
          color: '#1cbbb4',
          fontColor: '#ffffff'
        },
        {
          title: 'blue',
          color: '#0081ff',
          fontColor: '#ffffff'
        },
        {
          title: 'purple',
          color: '#6739b6',
          fontColor: '#ffffff'
        },
        {
          title: 'mauve',
          color: '#9c26b0',
          fontColor: '#ffffff'
        },
        {
          title: 'pink',
          color: '#e03997',
          fontColor: '#ffffff'
        },
        {
          title: 'brown',
          color: '#a5673f',
          fontColor: '#ffffff'
        },
        {
          title: 'grey',
          color: '#8799a3',
          fontColor: '#ffffff'
        },
        {
          title: 'black',
          color: '#333333',
          fontColor: '#ffffff'
        },
        {
          title: 'gray',
          color: '#aaaaaa',
          fontColor: '#ffffff'
        },
        {
          title: 'white',
          color: '#ffffff',
          fontColor: '#000000'
        }
      ],
    lightColor: [
      {
        title: 'redLight',
        color: '#fadbd9',
        fontColor: '#e54d42'
      },
      {
        title: 'orangeLight',
        color: '#fde6d2',
        fontColor: '#f37b1d'
      },
      {
        title: 'yellowLight',
        color: '#fef2ce',
        fontColor: '#fbbd08'
      },
      {
        title: 'oliveLight',
        color: '#e8f4d9',
        fontColor: '#8dc63f'
      },
      {
        title: 'greenLight',
        color: '#d7f0db',
        fontColor: '#39b54a'
      },
      {
        title: 'cyanLight',
        color: '#d2f1f0',
        fontColor: '#1cbbb4'
      },
      {
        title: 'blueLight',
        color: '#cce6ff',
        fontColor: '#0081ff'
      },
      {
        title: 'purpleLight',
        color: '#e1d7f0',
        fontColor: '#6739b6'
      },
      {
        title: 'mauveLight',
        color: '#ebd4ef',
        fontColor: '#9c26b0'
      },
      {
        title: 'pinkLight',
        color: '#f9d7ea',
        fontColor: '#e03997'
      },
      {
        title: 'brownLight',
        color: '#ede1d9',
        fontColor: '#a5673f'
      },
      {
        title: 'greyLight',
        color: '#e7ebed',
        fontColor: '#8799a3'
      }
    ],
    gradualColor: [
      {
        title: 'gradualRed',
        color: ['#f43f3b', '#ec008c']
      },
      {
        title: 'gradualOrange',
        color: ['#ff9700', '#ed1c24']
      },
      {
        title: 'gradualGreen',
        color: ['#39b54a', '#8dc63f']
      },
      {
        title: 'gradualPurple',
        color: ['#9000ff', '#5e00ff']
      },
      {
        title: 'gradualPink',
        color: ['#ec008c', '#6739b6']
      },
      {
        title: 'gradualBlue',
        color: ['#0081ff', '#1cbbb4']
      }
    ]
  }
})
</script>
