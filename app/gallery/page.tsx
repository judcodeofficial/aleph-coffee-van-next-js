'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import MenuProduct from '../components/MenuProduct'

import Image from 'next/image'

export default function Gallery() {
	const imageList = [
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/001.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/002.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/003.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/004.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/005.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/006.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/007.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/009.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/010.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/011.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/012.jpg',
		'https://raw.githubusercontent.com/judcodeofficial/aleph-coffee-van-next-js/main/public/013.jpg',
	]
	const [navBarColor, setNavBarColor] = useState('text-jud-beige')
  const [navBarBgColor, setNavBarBgColor] = useState('bg-jud-brown')
  const [navBarTitleBorderColor, setNavBarTitleBorderColor] = useState('border-b-4 border-jud-sunset py-4')

  return (
    <main className={'relative'}>
      <NavBar navBarColor={navBarColor} navBarBgColor={navBarBgColor} navBarTitleBorderColor={navBarTitleBorderColor} />

      <section className={'slides flex min-h-screen items-center overflow-x-hidden'}>
        <section className={'min-h-full h-screen pt-28 min-w-full bg-jud-brown overflow-y-auto'}>
					<section className={'container mx-auto flex md:align-items-center flex-col px-6 '}>
						<section className={'my-4 text-center mb-6'}>
							<div className={'jud-text pb-1 text-jud-warning animate__animated animate__slideInDown'}>GALLERY</div>
							<div className={'jud-title text-jud-beige pt-1 animate__animated animate__flipInX uppercase'}>one picture is worth a thousand words</div>
						</section>

						<section className={'columns-2 lg:columns-3 w-full mb-6'}>
							{ imageList.map((imgUrl, index) => <a href={imgUrl} target="_blank" key={index}><Image
									src={imgUrl}
									layout="responsive"
									width="200"
									height="200"
									placeholder="blur"
									blurDataURL={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABrAGsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDNpKWlxWBohhFNIqXbRspForlaYVq0UppjpWKuU2FRsKuNHUDpQrohlGQc1DVuVKqsMGt4sw2YlFFFUMKKKKAOhp4FMFSoK5zUULTwlOValVKZRD5dNMdWtlIUoAotHUEiVoOlVpEpiZnSpVCVcGtWVaozpVLQhoqUUpWnKhNaE2YyirCwU7yBQOxrrU8Yqsp5qzFXMjUsIKnVajjFWEFMA200rUwFIRTGVXWqsq1ecVVlFNCM+UVRlFaEwqlKKtCKmzmpkSkA5qZBTExVSnbKkUU7FIkVDzVuKqKHmrkJrCJoXo6spVWI1ZQ1QEopGpQaRjTGQyVUlq1IaqymmhFGaqMtXZjVCY1aAjHWrEdVVbmrEZpkssrTqYpp2aRJXRuauwtWZG/NXYXrJIq5pxNVpGqhE9WUemUWg1IWqIPSF6Bg7VVlapXeqkrVSEVpmrOnbmrk79ay5Xyxq0TewBsGrUT5qjT45Cppk81zUVqfuqmkoI60/wAylYCnHJg1oQSdKyqtW8nak0QnY2I3qyj1mxyVZWSoZsi6HpC9VxJSGSkUSO9VZXpXkqrNJTuSyvcyYBqjUkz7mqOtUZN3CiiimIUEjpTvMamUUDuwpyNtNNooEaET8VZV6ow9BVpKwZtHYsB6QvTBSGouWI71UnfANTvVO46VUNWZyIKKKK6DIKKKKACiiigD/9k='}
									className={'rounded-lg w-full mb-4 object-cover object-top max-h-80 max-w-full shadow-md animate__animated animate__fadeInLeft'}
									alt="Gallery picture"
								/></a>) }
							
						</section>
					</section>
				</section>
      </section>

    </main>
  )
}
