const Electronics= [{
        "ProductName": "Refrigerator",
        "imageURL": "../images/plush.jpg",
        "Description": "with deep freeze option",
        "Price": 200
    },
    {
        "ProductName": "Washing Machine",
        "imageURL": "../images/boat.jpg",
        "Description": "6.5 kg load capacity, fully automatic",
        "Price": 100
    },
    {
        "ProductName": "LCD Screen",
        "imageURL": "../images/Duck.jpg",
        "Description": "15 inch display",
        "Price": 50
    },
    {
        "ProductName": "Mobile",
        "imageURL": "../images/Mario.jpg",
        "Description": "Latest snapdragon 865",
        "Price": 300
    },
    {
        "ProductName": "PS5",
        "imageURL": "../images/Pikachu.jpg",
        "Description": "Aukaat se bahar",
        "Price": 200
    },
    {
        "ProductName": "Tubelight",
        "imageURL": "../images/plush.jpg",
        "Description": "10 watt",
        "Price": 200
    },
    {
        "ProductName": "Laptop",
        "imageURL": "../images/Pinchio.jpg",
        "Description": "intel i-7, 1TB SSD",
        "Price": 125
    },
    {
        "ProductName": "Fan",
        "imageURL": "../images/Rail.jpg",
        "Description": "Havells",
        "Price": 100
    },
    {
        "ProductName": "Extension Cable",
        "imageURL": "../images/Soldiers.jpg",
        "Description": "4 chhedon wala",
        "Price": 100
    }
]

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
    let end = start + rows_per_page;
    items = items.toString();
    let paginatedItems = items.slice(start, end);

	    for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];
    let item_element = document.createElement('div');
        const innerHtml = `<img style="height:200px;width:200px" src=${item.imageURL}>
        <span><b>${item.ProductName}</b></span>`
		item_element.classList.add('item');
		item_element.innerHTML = innerHtml;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(Electronics, list_element, rows, current_page);
SetupPagination(Electronics, pagination_element, rows);