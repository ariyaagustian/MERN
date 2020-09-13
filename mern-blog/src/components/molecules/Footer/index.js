import React from 'react'
import { Logo } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"></img>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={Logo} alt="Logo"></img>
                </div>
                <div className="social-wrapper">
                    <Icon img={"https://img.icons8.com/carbon-copy/100/000000/facebook-new.png"}/>
                    <Icon img={"https://img.icons8.com/carbon-copy/100/000000/twitter.png"}/>
                    <Icon img={"https://img.icons8.com/carbon-copy/100/000000/instagram.png"}/>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
