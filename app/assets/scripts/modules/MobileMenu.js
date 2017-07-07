import $ from 'jquery';

class MobileMenu {

	constructor() {

		this.menuIcon = $('#MobileMenu__toggle');
		this.menuContainer = $('#MobileMenu__container');
		this.events();

	}


	events() {

		this.menuIcon.on('click', this.toggleTheMenu.bind(this));

	}

	toggleTheMenu() {

		this.menuContainer.toggleClass('site-header__menu-content--is-visible');

	}

}

export default MobileMenu;