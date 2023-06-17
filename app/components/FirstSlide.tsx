import Image from 'next/image'
import firstImage from '../../public/01.jpg'
import eightImage from '../../public/008.jpg'

export default function FirstSlide({ sliderPosition } : { sliderPosition : number }) {
	const slidePos = sliderPosition * -100;
	return (
		<section className={'min-h-full h-screen pt-28 min-w-full bg-jud-brown'} style={{ marginLeft: slidePos + '%' }}>
			<section className={'container mx-auto flex md:align-items-center flex-col px-6 max-w-5xl'}>
				<section className={'text-center my-4'}>
					<div className={'jud-text pb-1 text-jud-warning animate__animated animate__fadeInDown'}>WELCOME TO ALPHI COFFEE VAN</div>
					<div className={'jud-title text-jud-beige pt-1 animate__animated animate__fadeInDown'}>OUR COFFEE IS MORE THAN JUST A DRINK</div>
				</section>

				<section className={'mt-6 flex gap-2 flex-shrink mb-4 z-0'}>
					<Image
						src={firstImage}
						layout="responsive"
						width="150"
						height="150"
						placeholder="blur"
						className={'rounded-lg w-full object-cover object-top max-h-80 max-w-full shadow-md animate__animated animate__fadeInLeft'}
						alt="Presentation picture"
					/>

					<Image
						src={eightImage}
						layout="responsive"
						width="150"
						height="150"
						placeholder="blur"
						className={'rounded-lg w-full object-cover object-top max-h-80 max-w-full shadow-md animate__animated animate__fadeInRight'}
						alt="Presentation picture"
					/>
				</section>

				<section className={'jud-text text-jud-brown-secondary mt-6 text-xl font-hauora text-center animate__animated animate__fadeInUp'}>
					<p>Looking for a van to serve coffee in your private functions such as birthdays or any other events such as school festivals and home auctions, Aleph Coffee Van would be ready to make it happen </p>
				</section>
			</section>
		</section>
	);
}