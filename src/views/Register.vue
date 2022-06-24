<template>
  <div class="vue-tempalte">
    <section class="hero is-primary is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-4-widescreen">
              <h3 class="title">Sign Up</h3>
              <form @submit.prevent="submit" action="" class="box">
                <div class="field">
                  <label for="full_name" class="label">Full Name</label>
                  <div class="control has-icons-left">
                    <input
                      type="text"
                      name="full_name"
                      v-model="form.full_name"
                      placeholder="full name"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
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
                  <label for="gender" class="label">Gender</label>
                  <div class="control has-icons-left">
                    <input
                      type="text"
                      name="gender"
                      v-model="form.gender"
                      placeholder="M/F"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <button type="submit" class="button is-success">
                    Sign Up
                  </button>
                </div>
                <p>
                  <router-link to="/login"
                    >Already have an account?</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <p v-if="showError" id="error">User already exists</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        full_name: "",
        email: "",
        password: "",
        gender: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
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
