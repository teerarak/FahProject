<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myFooter from './components/Footer'
import myHeader from './components/Header'
import myCenter from './components/Center'
export default {
  components: {
    myFooter,
    myCenter,
    myHeader
  },
  name: 'app',
  methods: {
    onclicksubmit () {
      // this.newProduct.pic_product = this.files
      // console.log(this.newProduct.name_product)
      console.log('eiei')
    }
  }
}
</script>

<style>
#app {
  @import url('https://fonts.googleapis.com/css?family=Muli');
  font-family: 'Muli', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6px;
}
</style>
