import $ from 'jquery';
import ReactDOM from 'react-dom'
// -------------------------------------------------
import Slides from "./data/slide_img_data"
import ImageSlider from"./Imageslider"
import Data from "./data/main_data"
import Data2 from "./data/main_data2"
// --------------------------------------------------

const list=[{name:"Laptop"},{name:"Best Grocery & Gourment Foods"},{name:"Best Sellers in Computers & Accessories"},{name:"Laptop"},{name:"Best Grocery & Gourment Foods"},{name:"Best Sellers in Computers & Accessories"}];
// ---------------------------------------------------

const headr=Data2;

function Row1(props){
    return (
        <div className="image-content-offers-item">
        <img src={props.url} alt={props.alt} className="imgsadv"/>
        <div className="img-textc">
            {props.name}
        </div>
    </div>
    )
}
const service1=headr[0].box1.map(items=>{
    return (
        <Row1
            alt={items.alt}
            name={items.name}
            url={items.url}
            id={items.id}
        />
    )})

const Table=({data})=>{
    return(
    <>
    {data.map((item)=>(
        <div className="decor-main" id="decor_main">
            <div className="decor-head">
                {item.name}
            </div>
            <div className="decor-main-container">
            {
                Data.filter((items)=>items.name.toLowerCase().includes(item.name.toLowerCase())).map((imp)=>{
                    return (
                        <>       
                                <div className="decor-main-container-img">
                                    <img src={imp.url1} alt={imp.name} className="decor-img"/>
                                </div>
                        </>
                    )
                })
            }
            </div>
        </div>
        ))}
    </>)
}

// --------------------------------------------------

export default function Home(){
    return (
        <>
        <main>
            <div className="w3-center">
                <div className="w3-content w3-display-containe">
                    <ImageSlider slides={Slides} />
                </div> 
            </div>
            <div className="blurback">
                
            </div> 
            <div className="main-content">
                <div className="latest-offers">
                    <div className="latest-offers-box" >
                        <div className="latest-offers-box-heading">
                            Gaming Accessories
                        </div>
                        <div className="image-content-offers">
                            {service1}
                        </div>
                        
                    </div>
                    <div className="latest-offers-box">
                        <div className="latest-offers-box-heading">
                            Shop By Categories
                        </div>
                        <div className="image-content-offers">
                            <div className="image-content-offers-item">
                                <img src="images/ga5.jpg" className="imgsadv"/>
                                <div className="img-textc">
                                    Computers
                                </div>
                            </div>
                            <div className="image-content-offers-item">
                                <img src="images/ga6.jpg"className="imgsadv"/>
                                <div className="img-textc">
                                    Video Games
                                </div>
                            </div> 

                            <div className="image-content-offers-item">
                                <img src="images/ga7.jpg"className="imgsadv"/>
                                <div className="img-textc">
                                    Toys
                                </div>
                            </div>
                            <div className="image-content-offers-item">
                                <img src="images/ga8.jpg"className="imgsadv"/>
                                <div className="img-textc">
                                    Baby
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="latest-offers-box">
                        <div className="latest-offers-box-heading">
                            Dresses
                        </div>
                        <div className="image-content-offers">
                            <img src="images/ga10.jpg"className="imgsadv"/>
                        </div>
                        
                    </div>
                
                    <div className="latest-offers-box" style={{borderStyle:"solid", border:"0px 0px 0px 10px",borderWidth:"4px 0px 0px 0px",borderColor:"rgba(0,0,0,0.4)"}}>
                        <div className="latest-offers-box-heading">
                            Easy Returns
                        </div>
                        <div className="image-content-offers">
                            <img src="images/ga11.jpg"className="imgsadv"/>
                        </div>
                        
                    </div>
                    <div className="latest-offers-box" style={{borderStyle:"solid", border:"0px 0px 0px 10px",borderWidth:"4px 0px 0px 0px",borderColor:"rgba(0,0,0,0.4)"}}>
                        <div className="latest-offers-box-heading">
                            Toys
                        </div>
                        <div className="image-content-offers">
                            <img src="images/ga13.jpg"className="imgsadv"/>
                        </div>
                        
                    </div>
                    <div className="latest-offers-box" style={{borderStyle:"solid", border:"0px 0px 0px 10px",borderWidth:"4px 0px 0px 0px",borderColor:"rgba(0,0,0,0.4)"}}>
                        <div className="latest-offers-box-heading">
                            Electronics
                        </div>
                        <div className="image-content-offers">
                            <img src="images/ga14.jpg"className="imgsadv"/>
                        </div>
                    </div>
                </div>
                <Table data={list}/>
            </div>
        </main>

        </>
    )
}