import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <ChakraProvider>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
