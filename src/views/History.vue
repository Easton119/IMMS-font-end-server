<script lang="ts" setup>
import { useMyMeetingStore } from '@/stores/myMeeting'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const MyMeetingStore = useMyMeetingStore()
const formLabelWidth = '50px'
const direction = ref('rtl')
const isShow = ref(false)
const handle = () => {
  isShow.value = true
}
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-11/12">
      <div class="font-bold text-lg mt-4 mb-4">历史记录</div>
      <div class="flex flex-col gap-3">
        <div v-for="item in MyMeetingStore.meetingRecords" class="gap-4 flex">
          <img :src="item.url" alt="" class="h-20 w-28" />
          <div style="border-bottom: 1px solid #ccc" class="h-20 w-full">
            <div class="flex gap-5">
              <div class="font-semibold">{{ item.theme }}</div>
              <div class="text-gray-500">{{ item.time }}</div>
              <el-tag :type="item.type" class="ml-auto text-sm">{{ item.signStatus }}</el-tag>
            </div>
            <div class="text-gray-600">
              <el-icon><DeleteLocation /></el-icon>
              {{ item.location }}
            </div>
            <div class="text-cyan-600" @click="handle">
              <el-icon><MoreFilled /></el-icon>
              点击查看详情
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-drawer v-model="isShow" :direction="direction" :with-header="false">
    <div class="flex flex-col gap-4">
      <div class="text-xl">
        {{ MyMeetingStore.meetingRecords[0].theme }}
      </div>
      <div class="flex gap-4 items-center">
        <el-icon :size="20"><DeleteLocation /></el-icon>
        <span>{{ MyMeetingStore.meetingRecords[0].location }}</span>
      </div>
      <div class="flex items-center gap-4">
        <el-icon :size="20"><Timer /></el-icon>
        <span>{{ MyMeetingStore.meetingRecords[0].time }}</span>
      </div>
      <div class="flex gap-4 items-center">
        <el-icon :size="20"><Position /></el-icon>
        <span>李明</span>
        <el-tag effect="dark">组织者</el-tag>
      </div>
      <div class="flex gap-4 items-start">
        <el-icon :size="20"><Document /></el-icon>
        <div>
          <div>内容介绍:</div>
          <div>
            实施乡村振兴战略，是党的十九大作出的重大决策部署，是决胜全面建成小康社会、全面建设社会主义现代化国家的重大历史任务，是新时代做好“三农”工作的总抓手。人才振兴是乡村振兴“五大振兴”的重要一环，是全面推进乡村振兴的基础。本场讲座围绕郑培坤大学毕业后返乡养猪创业的个人经历和感悟，探索新时代乡村人才振兴对当代大学生的现实意义，引导广大青年学子到乡村一线激扬青春。
          </div>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <el-icon :size="20"><User /></el-icon>
        <div class="text-gray-400">组织者设置了展示参与者列表</div>
        <div>
          <div>
            <el-dropdown>
              <el-button type="warning">
                参会人员
                <el-icon>
                  <arrow-down />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <div class="w-32 flex items-center gap-3">
                      <img
                        src="https://pfpassets.fra1.cdn.digitaloceanspaces.com/media/v1/prompts/portrait_face1_male_1.png"
                        alt=""
                        class="w-6 h-6 rounded-full"
                      />
                      <span>漆一锦</span>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item
                    ><div class="w-32 flex items-center gap-3">
                      <img
                        src="https://pfpassets.fra1.cdn.digitaloceanspaces.com/media/v1/prompts/dating_face1_male_1.png"
                        alt=""
                        class="w-6 h-6 rounded-full"
                      />
                      <span>秦瑞阳</span>
                    </div></el-dropdown-item
                  >
                  <el-dropdown-item
                    ><div class="w-32 flex items-center gap-3">
                      <img
                        src="https://pfpmaker.com/_nuxt/img/pic-4.257858c.png"
                        alt=""
                        class="w-6 h-6 rounded-full"
                      />
                      <span>唐艺齐</span>
                    </div></el-dropdown-item
                  >
                  <el-dropdown-item
                    ><div class="w-32 flex items-center gap-3">
                      <img
                        src="https://pfpmaker.com/_nuxt/img/pic-5.69ea94c.png"
                        alt=""
                        class="w-6 h-6 rounded-full"
                      />
                      <span>李宇昂</span>
                    </div></el-dropdown-item
                  >
                  <el-dropdown-item
                    ><div class="w-32 flex items-center gap-3">
                      <img
                        src="https://pfpmaker.com/_nuxt/img/result-pic-4.54001f9.png"
                        alt=""
                        class="w-6 h-6 rounded-full"
                      />
                      <span>张胄</span>
                    </div></el-dropdown-item
                  >
                  <el-dropdown-item>
                    <div class="w-32 flex items-center gap-3">
                      <img
                        src="https://pfpassets.fra1.cdn.digitaloceanspaces.com/media/v1/prompts/pixar_face1_male_1.png"
                        alt=""
                        class="w-6 h-6 rounded-full"
                      />
                      <span>吴昊天</span>
                    </div></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <el-icon :size="20"><Bell /></el-icon>
        <span>日程开始五分钟前</span>
      </div>
      <div class="flex gap-4 items-center">
        <el-icon :size="20"><View /></el-icon>
        <span>漆一锦</span>
      </div>
    </div>
  </el-drawer>
</template>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
