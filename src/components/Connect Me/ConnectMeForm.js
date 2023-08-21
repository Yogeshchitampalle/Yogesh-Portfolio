import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; 
import './ConnectMeForm.css'; 

const ConnectMeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', { name, email, number, message });
      await sendEmail();
      setMessageSent(true);
    } catch (error) {
      console.log('Error sending email:', error);
      alert('Oops! An error occurred. Please try again.');
    }
  };

  const sendEmail = () => {
    return emailjs.send("service_fye2exr", "template_qvxansb", {
      name,
      email,
      number,
      message,
    }, "04S8AUCNp53I9oHy1");
  };

  return (
    <div className="connect-me-form">
      <h2>Connect Me</h2>
      {messageSent ? (
        <p>Your message has been sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label htmlFor="number">Phone Number:</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      )}
    </div>
  );
};

export default ConnectMeForm;
