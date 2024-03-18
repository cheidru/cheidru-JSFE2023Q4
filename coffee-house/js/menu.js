const menu = document.getElementById('product-menu');
const productTemplate = document.getElementById('menu-prodict-template');
const coffeeBTN = document.getElementById('coffee');
const teaBTN = document.getElementById('tea');
const dessertBTN = document.getElementById('dessert');
const anyWhere = document.querySelector('body');

const menuBTN = document.querySelectorAll('.menu-offer-btn');
const coffeeCupSVG = document.getElementById('coffee-cup-svg');
const refreshBTN = document.getElementById('refresh-btn');
const menuItem = document.querySelectorAll('.menu-item');


let actualMenu = 0;
const menuProdNumber = [0, 8, 12, 20];
const productPictures = [
    'coffee-1.jpg', 'coffee-2.jpg', 'coffee-3.jpg', 'coffee-4.jpg', 
    'coffee-5.jpg', 'coffee-6.jpg', 'coffee-7.jpg', 'coffee-8.jpg', 
    'tea-1.png', 'tea-2.png', 'tea-3.png', 'tea-4.png',
    'dessert-1.png', 'dessert-2.png', 'dessert-3.png', 'dessert-4.png',
    'dessert-5.png', 'dessert-6.png', 'dessert-7.png', 'dessert-8.png',
];

let cupStyle =  getComputedStyle(coffeeCupSVG);
let shortMenu = cupStyle.display == 'none' ? 4 : 0;
const products = [
    {
      "name": "Irish coffee",
      "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      "price": "7.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Kahlua coffee",
      "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      "price": "7.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey raf",
      "description": "Espresso with frothed milk, cream and aromatic honey",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Ice cappuccino",
      "description": "Cappuccino with soft thick foam in summer version with ice",
      "price": "5.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Espresso",
      "description": "Classic black coffee",
      "price": "4.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte",
      "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte macchiato",
      "description": "Espresso with frothed milk and chocolate",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Coffee with cognac",
      "description": "Fragrant black coffee with cognac and whipped cream",
      "price": "6.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Moroccan",
      "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      "price": "4.50",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Ginger",
      "description": "Original black tea with fresh ginger, lemon and honey",
      "price": "5.00",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Cranberry",
      "description": "Invigorating black tea with cranberry and honey",
      "price": "5.00",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Sea buckthorn",
      "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      "price": "5.50",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Marble cheesecake",
      "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      "price": "3.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Red velvet",
      "description": "Layer cake with cream cheese frosting",
      "price": "4.00",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Cheesecakes",
      "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Creme brulee",
      "description": "Delicate creamy dessert in a caramel basket with wild berries",
      "price": "4.00",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Pancakes",
      "description": "Tender pancakes with strawberry jam and fresh strawberries",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey cake",
      "description": "Classic honey cake with delicate custard",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Chocolate cake",
      "description": "Cake with hot chocolate filling and nuts with dried apricots",
      "price": "5.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Black forest",
      "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      "price": "6.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    }
  ];

  function fillProdMenu() {
    menu.innerHTML = '';
    
    for(let i = menuProdNumber[actualMenu]; i < menuProdNumber[actualMenu + 1] - shortMenu; i++) {
        // Fill in product card
        let prodTempl = productTemplate.content.cloneNode(true);
        const prodItemId = prodTempl.querySelector('.menu-item');
        // generate id to define product for further handling
        prodItemId.setAttribute('id', 'item-' + actualMenu + i);
        const prodItemNumber = i;
        const prodItemPicture = prodTempl.querySelector('.menu-item-img');
        prodItemPicture.style.backgroundImage = `url(./assets/pics/menu/${productPictures[prodItemNumber]})`;
        const prodItemTitle = prodTempl.getElementById('title');
        prodItemTitle.textContent = products[prodItemNumber].name;
        const prodItemDescr = prodTempl.getElementById('recipe');
        prodItemDescr.textContent = products[prodItemNumber].description;
        const prodItemPrice = prodTempl.getElementById('price');
        prodItemPrice.textContent = '$' + products[prodItemNumber].price;
        menu.appendChild(prodTempl);
    }

    if (shortMenu == 0) refreshBTN.style.display = 'none';
}

