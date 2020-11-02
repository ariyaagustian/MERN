import React from 'react'
import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import {useHistory} from 'react-router-dom'

const BlogItem = (props) => {
    const history = useHistory();
    const {image, title, name, date, body} = props;

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post"></img>
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20}></Gap>
                <Button title="View Detail" onClick={() => history.push('/detail-blog')}></Button>
            </div>
        </div>
    )
}

export default BlogItem
