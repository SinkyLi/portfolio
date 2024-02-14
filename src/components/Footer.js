import React from "react";

const styles = {
    footerText:{
        fontSize: '20px',
        fontFamily: 'Courier',
        color: 'white',        
        textShadow: '2px 2px 2px rgba(0,0,0,1)', 
        background: 'linear-gradient(180deg, rgba(22,22,24,0.8547794117647058) 0%, rgba(13,13,19,1) 35%)',
        paddingLeft: '5px',
        marginBottom: '0px',
        fontWeight: 'normal'
    }
}

export default function Footer() {
    return (
       <div>
       <p style={styles.footerText}>"You musn't be afraid to dream a little bigger darling." - Inception</p>   
       </div>
 
    );
 }