fillProdMenu();

coffeeBTN.addEventListener('click', (event) => {
  let newMenu = 0;
  if(newMenu !== actualMenu) changeMNU(newMenu);
});

teaBTN.addEventListener('click', (event) => {
  let newMenu = 1;
  if(newMenu !== actualMenu) changeMNU(newMenu);
});

dessertBTN.addEventListener('click', (event) => {
  let newMenu = 2;
  if(newMenu !== actualMenu) changeMNU(newMenu);
});

function changeMNU(newMenu) {
  menuBTN[newMenu].classList.add('selected-btn');
  menuBTN[actualMenu].classList.remove('selected-btn');
  actualMenu = newMenu;
  shortMenu = cupStyle.display == 'none' && actualMenu !== 1 ? 4 : 0;
  if(actualMenu == 1) {
    menu.style.gridTemplateRows = "1fr";
    refreshBTN.style.display = 'none';
  } else {
    menu.style.gridTemplateRows = "1fr 1fr";
    if (cupStyle.display == 'none') refreshBTN.style.display = 'flex';
  }
  fillProdMenu();
}

refreshBTN.addEventListener('click', () => {
  shortMenu = 0;
  refreshBTN.style.display = 'none';
  fillProdMenu();
})

window.addEventListener('resize', () => {
    let cupStyle =  getComputedStyle(coffeeCupSVG);

    let newShortMenu = cupStyle.display == 'none' && actualMenu !== 1 ? 4 : 0;
    if(newShortMenu !== shortMenu) {
        shortMenu = newShortMenu;
        refreshBTN.style.display = 'flex';
        fillProdMenu();
    }


})

menu.addEventListener('click', (event) => {  
  console.log('menu item clicked', 'event.target = ', event.target.parentElement.id, event.target.parentElement.parentElement.id);
  console.log((event.target.parentElement.id).slice(5), (event.target.parentElement.parentElement.id).slice(5));
  if(event.target.parentElement.id.includes('item-')) fillModal((event.target.parentElement.id).slice(6));
  if(event.target.parentElement.parentElement.id.includes('item-')) fillModal((event.target.parentElement.parentElement.id).slice(6));
  showModal();
})

// Modal window section

const modal = document.getElementById('modal');
const modalButtons = document.querySelectorAll('.menu-modal-btn');
const powerLayer = document.getElementById('power-layer');
const modalWindow = document.getElementById('modal');
const modalPicture = document.getElementById('modal-img');
const modalTitle = document.getElementById('head-title');
const modalDescr = document.getElementById('recipe');
const modalSval = document.getElementById('s-value');
const modalMval = document.getElementById('m-value');
const modalLval = document.getElementById('l-value');
const modalOneval = document.getElementById('1-value');
const modalTwoval = document.getElementById('2-value');
const modalThreeval = document.getElementById('3-value');
const modalPrice = document.getElementById('total-price-value');
const modalCloseBTN = document.getElementById('close-btn');


const modalMBTN = modalMval.parentElement;
const modalSBTN = modalSval.parentElement;
const modalLBTN = modalLval.parentElement;
const modalOneBTN = modalOneval.parentElement;
const modalTwoBTN = modalTwoval.parentElement;
const modalThreeBTN = modalThreeval.parentElement;


let selectedProduct = {};
selectedProduct.price = products[0].price;
selectedProduct.finalprice = products[0].price;
selectedProduct.ID = 0;
selectedProduct.size = 0;
selectedProduct.additive = '';

function fillModal(itemID) {
  selectedProduct.ID = itemID;
  selectedProduct.price = products[itemID].price;
  selectedProduct.finalprice = products[itemID].price;
  modalPicture.style.backgroundImage = `url(./assets/pics/menu/${productPictures[itemID]})`;
  modalTitle.textContent = products[itemID].name;
  modalDescr.textContent = products[itemID].description;
  modalPrice.textContent = "$" + selectedProduct.price;
  modalSval.textContent = products[itemID].sizes.s.size;
  modalMval.textContent = products[itemID].sizes.m.size;
  modalLval.textContent = products[itemID].sizes.l.size;
  modalOneval.textContent = products[itemID].additives[0].name;
  modalTwoval.textContent = products[itemID].additives[1].name;
  modalThreeval.textContent = products[itemID].additives[2].name;
}

