'use client';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import FirstSlide from './components/FirstSlide'
import SecondSlide from './components/SecondSlide'
import ThirdSlide from './components/ThirdSlide'
import FourthSlide from './components/FourthSlide'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'

export default function Home() {

  const slideThemes = [
    {
      'arrows': 'text-jud-sunset',
      'navbar': 'text-jud-beige',
      'navbarbg': 'bg-jud-brown',
      'navBarTitleBorder': 'border-b-4 border-jud-sunset py-4',
      'footer': 'bg-jud-brown text-jud-sunset'
    },
    {
      'arrows': 'text-jud-brown',
      'navbar': 'text-jud-brown',
      'navbarbg': 'bg-jud-beige',
      'navBarTitleBorder': 'border-b-4 border-jud-brown py-4',
      'footer': 'bg-jud-beige text-jud-brown-secondary'
    },
    {
      'arrows': 'text-jud-sunset',
      'navbar': 'text-jud-beige',
      'navbarbg': 'bg-jud-brown',
      'navBarTitleBorder': 'border-b-4 border-jud-sunset py-4',
      'footer': 'bg-jud-brown text-jud-sunset'
    },
    {
      'arrows': 'text-jud-sunset',
      'navbar': 'text-jud-beige',
      'navbarbg': 'bg-jud-brown',
      'navBarTitleBorder': 'border-b-4 border-jud-sunset py-4',
      'footer': 'bg-jud-brown text-jud-sunset'
    },
  ]

  const totalSlides = 3
  const [sliderPosition, setSliderPosition] = useState('0')
  const [navBarColor, setNavBarColor] = useState('text-jud-beige')
  const [navBarBgColor, setNavBarBgColor] = useState('bg-jud-brown')
  const [navBarTitleBorderColor, setNavBarTitleBorderColor] = useState('border-b-4 border-jud-sunset py-4')
  const [arrowColor, setArrowColor] = useState('text-jud-beige')
  const [footerColor, setFooterColor] = useState('bg-jud-brown text-jud-sunset')

  function prevSlide() {
    let prevSlide = parseInt(sliderPosition) - 1;
    if (prevSlide < 0) prevSlide = totalSlides;
    setSliderPosition(prevSlide)
    setNavBarColor(slideThemes[prevSlide].navbar)
    setNavBarBgColor(slideThemes[prevSlide].navbarbg)
    setNavBarTitleBorderColor(slideThemes[prevSlide].navBarTitleBorder)
    setArrowColor(slideThemes[prevSlide].arrows)
    setFooterColor(slideThemes[prevSlide].footer)
  }

  function nextSlide() {
    let nextSlide = parseInt(sliderPosition) + 1;
    if (nextSlide > totalSlides) nextSlide = 0;
    setSliderPosition(nextSlide)
    setNavBarColor(slideThemes[nextSlide].navbar)
    setNavBarBgColor(slideThemes[nextSlide].navbarbg)
    setNavBarTitleBorderColor(slideThemes[nextSlide].navBarTitleBorder)
    setArrowColor(slideThemes[nextSlide].arrows)
    setFooterColor(slideThemes[nextSlide].footer)
  }

  return (
    <main className={'relative'}>
      <section className={`${arrowColor} text-4xl fixed top-0 left-0 flex items-center h-full z-10`}>
        <button type="button" className={'p-4 shadow hover:shadow-lg transition-all ease-in-out animate__animated animate__slideInLeft'} onClick={prevSlide}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </section>

      <NavBar navBarColor={navBarColor} navBarBgColor={navBarBgColor} navBarTitleBorderColor={navBarTitleBorderColor} />
      <section className={'slides flex min-h-screen items-center overflow-x-hidden'}>
        <FirstSlide sliderPosition={sliderPosition}/>
        <SecondSlide />
        <ThirdSlide />
        <FourthSlide />
      </section>
      <Footer footer={footerColor} />

      <section className={`${arrowColor} text-4xl fixed top-0 right-0 flex items-center h-full z-10`}>
        <button type="button" className={'p-4 shadow hover:shadow-lg transition-all ease-in-out animate__animated animate__slideInRight'} onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </section>
    </main>
  )
}
