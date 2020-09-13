import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'
import {useHistory} from 'react-router-dom'

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg"></img>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"></Input>
                <Gap height={18}/>
                <Input label="Email" placeholder="Email"></Input>
                <Gap height={18}/>
                <Input label="Password" placeholder="Password"></Input>
                <Gap height={50}/>
                <Button title="Register" onClick={()=> history.push('/login')}></Button>
                <Gap height={100}/>
                <Link title="Kembali ke Login" onClick={()=> history.push('/login')}></Link>
            </div>
        </div>
    )
}

export default Register;
