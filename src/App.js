import React from 'react';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import logo from './logo.svg';
import './App.css';

function App() 
{
  const user = 
  {
    name: "Кузьменко Олександр",
    phone: "+380123456789",
    email: "kuzsasa05@gmail.com",
    city: "Кривий Ріг",
    experience: 
    [
      { company: "Company A", position: "Developer", years: "2021-2022" },
      { company: "Company B", position: "Senior Developer", years: "2023-2024" },
    ],
    skills: ["JavaScript", "React", "Angular", "Node.js"],
    photo: "path_to_photo.jpg",
  };
  return (
    <div>
      <Profile name={user.name} photo={user.photo} />
      <Contact phone={user.phone} email={user.email} city={user.city} />
      <Experience experience={user.experience} />
      <Skills skills={user.skills} />
    </div>
  );
}
export default App;