import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vincent Kahlhamer</h2>
        <p><a href="mailto:vincent.kahlhamer@gmail.com">vincent.kahlhamer.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Vincent.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p>This website design is taken from mldangelo.com</p>
    </section>
  </section>
);

export default SideBar;
