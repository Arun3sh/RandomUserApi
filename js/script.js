async function getData() {
	try {
		const res = await fetch(`https://randomuser.me/api`);
		const data = await res.json();
		var img = document.getElementById('res');
		img.src = data.results[0].picture.large;
		var content = `<p>Name : ${data.results[0].name.title}.${data.results[0].name.first} ${data.results[0].name.last}</p>
		<br> <p>email Id: ${data.results[0].email}</p> <br> <p>email Id: ${data.results[0].dob.date}</p> `;
		//var name = console.log(data.results[0].name.first);
		var getContent = document.querySelector('.content');
		getContent.innerHTML = content;
	} catch {
		console.log('err');
	}

	// return data;
}
