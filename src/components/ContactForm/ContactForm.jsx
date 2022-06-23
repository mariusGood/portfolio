import React, { useState } from 'react';
import { Form } from './ContactForm.style';
import Button from '../Button/Button';

const ContactForm = () => {
  const [status, setStatus] = useState('SEND');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setStatus('Sending...');
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };

      for (let key in details) {
        if (details[key] === '') {
          setStatus('SEND');
          return alert('Fill all fields');
        }
      }

      let response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      });
      setStatus('SEND');
      let result = await response.json();
      e.target.reset();
      alert(result.status);
    } catch (error) {
      return error;
    }
  };

  return (
    <Form id='contact'>
      <div>
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required />
          <label>Message</label>
          <textarea name='message' id='message' rows='10' />
          <Button type='submit'>{status}</Button>
        </form>
      </div>
    </Form>
  );
};

export default ContactForm;
