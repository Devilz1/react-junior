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
        const bodyArticle = this.state.isOpen && <section className={"card-text"}>{article.text}</section>

        return (
            <div className = "card my-3">
                <div className="card-header d-flex justify-content-between align-content-center">
                    <h2 className={"card-title float-left"}>
                        {article.title}
                    </h2>
                    <button className={"card-link float-right align-self-center"} onClick={this.handleClick}>
                        {this.state.isOpen ? "Закрыть" : "Открыть"}
                    </button>
                </div>
                <div className="card-body">
                    {bodyArticle}
                    <h6 className={"card-subtitle text-muted my-4"}>Creation date: {(new Date(article.date)).toDateString()}</h6>
                </div>
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