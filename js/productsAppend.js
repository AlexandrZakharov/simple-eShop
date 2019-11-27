(function productsAppend() {
  const itemsWrapper = document.querySelector('.items-wrapper');
  for(let product of productList) {
    const item = document.createElement('div');
    item.className = 'item col-lg-3 col-md-6';
    itemsWrapper.append(item);

    const card = document.createElement('div');
    card.className = 'card';
    item.append(card);

    const cardImgWrapper = document.createElement('div');
    cardImgWrapper.className = 'card-img-wrapper';
    card.append(cardImgWrapper);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.append(cardBody);

    const img = document.createElement('img');
    img.setAttribute('src', product.img);
    img.className = 'card-img-top'
    cardImgWrapper.append(img);

    const price = document.createElement('span');
    price.className = 'card-price';
    price.innerText = `$${product.price}`;
    cardBody.append(price);

    const productName = document.createElement('span');
    productName.className = 'product-name';
    productName.innerText = product.name;
    cardBody.append(productName);

    const productDescription = document.createElement('span');
    productDescription.className = 'product-description';
    productDescription.innerText = product.description;
    cardBody.append(productDescription);

    const tags = document.createElement('span');
    tags.className = 'card-text';
    cardBody.append(tags);

    const smallTags = document.createElement('small');
    smallTags.className = 'text-muted';
    smallTags.innerText = product.tags;
    tags.append(smallTags);

    const button = document.createElement('a');
    button.setAttribute('href', '#');
    button.className = 'product-button';
    button.innerText = 'Add to shopping cart';
    card.append(button);
  }
})()