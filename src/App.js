import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allComments: [{
        id: 1,
        name: "User 1",
        message: "Will sync up you later",
        avatarUrl: "/assets/1.jpg"
      },
      {
        id: 2,
        name: "User 2",
        message: "Call me",
        avatarUrl: "/assets/2.jpg"
      },
      {
        id: 3,
        name: "User 3",
        message: "You have to find better solution",
        avatarUrl: "/assets/3.jpg"
      },
      {
        id: 4,
        name: "User 4",
        message: "Yeah that correct @User 3",
        avatarUrl: "/assets/4.jpg"
      },
      {
        id: 5,
        name: "User 5",
        message: "But for the time being go ahead and push your changes",
        avatarUrl: "/assets/5.jpg"
      },
      {
        id: 6,
        name: "User 6",
        message: "That is my plan.",
        avatarUrl: "/assets/6.jpg"
      },
      {
        id: 7,
        name: "User 7",
        message: "Come and we would have get together",
        avatarUrl: "/assets/7.jpg"
      },
      {
        id: 8,
        name: "User 8",
        message: "ok Sure",
        avatarUrl: "/assets/8.jpg"
      },
      {
        id: 9,
        name: "User 9",
        message: "OK let's up meetup",
        avatarUrl: "/assets/9.jpg"
      },
      {
        id: 10,
        name: "User 10",
        message: "Have a good night guyz",
        avatarUrl: "/assets/10.jpg"
      }],
      pageSize: 2,
      currentPage: 0,
      pageComments: [],
    }

  }
  componentDidMount() {
    this.onPage('load')
  }
  onPage(navState) {
    switch (navState) {
      case 'prev':
      if (this.state.currentPage - 2 >= 0) {
        this.setState({
          currentPage: this.state.currentPage - 2,
          pageComments: [...this.state.allComments].splice(this.state.currentPage - 2, this.state.pageSize)
        })
      }
        break;
      case 'next':
        if (this.state.currentPage + 2 <= this.state.allComments.length) {
          this.setState({
            currentPage: this.state.currentPage + 2,
            pageComments: [...this.state.allComments].splice(this.state.currentPage + 2, this.state.pageSize)
          })
        }
        break;
      default:
        this.setState({
          currentPage: 0,
          pageComments: [...this.state.allComments].splice(this.state.currentPage, this.state.pageSize)
        })
        break;
    }

  }
  render() {
    return (
      <div className="App">
        <h1>Comments</h1>

        {this.state.pageComments.map((comment) =>
          <div key={comment.id} className="comment">
            <div className="img-circle">
              <img src={comment.avatarUrl} alt="each-img" width="64" />
            </div>
            <div className="comment-info">
              <h4>{comment.name}</h4>
              <p>{comment.message}</p>
            </div>
          </div>
        )}

        <div className="paginator">
          <div className="page-range">{this.state.currentPage}&nbsp;/&nbsp;{this.state.allComments.length / this.state.pageSize}</div>
          <div className="page-nav">
            <button onClick={() => this.onPage('prev')}>Prev</button>
            <button onClick={() => this.onPage('next')} >Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
