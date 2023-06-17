import Image from 'next/image'

export default function ReviewCard({ params }: { params: { userName: string, userPicture: string, userReview: string} }) {
	const { userName, userPicture, userReview } = params;
	return (
		<section className={'rounded px-6 pt-4 pb-2 lg:w-1/48 flex flex-col justify-center'}>
			
			<section className={'flex flex-shrink gap-2 mt-6 flex align-bottom mb-2 p-2 rounded'}>
				<div className={''}>
					<Image
						src={userPicture}
						width="40"
						height="40"
						className={'rounded-lg w-12 h-12 object-cover object-top max-h-12 max-w-12 mr-2'}
						alt="{userName}"
					/>
				</div>
				<div className={'flex flex-col'}>
					<h4 className={'font-nordique text-xl text-jud-beige'}>{userName}</h4>
					<h6 className={'font-hauora text-sm text-jud-sunset'}>Google Review</h6>
				</div>
			</section>

			<p className={'font-hauora text-lg text-jud-sunset'}>{userReview}</p>
			
		</section>
	)
}