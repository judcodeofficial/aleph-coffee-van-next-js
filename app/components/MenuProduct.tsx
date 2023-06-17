export default function MenuProduct({ params }: { params: { productName: string,  firstPrice: string, secondPrice: string} }) {
	const { productName, firstPrice, secondPrice } = params;

	return (
		<section className={'grid grid-cols-3 grid-flow-col gap-4 text-jud-sunset text-lg font-hauora px-2 py-1'}>
			<div>{ productName }</div>
			<div className={'text-right'}>{ firstPrice }</div>
			<div className={'text-right'}>{ secondPrice }</div>
		</section>
	)
}