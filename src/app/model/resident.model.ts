import { Apartment } from './apartment.model';
export class Resident {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public imagePath: String = '';
    public apartment: Apartment;
    public dataNasc: String;
    public gender: string;
    public gallery: any[] = [];
}