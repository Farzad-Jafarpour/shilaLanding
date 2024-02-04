const apiUrl =
  "https://restaurant.delino.com/restaurant/menu/00b99096-3dca-41dd-ae68-61265cafd5ca";

const handleCreateFoodList = ({ categories }) => {
  const parent = document.querySelector(".menu_section");
  categories.forEach((element) => {
    const menuHeaderElm = document.createElement("div");
    menuHeaderElm.className = "menu_header";
    const MenuHeaderContent = `<h2>${element.title}</h2>
        <i class="fa fa-share-alt" aria-hidden="true"></i>`;
    menuHeaderElm.innerHTML = MenuHeaderContent;
    parent.appendChild(menuHeaderElm);
    element.sub.map((sub) => {
      const divElm = document.createElement("div");
      divElm.className = "menu_items";
      sub.food.map((food) => {
        const menuCardElm = document.createElement("div");
        menuCardElm.className = "menu_card";
        const content = `<div class="img_container">
          <img
            src="${food.img.replace("#SIZEOFIMAGE#", "560x350")}"
            alt="food"
          />
          <span class="hover_text"
            >${food.ingredient}</span
          >
        </div>
        <div class="text_container">
          <h3>${food.title}</h3>
          <div class="price_tag">
            <span>${food.price} تومان</span>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      `;
        menuCardElm.innerHTML = content;
        divElm.appendChild(menuCardElm);
        parent.append(divElm);
      });
    });
  });
};

fetch(apiUrl)
  .then((res) => res.json())
  .then((res) => handleCreateFoodList(res));

//   <div class="menu_section">
//   <div class="menu_header">
//     <h2>کمبو</h2>
//     <i class="fa fa-share-alt" aria-hidden="true"></i>
//   </div>
//   <div class="menu_items">

//     <div class="menu_card">
//       <div class="img_container">
//         <img
//           src="https://static.delino.com/Image/Restaurant/Food/hzjrmzfp.0ze_560x350.jpg"
//           alt="food"
//         />
//         <span class="hover_text"
//           >پیتزا رست بیف 23+سیب زمینی هات داگ فرایز+2 عدد نوشابه</span
//         >
//       </div>
//       <div class="text_container">
//         <h3>رست بیف23+فرش چیزبرگر+سیب زمینی+2نوشابه</h3>
//         <div class="price_tag">
//           <span>498,000 تومان</span>
//           <i class="fa fa-plus" aria-hidden="true"></i>
//         </div>
//       </div>
//     </div>
//     <div class="menu_card">
//       <div class="img_container">
//         <img
//           src="https://static.delino.com/Image/Restaurant/Food/hzjrmzfp.0ze_560x350.jpg"
//           alt="food"
//         />
//         <span class="hover_text"
//           >پیتزا رست بیف 23+سیب زمینی هات داگ فرایز+2 عدد نوشابه</span
//         >
//       </div>
//       <div class="text_container">
//         <h3>رست بیف23+فرش چیزبرگر+سیب زمینی+2نوشابه</h3>
//         <div class="price_tag">
//           <span>498,000 تومان</span>
//           <i class="fa fa-plus" aria-hidden="true"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