function updateModal(option) {
  console.log('updateModal');

  switch(option) {
    case 'S':
      if (selectedProduct.size !== 0) {
        selectedProduct.finalprice = selectedProduct.size == 1 ? Number(selectedProduct.finalprice) - 0.5: Number(selectedProduct.finalprice) - 1;
        switchSize(selectedProduct.size, 0);
        selectedProduct.size = 0;
      }
    break;
    case 'M':
      if (selectedProduct.size !== 1) {
        selectedProduct.finalprice = selectedProduct.size == 2 ? Number(selectedProduct.finalprice) - 0.5: Number(selectedProduct.finalprice) + 0.5;
        switchSize(selectedProduct.size, 1);
        selectedProduct.size = 1;
      }
    break;
    case 'L':
      if (selectedProduct.size !== 2) {
        selectedProduct.finalprice = selectedProduct.size == 0 ? Number(selectedProduct.finalprice) + 1: Number(selectedProduct.finalprice) + 0.5;
        switchSize(selectedProduct.size, 2);
        selectedProduct.size = 2;
      }
    break;
    case 'O':
      if (!selectedProduct.additive.includes('O')) {
         addAdditive('O', 3);
      } else {removeAdditive('O', 3)}
    break;
    case 'T':
      if (!selectedProduct.additive.includes('T')) {
        addAdditive('T', 4);
     } else {removeAdditive('T', 4)}
    break;
    case 'E':
      if (!selectedProduct.additive.includes('E')) {
        addAdditive('E', 5);
     } else { removeAdditive('E', 5)}
    break;
  }

      function switchSize(oldSize, newSize) {
        console.log('selectedProduct.finalprice = ', selectedProduct.finalprice);
        modalButtons[oldSize].classList.remove('selected-btn');
        modalButtons[newSize].classList.add('selected-btn');
        modalPrice.textContent = "$" + selectedProduct.finalprice.toFixed(2);
      }

      function addAdditive(Code, ID) {
        modalButtons[ID].classList.add('selected-btn');
        selectedProduct.additive = selectedProduct.additive + Code;
        selectedProduct.finalprice = Number(selectedProduct.finalprice) + 0.5;
        modalPrice.textContent = "$" + selectedProduct.finalprice.toFixed(2);
      }

      function removeAdditive(Code, ID) {
        modalButtons[ID].classList.remove('selected-btn');
        selectedProduct.additive = selectedProduct.additive.split(Code).join('');
        selectedProduct.finalprice = Number(selectedProduct.finalprice) - 0.5;
        modalPrice.textContent = "$" + selectedProduct.finalprice.toFixed(2);
      }
  }


function showModal() {
  powerLayer.classList.remove('hidden-modal');
  modalWindow.classList.remove('hidden-modal');
  powerLayer.style.display = 'flex';
  anyWhere.style.overflow = 'hidden';
  modalWindow.style.display = 'flex';
}

modalCloseBTN.addEventListener('click', () => (closeModal()));
powerLayer.addEventListener('click', () => (closeModal()));

function closeModal() {
  powerLayer.classList.add('hidden-modal');
  modalWindow.classList.add('hidden-modal');
  powerLayer.style.display = 'none';
  anyWhere.style.overflow = 'unset';
  modalWindow.style.display = 'none';
  modalButtons[selectedProduct.size].classList.remove('selected-btn');
  modalButtons[0].classList.add('selected-btn');
  modalButtons[3].classList.remove('selected-btn');
  modalButtons[4].classList.remove('selected-btn');
  modalButtons[5].classList.remove('selected-btn');
  selectedProduct.size = 0;
  selectedProduct.additive = '';
}

modalSBTN.addEventListener('click', () => {updateModal('S')});
modalMBTN.addEventListener('click', () => {updateModal('M')});
modalLBTN.addEventListener('click', () => {updateModal('L')});
modalOneBTN.addEventListener('click', () => {updateModal('O')});
modalTwoBTN.addEventListener('click', () => {updateModal('T')});
modalThreeBTN.addEventListener('click', () => {updateModal('E')});