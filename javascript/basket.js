let basketsection = document.getElementById("basket-product");
let label = document.getElementById("label");
let totalBill = document.getElementById("totalbill");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartAmountBasket = document.getElementById("cartamount");
  cartAmountBasket.innerHTML = basket
    .map((product) => product.item)
    .reduce((x, y) => x + y, 0); //tworzymy nową tablicę o znanej długości na podstawie koszyka gdzie za pomocą
  //metody "reduce" dodajemy poprzedni element do następnego zaczynając od początkowej wartosci 0
};
calculation();

let generateItemsBasket = () => {
  if (basket.length !== 0) {
    return (basketsection.innerHTML = basket
      .map((product) => {
        let { id, item, size } = product;
        let search = products.find((product) => product.id === id) || [];

        return `
      <div class="cart-item">
        <img width="190" src=${search.imgMain} alt=""/>
        <div class="details">
            <div class="title-price-product">
                <h4 class="title-price">
                    <p class="name">Nazwa: ${search.name}</p>
                    <p class="size">Rozmiar: ${size}</p>
                    <p class="cart-item-price">${`Cena: ${
                      search.price * item
                    }.00 zł`}</p>
                    <p id=${id} class="quantity">Ilość: ${item}</p>
                </h4>
                <i class="fa-solid fa-trash delete" id="delete" onclick="removeItem(${id}, '${size}')"></i>
            </div>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    label.innerHTML = `
      <div class="empty-basket-div">
        <form class="description-empty-basket">
         <h2>Twój koszyk jest pusty</h2>
          <p class="description-empty-h5">Dodaj przedmiot do koszyka aby zakupić produkt</p>
          <button class="btn-home">Powrót do strony głównej</button>
        </form>
      </div> 
    `;
  }
};
generateItemsBasket();

let removeItem = (id, size) => {
  let selectedItem = id; //id pobiera prawidłowo
  let selectedSize = size;
  basket = basket.filter(
    (product) => product.id == selectedItem && product.size !== selectedSize // jeśli dany produkt id jest równy produktowi id w localstorage i dany rozmiar jest różny od danego rozmiaru w localstorage to usuń produkt
  );
  generateItemsBasket();
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  location.reload();
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((product) => {
        let { id, item } = product;
        let search = products.find((product) => product.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    //console.log(amount);
    totalBill.innerHTML = `
     <h2>Podsumowanie: ${amount}.00 zł</h2>
     <div class="btn">
     <button class="payment">Przejdź do płatności</button>
     <button onclick="clearCart()" class="removeAll">Wyczyść wszystko</button>
     </div>
     `;
  } else {
    return;
  }
};

let clearCart = () => {
  basket = [];
  generateItemsBasket();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  location.reload();
};

TotalAmount();
