<template>
  <div class="products container">
    <h2 class="subtitle is-3">Check out our products</h2>
    <div class="columns is-multiline">
      <div
        v-for="product in products"
        :product="product"
        :key="product.id"
        class="column is-one-quarter"
      >
        <router-link :to="'/product/' + product.id">
          <ProductCard :product="product" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
  data() {
    return {
      product: {},
      products: [
        {
          id: 1,
          name: "Meat cleaver",
          category: "Kitchen",
          featuredImage: "../img/meat cleaver.jpg",
          images: [
            "../img/meat cleaver.jpg",
            "../img/meat cleaver.jpg",
            "../img/meat cleaver.jpg",
          ],
          quantity: 3,
          date: "06-07-2021",
        },
        {
          id: 2,
          name: "Meat grinder",
          category: "Kitchen",
          featuredImage: "../img/meat grinder.jpg",
          images: ["../img/meat grinder.jpg"],
          quantity: 3,
          date: "06-07-2021",
        },
        {
          id: 3,
          name: "Meat tray",
          category: "Kitchen",
          featuredImage: "../img/meat tray.jpg",
          images: ["../img/meat tray.jpg"],
          quantity: 3,
          date: "06-07-2021",
        },
        {
          id: 4,
          name: "Chef's knife",
          category: "Kitchen",
          featuredImage: "../img/chef's knife.jpg",
          images: ["../img/chef's knife.jpg"],
          quantity: 3,
          date: "06-07-2021",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.products {
  margin-top: 100px;
  text-align: center;
}
</style>
