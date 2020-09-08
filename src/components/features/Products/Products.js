import React, {Component} from 'react';
import styles from './Products.module.scss';
import axios from 'axios';
import Sidebar from '../../common/Sidebar/Sidebar';

import { Link } from 'react-router-dom';

class Products extends Component {
  state = {
    posts: [ ]
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res =>  {
        this.setState({
          posts: res.data.slice(0,10)
        })
      })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className='container'>
        <section>
          <div className='row'>
            <div className='col-12 col-md-8'>
              {posts.map (post => (
                <div
                className={`row ${styles.post}`}
                key={post.id}
                >
                  <div className='row'>
                    <div className='col-12 col-md-3'>
                      <img src="https://via.placeholder.com/150/24f355"></img>
                    </div>
                    <div className='col-12 col-md-9'>
                      <Link to={'/' + post.id}>
                        <h2 className={styles.title}>{post.title}</h2>
                        <p>{post.body.slice(0,100)}... <span className={styles.more}>czytaj więcej →</span></p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`col-12 col-md-4  ${styles.sidebar}`}>
              <Sidebar />
            </div>
          </div>
        </section>
      </div>
    );
  }
};


export default Products;
