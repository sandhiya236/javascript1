class pizza{
	constructor(sizePizza){
		this.size=sizePizza;
		this.crust="original";

	}
	getCrust(){
		return this.crust;

	}
	setCrust(crustPizza){
		this.crust=crustPizza;

	}
}
class specialPizza extends pizza{
	constructor(sizePizza){
		super(sizePizza);
			this.type="margarita";
	}
	slice(){
		console.log('our ${this.type} ${this.size} pizza has 8 slices');
	}
}
 const myspecialPizza=new specialPizza("medium");
 myspecialPizza.slice();