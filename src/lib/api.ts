export async function fetcherWrapper(
	url: string,
) {
	const headers = {

		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'X-RapidAPI-Key': 'ed7f9aeef5msh22601ee8bb17532p10239fjsn6d4e6c8f6e93',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

	};
	const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/${url}`, { method:'GET', headers })
		.then((res) => res.json()).catch((err) => console.log(err));
	return res;

}

