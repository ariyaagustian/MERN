import React from 'react'
import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import {useHistory} from 'react-router-dom'

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post"></img>
            <div className="content-detail">
                <p className="title">Title blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Eiusmod culpa veniam magna Lorem pariatur exercitation eiusmod proident ad Lorem id voluptate. Quis elit nostrud nisi elit consequat ullamco nostrud eu culpa commodo sunt elit ad fugiat. In culpa veniam ex proident duis irure amet cupidatat duis quis ex pariatur in. Proident dolore nostrud et sint sint adipisicing. Duis tempor veniam irure culpa magna excepteur exercitation laborum amet nisi nostrud consectetur laborum. Sint nostrud dolore ad sit.</p>
                <Gap height={20}></Gap>
                <Button title="View Detail" onClick={() => history.push('/detail-blog')}></Button>
            </div>
        </div>
    )
}

export default BlogItem
