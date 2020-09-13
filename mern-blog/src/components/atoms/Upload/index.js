import React from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'

const Upload = () => {
    return (
        <div className="upload">
            <img src={LoginBg} alt="preview" className="preview"></img>
            <input type="file"></input>
        </div>
    )
}

export default Upload
