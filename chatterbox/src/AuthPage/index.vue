<template>
  <div class="login-page">
    <div class="card">
      <form @submit.prevent="login">
        <div class="title">Login</div>
        <input placeholder="Username" type="text" v-model="username" />
        <br />
        <div class="password-input">
          <input placeholder="Password" :type="loginPasswordType" v-model="password" />
          <span class="eye-icon" @click="toggleLoginPasswordVisibility">
            <i v-bind:class="loginPasswordIcon"></i>
          </span>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>

      <form @submit.prevent="signup">
        <div class="title">Sign Up</div>
        <input
          class="input"
          placeholder="Username"
          type="text"
          v-model="username"
        />
        <br />
        <div class="password-input">
          <input placeholder="Password" :type="signupPasswordType" v-model="password" />
          <span class="eye-icon" @click="toggleSignupPasswordVisibility">
            <i v-bind:class="signupPasswordIcon"></i>
          </span>
        </div>
        <br />
        <input placeholder="Email" type="text" v-model="email" />
        <br />
        <input placeholder="First name" type="text" v-model="first_name" />
        <br />
        <input placeholder="Last name" type="text" v-model="last_name" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import { loginRest, signupRest } from "./api";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      showLoginPassword: false,
      showSignupPassword: false
    };
  },
  computed: {
    loginPasswordType() {
      return this.showLoginPassword ? "text" : "password";
    },
    signupPasswordType() {
      return this.showSignupPassword ? "text" : "password";
    },
    loginPasswordIcon() {
      return this.showLoginPassword ? "fas fa-eye-slash" : "fas fa-eye";
    },
    signupPasswordIcon() {
      return this.showSignupPassword ? "fas fa-eye-slash" : "fas fa-eye";
    }
  },
  methods: {
    login() {
      loginRest(this.username, this.password)
        .then((response) =>
          this.$emit("onAuth", { ...response.data, secret: this.password })
        )
        .catch((error) => console.log("Login error", error));
    },
    toggleLoginPasswordVisibility() {
      this.showLoginPassword = !this.showLoginPassword;
    },
    toggleSignupPasswordVisibility() {
      this.showSignupPassword = !this.showSignupPassword;
    },
    signup() {
      signupRest(
        this.username,
        this.password,
        this.email,
        this.first_name,
        this.last_name
      )
        .then((response) =>
          this.$emit("onAuth", { ...response.data, secret: this.password })
        )
        .catch((error) => console.log("Sign up error", error));
    },
  },
};
</script>

<style scoped>
.password-input {
  position: relative;
  display: inline-block;
  width: 100%;
}


.eye-icon {
  position: absolute;
  right: 10px;
  top: 60%;
  transform: translateY(-50%);
  cursor: pointer;
  border-left: 2px solid #ccc;
}
</style>