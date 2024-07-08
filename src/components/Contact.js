import React from 'react';
function Contact({ phone, email, city }) 
{
  return (
    <div>
      <h2>Контактна інформація</h2>
      <p>Телефон: {phone}</p>
      <p>Email: {email}</p>
      <p>Місто: {city}</p>
    </div>
  );
}
export default Contact;