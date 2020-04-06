// JavaScript Document
let p3 = document.createElement('p');
p3.textContent = " ";
var link = "https://anmolsharma786.github.io/Module4/bike.json";
fetch(link)
     .then(function(response) {
         return response.json();
     })
     .then(function(json) {
		// function loadAsset(url, type, callback) {
			let button = document.createElement('button');
			button.innerHTML = 'Cilck Me';
			let header = document.querySelector('header');

			button.addEventListener('click', function(){
				p3.textContent = 'The reason  why i use fetch api as it uses promises and is more cleaner way to code .'
				header.appendChild(p3);

			});

			header.appendChild(button);

			let bikeTypes = json.bikeTypes;
		 	for (let i = 0; i < bikeTypes.length; i++) {
				//build HTML elements for the content
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				let list = document.createElement('ul');
        //store a reference to the section element in var section
        let section = document.querySelector('section');
        //set the image src attribute
				img.setAttribute('src', 'https://anmolsharma786.github.io/LAB4/' + bikeTypes[i].image);
        //set the image alt attribute
				img.setAttribute('alt', bikeTypes[i].name);
        //set the text content of the h2 to name
				h2.textContent = bikeTypes[i].name;
        //set the text contenxt of the first paragraph
				p1.textContent = 'price: ' +
        bikeTypes[i].price;
				//Build a loop for the details array in the JSON
				let details = bikeTypes[i].details;
				for (let j = 0; j < details.length; j++) {
					let listItem = document.createElement('li');
					// Set text for each list item
					listItem.textContent = details[j];
					list.appendChild(listItem);
				}
				// append each of the above HTML elements to the ARTICLE element, then append the article element to the section
				article.appendChild(img);
				article.appendChild(h2);
				article.appendChild(p1);
				article.appendChild(p2);
				article.appendChild(list);
				section.appendChild(article);
				}
			});
