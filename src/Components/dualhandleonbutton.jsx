import { RxOpenInNewWindow } from "react-icons/rx";
import Home from "../home";
function ButtonClick({center,button}){
    
    return<>
    <div className={`button flex my-4 mx-4 ${center}`}>
            <button type="button" onClick= {button} class="btn btn-primary"> <a >Start free trail</a> <RxOpenInNewWindow /> </button>
            <button type="button" onClick= {button} herf ='../src/home-main.jsx' class="btn btn-outline-primary"> watch demo <RxOpenInNewWindow /> </button>
            </div>
    </>
}

export default ButtonClick;