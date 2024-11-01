import { EditOutlined, MoreOutlined } from '@ant-design/icons'
import { useQuery, useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import CustomTable from "../components/CostomTable"
import { useNavigate } from 'react-router-dom'


function Home() {
  const HTTP = import.meta.env.VITE_API
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  function handleMoreBtnClick(id){
    navigate(`${id}`)
    queryClient.invalidateQueries(['singleStudent'])
  }

  function getAllStudents(){
    return axios.get(`${HTTP}/students`).then(res => (
      res.data.map((item, index) => {
        item.key = index + 1
        item.action = <div className='flex items-center space-x-5'>
          <MoreOutlined onClick={() => handleMoreBtnClick(item.id)} className='rotate-[90deg] cursor-pointer'/>
          <EditOutlined className='cursor-pointer'/>
        </div>
        return item
      })
    ))
  }

  const {data:studentsData = []} = useQuery({
    queryKey:["students"],
    queryFn:getAllStudents
  })

  return (
    <div className='p-5'>
      <CustomTable data={studentsData}/>
    </div>
  )
}

export default Home