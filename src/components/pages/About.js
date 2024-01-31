import React from 'react';
import '../../styles/About.css';


const styles = {
  Title: {
    fontWeight: 'bold'
  },
}

export default function About() {
  return (
    <div>
      <h1 style={styles.Title}>About Me</h1>
      <div className='row'>
        <div className='col-12'>
          <p>
            A native of California, Sinclair is a web developer interested in computer-related happenings, constantly learning about the ever-expanding field. In his free time he enjoys playing tennis, photography, collecting baseball cards, gardening, cooking, and travelling, among other things. He has travelled to over fourteen countries (so far) and plans on visiting more. He is an avid baseball fan and enjoys rooting on the San Diego Padres. He hopes to see them win the World Series one day.
          </p>
        </div>
      </div>
    </div>
  );
}
