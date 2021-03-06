function acceptance() {
	let warehouse = document.getElementById("warehouse");
	let company = document.querySelector('input[name = "shippingCompany"]');
	let product = document.querySelector('input[name="productName"]');
	let quantity = document.querySelector('input[name="productQuantity"]');
	let scrape= document.querySelector('input[name="productScrape"]');
	let button = document.getElementById('acceptance');


	button.addEventListener('click', addProduct);

	function addProduct () {
		if (company.value && product.value && +quantity.value && +scrape.value) {
			let finalQuantity = parseInt(quantity.value) - parseInt(scrape.value);
			if (finalQuantity <= 0) {
				return;
			}

			let div = document.createElement('div');
			let p = document.createElement('p');
			let btn = document.createElement('button');
			btn.textContent = 'Out of stock'
			btn.addEventListener('click', () => div.remove());
				p.textContent = `[${company.value}] ${product.value} - ${finalQuantity} pieces`;
				div.appendChild(p);
				div.appendChild(btn);
				warehouse.appendChild(div);
			
			
		}
		company.value = '';
		quantity.value = '';
		scrape.value = '';
		product.value = '';
	}
}