//Error handling
"use  strict"
const makeError =() =>{

		 let i=0;
		 while(1<=5){
		 	try{
		 		if(i%2 !==0){
		 			throw new Error("odd Number");

		 		}
		 		console.log("even number");
		 	}
		 	catch(err){
		 	console.error(err.message);
		 }
		 finally{
		 	console.log("..finally");
		 	i++;
		 }
	}
};
makeError();