import React, { Component } from 'react';
import styles from './Comments.module.scss';
import axios from 'axios';

class Comments extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    let id post =  this.props.match.params.post_id;
    let idcomments = this.props.match.params.
    axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
      .then(res => {
        this.setState({
          post: res.data
        })
      })
  }
  render() {

    return (

    )
  }
}

export default Comments
