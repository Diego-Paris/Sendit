import styles from './index.module.css';
import { Button } from "@chakra-ui/react";
import HeroSection from '../components/HeroSection'
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export function Index() {
  return (
    <>
      <HeroSection/>
      <Features/>
      <Testimonials/>
    </>
  );
}

export default Index;
