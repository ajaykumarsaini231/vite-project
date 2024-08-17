import Itmes from "../7item";
import ButtonClick from "../dualhandleonbutton";
function Products({button}){
    return<>
       <div className="containe flex">
         <div className="text">
            <h1 className="my-4 mx-4">Become an AI Enterprise with Einstein 1</h1>
            <p className="my-4 mx-4">Unlock your AI future with Einstein 1, the #1 AI CRM and trusted platform built for the AI Enterprise. Einstein 1 brings together CRM apps for sales, service, marketing, commerce, and more with trusted AI, data, analytics, and collaboration in one integrated solution. Discover how Einstein 1 helps you become an AI Enterprise by growing relationships, productivity, and your bottom line – all at the same time.</p>
            <ButtonClick button ={button}></ButtonClick>
         </div>
         <div className="video">
           {/* <img src="../../src/assets/Screenshot_26-5-2024_19754_www.salesforce.com.jpeg" class="object-fit-sm-contain border rounded"  alt="..."/> */}
           <video src="../../src/assets/vid-au-hp-marquee.mp4" className="video ratio ratio-1x1" autoPlay loop muted type="video/mp4" ></video>

           
         </div>
      </div>
      <h1 className="container text-stat">Connect in a whole new way with one trusted platform for the AI Enterprise.</h1>
      
    <div className="card-sections">
    <div class="card section-card" >
    <div class="card-img-top d-flex justify-content-center my-4">
        <img src="../src/assets/quics.webp"  style={{width:100+'px', margin:'auto'}} alt="..."/>

        </div>
        <button type="button" style={{width:20+'%' ,padding: 0 +'px'}} class="btn btn-info mx-3">module</button>
        <div class="card-body">
            <h5 class="card-title">Unlock trapped data from anywhere to enrich your CRM and ground your AI.</h5>
            <p class="card-text">Easily connect siloed external data with Salesforce so you can use it across Einstein 1 — in CRM apps, AI, automation, and custom code — to improve customer experiences and boost employee productivity with trusted data.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card section-card" >
    <div class="card-img-top d-flex justify-content-center my-4">
        <img src="../src/assets/crm.png"  style={{width:100+'px', margin:'auto'}} alt="..."/>

        </div>
        <button type="button" style={{width:20+'% ',padding:0+'px'}} class="btn btn-info mx-3">module</button>
        <div class="card-body">
            <h5 class="card-title">Deploy a trusted AI copilot that can take action across your business</h5>
            <p class="card-text">Our AI was built for CRM with one unified copilot experience that works across your business. Einstein Copilot can take action to build stronger relationships, create engaging content, close cases faster, and more – all while keeping your data secure.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card section-card" >
    <div class="card-img-top d-flex justify-content-center my-4">
        <img src="../src/assets/basic.png"  style={{width:100+'px', margin:'auto'}} alt="..."/>

        </div>
        <button type="button" style={{width:20+'%' ,padding:0+'px'}} class="btn btn-info mx-3">module</button>
        <div class="card-body">
            <h5 class="card-title">Your definitive AI Strategy guide</h5>
            <p class="card-text">Whether you’re just starting out with AI or you’re already innovating around the technology, this guide will help you strategise effectively, embrace new possibilities, and answer important questions about the benefits of AI.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

</div> 
<div className="shadow rounded container containe flex text-stat">
         <div className="text">
            <h2 className=" mx-4">Try Salesforce for free. No credit card required, no software to install.</h2>
            <p className="my-4 mx-4">Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.</p>
            <div className="py-4">
                <ButtonClick button={button} center = {"justify-content-center"}></ButtonClick>
            </div>
         </div>
         <div className="video">
           <img src="../../src/assets/php-free-trial-mobile-inr2000-940w.webp" className="object-fit-sm-contain border rounded" style={{height:350+'px'}}  alt="..."/>

           
         </div>
      </div>
      <div className="shadow rounded container containe flex text-stat">
      <div className="video">
           <img src="../../src/assets/php-free-trial-mobile-inr2000-940w.webp" className="object-fit-sm-contain border rounded" style={{height:350+'px'}}  alt="..."/>

           
         </div>
         <div className="text">
            <h2 className=" mx-4">Try Salesforce for free. No credit card required, no software to install.</h2>
            <p className="my-4 mx-4">Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.</p>
            <div className="py-4">
                <ButtonClick button={button} center = {"justify-content-center"}></ButtonClick>
            </div>
         </div>
         
      </div>
      <h1 className="text-stat my-0">All Salesforce products.</h1>
      <h1 className="text-stat my-0">One integrated platform.</h1>
      <p className="text-stat container my-4">Every solution in Einstein 1 works together on one platform, so it’s easier for your employees, your AI, and your data to work together, too. Click on the icons below to learn more.</p>
     <div className="text-stat my-1"> <a href="" className="btn btn-primary justify-content-center" style={{margin:"auto"}}> Watch Demo</a>
     </div>

     <div className="text-stat"><Itmes></Itmes></div>
     <div className="shadow rounded container containe flex text-stat">
      <div className="video">
           <img src="../../src/assets/php-free-trial-mobile-inr2000-940w.webp" className="object-fit-sm-contain border rounded" style={{height:350+'px'}}  alt="..."/>

           
         </div>
         <div className="text">
            <h2 className=" mx-4">Try Salesforce for free. No credit card required, no software to install.</h2>
            <p className="my-4 mx-4">Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.</p>
            <div className="py-4">
                <ButtonClick button={button} center = {"justify-content-center"}></ButtonClick>
            </div>
         </div>
         
      </div>
    </>
}

export default Products;