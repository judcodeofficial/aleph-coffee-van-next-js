import ReviewCard from './ReviewCard'

export default function FourthSlide() {
	const googleReviews = [
    {
      userName: 'Jonash Ocampo',
      userPicture: 'https://lh3.googleusercontent.com/a-/ACB-R5S95ABKOPfnNGQejAo15hy01qQBns-AefeMoKmMZFo=w75-h75-p-rp-mo-ba3-br100',
      userReview: 'Randomly grabbed a couple of coffees from Aleph Coffee and they were amazing. You can tell that they are passionate about what they do, really taking time to listen to my coffee preferences. Great to chat with too. Really personable. Will definitely come back for more!'
    },
    {
      userName: 'Jen Giles',
      userPicture: 'https://lh3.googleusercontent.com/a-/ACB-R5TZbkHS7VH01J8YNkgs6TtRHNJEghe_MZ3SYLWJNQ=w75-h75-p-rp-mo-br100',
      userReview: 'We invited Aleph Coffee to set up at our Election Day BBQ and Adi was an amazing addition to the day. He is a lovely guy and provided a really great quality coffee van service. We loved having you Adi and would love to have you at future Asquith Public School P&C events and will definitely recommend you to others!'
    },
    {
      userName: 'Hamid raftar',
      userPicture: 'https://lh3.googleusercontent.com/a/AGNmyxYz-Vtw8me2iW4Xh1O8hhuqZYDu-VbYd52REwfC=w75-h75-p-rp-mo-br100',
      userReview: 'Will go again. This place is amazing! They offered the best coffee and showed the best attitude to its costumers. The drinks and foods were all tasty and worthwhile.'
    },
    {
      userName: 'Team at Hornsby Heights Netball Club',
      userPicture: 'https://lh3.googleusercontent.com/a-/ACB-R5SsaY6VLb3jDsQQ2x9YAqKpkV4Xx9k4vUwSxoWu=w75-h75-p-rp-mo-br100',
      userReview: 'Thank you so much Adi from Aleph Coffee. You made our grading day experience so much better ! We would happily have you come again. Good luck with your future business.'
    },
    {
      userName: 'Karen Benhar',
      userPicture: 'https://lh3.googleusercontent.com/a-/ACB-R5RTEcsBkt-b6T68WXprnUgyh1au3X2YBvLb7GXO=w75-h75-p-rp-mo-br100',
      userReview: 'A big thanks to Adi for providing beautiful coffee and friendly service all day at the recent Berowra Fauna Fair.  Friends of Berowra Valley loved your work!'
    },
    {
      userName: 'Jade Hudson',
      userPicture: 'https://lh3.googleusercontent.com/a-/ACB-R5R-TSRkhMhJF-0OfXvjeFdcJRWvkoDa5kOR2Ay0yg=w75-h75-p-rp-mo-ba4-br100',
      userReview: 'Highly recommend Aleph Coffee. Happy Parents, Great party hire, top guy. Friendly Service. Thank you.'
    },
  ]

	return (
		<section className={'min-h-full h-screen pt-24 min-w-full bg-jud-brown overflow-y-auto'}>
			<section className={'container mx-auto flex md:align-items-center flex-col px-6 max-w-6xl'}>
				<section className={'my-4'}>
					<div className={'jud-text pb-1 text-jud-warning'}>REVIEWS</div>
					<div className={'jud-title text-jud-beige pt-1'}>SEE WHAT OUR CUSTOMERS ARE RAVING ABOUT!</div>
				</section>

				<section className={'lg:flex lg:gap-2 lg:flex-wrap lg:justify-around w-full mb-10'}>
					{ googleReviews.map((review, index) => <ReviewCard key={index} params={review} />) }
				</section>
			</section>
		</section>
	)
}