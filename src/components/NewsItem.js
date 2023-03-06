import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="card">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}</span>
            <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0b5ahhuXyR6oKSLDAv82enNS79wucsIUWw&usqp=CAU"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Anonymous":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
