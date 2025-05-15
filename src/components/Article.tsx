import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd'
import articles from './data/articles.json'

const Article = () => {
  return (
    <div style={{ padding: '40px 80px' }}>
  <Row gutter={[24, 32]} justify="start">
    {articles.map(({ id, title, fullText, img }) => (
      <Col xs={24} sm={12} md={8} lg={6} key={id}>
        <Card
          hoverable
          style={{ width: '350', borderRadius: 10 }}
          cover={
            <img
              alt={title}
              src={img}
              style={{
                height: 22,
                objectFit: 'cover',
                borderRadius: '10px 10px 0 0',
              }}
            />
          }
        >
          <Card.Meta
            title={<div style={{ fontSize: '1.1rem' }}>{title}</div>}
            description={
              <div style={{ marginTop: 10 }}>
                <p style={{ fontSize: '0.95rem' }}>{fullText.slice(0, 60)}...</p>
                <Link to={`/a/${id}`}>Details</Link>
              </div>
            }
          />
        </Card>
      </Col>
    ))}
  </Row>

    </div>
  )
}

export default Article
