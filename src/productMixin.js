export const productMixin = {
  data() {
    return {
      message: "Merhaba kadlosuzkedi | videosinif.com",
      products: ["klavye", "mouse", "laptop", "ekran", "telefon", "kılıf"],
      searchText: ""
    };
  },
  computed: {
    filtered() {
      return this.products.filter((element) => {
        return element.match(this.searchText);
      });
    }
  }
};
//Mixins ile bir tanımlama yapıldığı zaman istenilen yerden {} içerisinde tanımlama yapılarak kullanılabilir. Amaç code duplicationu önlemek.
