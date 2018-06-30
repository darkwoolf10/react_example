import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{
    state = {
        reverted: false
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">My app</h1>
                    <button className="btn" onClick={this.revert}>Revert</button>
                </div>
                <ArticleList articles={this.state.reverted ? articles.reverse() : articles}/>
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App