import React, { Component } from 'react'
import axios from 'axios'
import './home.scss'
import { withRouter } from 'react-router-dom'
export default withRouter(class Home extends Component {
  state = {article:[]}
  gearticle = async ()=>{
    const {data} = await axios.get("https://api.it120.cc/small4/cms/news/list")
    this.setState({article:data.data})
    console.log(data);
  }
  componentDidMount() { 
    this.gearticle()
   }
   RouterPush = (id)=>{
    this.props.history.push('/detail/'+id)
   }
  render() {
    const {article} = this.state
    return (
      <div className='article'>
        <ul>
        {article.map(item=>{
          return (
            <li key={item.id} onClick={()=>{this.RouterPush(item.id)}}>
              <img src={item.pic} alt="暂无" />
              <p className='title' dangerouslySetInnerHTML={{__html:item.title}}></p>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
)