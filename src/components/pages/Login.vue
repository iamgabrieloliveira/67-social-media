<template>
  <div class="container">
    <div class="welcome-message">
      <h1>Welcome to the 67 Social Media</h1>
    </div>
    <div class="form">
      <label for="email">
        E-mail
        <input type="email" placeholder="example@email.com" v-model="formData.email">
      </label>
      <label for="password">
        Password
        <input type="password" placeholder="Write your password" v-model="formData.password">
      </label>
      <warning v-for="message in errorsMessages"
               :content="message"
      />
      <my-button theme="dark" @click="submitLogin">
        Log In
      </my-button>
      <my-button>
        Register Now
      </my-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from '../global-components/myButton.vue';
import API from '../../custom-api';
import { AxiosResponse } from 'axios';
import { ErrorLoginResponseT } from '../../../types/api-types';
import Warning from '../global-components/warning.vue';
import FormMixin from '../../FormMixin.vue';

export default defineComponent({
  name: 'Login',
  components: {
    MyButton,
    Warning,
  },
  mixins: [FormMixin],
  data() {
    return {
      formData: {
        email: null,
        password: null,
      },
      errors: {},
    };
  },
  methods: {
    submitLogin() {
      API.post('/api/login', this.formData)
          .then((res: AxiosResponse) => {
              if (res.status === 200) {
                console.log("Success")
              }
          }).catch((err: ErrorLoginResponseT) => {
            this.errors = err.response.data.errors;
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  .welcome-message { color: #fff; height: 270px }
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .form {
    max-width: 360px;
    background: #FFB0B0;

    display: flex;
    flex-direction: column;
    gap: 10px;

    border-radius: 6px;
    filter: drop-shadow(0px 4px 4px rgba(151, 74, 74, 0.25));

    padding: 40px;

    label {
      font-weight: 700;
      font-size: 19px;

      input {
        height: 45px;
        width: 100%;

        background: #EFDFDF;

        box-shadow: 0 4px 4px rgba(172, 140, 140, 0.25);
        border-radius: 7px;
        border: none;

        padding-left: 10px;

        margin-top: 5px;

        font-size: 17px;

        &:focus { outline: none }
        &::placeholder {
          font-size: 15px;
        }
      }
    }
    button:first-of-type {
      margin-top: 30px;
    }
  }
}
</style>