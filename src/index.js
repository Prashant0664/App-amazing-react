import React from 'react';
import { useState } from 'react'; 
import $ from 'jquery';
import ReactDOM from 'react-dom/client';

// ----------------------------------------------------------------------------
import Home from "./Home_page"
import Header from './top_header'
// import "./js.js" 
import Footer from "./footer"
import "./style/style.css"
import "./style/productc.css"
import "./style/searchcss.css"
var cc=(<>
            <Header/>
            <Home/>
            <Footer/>
        </>
)
var roots=ReactDOM.createRoot(document.getElementById("root"));
roots.render(cc);
