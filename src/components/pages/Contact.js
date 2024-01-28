import React from 'react';
import '../../styles/Contact.css';


const styles = {
  Title: {
    fontWeight: 'bold'
  },
}

export default function Contact() {
  return (
    <div>
      <h1 style={styles.Title}>About Me</h1>
      <div className='row'>
        <div className='col-12'>
          <p>
            This is the contact form
          </p>
        </div>
      </div>
    </div>
  );
}
