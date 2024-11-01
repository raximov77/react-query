import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function Single() {
  const HTTP = import.meta.env.VITE_API
  const {id} = useParams()

  const {data:singleData = {}} = useQuery({
    queryKey:['singleStudent'],
    queryFn:() => axios.get(`${HTTP}/students/${id}`).then(res => res.data)
  })
  return (
    <div>
      {singleData.name} - {singleData.surname}
    </div>
  )
}

export default Single