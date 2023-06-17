'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import MenuProduct from '../components/MenuProduct'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import firstImage from '../../public/014.jpg'
import Image from 'next/image'

export default function Contact() {
	const [navBarColor, setNavBarColor] = useState('text-jud-beige')
  const [navBarBgColor, setNavBarBgColor] = useState('bg-jud-brown')
  const [navBarTitleBorderColor, setNavBarTitleBorderColor] = useState('border-b-4 border-jud-sunset py-4')

  return (
    <main className={'relative'}>
      <NavBar navBarColor={navBarColor} navBarBgColor={navBarBgColor} navBarTitleBorderColor={navBarTitleBorderColor} />

      <section className={'slides flex min-h-screen items-center overflow-x-hidden'}>
        <section className={'min-h-full h-screen pt-28 min-w-full bg-jud-brown overflow-y-auto'}>
					<section className={'container mx-auto flex md:align-items-center flex-col px-6 max-w-4xl'}>
						<section className={'my-4 mb-6'}>
							<div className={'jud-text pb-1 text-jud-warning animate__animated animate__slideInDown'}>CONTACT</div>
							<div className={'jud-title text-jud-beige pt-1 animate__animated animate__flipInX'}>DO YOU WANT TO CONTACT US?</div>
						</section>

						<section className={'w-full mb-6'}>
							<Image
								src={firstImage}
								layout="responsive"
								width="150"
								height="200"
								placeholder="blur"
								className={'rounded-lg w-full object-cover object-top max-h-64 max-w-full shadow-lg mb-8'}
								alt="Presentation picture"
							/>

							<section className={'bg-jud-brown-secondary rounded'}>
								<section className={'p-4 border-b border-slate-900'}>
									<h5 className={'text-lg text-jud-sunset uppercase font-oswald mb-1'}>EMAIL</h5>
									<span className={'text-xl font-hauora text-jud-beige'}>aleph.coffeevan@gmail.com</span>
								</section>

								<section className={'p-4 border-b border-slate-900'}>
									<h5 className={'text-lg text-jud-sunset uppercase font-oswald mb-1'}>CELLPHONE/WHATSAPP</h5>
									<span className={'text-xl font-hauora text-jud-beige'}>+61 0497 663 534</span>
								</section>

								<section className={'p-4'}>
									<h5 className={'text-lg text-jud-sunset uppercase font-oswald mb-4'}>SOCIAL MEDIA</h5>
									<div className={'text-4xl font-hauora text-jud-beige'}>
										<a href="https://www.instagram.com/aleph.coffeevan/" className={'text-jud-beige decoration-0 mr-4'} target="_blank">
											<FontAwesomeIcon icon={faInstagram} />
										</a>

										<a href="https://www.facebook.com/aleph.coffeevan" className={'text-jud-beige decoration-0'} target="_blank">
											<FontAwesomeIcon icon={faFacebook} />
										</a>
									</div>
								</section>
							</section>

						</section>
					</section>
				</section>
      </section>

    </main>
  )
}
