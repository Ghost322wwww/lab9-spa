import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd'
import articles from './data/articles.json'


const Article = () => {
  return (
    <Row justify="space-around" gutter={[16, 16]}>
      {articles.map(({ id, title, fullText }) => (
        <Col span={6} key={id}>
          <Card title={title} style={{ width: 300 }}>
            <p>{fullText}</p>
            <Link to={`/a/${id}`}>Details</Link>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Article
