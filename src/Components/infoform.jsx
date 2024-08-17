import Form from "./form";
import React from 'react';
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

function Infoform(){
    return<>
       <div className="flex containe infobg">
         <div className="text">
            <a className='logo' href=""><img src="../../src/assets/asset0.png" alt="" style={{width:120+'px',height:80+'px',marginLeft:20+'px'}}/></a>
            <h1 className="my-4 mx-4">Start your free 30 day trial.</h1>
            <p>
            <h4 className="my-4 mx-4">With Starter Suite, there’s no credit card required, no software to install</h4>
            <h4 className="my-4 mx-4">With your trial, you get:</h4>
            </p>
           <p className="mx-2">
           <p><h4 className="my-4 mx-4"> <FaCheck size={20}/>Get started fast with simplified sign-up, easy-to-follow onboarding, and ready-to-use tools</h4></p>
             <p>
             <h4 className="my-4 mx-4"> <FaCheck size={20}/> Drive efficiency with built-in guidance, how-tos, and best practices</h4>
             </p>
             <p><h4 className="my-4 mx-4"> <FaCheck size={20}/> Unlock marketing, sales, service, and commerce in one suite to accelerate your business growth</h4></p></p>             

             <p><h4 className="my-4 mx-4">Questions? Call us at <strong>1800-420-7332</strong>.</h4></p>
             <video src="../../src/assets/vid-au-hp-marquee.mp4" className="video ratio ratio-1x1" autoPlay loop muted type="video/mp4" ></video>
         </div>
         <div className="video">
          <Form heading={'Sign up now to start a free Starter trial.'} value={'Submit button'} ></Form>

           
         </div>
      </div>
    </>
}

export default Infoform;