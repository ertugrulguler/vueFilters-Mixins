import Vue from "vue";
import App from "./App.vue";

Vue.filter("tolowercase", value => {
  return value.toLowerCase();
});
// main.js de tanımlanan filtera heryerden ulaşılabilir. herhangi bir tanımlamaya gerek yok. pipe | kullandıktan sonra filterin adını yazmak yeterli.
new Vue({
  el: "#app",
  render: h => h(App)
});
