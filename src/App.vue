<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{message | touppercase | tolowercase}}</p>
        <hr />
        <input type="text" v-model="searchText" />
        <ul>
          <li v-for="product in filtered">{{product}}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "./productMixin";
import  AppList from "./FilterList";

export default {
  mixins: [productMixin],
  data() {
    return {
      message: "Merhaba kadlosuzkedi | videosinif.com",
      // products: ["klavye", "mouse", "laptop", "ekran", "telefon", "kılıf"],
      searchText: ""
    };
  },
  filters: {
    touppercase(value) {
      return value.toUpperCase();
    }
  },
  components:{
    "app-list":AppList
  }
  // computed: {
  //   filtered() {
  //     return this.products.filter(element => {
  //       return element.match(this.searchText);
  //     });
  //   }
  // }

};
</script>

<style>
</style>
