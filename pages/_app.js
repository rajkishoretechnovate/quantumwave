import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import Navbar1 from '@/components/header/Navbar1';

import TopNav from '@/components/header/TopNav';

import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
    <TopNav/>
    <Navbar/>
     <Component {...pageProps} />
    <Footer />
    </React.Fragment>);
}
// <Navbar1/>
