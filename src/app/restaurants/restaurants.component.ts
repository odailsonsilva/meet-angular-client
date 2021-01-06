import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [
    {id: 'bread-bakery', name: 'Bread & Bakery', category: 'Bakery', deliveryEstimate: '25m', rating: 4.9, imagePath: 'assets/img/restaurants/breadbakery.png'},
    {id: 'bread-bakery', name: 'Bread & Bakery', category: 'Bakery', deliveryEstimate: '25m', rating: 4.9, imagePath: 'assets/img/restaurants/breadbakery.png'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
