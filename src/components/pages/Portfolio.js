import React from 'react';
import '../../styles/Portfolio.css';



const styles = {
  List: {
    display: 'flex',
    flexWrap: 'wrap', 
    padding: 0,      
    listStyleType: 'none', 
  },
  Frame: {
    width: '48%',
    border: '1px solid black',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    boxSizing: 'border-x'

  }
}

  const projects = [

    {
      id: 1,
      projectName: 'Weather Forecast',
      hyperlink: 'https://sinkyli.github.io/weatherforecast/',
      projectDescription: 'A look at the 5-day forecast utilizing OpenWeather API.  Searchable by location.'
    },
    {
      id: 2,
      projectName: 'Notepad',
      hyperlink: 'https://notepadapp123.herokuapp.com/',
      projectDescription: 'A simple text editor.'      
    },
    {
      id: 3,
      projectName: 'Pet Finder',
      hyperlink: 'https://aforkinthecode.github.io/pet/',
      projectDescription: 'Find a pet today.'
    },
    {
      id: 4,
      projectName: 'A Bad Yelp Review',
      hyperlink: 'http://spooky-dudes.herokuapp.com/',
      projectDescription: 'Choose your own adventure.'
    },
    {
      id: 5,
      projectName: 'Project C',
      hyperlink: 'https://example.com/project-c',
      projectDescription: 'This is the description for Project C.'
    },
    {
      id: 6,
      projectName: 'Project D',
      hyperlink: 'https://example.com/project-c',
      projectDescription: 'This is the description for Project C.'
    }
    // ... Add more projects as needed
  ];


  export default function Portfolio() {
  return (
    <div>
      <h2>Project List</h2>
      <ul style={styles.List}>
        {projects.map(project => (
          <div style={styles.Frame}>
          <li key={project.id}>
            <h3>
              <a href={project.hyperlink}>{project.projectName}</a>
            </h3>
            <p>{project.projectDescription}</p>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
