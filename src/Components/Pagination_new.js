import React from "react";
import { Pagination } from 'react-bootstrap';  

export function Pagination_new() {
    return (
        <>  
        <div className='container p-2'>  
        <Pagination>  
            <Pagination.Item>1</Pagination.Item>  
            <Pagination.Item active>2</Pagination.Item>  
            <Pagination.Item>3</Pagination.Item>  
            <Pagination.Item>4</Pagination.Item>  
            <Pagination.Item>5</Pagination.Item>  
            </Pagination>  
            </div>  
        </>  
    );  
}

export default Pagination_new