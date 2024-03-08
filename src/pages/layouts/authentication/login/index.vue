<script>
import InputField from '../../../../components/InputField/index.vue'

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    InputField
  },
  methods: {}
}
</script>
<template>
  <div class="flex flex-row">
    <div class="flex-col w-[50%] py-12 px-[100px] bg-black">
      <div class="flex justify-between mb-[60px]">
        <router-link to="/" class="flex w-auto items-center text-lg text-white uppercase font-bold">
          <img src="/images/logo.svg" alt="logo" />
          <span class="pl-2">Uncrypt</span>
        </router-link>
        <div class="w-auto text-right">
          <p class="text-sm text-white font-medium">Don't have any account?</p>
          <router-link to="" class="text-sm font-medium text-blue-700 hover:underline"
            >Create an account</router-link
          >
        </div>
      </div>
      <h1 class="text-white font-bold text-[40px] mb-[40px]">
        Log in to <span class="capitalize">{{ this.$route.query.type }}</span> Portal
      </h1>
      <div class="pb-[80px] mb-4 border-b-2 border-bottom border-white">
        <form>
          <div class="flex flex-wrap -mx-2">
            <div class="w-full px-2 mb-8">
              <InputField
                label="Email"
                v-model="form.email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="w-full px-2 mb-8">
              <InputField
                label="Password"
                v-model="form.password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="w-full flex items-center px-2 mb-8">
              <input type="checkbox" class="h-[20px] w-[20px]" id="remember" />
              <label class="pl-2" for="remember">Remember me</label>
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="w-full px-2 mb-2">
              <button
                type="submit"
                class="btn btn-primary w-full px-2 py-4 bg-blue uppercase font-bold text-lg hover:bg-blue-700"
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
      <p class="mb-2">
        Forgot your password? <a href="#" class="text-blue-700 hover:underline">Reset password</a>
      </p>
      <p class="mb-2">
        Looking for the {{ this.$route.query.type == 'hacker' ? 'customer' : 'hacker' }} portal?
        <router-link
          :to="`/login?type=${this.$route.query.type == 'hacker' ? 'customer' : 'hacker'}`"
          class="text-blue-700 hover:underline"
          >Go to
          {{ this.$route.query.type == 'hacker' ? 'customer' : 'hacker' }} portal</router-link
        >
      </p>
      <a href="#" class="mb-2 text-blue-700 hover:underline">Resend confirmation email</a>
    </div>
    <div
      class="flex-col w-[50%] bg-cover bg-no-repeat bg-[url('https://identity.bugcrowd.com/media/join-the-hunt-bg-2.jpeg')]"
    ></div>
  </div>
</template>
