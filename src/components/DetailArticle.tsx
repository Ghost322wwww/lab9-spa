import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from './data/articles.json';

const DetailArticle = () => {
  const { aid } = useParams();
  const article = articles.find((a) => a.id === Number(aid));

  if (!article) {
    return <h1>This article cannot be found</h1>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{article.title}</h1>
      <p>{article.fullText}</p>
      <br />
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default DetailArticle;
