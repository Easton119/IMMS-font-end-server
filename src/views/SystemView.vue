<script lang="ts" setup>
const box = [
  {
    text: '会议室预约',
    color: '#e0e9ff'
  },
  {
    text: '我的会议',
    color: '#fee7cd'
  },
  {
    text: '历史会议',
    color: '#d0f5ce'
  },
  {
    text: '个人中心',
    color: '#CAEFFC'
  }
]
// const schedule = [
//   {
//     day:'06-07',
//     text:'成电讲坛'
//   },
//   {
//     day:'06-16',
//     text:'创业讲座'
//   },
//   {
//     day:'06-28',
//     text:'网安主题宣讲'
//   }

// ]
interface Schedule {
  [key: string]: string
}
const schedule: Schedule = {
  '06-05': '成电讲坛',
  '06-07': '成电讲坛',
  '06-16': '创业讲座',
  '06-20': '软件杯宣讲会',
  '06-28': '网安行业主题宣讲',
  '07-04': '成电讲坛',
  '07-15': '成电故事讲座',
  '07-20': '互联网宣讲大会'
}
const calc = (day: String) => {
  for (const i in schedule) {
    if (i == day) {
      return schedule[i]
    }
  }
}
const check = (day: String) => {
  for (const i in schedule) {
    if (i == day) {
      if (i > '07-01') return 'future'
      return 'past'
    }
  }
}
</script>

<template>
  <div class="p-10">
    <!-- <div class="flex justify-around">
      <div v-for="i in box" class="h-40 w-40 rounded-3xl p-5" :style="{ backgroundColor: i.color }">
        <div class="h-14 w-14 bg-white rounded-2xl"></div>
        <div>{{ i.text }}</div>
      </div>
    </div> -->
    <el-calendar>
      <template #date-cell="{ data }">
        <!-- <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).join('-') }}
          {{ data.isSelected ? '✔️' : '' }}
        </p> -->
        <div :class="check(data.day.split('-').slice(1).join('-'))">
          <div>
            {{ data.day.split('-').slice(1).join('-') }}
          </div>
          <div class="font-semibold">{{ calc(data.day.split('-').slice(1).join('-')) }}</div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>
<style>
.past {
  color: #1989fa;
}
.future {
  color: #e53010;
}
</style>
