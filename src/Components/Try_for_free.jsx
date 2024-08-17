import { RxOpenInNewWindow } from "react-icons/rx";
import ButtonClick from "./dualhandleonbutton";
function TryFree({button}){
    return<>
        <div className="shadow rounded container containe flex text-stat">
         <div className="text">
            <h2 className=" mx-4">Try Salesforce for free. No credit card required, no software to install.</h2>
            <p className="my-4 mx-4">Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.</p>
            <div className="py-4">
                <ButtonClick button={button} center = {"justify-content-center"}></ButtonClick>
            </div>
         </div>
         <div className="video">
           <img src="./src/assets/php-free-trial-mobile-inr2000-940w.webp" className="object-fit-sm-contain border rounded" style={{height:350+'px'}}  alt="..."/>

           
         </div>
      </div>
      <h2 className="text-stat mx-4">How can we help grow your business?</h2>
      <div className="flex space-between card-sections">
      <div className="card" style={{width:18+'rem'}}>
        <img src="./src/assets/php-products-sales-in.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                
                <a href="#" className="btn btn-link">Go somewhere</a>
            </div>
      </div >
      <div className="card" style={{width:18+'rem'}}>
        <img src="./src/assets/Build_ustomer_relationships.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                
                <a href="#" className="btn btn-link">Go somewhere</a>
            </div>
      </div>
      <div className="card" style={{width:18+'rem'}}>
        <img src="./src/assets/php-products-service-in.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                
                <a href="#" className="btn btn-link">Go somewhere</a>
            </div>
      </div>
      <div className="card" style={{width:18+'rem'}}>
        <img src="./src/assets/php-products-small-business-in.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                
                <a href="#" className="btn btn-link">Go somewhere</a>
            </div>
      </div>
      </div>

      <h1 className="container text-stat"><span className="text-stat">Our technology helps people create better jobs, lives, companies, and communities.</span>
      </h1>

      <div className="flex space-between card-sections bye-back">
      <div className="card" style={{width:18+'rem'}}>
        <img src="./src/assets/Fortue_1.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                
            <p className="card-text" style={{textAlign:'center'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
      </div>
      <div className="card" style={{width:18+'rem'}}>
        <img src="./src/assets/fortune_2.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                
            <p className="card-text" style={{textAlign:'center'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
      </div>
      <div className="card" style={{width:18+'rem'}}>
        <img src="./src/assets/1.5_billon.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                
            <p className="card-text" style={{textAlign:'center'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
      </div>
      </div>
    </>
}

export default TryFree;