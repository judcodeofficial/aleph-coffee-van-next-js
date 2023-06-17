export default function NavBar({ navBarColor, navBarBgColor, navBarTitleBorderColor } : { navBarColor : string, navBarBgColor : string, navBarTitleBorderColor : string }) {
	return (
		<section className={`${navBarColor} ${navBarBgColor} w-full absolute px-4 z-20`}>
			<div className={'container flex justify-between items-center mx-auto'}>
				<a href="menu" className={'block font-hauora uppercase'}>Menu</a>
				<a href="gallery" className={'block font-hauora uppercase'}>Gallery</a>
				<a href="/aleph-coffee-van-next-js" className={`block text-center ${navBarTitleBorderColor}`}>
					<div className={'font-hauora animate__animated animate__fadeIn'}>ALEPH</div>
					<div className={'font-oswald font-bold text-4xl animate__animated animate__swing'}>COFFEE</div>
				</a>
				<a href="about" className={'block font-hauora uppercase'}>About</a>
				<a href="contact" className={'block font-hauora uppercase'}>Contact</a>
			</div>
		</section>
	);
}