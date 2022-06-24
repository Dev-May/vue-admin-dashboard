<template>
  <div class="vue-tempalte">
    <section class="hero is-primary is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-4-widescreen">
              <h3 class="title">Sign In</h3>
              <form @submit.prevent="submit" action="" class="box">
                <div class="field">
                  <label for="email" class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      type="email"
                      name="email"
                      v-model="form.email"
                      placeholder="e.g. bobsmith@gmail.com"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="password" class="label">Password</label>
                  <div class="control has-icons-left">
                    <input
                      type="password"
                      name="password"
                      v-model="form.password"
                      placeholder="*******"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <div class="field">
                  <button type="submit" class="button is-success">Login</button>
                </div>
                <p>
                  <router-link to="/forgot-password"
                    >Forgot password?</router-link
                  >
                </p>
                <p>
                  <router-link to="/register">Register new account</router-link>
                </p>
              </form>
              <p v-if="showError" id="error">Email or Password is incorrect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("email", this.form.email);
      User.append("password", this.form.password);
      try {
        await this.LogIn(User);
        this.$router.push("/posts");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style>
.hero.is-primary {
  background-color: grey;
}
</style>
