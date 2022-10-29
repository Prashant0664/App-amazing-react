import logo from "./images/logo.png"
import HeaderD from "./data/header_data"

// -----------------------------------------

let Place          = HeaderD[0].country;
let locationlogo   = HeaderD[1].img[0].locationlogo;
let menu           = HeaderD[1].img[0].menu;
let cart_logo      = HeaderD[1].img[0].cart_logo;
let profilepic     = HeaderD[1].img[0].profilepic;
const navb         = HeaderD[2].hnavbar;

// -----------------------------------------

function Navul(props){
    return(
        <ul className="choose-ul">
            <li className="choose-ul-li">
                <a href="#" className="choose-link">{props.title}</a>
            </li>
        </ul>
    )
}
const service=navb.map(item=>{
    return(
        <Navul
            key={item.key}
            title={item.title}
        />
)}) 


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-10%";
  }
  prevScrollpos = currentScrollPos;
}

// ------------------------------------------

// EXPORT function 
export default function header(){
    return (
        <>
        <header className="header2" id="header2">
            <div className="header-content">
                <div className="header-menu">
                    <img src={menu} className="header-menu-logo" id="header-menu-logo" />
                </div>
                <div className="header-app">
                    <img src={logo} className="header-app-logo"/>
                    <div className="header-location">
                        <img src={locationlogo} className="location-logo"/>
                        <div className="location-place">
                            <table className="location-table"><tbody>
                                <tr className="tr-location">
                                    <td className="deliver-to">
                                        Deliver to
                                    </td>
                                </tr>
                                <tr className="tr-location">
                                    <td className="location-city">
                                        <b>{Place}</b>
                                    </td>
                                </tr>
                            </tbody></table>
                        </div>
                    </div>
                </div>
                <div className="header-search">
                    <form className="header-form">
                        <input type="text" className="myInput" id="myInput" onKeyUp="headersearch()" placeholder="Search Cloths, Gadgets and many more..." title="Type in a name"/>
                        <input type="submit" value="Search" className="header-submit"/>
                    </form>
                </div>
                <div className="header-cart">
                    <img src={cart_logo} className="header-cart-logo"/>
                    <div className="cart-number" id="cart-number">
                        0
                    </div>
                </div>
                <div className="header-profile">
                    <img src={profilepic} className="profile-logo"/>
                </div>
            </div>
        </header>

        <header className="header" id="header">
            <div className="header-content">
                <div className="header-menu" id="opennav">
                    <img src={menu} className="header-menu-logo"/>
                </div>
                <div className="header-app">
                    <img src={logo} className="header-app-logo"/>
                    <div className="header-location">
                        <img src={locationlogo} className="location-logo"/>
                        <div className="location-place">
                            <table className="location-table"><tbody>
                                <tr className="tr-location">
                                    <td className="deliver-to">
                                        Deliver to
                                    </td>
                                </tr>
                                <tr className="tr-location">
                                    <td className="location-city">
                                        <b>{Place}</b>
                                    </td>
                                </tr>
                            </tbody></table>
                        </div>
                    </div>
                </div>
                <div className="header-search">
                    <form className="header-form">
                        <input type="text" id="myInput" onKeyUp="headersearch()" placeholder="Search Cloths, Gadgets and many more..." title="Type in a name"/>
                        <input type="submit" value="Search" className="header-submit"/>
                    </form>
                </div>
                <div className="header-cart">
                    <img src={cart_logo} className="header-cart-logo"/>
                    <div className="cart-number" id="cart-number">
                        0
                    </div>
                </div>
                <div className="header-profile">
                    <img src={profilepic} className="profile-logo"/>
                </div>
            </div>
        </header>
 
               
        <nav className="choose-from">
            <div className="choose-list">
                {service}
            </div>
        </nav>

    </>
    )
}