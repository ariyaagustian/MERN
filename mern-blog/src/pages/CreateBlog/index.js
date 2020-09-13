import React from 'react'
import { Input, Button, Upload, TextArea, Gap, Link } from '../../components'
import './createBlog.scss'
import {useHistory} from 'react-router-dom'

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push('/')}></Link>
            <p className="title">Create new blog post</p>
            <Input label="Post Title"></Input>
            <Upload></Upload>
            <TextArea></TextArea>
            <Gap height={20}></Gap>
            <div className="button-action">
                <Button title="Save"></Button>
            </div>
        </div>
    )
}

export default CreateBlog
