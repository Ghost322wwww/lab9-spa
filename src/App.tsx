import 'antd/dist/reset.css'
import { Card, Button, DatePicker } from 'antd'
import type { DatePickerProps } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'

import Hello from './components/Hello'
import Goodbye from './components/Goodbye'
import Article from './components/Article'
import Login from './components/Login'
import Register from './components/Register'
import DetailArticle from './components/DetailArticle'

let counter = 0

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString)
}
const onClick = () => {
  console.log(counter++)
}

const Home = () => (
  <div style={{ padding: 20 }}>
    <Hello name="Web API Development" />
    <Goodbye name="everyone" />
    <Article />

    <Card title="Default card" style={{ width: 300, marginTop: 20 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content 123</p>
    </Card>

    <br />
    <Button type="primary" onClick={onClick}>Click Me</Button>
    <Button type="primary" danger style={{ marginLeft: 10 }}>Danger Button</Button>

    <br /><br />
    <DatePicker onChange={onChange} />
  </div>
)

function App() {
  return (
    <div style={{ padding: 20 }}>
      {/* 導覽列 */}
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      {/* 路由內容 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/a/:id" element={<DetailArticle />} />
      </Routes>
    </div>
  )
}

export default App
