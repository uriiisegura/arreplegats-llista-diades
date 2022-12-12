function Llista(props) {
	//const { diades } = props;

	function showSeason() {
		const season = document.getElementById('select_temporada').value;
		const diades_divs = document.getElementsByClassName('diada');
		for (let div of diades_divs) {
			if (div.dataset.season === season) div.style.display = 'block';
			else div.style.display = 'none';
		}
	}

	const temporades = ['1994-1995','1995-1996','1996-1997','1997-1998','1998-1999','1999-2000','2000-2001','2001-2002','2002-2003','2003-2004','2004-2005','2005-2006','2006-2007','2007-2008','2008-2009','2009-2010','2010-2011','2011-2012','2012-2013','2013-2014','2014-2015','2015-2016','2016-2017','2017-2018','2018-2019','2019-2020','2020-2021','2021-2022','2022-2023'];
	return (
		<div id="selector">
			<select id="select_temporada" defaultValue={temporades[temporades.length-1]} onChange={showSeason}>
				{
					temporades.map(temporada => {
						return <option value={temporada}>Temporada {temporada}</option>;
					})
				}
			</select>
		</div>
	);
}

export default Llista;
