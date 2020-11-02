import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'


const Home = () => {
    const [dataBlog, setDataBlog] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(result => {
            console.log('Data API', result.data)
            const responseAPI = result.data;

            setDataBlog(responseAPI.data);
        })
        .catch(err => {
            console.log('error', err)
        })
    }, [])
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={()=> history.push('/create-blog')}></Button>
            </div>
            <Gap height={20}></Gap>
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem 
                        key={blog._id} 
                        image={`http://localhost:4000/${blog.image}`} 
                        title={blog.title} 
                        body={blog.body}
                        name={blog.author.name}
                        date={blog.createdAt} />
                })}
            </div>
            <div className="pagination">
                <Button title="Previous"></Button>
                <Gap width={20}></Gap>
                <Button title="Next"></Button>
            </div>
                <Gap height={20}></Gap>
        </div>
    )
}

export default Home
