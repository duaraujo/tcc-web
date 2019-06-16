import { Apartment } from './apartment.model';

export class Block{

    id: string;
    name: string;
    floor: number;
    height: string;
    rating: number;
    apartments: Apartment[] = [];
    sendImage: string;
}