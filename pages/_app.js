// pages/_app.js
import React from 'react';
import '@/assets/css/globals.css';

import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Navbar from '@/components/Navbar';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
