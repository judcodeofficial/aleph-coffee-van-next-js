import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

export default function Footer({ footer } : { footer : string }) {
	return (
		<section className={`${footer} flex items-center text-center justify-center py-2 font-hauora w-full fixed bottom-0 left-0 animate__animated animate__flipInY`}>
			Made with some cups of <div className={'mx-2'}><FontAwesomeIcon icon={faMugHot} /></div> <span>by </span> <a href="https://www.instagram.com/judcode/" className={'font-bold ml-1'}> JudCode</a>
		</section>
	);
}