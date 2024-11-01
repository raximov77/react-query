import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const HTTP = import.meta.env.VITE_API
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [age, setAge] = useState("")

  function createStudent(body){
    return axios.post(`${HTTP}/students`, body)
  }

  const mutation = useMutation({
    mutationFn:createStudent,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:['students']})
      navigate(-1)
    }
  })

  function handleSubmit(e){
    e.preventDefault()
    const data = {name, surname, age}
    mutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit} className='w-[600px] space-y-5 mx-auto mt-5'>
      <Input value={name} onChange={(e) => setName(e.target.value)} size='large' placeholder='Enter name' allowClear/>
      <Input value={surname} onChange={(e) => setSurname(e.target.value)} size='large' placeholder='Enter surname' allowClear/>
      <Input value={age} onChange={(e) => setAge(e.target.value)} size='large' placeholder='Enter age' allowClear/>
      <Button htmlType='submit' className='w-full' size='large' type='primary'>Submit</Button>
    </form>
  )
}

export default Add