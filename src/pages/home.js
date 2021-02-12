import React, { useState } from 'react';

import Landing from '../components/landing';
import About from '../components/about';
import What from '../components/what';
import Experience from '../components/experience';
import Project from '../components/project';
import Contact from '../components/contact';
import Display from '../components/display';
import Navbar from '../components/navbar';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <What />
      {showModal ? (
        <Display showModal={showModal} setShowModal={setShowModal} />
      ) : null}

      <Project showModal={showModal} setShowModal={setShowModal} />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;
