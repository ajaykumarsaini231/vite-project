
import "bootstrap/dist/css/bootstrap.min.css"
import '../../src/App.css'
import { FaSearch } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";


function Header({button,logo}){
     
    
    let ameri =[
       
        'América Latina (Español)',
        'Brasil (Português)',
        'Canada (English)',
        'Canada (Français)',
        'United States (English)'
    ]
    let Europ =[
        'Europe, Middle East, and Africa',
        'España (Español)',
        'Deutschland (Deutsch)',
        'France (Français)',
        'Italia (Italiano)',
        'Nederland (Nederlands)',
        'Sverige (Svenska)',
        'United Kingdom (English)',
        'All other countries (English)'
    ]
    let asia =[
        'Asia Pacific',
        'Australia & New Zealand (English)',
        'India (English)',
        '日本 (日本語)',
        '中国 (简体中文)',
        '台灣 (繁體中文)',
        '한국 (한국어)',
        'ประเทศไทย (ไทย)',
        'All other countries (English)'
    ]
    let x,y,z = ''
    let [onhover,  setonhover] = useState('');
    let [menuhover, setmenuhover] =useState('')
    let [loginhover, setloginhover] =useState('')
    function menuclick(){
        if(y==''){
            y ='menu-hidden'
            setmenuhover(y)
            z=x=''
            setonhover('')
            setloginhover('')
        }else{
            y=''
            
            setmenuhover('')
        }
    }
    function loginclick(){
        if(z==''){
            z ='login-hidden'
            setloginhover(z)
            y=x='' 
            setmenuhover('')
           
            setonhover('')
            
        }else{
            z=''
            
            setloginhover('')
        }
    }
    function handleonhover(e){
        x='hidden'
        console.log('hii')
        return <>
           
           {  setonhover(x) }
        </>
    }
    function handleonleave(e){
        if(x =='hidden'){ 
            x ='';
            console.log('hello')
            return setonhover(x)
        }
        
        else{  
            
             x= 'hidden'
             console.log('hii')
             
            z=y=''
            setmenuhover(y)
            setloginhover('')
             return setonhover(x)
        }
        
    }
    return <>
       <div className="Header">
        <div className="mini-header1">
            <p className='logo' onClick={logo} style={{cursor:"pointer"}} ><img src="./src/assets/asset0.png" alt="" /></p>
            <p >Products</p>
            <p >Industries</p>
            <p >Customers</p>
            <p >Learing</p>
            <p >Support</p>
         <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </p>
          <ul className="dropdown-menu px-4">
            <li><a className="dropdown-item" href="#">Compney</a></li>
            <li><a className="dropdown-item" href="#">SelesForce+</a></li>        
          </ul>
        </li>
        </div>
        <div className="mini-header1-copy" style={{cursor:"pointer"}}>
          <IoMdMenu onMouseDown={menuclick} size={40}/>
        </div>
        <div className={`menu ${menuhover}`}>
        
        <div>
        <ul style={{cursor:"pointer"}}>

            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
        
        </ul>
        <ul className="text-stat">
            <li onMouseDown={loginclick}><h6><a   style={{cursor:"pointer"}} > <FaUser  />  Login</a></h6> <FaChevronRight /></li>
            <li><h6><span><FaPhoneAlt /> Contact</span> </h6> <FaChevronRight /></li>
            <li className="earth" onMouseDown={handleonleave}> <h6><IoEarthSharp   size={22} /> Change Region</h6><FaChevronRight /></li>
        </ul>
         <button type="button" class="btn btn-link text-stat">Link</button>
        </div>
        </div>
        <div className={`menu py-1 ${loginhover} px-4`}>
            
        <ul >
             <a className="flex-end my-4 mx-3"><h4 size={25} onMouseDown={loginclick}> X </h4></a>
            <li><h5>login</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
            <li><h5>Products</h5> <FaChevronRight /> </li>
         
        </ul>
        
    </div>
       
        <div className="mini-header2">
        <div className="contect">
            <p><u>Contect Us</u></p>
              1800-420-7332
         </div>
            <div className="icon">
                <a href="" className="search"><FaSearch  /></a>
                <a className="earth contect" onMouseDown={handleonleave}  style={{cursor:"pointer"}}><IoEarthSharp   size={22} /></a>
                
                
                <div  className={`earth_hover ${onhover}`}>
                <h1 className="my-2 mx-2">Change Region</h1>
                    <div className="flex">
                    <div>
                        <h4 className="mx-3">  Americas </h4>
                        {ameri.map( (item)=>(   <> <a>{item}</a> <br /></>) )}</div>
                    <div> 
                        {Europ.map((item)=>(<><a href="">{item}</a> <br /></>))}</div>
                    <div>{asia.map((item)=>(<><a href="">{item}</a><br /></>))}</div>
               
                    </div>
                </div>
                <a onMouseDown={loginclick}  style={{cursor:"pointer"}} > <FaUser  />  Login</a>
              
            </div>
            <div className="trybutton" >
                 <a className="btn btn-success try " onClick={button} herf ='../home.html'>Try For Free</a>
            </div>
        </div>
       
      </div> 
      
    <div className="false-Header"></div>
    </>
}


export default Header;