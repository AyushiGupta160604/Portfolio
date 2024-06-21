import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const ContactSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: black;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactTextarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d40813;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    emailjs.sendForm('your_service_id', 
      'your_tempalate_id', e.target, 'your_user_id')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <ContactContainer>
      <ContactSection>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactForm onSubmit={handleSubmit}>
          <ContactInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <ContactInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <ContactTextarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            required
          />
          <ContactButton type="submit">Send Message</ContactButton>
        </ContactForm>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
