<template>
  <div>
    <div id="app">
      <Nav />
      <router-view />
    </div>

    <div v-for="product in products" v-bind:key="product.id">
      <h2>{{ product.name }}</h2>
    </div>
  </div>
</template>

<script>
import Nav from "./components/partials/Nav.vue";
export default {
  name: "app",
  components: {
    Nav,
  },
  data() {
    return {
      products: [],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "https://fc-ecommerce-test.herokuapp.com/"
        );
        // JSON responses are automatically parsed.
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
