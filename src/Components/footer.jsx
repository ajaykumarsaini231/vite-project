import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Itme from "./footer_item";

function Footer({logo}){
    let whysales = [
       'Why Salesforce','What is CRM?','Explore All Products','SaaS','Customer Success','Product Pricing'
    ]

    let About = ['Our Story',
        'Careers',
        'Press','Blog','Security and Performance','Salesforce.org','Best CRM Software','Sustainability','Legal','Give us your Feedback']

    let popular = [
       ' New Release Features',
        'Salesforce Mobile App',
        'Business App Store',
        'Dreamforce',
        'CRM Software',
       ' Salesforce Plus',
        'Salesforce for startups'
    ]    
    return<>
    <div className="Footer container">
            <div className="social">
                <a className='logo' onClick={logo} href=".Header"><img src="./src/assets/asset0.png" alt="" size={80}/></a>
                <div className="icons">
                    <a href=""><CiInstagram size={30}/></a>
                    <a href=""> <FaFacebookSquare size={30} />     </a>
                    <a href=""><FaLinkedin size={30} /> </a>
                    <a href=""><FaYoutube size={30} />  </a>                
                    <a href=""><FaXTwitter size={30} /></a>
                </div>
                <h5>Call us at 1800-420-7332</h5>
         </ div>
        
            <Itme key={whysales} name={'New to Salesforce?'}  item = {whysales}></Itme>

         
        
            <Itme key={whysales} name={'About Salesforce'} item = {About}></Itme>
         
            <Itme key={popular} name='Popular Links'  item = {popular}></Itme>
         
    </div>
    <div className="container">
        <p className="text-stat my-2">© Designed and built with all the love in the world by the <a href="https://www.linkedin.com/in/ajay-kumar-saini-44b99a284/">Ajay Kumar Saini</a> with the help of <a href="">Bootstrap</a>.</p>
    </div>
    </>
}

export default Footer;