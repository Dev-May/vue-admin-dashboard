<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome to our Products Marketplace</h1>
          <h2 class="subtitle">Make sure you check out our products below</h2>
          <div class="button-block">
            <button class="button is-xl is-dark">
              <router-link to="/register" class="navbar-item"
                >Sign Up to Browse Products</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </section>

    <ProductsList />
  </div>
</template>

<script>
import ProductsList from "../components/ProductsList";
export default {
  name: "home",
  components: {
    ProductsList,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url("../img/cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}
.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
}
.is-xl {
  font-size: 1.7rem;
}
</style>
