function Itme({name,item}){
    
    return <>
    <div className='about'>
        <h5>{name}</h5>
     {item.map((item) => ( <> <a key={item} style={{marginBlock: 10+'px'}} href="">{item} </a> <br /> </>))}
     </div>
    </>

}

export default Itme;