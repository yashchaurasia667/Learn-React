import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='container my-3 '>
        <h2>NewsMonkey Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Title" description="This is a long as fuck description. This is very important you should read this" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Title" description="This is a long as fuck description. This is very important you should read this" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Title" description="This is a long as fuck description. This is very important you should read this" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
