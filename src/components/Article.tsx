import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd'
import articles from './data/articles.json'

const Article = () => {
  return (
    <div style={{ padding: '40px 60px' }}>
      <Row gutter={[200, 40]} justify="start">
        {articles.map(({ id, title, fullText, img }) => (
          <Col key={id} xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card
              hoverable
              style={{ width: 400, borderRadius: 10 }}
              cover={
                <img
                  alt={title}
                  src={img}
                  style={{
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: '10px 10px 0 0',
                  }}
                />
              }
            >
              <Card.Meta
                title={<div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</div>}
                description={
                  <div style={{ marginTop: 10 }}>
                    <p style={{ fontSize: '1rem' }}>{fullText.slice(0, 60)}...</p>
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
