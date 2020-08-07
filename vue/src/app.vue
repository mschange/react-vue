<template>
  <div>
    <p>{{msg}}</p>
    <p><span class="test">颜色变化了没</span></p>
    
    <img src="~./asset/image/swiper2.jpg" alt="">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        msg: '我看看能不能打包成功'
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="less">
p {
  .test {
    color: red;
  }
}
</style>