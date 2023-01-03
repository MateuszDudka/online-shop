let shop = document.getElementById("allcollection-div"); //pobranie całego diva "allcollection-div z htmla"

let products = [
  {
    name: "Golfy",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    source: "/clothes/sweaters/sweaters.html",
  },

  {
    name: "Swetry",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
  },

  {
    name: "Koszule",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
  },

  {
    name: "Koszule zawijane",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
  },

  {
    name: "Swetry okrągłe",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
  },

  {
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
  },

  {
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
  },

  {
    id: 8,
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
  },
];

let generateShop = () => {
  return (shop.innerHTML = products
    .map((product) => {
      let { id, name, imgMain, source } = product; //destruktyzacja(wyciąganie nazw z obiektu)

      return `
    <div class="item-div" id="product-id-${id}">
        <a href="${source}"><img src="${imgMain}" width="350" alt=""></a>
            <div class="details-div">
                <h3>${name}</h3>
            </div>
    </div>
    `;
    })
    .join(""));
};
generateShop();
