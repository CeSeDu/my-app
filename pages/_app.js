import React from 'react';
import '@/assets/css/globals.css';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
