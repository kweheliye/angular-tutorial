import { Component, OnInit } from '@angular/core';

declare var $: any
declare var coverVid: any;


@Component({
	selector: 'app-featured-businesses',
	templateUrl: './featured-businesses.component.html',
	styleUrls: ['./featured-businesses.component.css']

})
export class FeaturedBusinessesComponent implements OnInit {

	config: SwiperOptions = {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30,
		loop: true,
		centeredSlides: false,
		slidesPerView: 4,
		slidesPerGroup: 3,
		breakpoints: {
			// when window width is <= 320px
			380: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is <= 480px
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			1000: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	};
	
	constructor() { }
	ngOnInit() {

		$(document).ready(function() {
  		 $('.covervid-video').coverVid(1920, 1080);
   	});
	}

}
