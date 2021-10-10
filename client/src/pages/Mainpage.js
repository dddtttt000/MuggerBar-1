import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Image from '../components/Image';
import Searchbar from '../components/Searchbar';
import Contentsbox from '../components/Contentsbox';
import Footer from '../components/Footer'


function Mainpage() {
  return (
    <>
      <Navbar />
      <Image />
      <Searchbar />
      <Contentsbox />
      <Footer />
    </>
  );
}


export default Mainpage;