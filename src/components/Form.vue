<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">name</label>
        <input v-model="newProduct.name_product"  class="form-control" id="exampleInputEmail1" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">price</label>
        <input v-model="newProduct.price_product"  class="form-control" id="exampleInputPassword1" placeholder="Password">
       </div>
      <div class="form-group">
        <label for="exampleInputFile">Photo input</label>
        <input type="file" v-on:change="onFileChange">
      <button v-on:click="upload" type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>

</template>

<script>
import firebase from 'firebase'
  // Initialize Firebase
var config = {
  apiKey: 'AIzaSyCFkmsvmGI88cp8r20zm7i8WRFnvKnztnA',
  authDomain: 'anello-fd933.firebaseapp.com',
  databaseURL: 'https://anello-fd933.firebaseio.com',
  storageBucket: 'anello-fd933.appspot.com',
  messagingSenderId: '600294276469'
}
firebase.initializeApp(config)
var storage = firebase.storage()
var storageRef = storage.ref('photo')
var Product = firebase.database().ref('product')
export default {
  mounted () {
    let vm = this
    Product.on('child_added', function (snapshot) {
      var keys = snapshot.val()
      keys.id = snapshot.key
      vm.product.push(keys)
      console.log(snapshot)
    })
  },
  name: 'eiei',
  data () {
    return {
      file: '',
      product: [],
      newProduct: {
        name_product: '',
        price_product: ' ',
        file_product: ''
      },
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files
      this.file = files[0]
      // this.upload()
    //  var x = document.getElementById('pic')
    //  x.src = URL.createObjectURL(e.target.files[0])
    },
    onclicksubmit () {
      console.log(this.newProduct.file_product + 'eiie')
    },
    upload () {
      let vm = this
      storageRef.child(this.file.name).put(this.file).then(function (snapshot) {
        vm.newProduct.file_product = snapshot.downloadURL
        // console.log(vm.newProduct.file_product + 'eiie')
        let result = Product.push(vm.newProduct)
        vm.newProduct.id = result.key
        console.log('upload success')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
