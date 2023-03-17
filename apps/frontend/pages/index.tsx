import styles from './index.module.css';
import { Button } from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ListPosts from '../components/ListPosts';

export function Index() {
  return (
    <>
      <ListPosts />
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  );
}

export default Index;
