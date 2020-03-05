<template>
<div id="menu">
  <nav v-bind:class="active" v-on:click.prevent>
    <a href="#" class="home" v-on:click="makeActive('home')">首页</a>
    <a href="#" class="projects" v-on:click="makeActive('projects')">项目</a>
    <a href="#" class="services" v-on:click="makeActive('services')">服务</a>
    <a href="#" class="contact" v-on:click="makeActive('contact')">联系我们</a>
  </nav>
  <p>您选择了<b>{{ active }}</b>菜单</p>
</div>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    makeActive: function(item) {
      this.active = item;
    }
  }
}
</script>
<style scoped src="../assets/css/menu.css"></style>
