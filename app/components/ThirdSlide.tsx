import Image from 'next/image'
import firstImage from '../../public/001.jpg'
import seventhImage from '../../public/007.jpg'
import fourthImage from '../../public/004.jpg'
import eleventhImage from '../../public/011.jpg'
import twelfthImage from '../../public/012.jpg'

export default function ThirdSlide() {
	return (
		<section className={'min-h-full h-screen pt-28 min-w-full bg-jud-brown overflow-y-auto'}>
			<section className={'container max-w-5xl mx-auto flex md:align-items-center flex-col px-6'}>
				<div className={'jud-text pb-0 text-jud-warning font-oswald'}>ABOUT US</div>

					<section className={'mb-4'}>
						<div className={'jud-title text-jud-beige pt-1'}>WHO ARE WE?</div>
					</section>

				<section className={'font-hauora text-jud-text text-jud-brown-secondary'}>
					<Image
						src={firstImage}
						layout="responsive"
						width="150"
						height="150"
						placeholder="blur"
						className={'rounded-lg w-full object-cover object-top max-h-72 max-w-full shadow-lg'}
						alt="Presentation picture"
					/>

					<section className={'mt-2 flex gap-2 flex-shrink mb-4'}>
						<Image
							src={seventhImage}
							layout="responsive"
							width="150"
							height="150"
							placeholder="blur"
							className={'rounded-lg w-full object-cover object-top max-h-40 max-w-full shadow-md'}
							alt="Presentation picture"
						/>

						<Image
							src={eleventhImage}
							layout="responsive"
							width="150"
							height="150"
							placeholder="blur"
							className={'rounded-lg w-full object-cover object-top max-h-40 max-w-full shadow-md'}
							alt="Presentation picture"
						/>

						<Image
							src={twelfthImage}
							layout="responsive"
							width="150"
							height="150"
							placeholder="blur"
							className={'rounded-lg w-full object-cover object-top max-h-40 max-w-full shadow-md'}
							alt="Presentation picture"
						/>

						<Image
							src={fourthImage}
							layout="responsive"
							width="150"
							height="150"
							placeholder="blur"
							className={'rounded-lg w-full object-cover object-top max-h-40 max-w-full shadow-md'}
							alt="Presentation picture"
						/>
					</section>

					<p className={'text-jud-beige font-hauora pt-4'}>The founder of Aleph Coffee, a former English teacher and lifelong coffee lover, turned his passion for exploring different types of coffee and perfecting his brewing skills into a business. Aleph Coffee aims to exceed their customers&apos; expectations and satisfy their coffee cravings, while also valuing the connection and conversation that comes with being a barista. They recommend trying their locally roasted Witham&apos;s Coffee beans to elevate any celebration and support the community.</p>
				</section>
			</section>
		</section>
	)
}