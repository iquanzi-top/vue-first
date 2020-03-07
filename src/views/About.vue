<template>
<div class="about" v-cloak v-on:click="hideTooltip">
  <!-- <h1>这是关于我们页面</h1> -->

  <div class="tooltip" v-on:click.stop v-if="show_tooltip">
    <input type="text" v-model="text_content"/>
  </div>
  <p v-on:click.stop="toggleTooltip">{{ text_content }}</p>

  <button class="button" v-on:click="show = !show">点我</button>
  <transition name="slide-fade">
    <p v-if="show">菜鸟先飞--很多时候，菜鸟先出发，也不一定能够抵达重点。</p>
  </transition>
  <div class="btngroup">
    <van-button type="primary">主要按钮</van-button>&nbsp;&nbsp;
    <van-button type="info">信息按钮</van-button>&nbsp;&nbsp;
    <van-button type="warning">警告按钮</van-button>&nbsp;&nbsp;
    <van-button type="info" plain>朴素按钮</van-button>
  </div>
</div>
</template>

<script>
import {Button} from "vant";
import 'vant/lib/index.css';

export default {
  name: 'About',
  data() {
    return {
      show_tooltip: false,
      text_content: '点我，并编辑内容。',
      show: true
    }
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    hideTooltip: function() {
      this.show_tooltip = false;
    },
    toggleTooltip: function() {
      this.show_tooltip = !this.show_tooltip;
    }
  }
}
</script>
<style scoped src="../assets/css/about.css"></style>
