import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  
  const [input, setInput] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  })

  const navigate = useNavigate()
  const location = useLocation()

  const drugId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/drugs/" + drugId, input)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='form'>
      <h1>Update The Drug</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='description' onChange={handleChange} name='desc' />
      <input type="number`" placeholder='price' onChange={handleChange} name='price' />
      <input type="text" placeholder='cover picture' onChange={handleChange} name='cover'/>
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update