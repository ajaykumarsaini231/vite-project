import { RxOpenInNewWindow } from "react-icons/rx";
import CardSection from "./3card-section";
import ButtonClick from "./dualhandleonbutton";

function Webring({button,handleonbtn}){
    return <><div className="container webtring py-4">
    <h1 className="text-stat py-4 my-4">We bring companies and customers together</h1>
    <p>Salesforce is the world’s most trusted customer relationship management (CRM) platform. We help your marketing, sales, commerce, service and IT teams work as one from anywhere — so you can keep your customers happy everywhere.</p>
       <div className="justify-content-center" >
         <ButtonClick button={button} center = {"justify-content-center"}></ButtonClick>
         </div>
     <h2 className="text-stat my-4">Learn valuable skills for free, with Trailhead.</h2>  
     <p className="my-4 mx-4">Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft skills from anywhere.</p>  
    </div>
     <CardSection button={handleonbtn}></CardSection>
    </>
}

export default Webring;