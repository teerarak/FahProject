<template>
  <div class="">
    <div class="row">
      <!-- <div class="col-xs-6 col-xs-offset-3 card">
          <img src="http://anellobackpack.com/wp-content/uploads/2016/06/anello-camo-backpack-2.jpg" width="40%"  class="img-thumbnail">
          <h3>Model <small>Anello Crazy (Standard)</small></h3>
          <h3> <small>2190.00 บาท</small></h3>
      </div>

      <div class="col-xs-6 col-xs-offset-3 card">
          <img src="http://anellobackpack.com/wp-content/uploads/2016/06/anello-leather-casual-backpack-e1465669051790.jpg" width="40%" class="img-thumbnail">

      </div>
      <div class="col-xs-6 col-xs-offset-3 card">
          <img src="http://anellobackpack.com/wp-content/uploads/2016/06/anello-usa-flag-pattern-backpack.jpg" width="40%" class="img-thumbnail">
      </div> -->

    </div>
    <div class="" v-for="eiei in product">
      {{eiei.id}}
      <h1>eiei</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCFkmsvmGI88cp8r20zm7i8WRFnvKnztnA',
  authDomain: 'anello-fd933.firebaseapp.com',
  databaseURL: 'https://anello-fd933.firebaseio.com',
  storageBucket: 'anello-fd933.appspot.com',
  messagingSenderId: '600294276469'
}
firebase.initializeApp(config)
var Product = firebase.database().ref('product')
export default {
  mounted () {
    let vm = this
    Product.on('child_added', function (snapshot) {
      var keys = snapshot.val()
      keys.id = snapshot.key
      vm.product.push(keys)
    })
  },
  name: 'Contents',
  data () {
    return {
      msg: 'Contents',
      product: [],
      newProduct: {
        name_product: '',
        price_product: ' ',
        file_product: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  font-size: 20px;
}
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
     border-radius: 5px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
