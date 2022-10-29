import Footerd from "./data/footer_data"
import DataH from "./data/header_data";

var btp=Footerd[0].btp;
var headr=Footerd[1].row[0];
var headr2=Footerd[1].row[1];
var headr3=Footerd[1].row[2];

function Row1(props){
    return (
            <li className="fulli">
                {props.headi}
            </li> 
    )
}
const service1=headr.list.map(items=>{
    return (
        <Row1
            headi={items.item}
        />
    )
})
function Row2(props){
    return (
            <li className="fulli">
                {props.headi}
            </li>
    )
}
const service2=headr2.list.map(items=>{
    return (
        <Row2
            headi={items.item}
        />
    )
})
function Row3(props){
    return (
            <li className="fulli">
                {props.headi}
            </li>
    )
}
const service3=headr3.list.map(items=>{
    return (
        <Row3
            headi={items.item}
        />
    )
})



let backToTopButton=document.getElementById("btt")

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};


export default function Footer(){
    // var m=document.getElementById("btt").innerHTML;
    // console.log(m);

    return (
        <>
            <footer className="footer1">
                <div className="back-top">
                    <div className="back-top-contain" id="btt" onClick={goToTop}>
                        {btp}
                    </div>
                </div>
                <div className="fcontainer">
                    <div className="r1">
                        <ul className="ful">
                            <li className="fulli" style={{marginBottom:"10px"}}>
                                <b>{headr.head}</b>
                            </li>
                            {service1}
                        </ul>
                        <ul className="ful">
                            <li className="fulli" style={{marginBottom:"10px"}}>
                                <b>{headr2.head}</b>
                            </li>
                            {service2}
                        </ul>
                        <ul className="ful">
                            <li className="fulli" style={{marginBottom:"10px"}}>
                                <b>{headr3.head}</b>
                            </li>
                            {service3}
                        </ul>
                    </div>
                    <hr style={{height:"1px",borderColor:"rgb(85, 85, 116)",bordeStyle:"solid"}}/>
                    <div className="fc2">
                        <div className="fmai">
                            <img src="images/logo.png" className="footer-logo"/>
                            <div className="footer-country">
                                {DataH[0].country}
                            </div>
                        </div>
                    </div>
                    <div className="tandc">
                        <div className="tandc-content">
                            <ul className="tandc-list">
                                <li className="tandc-list-items">
                                    {Footerd[3].condn}
                                </li>
                                <li className="tandc-list-items">
                                    |
                                </li>
                                <li className="tandc-list-items">
                                    {Footerd[3].pn}
                                </li>
                            </ul>
                            <div className="tandc-copy">
                                {Footerd[2].detail}<br/>{Footerd[2].estd}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}