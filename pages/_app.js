import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      
      <Footer />
    </React.Fragment>);
}

