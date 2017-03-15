
import less from '../styles/less/base.less';
import $ from 'jquery';

var templates = {
	home:require('../templates/home.hbs')
};
var div = document.createElement('div');
div.innerHTML = templates.home({
	title: 'funtime rock',
	list: ['bob', 'tom', 'anne']
});

document.addEventListener('DOMContentLoaded', function() {
	document.body.appendChild(div);
	$('.masonry-grid').masonry({
		itemSelector: '.masonry-item',
		columnWidth:'.masonry-item',
		percentPosition: true
	});
});