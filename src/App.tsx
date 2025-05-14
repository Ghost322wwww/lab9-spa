import 'antd/dist/reset.css'
import { Card, Button, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd'
import React from 'react'
import Hello from './components/Hello'
import Goodbye from './components/Goodbye'
import Article from './components/Article'




let counter = 0

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString)
}
const onClick = () => {
  console.log(counter++)
}

function App() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Hello name="Web API Development" />
        <Goodbye name="everyone" />

        <Article/>

        <Card title="Default card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>

        <br />
        <Button type="primary" onClick={onClick}>Click Me</Button>
        <Button type="primary" danger>Danger Button</Button>

        <br /><br />
        <DatePicker onChange={onChange} />
      </div>
    </>
  )
}

export default App
