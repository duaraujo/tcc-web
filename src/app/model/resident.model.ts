export class Resident{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phone: string,
        public imagePath: String = '',
        public apartament: string,
        public dtnasc: String,
        public gender: string
    ){}
}