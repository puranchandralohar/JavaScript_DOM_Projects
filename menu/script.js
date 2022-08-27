const menu = [
    {
      id: 1,
      title: "Paratha",
      category: "breakfast",
      price: 20,
      img: "./images/Paratha.jpg",
      desc: `Parathas are one of the most popular unleavened flatbreads in the Indian subcontinent, made by baking or cooking whole-wheat dough on a tava, and finishing off with shallow-frying.`,
    },

    {
      id: 2,
      title: "Masala Bhindi",
      category: "lunch",
      price: 50,
      img: "./images/Masala_Bhindi.jpg",
      desc: `A delicious dish made with freshly bought okra. Grab some mustard oil, cumin seeds, fennel seeds, finely-chopped onions, ginger and a pinch of amchoor.`,
    },

    {
      id: 3,
      title: "Masala Chai",
      category: "shakes",
      price: 30,
      img: "./images/Masala_Chai.jpg",
      desc: `This hot drink is made with black tea, whole milk, sugar and spices (which may vary by region) such as cardamom, cinnamon, cloves, star anise, ginger, black pepper and nutmeg.`,
    },
    {
      id: 4,
      title: "Misal Paw",
      category: "breakfast",
      price: 25,
      img: "./images/Misal_Pav.jpg",
      desc: `A traditional Maharashtrian breakfast meal to start your day with. Get the most of flavourful vegetables combined with fluffy pavs. `,
    },
    {
      id: 5,
      title: "Chana Kulcha",
      category: "lunch",
      price: 30,
      img: "./images/Chana.jpg",
      desc: `A classic dish that never goes out of style. The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder and some mango powder, which is what gives the chana it's sour and tangy taste.`,
    },
    {
      id: 6,
      title: "Lassi",
      category: "shakes",
      price: 40,
      img: "./images/Lassi.jpg",
      desc: `Lassi is a great “tranquiliser” for spicy Indian food, as casein, a protein found in milk, binds to capsaicin, a compound responsible for the burning of peppers.`,
    },

    {
      id: 7,
      title: "Namkeen Seviyaan",
      category: "breakfast",
      price: 45,
      img: "./images/Namkeen.jpg",
      desc: `Give your mundane mornings a wake up call with versatile vermicelli! Enjoy this salty version of seviyaan cooked in minimal oil and truckloads of desi flavours.`,
    },
    {
      id: 8,
      title: "Punjabi Dal Tadka",
      category: "lunch",
      price: 50,
      img: "./images/Dal_Tadka.jpg",
      desc: `This Punjabi dal tadka is a mouth-watering dish served with roti, naan or rice. Any north Indian menu is incomplete without this tadka dal.`,
    },
    {
      id: 9,
      title: "Aam Panna",
      category: "shakes",
      price: 40,
      img: "./images/Aam_Panna.jpg",
      desc: `Aam Panna drink is widely consumed in the summer as a refreshment and to replace the electrolytes lost in perspiration due to the heat.`,
    },

    {
      id: 10,
      title: "Dum_Aaloo",
      category: "dinner",
      price: 50,
      img: "./images/Dum_Aaloo.jpg",
      desc: `Your family will thank you for this absolutely fantastic bowl of dum aloo cooked Lakhnawi style. Take some potatoes, crumbled paneer, kasuri methi, butter, onions and some ghee.`,
    },
  ];

  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="image" />
            <div class="item-info">
              <header>
                <h4 class="item-title">${item.title}</h4>
                <h4 class="price">Rs.${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  