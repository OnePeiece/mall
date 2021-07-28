<template>
  <div class="home">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="item in lunbolist"
        :key="item.id"
      ><img
          :src="item.img"
          alt=""
        ></van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="grid in gridlist"
        :key="grid.id"
        :icon="grid.src"
        :text="grid.title"
      />
    </van-grid>
  </div>
</template>
<script>
import { getLunBo, getGrids } from '../../api/home'
// import { Toast } from 'vant'
export default {
  data: () => ({
    lunbolist: [],
    gridlist: []
  }),
  created() {
    this.getLunBo()
    this.getGrids()
  },
  methods: {
    async getLunBo() {
      // try {
      //   const res = await axios('http://itfly.vip:8888/api/getlunbo')
      //  this.lunbolist = res.data.message

      // } catch (error) {
      //   Toast('轮播图资源请求失败')
      // }
      const res = await getLunBo()
      this.lunbolist = res.data.message
    },
    async getGrids() {
      // try {
      //    const res = await axios('http://itfly.vip:8888/api/grids')
      //    this.gridlist = res.data.message
      // } catch (error) {
      //   Toast('九宫格资源请求失败')
      // }
      const res = await getGrids()
      this.gridlist = res.data.message
    }
  }
}
</script>
<style lang="less">
.home {
  .my-swipe {
    .van-swipe-item {
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
  .van-grid-item__icon {
    font-size: 50px;
  }
}
</style>