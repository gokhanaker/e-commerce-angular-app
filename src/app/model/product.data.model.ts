// data model class

export class Product {
    constructor(
        public id: number,
        public name: string,
        public category: string,
        public image: string,
        public description: string,
        public price: number) { }
}
