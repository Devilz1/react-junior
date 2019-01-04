import React from 'react'
import Article from "./Article";

export default function ArticleList({articles}){
    const articleElements = articles.map(article => <div className="col-md-4" key={article.id}><Article article = {article}/></div>)
    return(
        <div className={"row"}>
            {articleElements}
        </div>
    )
}