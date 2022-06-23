<template>
  <div class="product-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ product.name }}</h1>
          <h2 class="subtitle">
            <strong>Date:</strong> {{ product.date }}
            <br />
          </h2>
          <h2 class="subtitle">
            <strong>Quantity:</strong> {{ product.quantity }}
            <br />
          </h2>
        </div>
      </div>
    </section>
    <section class="product-content">
      <div class="container">
        <p class="is-size-5">
          <strong>Category:</strong> {{ product.category }}
        </p>
        <div class="product-images columns is-multiline has-text-centered">
          <div
            v-for="image in product.images"
            :key="image.id"
            class="column is-one-third"
          >
            <img :src="`${image}`" :alt="`${product.name}`" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductSingle",
  data() {
    return {
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
      product: {},
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let product = this.products.find((product) => product.id === ID);
    this.product = product;
  },
};
</script>

<style>
.hero.is-primary {
  background-color: grey;
}
</style>
