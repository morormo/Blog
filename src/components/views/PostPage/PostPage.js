import React, { Component } from 'react';
import axios from 'axios';
import styles from './PostPage.module.scss';
import Sidebar from '../../common/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class PostPage extends Component {

  state = {
    post: [ ],
    comments: [ ],
  }

  componentDidMount() {
    let id =  this.props.match.params.post_id;

    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        })
      })
    axios.get('https://jsonplaceholder.typicode.com/posts/'+ id +'/comments')
      .then(res => {
        this.setState({
          comments: res.data
        })
      })

  }
  render(){
    const { post, comments } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <div className='row'>
              <div className={`col-12 ${styles.article}`}>
                <div className='row'>
                  <div className={`col-12 ${styles.image}`}>

                  </div>
                  <div className='col-12'>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
              <div className={`col-12 ${styles.comments}`}>
                <h3>KOMENTARZE {this.state.comments.length}</h3>
                {comments.map (comment => (
                  <div className={`row ${styles.comment}`} key={comment.id}>
                    <div className={`col-1 ${styles.icon}`}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={`col-10 ${styles.content}`}>
                      <h4>{comment.email}</h4>
                      <p>{comment.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`col ${styles.addcomments}`}>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-4 ${styles.sidebar}`}>
            <Sidebar />
          </div>
        </div>
      </div>
    )
  }

}

export default PostPage;
