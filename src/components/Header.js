import React from "react";

const styles = {
    headerText:{
        fontSize: '75px',
        fontFamily: 'Pixelify Sans',
        color: 'white',        
        textShadow: '2px 2px 2px rgba(0,0,0,1)', 
        background: 'linear-gradient(180deg, rgba(22,22,24,0.8547794117647058) 0%, rgba(13,13,19,1) 35%)',
        paddingLeft: '5px',
        marginBottom: '0px',
        fontWeight: 'bold'
    }
}

export default function Header () {
    return (
       <div>
       <p style={styles.headerText}>sinclair li</p>
       <p></p>
       </div>
    );
   }

//    if desktop <Navbar/> if mobile <Hamburger/>