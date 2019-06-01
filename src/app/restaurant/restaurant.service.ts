import { Restaurant } from './restaurant.model';
import { Injectable } from "@angular/core";


@Injectable()
export class RestaurantService {

    restaurants: Restaurant[];

    constructor() { }

    public getRestaurants() {
        this.restaurants = [
            {
                id: "bread-bakery",
                name: "Bread & Bakery",
                category: "Bakery",
                deliveryEstimate: "25m",
                rating: 4.9,
                imagePath: "assets/img/restaurants/breadbakery.png",                
            },
            {
                id: "burger-house",
                name: "Burger House",
                category: "Hamburgers",
                deliveryEstimate: "100m",
                rating: 3.5,
                imagePath: "assets/img/restaurants/burgerhouse.png",                
            }
        ]
        return this.restaurants;
    }

}