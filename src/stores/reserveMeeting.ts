import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReserveMeeingStore = defineStore('reserveMeeting', () => {
  const orgnizeMeeting = ref([
    {
      url: 'https://ts1.cn.mm.bing.net/th/id/R-C.78ec5fd33aba23a6b1c16262dcdddd0b?rik=yVC58nph9EZlQQ&riu=http%3a%2f%2fpic12.nipic.com%2f20110122%2f6011336_083440282804_2.jpg&ehk=5OfDDktSi3ru2ImXNUnSSdbpK74vY3kgj6XpIL5q6pQ%3d&risl=&pid=ImgRaw&r=0',
      theme: '成电讲坛：乡村振兴 我辈先行',
      time: '2023-08-01 19:00-21:00',
      location: '沙河校区第二教学楼101',
      type: '#626aef',
      signStatus: '组织者'
    },
    {
      url: 'https://ts1.cn.mm.bing.net/th/id/R-C.09ef4cc36fd7000fa59ed24836b10f18?rik=xHyj%2bXQqF4O7FA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180521%2fe91e1094336941da9143c0dea5381ef4.jpeg&ehk=ovfLQ1hWrygli2m3Ty%2fLI1q7wb%2b7680UEQlqzQW3iwA%3d&risl=&pid=ImgRaw&r=0',
      theme: '操作系统周五一到四节(赵太银)',
      time: '2023-05-01 19:00-21:00',
      location: '沙河校区二教A区102',
      type: '#626aef',
      signStatus: '组织者'
    }
  ])
  const joinMeeing = [
    {
      url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.-69UlCHNTaUiGTx3zW1mHgHaFL?w=265&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      theme: '成电讲坛：为什么要读文学经典？',
      time: '2023-04-01 19:00-21:00',
      location: '沙河校区三教A区103',
      type: '#76A5CD',
      signStatus: '参与者'
    },
    {
      url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SnyP08Padh8troxkvQ7dYwHaDt?w=332&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      theme: '操作系统周五一到四节(赵太银)',
      time: '2023-03-01 19:00-21:00',
      location: '沙河校区主楼104',
      type: '#76A5CD',
      signStatus: '参与者'
    },
    {
      url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SnyP08Padh8troxkvQ7dYwHaDt?w=332&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      theme: '操作系统周二一到四节(赵太银)',
      time: '2023-02-11 19:00-21:00',
      location: '沙河校区主楼104',
      type: '#76A5CD',
      signStatus: '参与者'
    },
    {
      url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SnyP08Padh8troxkvQ7dYwHaDt?w=332&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      theme: '操作系统周一一到四节(赵太银)',
      time: '2023-02-01 19:00-21:00',
      location: '沙河校区主楼104',
      type: '#76A5CD',
      signStatus: '参与者'
    }
  ]

  return { orgnizeMeeting, joinMeeing }
})
