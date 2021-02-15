import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
                console.log(this.state.article)
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.article.title}</h1>
                <p>{this.state.article.body2}</p>
                <img src={this.state.article.img1} />
            </div>
            

            // <Card title={this.state.article.title}
            // cover={<img src={this.state.article.img1}></img>}>
            //     <p>{this.state.article.body2}</p>
            // </Card>
        )
    }
}

export default ArticleDetail;