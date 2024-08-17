import { RxOpenInNewWindow } from "react-icons/rx";
import ButtonClick from "./dualhandleonbutton";
function QueAndAns({button}){
    return<>
     <div className="shadow rounded container space-between flex question">
         <div className="containerr">
            <h2 className="text-stat mx-4">Questions? We’ll put you on the right path.</h2>
            <p className="my-4 mx-4 text-stat">Ask about Salesforce products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help</p>
            <div className="justify-content-center">
            <ButtonClick button={button} center = {"justify-content-center"}></ButtonClick>
            </div>
         </div>
         
      </div>
    </>
}

export default QueAndAns;