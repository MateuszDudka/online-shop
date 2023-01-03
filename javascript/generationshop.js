let shop = document.getElementById("allcollection-div"); //pobranie całego diva "allcollection-div z htmla"

let products = [
  {
    id: 1,
    name: "Sweter z golfem",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 80,
    type: "Swetry",
    source: "/oneclothes/onesweter/onesweterLuke/onesweterLuke.html",
  },

  {
    id: 2,
    name: "Golf kaszmirowo-wełniany",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 70,
    type: "Golf",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur
     illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },

  {
    id: 3,
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 70,
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur
     illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },

  {
    id: 4,
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 70,
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur
     illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },

  {
    id: 5,
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 70,
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur
     illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },

  {
    id: 6,
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 70,
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur
     illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },

  {
    id: 7,
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 70,
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur
     illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },

  {
    id: 8,
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    price: 70,
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur
     illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },
];

let generateShop = () => {
  return (shop.innerHTML = products
    .map((product) => {
      let { id, name, imgMain, price, source } = product; //destruktyzacja(wyciąganie nazw z obiektu)

      return `
     <div class="item-div" id="product-id-${id}">
         <a href="${source}"><img src="${imgMain}" width="250" alt=""></a>
             <div class="details-div">
                <h3>${name}</h3>
                     <div class="price-div">
                     <h2 class="price-h2">${price}.00 zł</h2>
                     </div>
             </div>
     </div>
     `;
    })
    .join(""));
};
generateShop();
