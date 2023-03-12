import React, { useCallback, useEffect, useState } from 'react';
import axiosClient from './api/axiosClient';
import { Table } from 'react-bootstrap';
import MyPagination from './Components/MyPagination';
// import 'bootstrap/dist/css/bootstrap.min.css';

export function About() {
  const [data, setData] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axiosClient.get("books", { params: {page, limit: 5} })
        const res = [
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"},
          { data: "title 1"}
        ]
        setData({books: res.data, totalPage: 5})
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [page])
  const handleChangePage = useCallback((page) => {
    setPage(page)
  }, [])
  return (<>
       <h1>Page About</h1>
       <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.books && data.books.lenght > 0 && data.books.map((book, index) => (
            <tr>
              <td>{(page - 1) * 5 + (index + 1)}</td>
              <td>{book.name}</td>
            </tr>
          ))}
        </tbody>
       </Table>
       {
        data.totalPage > 1 && (
          <MyPagination 
          total={data.totalPage}
          current={page}
          onChangePage={handleChangePage}
          />
        )
       }
  </>
  );
}