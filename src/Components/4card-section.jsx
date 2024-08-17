import smallBussiness from "/src/assets/small_bussiness.webp"
import saleCloud from "/src/assets/sale_cloud.webp" 
import marketingClod from "/src/assets/marketing_cloud.webp"
import serviceCloud from "/src/assets/service_cloud.webp"
function Cardsection(){
    return <div className="card-sectionss">
     <h2 className="text-stat">Learn what Salesforce products can do for you.</h2>
     <div className="card-sections">
     <div className="card-section shadow border">
        <div className="card shadow" style={{width:18+'rem', zIndex:0}}>
            <img src={smallBussiness} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title mx-4 my-3">Small Business</h5>
                    <p className="card-text mx-4 my-3">Sales, service, and email outreach tools in a single app.</p>
                    <a href="#" className="btn btn-link">Learn More</a>
                </div>
        </div>
     </div>
     <div className="card-section shadow border">
        <div className="card shadow" style={{width:18+'rem', zIndex:0}}>
            <img src={saleCloud} className="card-img-top" alt="..."/>
                <div className="card-body" style={{paddingBottom:40+'px'}}>
                    <h5 className="card-title mx-4 my-3">Sales Cloud</h5>
                    <p className="card-text mx-4 my-3">Close more deals and speed up growth with the #1 CRM.</p>
                    <a href="#" className="btn btn-link">Learn More</a>
                </div>
        </div>
     </div>
     <div className="card-section shadow border">
        <div className="card shadow" style={{width:18+'rem', zIndex:0}}>
            <img src={marketingClod} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title mx-4 my-3">Marketing Cloud</h5>
                    <p className="card-text mx-4 my-3">Make customers happy faster and build loyalty with Service Cloud.</p>
                    <a href="#" className="btn btn-link">Learn More</a>
                </div>
        </div>
     </div>
     <div className="card-section shadow border">
        <div className="card shadow" style={{width:18+'rem', zIndex:0}}>
            <img src={serviceCloud} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title mx-4 my-3">Service Cloud</h5>
                    <p className="card-text mx-4 my-3">Build customer relationships for life with data-first digital marketing.</p>
                    <a href="#" className="btn btn-link">Learn More</a>
                </div>
        </div>
     </div>

     
    </div>
     <p href=""className="text-stat"><span className="btn btn-outline-primary">View our all products</span></p>
    
    </div>
}

export default Cardsection;