import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/Wrapper.css';


const Wrapper = () =>

<div>
    <div className = "desktop">
    <Header />
    </div>
    <Main />
    <Footer />
    <p className = "mobile" >This should only appear in mobile devices</p>
    <p className = "desktop" >This should only appear in desktop devices</p>
</div>

export default Wrapper;