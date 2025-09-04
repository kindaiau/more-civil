import React from 'react'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Quote from '@/components/Quote'
import Footer from '@/components/Footer'

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <Layout>
      <div>Hello World - Testing</div>
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <FAQ />
      <Quote />
      <Footer />
    </Layout>
  );
};

export default Index;
