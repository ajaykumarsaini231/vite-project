import Cardsection from "./4card-section";
import ButtonClick from "./dualhandleonbutton";

function Herosection({button}){
    return<>
      <div className="containe flex">
         <div className="text">
            <h1 className="my-4 mx-4">Try Salesforce Starter Suite for free.</h1>
            <p className="my-4 mx-4">Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.</p>
            <ButtonClick button ={button}></ButtonClick>
         </div>
         <div className="video">
           {/* <img src="./src/assets/Screenshot_26-5-2024_19754_www.salesforce.com.jpeg" class="object-fit-sm-contain border rounded"  alt="..."/> */}
           <video src="./src/assets/vid-au-hp-marquee.mp4" className="video ratio ratio-1x1" autoPlay loop muted type="video/mp4" ></video>

           
         </div>
      </div>
      <Cardsection></Cardsection>
    </>
}

export default Herosection;