import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({articles}) {
    const articleElement = articles.map((article, index) =>
        <li key={article.id} className="article-list">
            <Article article={article} defaultOpen = {index === 0}/>
        </li>
    );
    return (
        <ul>
            {articleElement}
        </ul>
    )
}