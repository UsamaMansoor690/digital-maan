import React from 'react'
import { useState } from 'react';
import Features from './Features';
import Hero from './Hero';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Products from './Products';
import RecentItem from './RecentItem';
import ContactForm from './ContactForm';
import Newsletter from './Newsletter';

export default function Wrapper() {
    const [showContent, setShowContent] = useState(false);

    function handleClick() {
      setShowContent(!showContent);
      if(!showContent) {
        document.getElementById('content').style.display = 'none';
      }
      else {
        document.getElementById('content').style.display = 'block';
      }
    }
    return (
        <>
        <Navbar handleClick={handleClick}/>
        <div id="content">
            <Hero />
            <Products />
            <Features />
            <RecentItem />
            <Pricing />
            <Newsletter />
        </div>
        {showContent && 
        <ContactForm />
        }
        </>
    );
}
