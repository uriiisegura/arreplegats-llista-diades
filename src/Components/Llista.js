function Llista(props) {
	const { diades } = props;

	const actuacions = [...Object.values(diades)];
	console.log(actuacions);

	return (
		<div id="llista">
			<div className="wrap">
				{
					actuacions.map(diada => {
						console.log(diada);
					})
				}
			</div>
		</div>
	);
}

export default Llista;
