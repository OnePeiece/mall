<template>
  <div id='app'>
    <!-- 头部部分 -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 中间路由部分 -->
    <router-view></router-view>

    <!-- 底部部分 -->
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon='home-o'
        to='/home'
      ></van-tabbar-item>
      <van-tabbar-item
        icon='friends-o'
        to='/friends'
      ></van-tabbar-item>
      <van-tabbar-item
        icon='cart-o'
        to='/cart'
        badge='6'
      ></van-tabbar-item>
      <van-tabbar-item
        icon='search'
        to='/search'
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: Number(sessionStorage.active) || 0,
    title: sessionStorage.title || 'home'
  }),

  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  watch: {
    '$route.meta'(meta) {
      this.title = meta.title
      this.active = meta.active
      sessionStorage.title = meta.title
      sessionStorage.active = meta.active
    }
  }
}
</script>
<style lang="less" scoped>
</style>