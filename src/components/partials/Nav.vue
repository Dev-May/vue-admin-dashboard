<template>
  <nav
    id="nav"
    class="navbar container"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Products Marketplace</strong>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/posts">Posts</router-link>
        <span v-if="isLoggedIn">
          <a @click="logout">Logout</a>
        </span>
        <span v-else>
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
        </span>
        <!-- <router-link to="/about" class="navbar-item">About</router-link> -->
      </div>
      <!-- <div class="level-right">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="Find a product" />
          </p>
          <p class="control">
            <button class="button">Search</button>
          </p>
        </div>
      </div> -->
      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button">
              <router-link to="/login">Sign In</router-link>
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
    methods: {
      async logout() {
        await this.$store.dispatch("LogOut");
        this.$router.push("/login");
      },
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #d88d00;
    }
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
