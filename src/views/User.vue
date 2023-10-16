<script setup lang="ts">
import { ref } from 'vue'

const userInfo = ref<any>([
  {
    key: '昵称',
    value: 'admin'
  },
  {
    key: '邮箱',
    value: '11313232@qq.com'
  },
  {
    key: '手机号',
    value: '12321312321'
  },
  {
    key: '个人简介',
    value: '这是一段简介'
  }
])
const avatar = {}
</script>

<template>
  <div class="flex flex-col items-center p-7 gap-8">
    <div class="w-full" style="border: 1px solid #ccc; border-radius: 10px; overflow: hidden">
      <div class="w-full bg-slate-400 p-2">基本信息</div>
      <div class="grid grid-cols-2 p-2">
        <div class="p-2 flex flex-col gap-4">
          <div class="flex flex-col" v-for="(item, index) in userInfo" :key="index">
            <div class="font-bold w-20">{{ item.key }} :</div>
            <input
              type="text"
              v-model="item.value"
              class="w-2/3"
              style="border: 1px solid #ccc; border-radius: 5px"
            />
          </div>
        </div>
        <div>
          <div class="font-bold">头像</div>
          <img
            src="https://p2.itc.cn/q_70/images03/20230612/ed1da5a481024b3588495042de1fba47.jpeg"
            alt=""
            style="width: 120px; height: 120px; border-radius: 50%"
          />
        </div>
        <el-button class="w-36" type="primary">保存</el-button>
      </div>
    </div>
    <div class="w-full" style="border: 1px solid #ccc; border-radius: 10px; overflow: hidden">
      <div class="w-full bg-slate-400 p-2">修改密码</div>
      <div class="p-2 flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <div class="font-bold w-20">原密码</div>
          <input type="password" style="border: 1px solid #ccc; border-radius: 5px" />
        </div>
        <div class="flex items-center gap-2">
          <div class="font-bold w-20">新密码</div>
          <input type="password" style="border: 1px solid #ccc; border-radius: 5px" />
        </div>
        <div class="flex items-center gap-2">
          <div class="font-bold w-20">确认密码</div>
          <input type="password" style="border: 1px solid #ccc; border-radius: 5px" />
        </div>
        <el-button class="w-36" type="primary">确认修改</el-button>
      </div>
    </div>
    <el-button color="#626aef">退出登录</el-button>
  </div>
</template>
