import React from 'react';

const styles = {
  menu: {
    justifyContent: 'right',
    textAlign: 'right',
    backgroundColor: '#0d0d13',
    fontFamily: 'Courier',
    color: 'black'
  },
  tabAbout: {
    background: '#ffd23f',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',    
  },
  tabProject: {
    background: '#59878A',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',    
  },
  tabContact: {
    background: '#5aa9e6',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',    
  },
tabImage:{
backgroundImage: "RabbitHole.jpg"
},
  tabResume: {
    background: '#ff6392',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',   
  },
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.menu}>
      <li className="nav-item" style={styles.tabAbout}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          about me
        </a>
      </li>
      <li className="nav-item" style={styles.tabProject}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          projects
        </a>
      </li>
      <li className="nav-item" style={styles.tabContact}>
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          contact
        </a>
      </li>
      <li className="nav-item" style={styles.tabResume}>
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
