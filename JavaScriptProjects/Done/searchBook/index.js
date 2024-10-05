// List of books (replace with your list)
const books = [
	{
		title: "The Silent Patient",
		author: "Alex Michael",
		price: "Rs. 150/-",
		image: "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg",
	},
	{
		title: "All Time Favorites",
		author: "Ruskin Bond",
		price: "Rs. 170/-",
		image: "https://m.media-amazon.com/images/I/51fnKED0JJL.AC_SX250.jpg",
	},
	{
		title: "Harry Potter",
		author: "J K Rowling",
		price: "Rs. 220/-",
		image: "https://m.media-amazon.com/images/I/51BTfQsu58L.AC_SX250.jpg",
	},
	{
		title: "Elon Musk",
		author: "Walter Isaacson",
		price: "Rs. 150/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41YMXMqcqtL._AC_SX184_.jpg",
	},
	{
		title: "Hindus In Hindu Rashtra",
		author: "Anand Ranganatham",
		price: "Rs. 150/-",
		image: "https://m.media-amazon.com/images/I/51TdFGla--L.AC_SX250.jpg",
	},
	{
		title: "The Gruffalo",
		author: "Julia Donaldson",
		price: "Rs. 250/-",
		image: "https://m.media-amazon.com/images/I/51qJCaDWtKL.AC_SX250.jpg",
	},
	{
		title: "Nothing But the truth",
		author: "Rishab shah",
		price: "Rs. 180/-",
		image: "https://m.media-amazon.com/images/I/5158etzi0dL.AC_SX250.jpg",
	},
	{
		title: "Traitors Gate",
		author: "Jeffrey Archer",
		price: "Rs. 450/-",
		image: "https://m.media-amazon.com/images/I/51LTsgz6BQL.AC_SX250.jpg",
	},
	{
		title: "Percy Jackson",
		author: "Rick Riordan",
		price: "Rs. 430/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51NsJhoYCqL._AC_SX184_.jpg",
	},
	{
		title: "The Running Grave",
		author: "Robert Galbrath",
		price: "Rs. 350/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51ROoKC0-HL._AC_SX184_.jpg",
	},
	{
		title: "Modi: The challenge of 2024",
		author: "Minhaz merchant",
		price: "Rs. 455/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/410LjJgnZmL._AC_SX184_.jpg",
	},
	{
		title: "The Power of your mind",
		author: "Advent Pillar",
		price: "Rs. 330/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41+CqNWoutS._SX342_SY445_.jpg",
	},
	{
		title: "You Can",
		author: "Paper back",
		price: "Rs. 110/-",
		image: "https://m.media-amazon.com/images/I/514fD3oqIFL._SX342_SY445_.jpg",
	},
	{
		title: "The Hidden Hindu",
		author: "Akshat Gupta",
		price: "Rs. 340/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51Na+IacyeL._AC_SX184_.jpg",
	},
	{
		title: "Diary of a Whimpy kid",
		author: "Jennifer Kol",
		price: "Rs. 250/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51MqocDcH3L._AC_SX184_.jpg",
	},
	{
		title: "The Diary of a CEO",
		author: "Steven Barlett",
		price: "Rs. 450/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41hpet8rmqL._AC_SX184_.jpg",
	},
	{
		title: "Culture",
		author: "Deepinder Goyal",
		price: "Rs. 230/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/41Xkfc-Oc6L._AC_SX184_.jpg",
	},
	{
		title: "You must know your constitution",
		author: "Fali R Nerman",
		price: "Rs. 340/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51NhsG7qBkL._AC_SX184_.jpg",
	},
	{
		title: "Murder in the family",
		author: "Cara Hunter",
		price: "Rs. 233/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51zn8scX3gL._AC_SX184_.jpg",
	},
	{
		title: "World's worst best Girlfrient",
		author: "Gurjos Datta",
		price: "Rs. 250/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51HAb4KeAdL._AC_SX184_.jpg",
	},
	{
		title: "Ashoka",
		author: "Patrick olivelle",
		price: "Rs. 350/-",
		image:
			"https://images-eu.ssl-images-amazon.com/images/I/51OEnlv1DwL._AC_SX184_.jpg",
	},
];

// Function to display books
function displayBooks(bookList) {
	const bookListElement = document.getElementById("bookList");
	bookListElement.innerHTML = "";

	bookList.forEach((book) => {
		const bookContainer = document.createElement("div");
		const title = document.createElement("h2");
		const author = document.createElement("h6");
		const image = document.createElement("img");
		const price = document.createElement("p");
		bookContainer.style.height = "250px";
		bookContainer.style.width = "170px";
		bookContainer.style.padding = "5px 10px";
		title.textContent = book.title;
		title.classList.add("fs-5");
		title.classList.add("text-white");
		author.textContent = book.author;
		author.classList.add("fs-6");
		author.classList.add("text-white");
		image.src = book.image;
		image.style.height = "70%";
		image.style.width = "100%";
		image.classList.add("rounded");
		image.classList.add("mb-2");
		price.textContent = book.price;
		price.classList.add("text-white");
		bookContainer.classList.add("mb-3");

		bookContainer.appendChild(image);
		bookContainer.appendChild(title);
		bookContainer.appendChild(author);
		bookContainer.appendChild(price);
		bookListElement.appendChild(bookContainer);
	});
}

// Function to search for books by title or author
function searchBooks() {
	const searchInput = document.getElementById("searchInput");
	const searchTerm = searchInput.value.toLowerCase();

	const searchResults = books.filter((book) => {
		return (
			book.title.toLowerCase().includes(searchTerm) ||
			book.author.toLowerCase().includes(searchTerm)
		);
	});

	if (searchTerm !== "") {
		// Display search results if the search input is not empty
		displayBooks(searchResults);
	} else {
		// If the search input is empty, display all books
		displayBooks(books);
	}
}

// Initialize the page by displaying all books
displayBooks(books);
