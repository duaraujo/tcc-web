import { Resident } from './resident.model';

export class Apartment{
    id: string;
    number: string;
    blockId: string;
    residents: Resident[] = []
}