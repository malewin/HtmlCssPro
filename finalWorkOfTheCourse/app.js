const headerRight_details = document.querySelector(".header__right");
const burgerClose_button = document.querySelector(".breadcrumbsBurger__buttonClose");

let detailsChildren = headerRight_details.children[0];

burgerClose_button.addEventListener("click", () => {
		detailsChildren.removeAttribute('open');
});