import React from 'react'
import styles from './style';
import { Navbar, About, Button, CardDeal, Testimonials, Contacts, CTA, Events, Footer, GetStarted, Hero, Stats, Business } from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Stats />
        {/* <Testimonials /> */}
        <Events />
        <About />
        <Contacts />
        <CardDeal />
        <CTA />
        {/* <GetStarted /> */}
        <Footer />
      </div>
    </div>

  </div >
);


export default App