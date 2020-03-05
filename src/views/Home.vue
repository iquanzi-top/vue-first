<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="欢迎访问Vue App" />
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  mounted() {
    axios.get('/api/json_demo.json')
      .then(response => (this.info = response.data.sites))
      // 请求失败处理
      .catch(function(error) {
        console.log(error);
      });
  },
  components: {
    HelloWorld
  }
}
</script>
