// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Pagination from 'react-bootstrap/Pagination';
// import { PaginationControl } from 'react-bootstrap-pagination-control';
// import { Container } from 'react-bootstrap';

// export default function Pages() {
//   const [page, setPage] = useState(1)

//   return <PaginationControl
//     page={page}
//     between={4}
//     total={250}
//     limit={20}
//     changePage={(page) => {
//       setPage(page); 
//     }}
//     ellipsis={1}
//   />
// }

import React, { Component } from 'react';
import axios from 'axios';

import Posts from './Components/Posts';
import Pagination from './Components/Pagination_new';

export class Pages extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 5
  };

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({ posts: results.data });
      this.setState({ loading: false });
    };

    getPosts();
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="container">
        <h1 className="my-5 text-primary text-center">React Pagination</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </div>
    )
  }
}

export default Pages
