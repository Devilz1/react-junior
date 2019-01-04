import React, {Component} from 'react'

class Article extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }

        // this.handleClick = handleClick.bind(this)
    }

    render(){
        const {article} = this.props
        const bodyArticle = this.state.isOpen && <section>{article.text}</section>

        return (
            <div className = "one-block">
                <h2>
                    {article.title}
                </h2>
                {bodyArticle}
                <br/>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? "Закрыть" : "Открыть"}
                </button>
                <h4>Creation date: {(new Date(article.date)).toDateString()}</h4>
            </div>
        )
    }

    handleClick = () => {
        console.log("clicked")
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article