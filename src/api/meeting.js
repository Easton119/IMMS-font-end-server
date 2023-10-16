import axios from '@/utils/request'

//请求全部会议室的函数
export const getAllMeetings = () => axios.get('/meetings/selectAll')
