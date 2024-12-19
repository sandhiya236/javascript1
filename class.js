const mypizza={
	size:"medium",
	crust:"original",
	bake: function(){
		return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);

	}
};
mypizza.bake();

class pizza{
	constructor(typepizza,sizepizza){
		this.type=typepizza;
		this.size=sizepizza;
		this.crust="original";
	}
	bake(){
		return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
	}
}

const anotherpizza=new pizza("margarita","small");
anotherpizza.bake();