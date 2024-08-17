import { useState } from 'react'
import React from 'react'
import ReactDom from 'react-dom/client'
import Header from './Components/Header'
import Subheader from './Components/subheader'
import Webring from './Components/text_webring'
import Footer from './Components/footer'
import QueAndAns from './Components/QuesandAns'
import Herosection from './Components/Herosection'
import TryFree from './Components/Try_for_free'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import './index.css'
import Form from './Components/form'
import Infoform from './Components/infoform'
import Products from './Components/Products.js/products'

//  let x = home();


function App() {
  function handleonMouse(){
    return<>
  
    {/* <Form heading={'Access the full report by filling out the form below. '} value={'Create Account'}></Form> */}
    <Infoform></Infoform>
    
    </>
   } 
  
   function home(){
    return<>
      <Herosection button = {onbuttonchangeX}></Herosection>
      <Webring button = {onbuttonchangeX} handleonbtn={prodctu}></Webring>  
      <TryFree button = {onbuttonchangeX}></TryFree>
      <QueAndAns button = {onbuttonchangeX}></QueAndAns>
    </>
   }
  
   let [x, setx] = useState(home())
   function onbuttonchangeX(){
       setx(handleonMouse())
      
   }
  
  function onclickLogo(){
    setx(home())
  }
   function prodctu(){
    setx(Product())
    console.log('ajay')
   }
    function Product(){
    return<>
    <Products button={onbuttonchangeX}></Products>
    </>
  }
 return <>
   
   <Header logo={onclickLogo} button = {onbuttonchangeX}></Header>
    <Subheader></Subheader>
    {x}
    <Footer logo={onclickLogo}></Footer>  
   
 </>
}

export default App






