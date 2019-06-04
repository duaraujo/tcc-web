import { Apartment } from './apartment.model';
import { Injectable } from "@angular/core";


@Injectable()
export class Apartmentservice {

    apartments: Apartment[];

    constructor() { }

    public getapartments() {
        this.apartments = [
            {
                id: "bread-bakery",
                name: "Bloco-1A",
                category: "Bakery",
                deliveryEstimate: "25m",
                rating: 4.9,
                imagePath: "assets/img/apartments/apartment01.png",                
            },
            {
                id: "burger-house",
                name: "Bloco-1B",
                category: "Hamburgers",
                deliveryEstimate: "100m",
                rating: 3.5,
                imagePath: "assets/img/apartments/apartment01.png",                
            },
            {
                id: "bread-bakery",
                name: "Blobo-2A",
                category: "Bakery",
                deliveryEstimate: "25m",
                rating: 4.9,
                imagePath: "assets/img/apartments/apartment01.png",                
            },
            {
                id: "burger-house",
                name: "Bloco-2B",
                category: "Hamburgers",
                deliveryEstimate: "100m",
                rating: 3.5,
                imagePath: "assets/img/apartments/apartment01.png",                
            }
        ]
        return this.apartments;
    }

}