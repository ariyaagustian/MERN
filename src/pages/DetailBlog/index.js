import React from 'react'
import {RegisterBg} from '../../assets'
import { Gap, Link } from '../../components'
import './detailBlog.scss'
import {useHistory} from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img src={RegisterBg} alt="thumb" className="img-cover"></img>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Exercitation dolor aliquip proident et nostrud qui elit sint. Non ex nulla consequat aliquip. Id proident occaecat aute aute elit aliquip ipsum ea qui exercitation pariatur cupidatat minim. Consectetur reprehenderit non officia ipsum id minim ipsum. Esse enim non id tempor ullamco laborum commodo tempor aliquip do officia quis exercitation.</p>
            <Gap height={20}></Gap>
            <Link title="Kembali ke Home" onClick={()=> history.push('/')}></Link>
        </div>
    )
}

export default DetailBlog