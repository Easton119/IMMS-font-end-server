<script setup lang="ts">
import { ref, reactive } from 'vue'
const info = {
  location: '沙河二教 201',
  capacity: '20人',
  openTime: '8:00-22:00',
  status: '空闲',
  num: 2
}
const person = [
  { name: '张三', time: '2023/6/13-8:00 ~ 2023/6/13-10:00' },
  { name: '李四', time: '2023/6/13-10:00 ~ 2023/6/13-12:00' }
]
const alertTimeValue = ref('')
const alertTime = [
  {
    value: 'Option1',
    label: '提前五分钟'
  },
  {
    value: 'Option2',
    label: '提前十分钟'
  },
  {
    value: 'Option3',
    label: '提前二十分钟'
  },
  {
    value: 'Option4',
    label: '提前半小时'
  },
  {
    value: 'Option5',
    label: '提前一小时'
  }
]
const signValue = ref('')
const sign = [
  {
    value: '1',
    label: '需要'
  },
  {
    value: '2',
    label: '不需要'
  }
]
const personName = ref('')
const formLabelWidth = '140px'
const date = ref('')
const value1 = ref<[]>([])
const form = reactive({
  theme: '',
  intro: '',
  date: '',
  timeRange: '',
  describe: '',
  candidate: [] as Array<string>
})

const isShow = ref(false)
const Handle = () => {
  isShow.value = true
}
const clearForm = () => {
  form.theme = ''
  form.intro = ''
  form.date = ''
  form.timeRange = ''
  form.describe = ''
  form.candidate = []
}
const cancel = () => {
  isShow.value = false
  clearForm()
}
const confirm = () => {
  isShow.value = false
  clearForm()
}
const addCandidate = () => {
  form.candidate.push(personName.value)
  personName.value = ''
}
const handleClose = (i: any) => {
  form.candidate.splice(i, 1)
}
</script>

<template>
  <div class="w-full p-2 flex flex-col items-center">
    <div class="w-11/12">
      <div class="flex bg-gray-100 h-16">
        <div class="w-1/5 th">房间信息</div>
        <div class="w-4/5 th">详情</div>
      </div>
      <div class="flex">
        <div class="w-1/5 td">房间地址</div>
        <div class="w-4/5 td">
          {{ info.location }}
        </div>
      </div>
      <div class="flex">
        <div class="w-1/5 td">房间容量</div>
        <div class="w-4/5 td">{{ info.capacity }}</div>
      </div>
      <div class="flex">
        <div class="w-1/5 td">房间开启时间</div>
        <div class="w-4/5 td">{{ info.openTime }}</div>
      </div>
      <div class="flex">
        <div class="w-1/5 td">房间使用情况</div>
        <div class="w-4/5 td">当前有{{ info.num }}个预约</div>
      </div>
    </div>
    <div class="w-11/12">
      <div class="flex bg-gray-100 h-16">
        <div class="w-1/5 th">预约者</div>
        <div class="w-4/5 th">预约时间</div>
      </div>
      <div class="flex" v-for="(item, index) in person" :key="index">
        <div class="w-1/5 td">{{ item.name }}</div>
        <div class="w-4/5 td">
          {{ item.time }}
        </div>
      </div>
    </div>
    <el-button class="mt-10 w-36" type="primary" @click="Handle">立即预约</el-button>
  </div>
  <el-dialog v-model="isShow" title="预约会议" @close="clearForm">
    <el-form :model="form">
      <el-form-item label="添加主题" :label-width="formLabelWidth">
        <el-input v-model="form.theme" autocomplete="off" />
      </el-form-item>
      <el-form-item label="选择日期" :label-width="formLabelWidth">
        <el-date-picker v-model="form.date" type="date" placeholder="Pick a day"></el-date-picker>
      </el-form-item>
      <el-form-item label="时间范围" :label-width="formLabelWidth">
        <el-time-picker
          v-model="form.timeRange"
          is-range
          range-separator="To"
          start-placeholder="Start time"
          end-placeholder="End time"
        >
        </el-time-picker>
      </el-form-item>
      <el-form-item label="简介" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.describe" placeholder="添加描述"></el-input>
      </el-form-item>

      <el-form-item label="添加提醒" :label-width="formLabelWidth">
        <el-select v-model="alertTimeValue" placeholder="Select">
          <el-option
            v-for="item in alertTime"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-icon size="20" class="ml-5"><Bell /></el-icon>
      </el-form-item>
      <el-form-item label="签到" :label-width="formLabelWidth">
        <el-select v-model="signValue" placeholder="Select">
          <el-option
            v-for="item in sign"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-icon size="20" class="ml-5"><Checked /></el-icon>
      </el-form-item>

      <el-form-item label="参与者" :label-width="formLabelWidth">
        <el-input type="text" placeholder="添加联系人或邮箱" v-model="personName" class="w-52" />
        <el-button color="#626aef" class="ml-5" @click="addCandidate()">添加</el-button>
      </el-form-item>
      <el-form-item label=" " :label-width="formLabelWidth">
        <el-tag
          v-for="(item, index) in form.candidate"
          :key="index"
          closable
          @close="handleClose(index)"
          class="mt-2 mr-2 text-lg p-2"
          >{{ item }}</el-tag
        >
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="confirm"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>
.btn {
  width: 200px;
  height: 50px;
  color: white;
  line-height: 50px;
  text-align: center;
  background: #3286e1;
  border-radius: 2px;
}

.th {
  border: 1px solid #ccc;
  border-top: none;
  border-right: none;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border: 1px solid rgb(229, 231, 235);
}
.td {
  border: 1px solid rgb(229, 231, 235);
  border-top: none;
  border-right: none;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
