import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'

function App(){
    const mainTitle = <h1>Main title</h1>
    return (
        <div className = "two-block" style = {{background: 'silver'}}>
            {mainTitle}
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App