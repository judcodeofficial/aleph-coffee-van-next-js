'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import MenuProduct from '../components/MenuProduct'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faAngleRight, faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons'
import firstImage from '../../public/001.jpg'
import thirteenthImage from '../../public/013.jpg'
import Image from 'next/image'

export default function About() {
	const [navBarColor, setNavBarColor] = useState('text-jud-beige')
  const [navBarBgColor, setNavBarBgColor] = useState('bg-jud-brown')
  const [navBarTitleBorderColor, setNavBarTitleBorderColor] = useState('border-b-4 border-jud-sunset py-4')

  return (
    <main className={'relative'}>
      <NavBar navBarColor={navBarColor} navBarBgColor={navBarBgColor} navBarTitleBorderColor={navBarTitleBorderColor} />

      <section className={'slides flex min-h-screen items-center overflow-x-hidden'}>
        <section className={'min-h-full h-screen pt-28 min-w-full bg-jud-brown overflow-y-auto'}>
					<section className={'container mx-auto flex md:align-items-center flex-col px-6 max-w-5xl'}>
						<section className={'my-4 mb-6'}>
							<div className={'jud-text pb-1 text-jud-warning animate__animated animate__slideInDown'}>WHO'S BEHIND CAFFEINE</div>
							<div className={'jud-title text-4xl text-jud-beige pt-1 animate__animated animate__flipInX'}>PEOPLE, PEOPLE. LET ME TELL YOU SOMETHING...</div>
						</section>

						<section className={'w-full mb-6'}>
							<Image
								src={firstImage}
								layout="responsive"
								width="150"
								height="200"
								placeholder="blur"
								className={'rounded-lg w-full object-cover object-top max-h-80 max-w-full shadow-lg lg:max-h-500'}
								alt="Presentation picture"
							/>

							<div className={'px-2 mt-10'}>
								<h6 className={'text-xl font-bold font-oswald uppercase text-jud-warning'}>MORE THAN JUST COFFEE</h6>
								<p className={'jud-text font-hauora text-jud-beige'}>As an English teacher and lifelong coffee lover, I always dreamed of starting my own business. Exploring different types of coffee and improving my brewing skills have been an integral part of my life for years.</p>

								<p className={'jud-text font-hauora text-jud-beige'}>The irresistible aroma and delicious taste of coffee ultimately inspired me to turn my passion into a reality. Aleph Coffee represents the start of a new era in coffee brewing and we keep working every day to exceed our customers' expectations and satisfy their coffee cravings.</p>
							</div>

							<div className={'px-2 my-4'}>
								<h6 className={'text-xl font-bold font-oswald uppercase text-jud-warning'}>CONNECTING WITH OUR CUSTOMERS</h6>
								<p className={'jud-text font-hauora text-jud-beige'}>For us, the joy of being a barista comes not only from crafting exquisite coffee drinks, but also from connecting with our customers. We love nothing more than engaging in friendly conversations while preparing our customers' favorite beverages.</p>

								<p className={'jud-text font-hauora text-jud-beige'}>To elevate your next celebration and create unforgettable memories, we recommend trying our locally roasted Witham's Coffee beans. Using these high-quality beans not only enhances the flavor of our coffee, but also supports our community.</p>
							</div>

							<Image
								src={thirteenthImage}
								layout="responsive"
								width="150"
								height="200"
								placeholder="blur"
								className={'rounded-lg w-full object-cover object-top max-h-80 max-w-full shadow-lg lg:max-h-500'}
								alt="Presentation picture"
							/>
						</section>
					</section>
				</section>
      </section>

    </main>
  )
}
