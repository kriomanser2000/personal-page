import React from 'react';
function Experience({ experience }) 
{
  return (
    <div>
      <h2>Досвід роботи</h2>
      <ul>
        {experience.map((job, index) => 
        (
          <li key={index}>
            <h3>{job.company}</h3>
            <p>{job.position} ({job.years})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Experience;