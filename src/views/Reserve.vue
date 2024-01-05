<script setup lang="ts">
import { NDataTable, NButton, useMessage, NTag, NText } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { ref, h, onMounted } from 'vue'
import { getAllMeetings } from '@/api/meeting.js'
import { useRouter } from 'vue-router'
import axios from 'axios'
onMounted(async () => {
  console.log('mounted')
  // const res = await getAllMeetings()
  // console.log(res)
  // axios.get('http:/139.155.147.127/meetings/selectAll').then((res) => {
  // console.log(res)
  // })
})
const router = useRouter()
const message = useMessage()
type RowData = {
  name: string
  location: string
  capacity: string
  status: string
  tips:string
  // action: string
}

const createColumns = ({
  sendMail
}: {
  sendMail: (row: RowData) => void
}): DataTableColumns<RowData> => {
  return [
    {
      title: '会议室名称',
      key: 'name'
    },
    {
      title: '会议室位置',
      key: 'location'
    },
    {
      title: '会议室容量',
      key: 'capacity'
    },
    {
      title: '会议室状态',
      key: 'status',
      render(row) {
        return h(
          NTag,
          {
            size: 'small',
            type: row.status === '空闲' ? 'success' : 'error'
          },
          row.status
        )
      }
    },
    {
      title: '操作',
      key: 'action',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => {
              sendMail(row)
            }
          },
          '查看详情'
        )
      }
    },
    {
      title: '',
      key: 'tips',
      render(row) {
        return h(
          NText,
          {
            size: 'large', 
            style: 'color: #ff0000'
          },
          row.tips
        )
      }
    },
  ]
}
const createData = (): RowData[] => [
  {
    name: '二教101',
    location: '沙河校区第二教学楼101',
    capacity: '100人',
    status: '空闲',
    tips:'系统智能推荐'
    // action: '预定'
  },
  {
    name: '二教103',
    location: '沙河校区第二教学楼103',
    capacity: '150人',
    status: '使用中',
    tips:'系统智能推荐'
    // action: '预定'
  },
  {
    name: '三教203',
    location: '沙河校区第三教学楼203',
    capacity: '150人',
    status: '使用中',
    tips:''
    // action: '预定'
  },
  {
    name: '会议室3',
    location: '沙河校区主楼215',
    capacity: '30人',
    status: '空闲',
    tips:''
    // action: '预定'
  },
  {
    name: '会议室4',
    location: '清水河校区品A301',
    capacity: '30人',
    status: '空闲',
    tips:''
    // action: '预定'
  },
  {
    name: '会议室5',
    location: '沙河校区主楼301',
    capacity: '30人',
    status: '使用中',
    tips:''
    // action: '预定'
  }
]
const createData2 = (): RowData[] => [
  {
    name: '教研室101',
    location: '沙河校区第二教学楼101',
    capacity: '100人',
    status: '空闲',
    tips:'系统智能推荐'
    // action: '预定'
  },
  {
    name: '教研室3',
    location: '沙河校区主楼215',
    capacity: '30人',
    status: '空闲',
    tips:''
    // action: '预定'
  },
  {
    name: '教研室4',
    location: '清水河校区品A301',
    capacity: '30人',
    status: '空闲',
    tips:''
    // action: '预定'
  }
]
const form = ref({
  date: '',
  status: '所有',
  input:''
})
const formLabelWidth = '90px'
const options = [
  {
    value: '空闲',
    label: '空闲'
  },
  {
    value: '使用中',
    label: '使用中'
  },
  {
    value: '所有',
    label: '所有'
  }
]
const flag = ref(false)
const handle = () => {
  flag.value = true
}
</script>

<template>
  <div class="p-3 flex flex-col">
    <el-form :model="form">
      <el-form-item label="选择日期" :label-width="formLabelWidth">
        <el-date-picker v-model="form.date"></el-date-picker>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <el-select v-model="form.status">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="输入" :label-width="formLabelWidth">
        <el-input v-model="form.input" placeholder="输入会议室名称或位置" style="width: 220px;"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="w-40" @click="handle">搜索</el-button>
    <div class="mt-3 mb-3 ml-3 font-bold">会议室列表</div>
    <div>
      <n-data-table
        :columns="
          createColumns({
            sendMail: (row) => {
              message.success('预定' + row.name), router.push('/reserve/meetingroomdetail')
            }
          })
        "
        :data="flag ? createData2() : createData()"
      ></n-data-table>
    </div>
  </div>
</template>
