import React from 'react';
function Skills({ skills }) 
{
  return (
    <div>
      <h2>Навички</h2>
      <ul>
        {skills.map((skill, index) => 
        (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default Skills;