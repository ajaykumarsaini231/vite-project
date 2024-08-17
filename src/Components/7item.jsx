

function Itmes(){
      let pic = [
           "../src/assets/in-hp-min-logo-balaji.webp","../src/assets/in-hp-min-logo-flame.webp","../src/assets/in-hp-min-logo-godrejboyce.webp","../src/assets/in-hp-min-logo-genpact.webp",
           "../src/assets/in-hp-min-logo-mahindra.webp","../src/assets/in-hp-min-logo-pepe.webp","../src/assets/in-hp-min-logo-razorpay.webp","../src/assets/in-hp-min-logo-pepe.webp"
      ]
    return <>
    <div className="img-contaner">
      {pic.map((item) => ( 
        <div>
            <img src={item} size={30}/>
        </div>
      ))}
      </div>
    </>
}

export default Itmes;
