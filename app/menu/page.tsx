'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import MenuProduct from '../components/MenuProduct'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faAngleRight, faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'

export default function Menu() {
	const hotDrinks = [
		{
			'productName': 'Capuccino',
			'firstPrice': '$4.50 (8oz)',
			'secondPrice': '$5.50 (12oz)'
		},
		{
			'productName': 'Flat white',
			'firstPrice': '$4.50 (8oz)',
			'secondPrice': '$5.50 (12oz)'
		},
		{
			'productName': 'Latte',
			'firstPrice': '$4.50 (8oz)',
			'secondPrice': '$5.50 (12oz)'
		},
		{
			'productName': 'Long Black',
			'firstPrice': '$4.00 (8oz)',
			'secondPrice': '$5.00 (12oz)'
		},
		{
			'productName': 'Mocha',
			'firstPrice': '$5.50 (8oz)',
			'secondPrice': '$6.50 (12oz)'
		},
		{
			'productName': 'Hot chocolate',
			'firstPrice': '$5.50 (8oz)',
			'secondPrice': '$6.50 (12oz)'
		},
		{
			'productName': 'Chai Latte / Dirty Chai Latte',
			'firstPrice': '$5.50 (8oz)',
			'secondPrice': '$6.50 (12oz)'
		},
		{
			'productName': 'Espresso/Macchiato/Pccolo',
			'firstPrice': '$4.00 (8oz)',
			'secondPrice': ''
		},
		{
			'productName': 'Babycino',
			'firstPrice': '$2.50 (8oz)',
			'secondPrice': ''
		},
		{
			'productName': 'Tea (English breakfast. Green tea, Earl Grey)',
			'firstPrice': '$3.50 (8oz)',
			'secondPrice': '$4.50 (12oz)'
		},
		{
			'productName': 'Soy/Almond/Oat milk',
			'firstPrice': '$0.50',
			'secondPrice': ''
		},
	]

	const coldDrinks = [
		{
			'productName': 'Soft drinks',
			'firstPrice': '$3.50',
			'secondPrice': ''
		},
		{
			'productName': 'Chocolate',
			'firstPrice': '$3.00',
			'secondPrice': ''
		},
		{
			'productName': 'Ice cream',
			'firstPrice': '$4.00',
			'secondPrice': ''
		},
		{
			'productName': 'Orange juice',
			'firstPrice': '$4.00',
			'secondPrice': ''
		},
		{
			'productName': 'Water',
			'firstPrice': '$3.00',
			'secondPrice': ''
		},
	]

	const [navBarColor, setNavBarColor] = useState('text-jud-beige')
  const [navBarBgColor, setNavBarBgColor] = useState('bg-jud-brown')
  const [navBarTitleBorderColor, setNavBarTitleBorderColor] = useState('border-b-4 border-jud-sunset py-4')

  return (
    <main className={'relative'}>
      <NavBar navBarColor={navBarColor} navBarBgColor={navBarBgColor} navBarTitleBorderColor={navBarTitleBorderColor} />

      <section className={'slides flex min-h-screen items-center overflow-x-hidden'}>
        <section className={'min-h-full h-screen pt-28 min-w-full bg-jud-brown overflow-y-auto'}>
					<section className={'container mx-auto flex md:align-items-center flex-col px-6 max-w-6xl'}>
						<section className={'my-4 text-center mb-6'}>
							<div className={'jud-text pb-1 text-jud-warning animate__animated animate__slideInDown'}>MENU</div>
							<div className={'jud-title text-jud-beige pt-1 animate__animated animate__flipInX'}>THIS IS WHAT WE HAVE FOR YOU</div>
						</section>

						<section className={'lg:flex lg:gap-2 lg:flex-wrap lg:justify-around w-full mb-6'}>
							<section className={'lg:w-1/48'}>
								<div className={'text-2xl font-bold text-jud-warning flex gap-2 text-center font-oswald justify-center items-center mb-4 animate__animated animate__swing'}>
									<FontAwesomeIcon icon={faMugHot} />
									HOT DRINKS
								</div>

								{ hotDrinks.map((product, index) => <MenuProduct key={index} params={product} />) }
							</section>

							<section className={'lg:w-1/48'}>
								<div className={'text-2xl font-bold text-jud-warning flex gap-2 text-center font-oswald justify-center items-center mt-6 mb-4 lg:mt-0 animate__animated animate__swing'}>
									<FontAwesomeIcon icon={faWhiskeyGlass} />
									COLD DRINKS
								</div>

								{ coldDrinks.map((product, index) => <MenuProduct key={index} params={product} />) }
							</section>
						</section>
					</section>
				</section>
      </section>

    </main>
  )
}
