import './App.css'
import React from 'react'

import Logo from '..components/template/Logo'
import Nav from '..components/template/Nav'
import Home from '..components/home/Home'
import Footer from '..components/template/Footer'

export default props =>
    <div className="App">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>