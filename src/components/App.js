import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    const mainTitle = <h1 className={"display-3"}>Main title</h1>
    return (
        <div className = "container-fluid px-0">
            <div className="jumbotron">
                {mainTitle}
            </div>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App