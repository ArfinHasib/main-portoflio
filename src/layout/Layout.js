import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';
import Head from 'next/head';

export const Layout = ({ children }) => {
   return (
      <>
         <Head>
            <title>
               Arfin Hasib | Frontend Developer & UI/UX Desginer | Webflow
               Expert & Veteran
            </title>
         </Head>
         <Container>
            <Header />
            <main>{children}</main>
            <Footer />
         </Container>
      </>
   );
};
