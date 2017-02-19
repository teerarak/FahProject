<template>
  <div class="hello">
    <div class="">
      <h1><router-link to="/" class="btn btn-default">Anello</router-link>
        <router-link to="/page1" class="btn btn-default">หน้าแรก</router-link>
        <router-link to="/form" class="btn btn-default">form</router-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
