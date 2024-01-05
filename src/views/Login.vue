<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import qs from 'qs'
const account = ref('')
const pwd = ref('')
const router = useRouter()
const cli = () => {
  console.log('##')
  router.push('/index');
  // axios({
  //   method: 'get',
  //   url: 'http://124.222.236.194:7001/api/search/QSearch',
  //   params: {
  //     athr: '余华'
  //   },
  //   paramsSerializer: function (params) {
  //     return qs.stringify(params, { arrayFormat: 'repeat' })
  //   }
  // })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  console.log('22')
}
</script>

<template>
  <div
    style="background-image: url('src/assets/back1.png'); background-size: 100% 100%"
    class="w-screen"
  >
    <div
      class="w-3/5 h-3/4 flex bg-slate-200 ml-auto mr-auto mt-16 shadow-2xl rounded-3xl overflow-hidden"
    >
      <img src="../assets/bg2.png" alt="" class="w-1/2" />
      <div class="w-1/2 h-full bg-white rounded-3xl pt-12 pl-10 flex flex-col gap-5">
        <div style="font-weight: bolder; font-size: 35px">Login</div>
        <div style="font-weight: 700">please login to continue</div>
        <el-input v-model="account" placeholder="Please input" class="w-4/5"></el-input>
        <el-input
          v-model="pwd"
          placeholder="Please input password"
          type="password"
          class="w-4/5"
        ></el-input>
        <div class="flex justify-between w-4/5 text-gray-400 text-sm">
          <div>注册</div>
          <div>忘记密码?</div>
        </div>
        <el-button class="w-4/5" type="primary" @click="cli">LOGIN</el-button>
      </div>
    </div>
  </div>
</template>
