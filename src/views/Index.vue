<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NIcon, NMessageProvider } from 'naive-ui'
import { ref } from 'vue'
import { HomeOutline } from '@vicons/ionicons5'
const router = useRouter()
const curIndex = ref(0)
const routerList = [
  { name: '首页', url: '/home' },
  { name: '会议室预约', url: '/reserve' },
  { name: '我的会议', url: '/my' },
  { name: '历史会议', url: '/history' },
  { name: '个人中心', url: '/user' }
]
</script>

<template>
  <div class="flex flex-col w-full h-full fixed">
    <div class="w-screen h-14 bg-slate-700 text-white flex justify-between items-center pl-5 pr-5">
      <div>会议室预定系统</div>
      <div class="flex gap-5">
        <img
          src="https://p2.itc.cn/q_70/images03/20230612/ed1da5a481024b3588495042de1fba47.jpeg"
          alt=""
          style="width: 30px; height: 30px; border-radius: 50%"
        />
        <span>admin</span>
      </div>
    </div>
    <div class="flex h-full overflow-hidden">
      <div class="h-full w-56 bg-slate-600 text-white flex flex-col gap-2">
        <div
          class="flex items-center gap-2 h-12 pl-5"
          :style="{ color: curIndex == index ? '#0C2758' : '' }"
          v-for="(item, index) in routerList"
          :key="index"
          @click="curIndex = index"
        >
          <n-icon>
            <HomeOutline />
          </n-icon>
          <div @click="router.push(item.url)">{{ item.name }}</div>
        </div>
      </div>
      <n-message-provider>
        <div class="flex-1 overflow-y-auto">
          <router-view></router-view>
        </div>
      </n-message-provider>
    </div>
  </div>
</template>

<style scoped></style>
