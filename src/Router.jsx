import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import ContactForm from './components/ContactForm/ContactForm';
import ProjectsList from './components/ProjectsList/ProjectsList';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsList />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
