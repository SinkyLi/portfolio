import React from 'react';
import '../../styles/Resume.css';


const styles = {
  Title: {
    fontWeight: 'bold'
  },
}

export default function Resume() {
  return (
    <div>
      <h1 style={styles.Title}>About Me</h1>
      <div className='row'>
        <div className='col-12'>
          <p>
            This is the resume.
          </p>
        </div>
      </div>
    </div>
  );
}
