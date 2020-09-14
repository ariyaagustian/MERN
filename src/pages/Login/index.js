import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBg"></img>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email"></Input>
                <Gap height={18} />
                <Input label="Password" placeholder="Password"></Input>
                <Gap height={50} />
                <Button title="Login" onClick={()=> history.push('/')}></Button>
                <Gap height={100} />
                <Link title="Belum punya akun?" onClick={()=> history.push('/register')}></Link>
            </div>
        </div>
    )
}

export default Login
