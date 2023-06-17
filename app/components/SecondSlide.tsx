import Image from 'next/image'
import firstImage from '../../public/001.jpg'
import sixthImage from '../../public/006.jpg'

export default function SecondSlide() {
	return (
		<section className={'min-h-full pt-28 min-w-full overflow-y-auto'}>
			<section className={'container max-w-5xl mx-auto flex md:align-items-center flex-wrap-reverse px-6'}>
				<div className={'mt-2 md:mt-0'}>
					<div className={'jud-title text-jud-brown'}>
						Explore coffee like never before
					</div>

					<div className={'jud-subtitle text-jud-brown-secondary px-2'}>
						Embark on a flavorful journey and discover the secrets of brewing exceptional coffee with our unique and innovative approach
					</div>

					<div className={'py-6 px-4'}>
						<a href="" className={'bg-jud-brown text-jud-beige w-full text-center text-lg uppercase font-hauora block py-2 rounded hover:bg-jud-brown-secondary hover:text-jud-brown hover:shadow-md transition ease-in-out'}>
							Contact me
						</a>
					</div>
				</div>

				<div className={'max-h-500 w-full max-w-full mb-4'}>
					<Image
						src={sixthImage}
						layout="responsive"
						width="150"
						height="150"
						placeholder="blur"
						className={'rounded-lg w-full object-cover object-top max-h-80 max-w-full shadow-md lg:h-96 lg:object-top lg:h-500 lg:max-h-500'}
						alt="Presentation picture"
					/>
				</div>
			</section>
		</section>
	);
}