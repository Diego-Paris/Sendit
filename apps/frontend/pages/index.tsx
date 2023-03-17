import styles from './index.module.css';
import { Button } from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CreatePostForm from '../components/CreatePost';

export function Index() {
  return (
    <>
      <CreatePostForm />
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  );
}

export default Index;
