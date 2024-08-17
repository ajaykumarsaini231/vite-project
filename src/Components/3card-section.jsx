import Itmes from "./7item";
function CardSection({button}){
    
    return <>
    <div className="card-sections">
    <div class="card section-card" >
    <div class="card-img-top d-flex justify-content-center my-4">
        <img src="../src/assets/quics.webp"  style={{width:100+'px', margin:'auto'}} alt="..."/>

        </div>
        <button type="button" style={{width:20+'%' ,padding: 0 +'px'}} class="btn btn-info mx-3">module</button>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card section-card" >
    <div class="card-img-top d-flex justify-content-center my-4">
        <img src="../src/assets/crm.png"  style={{width:100+'px', margin:'auto'}} alt="..."/>

        </div>
        <button type="button" style={{width:20+'% ',padding:0+'px'}} class="btn btn-info mx-3">module</button>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card section-card" >
    <div class="card-img-top d-flex justify-content-center my-4">
        <img src="../src/assets/basic.png"  style={{width:100+'px', margin:'auto'}} alt="..."/>

        </div>
        <button type="button" style={{width:20+'%' ,padding:0+'px'}} class="btn btn-info mx-3">module</button>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

</div> 
    
     <div className="container">
<p href=""className="text-stat" onClick={button}><span className="text-stat btn btn-outline-primary" >View our all products</span></p>
 <h1 className="text-stat">Over 150,000 companies, both big and small, are growing their business with Salesforce.</h1>
<p href=""className="text-stat" onClick={button}><span className="my-4 btn btn-outline-primary">View our all products</span></p>
      
     </div>

    <Itmes></Itmes>
    </>
 
 
}

export default CardSection;