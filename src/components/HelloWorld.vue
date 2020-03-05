<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <button @click="c.id++" style="font-size:25px;">点我{{ c }}</button>
    </p>
    <p>
      有关自定义配置项目的指南，请查看<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli文档</a>.
    </p>
    <h3>安装终端插件</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>常用链接</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">核心文档</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">论坛</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">交流社区</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">推特</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">新闻</a></li>
    </ul>
    <h3>生态系统</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
var pm = {"id":1,"name":"book","price":"20.00"};
export default {
  name: 'HelloWorld',
  data() {
    return {
      c: pm
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/helloworld.css"></style>
