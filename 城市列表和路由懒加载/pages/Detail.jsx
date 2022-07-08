import React, { Component } from 'react'
import axios from 'axios'
export default class Detail extends Component {
  state = { info: {} }
  getArticleDetail = async (id) => {
    let { data } = await axios.get(
      'https://api.it120.cc/small4/cms/news/detail?id=' + id
    )
    console.log(data)
    this.setState({ info: data.data })
  }
  componentDidMount() {
    console.log(this.props);
    let { id } = this.props.match.params

    this.getArticleDetail(id)
  }

  
  render() {
    let { info } = this.state
    console.log(info)
    return (
      <div>
        <p>
          <span onClick={this.props.history.goBack}>返回</span>
          {info.title}
        </p>
        <img src={info.pic} alt="" />
        <p dangerouslySetInnerHTML={{ __html: info.content }}></p>
      </div>
    )
  }
}
