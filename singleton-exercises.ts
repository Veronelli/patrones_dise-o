class Product{
    private id!: number;
    private name!: string;
    private cost!: number;

    constructor(){}

    public getName(): string{
        return this.name;
    }

    public getId(): number{
        return this.id;
    }

    public getCost(): number{
        return this.cost;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public setId(id: number): void{
        this.id = id;
    }

    public setCost(cost: number): void{
        this.cost = cost;
    }

}


class ShoppingCar{
    private static instance: ShoppingCar;
    private products: Product[] = [];

    private constructor(){}

    public getProductsInShoppingCar(): Product[]{
        return this.products;
    }

    public static getShoppingCar(): ShoppingCar{
        if(!ShoppingCar.instance){
            ShoppingCar.instance = new ShoppingCar()
        }
        return ShoppingCar.instance
    }

    public addProductToCar(product: Product): void{
        this.products.push(product)
    }

    public deleteById(number: number): void{
        this.products = this.products.filter(product=>product.getId() != number)
    }
}


function main(){
    let shoppingCar = ShoppingCar.getShoppingCar();
    console.log(shoppingCar.getProductsInShoppingCar());
    let product1 = new Product();

    product1.setId(1);
    product1.setName("Pan");
    product1.setCost(200);
    shoppingCar.addProductToCar(product1);

    let product2 = new Product();
    product2.setId(2);
    product2.setName("Milanesa");
    product2.setCost(100);
    shoppingCar.addProductToCar(product2);

    let product3 = new Product();
    product3.setId(3);
    product3.setName("Arroz");
    product3.setCost(50);
    shoppingCar.addProductToCar(product3);

    console.log(shoppingCar.getProductsInShoppingCar());
    shoppingCar.deleteById(2);

    let newShpopingCar = ShoppingCar.getShoppingCar();
    console.log(newShpopingCar.getProductsInShoppingCar())
}

main();
