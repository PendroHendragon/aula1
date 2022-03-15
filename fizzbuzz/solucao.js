function Resolve(number){
    if(number<=100){   
        if(number%3 == 0 && number%5==0){
            console.log("fizz buzz");
        }else{
            if(number%3 == 0){
                console.log("fizz")
            }
            if(number%5 == 0){
                console.log("buzz");
            }
            if(number%3 != 0 && number%5 !=0){
                console.log(number);
            }
            
        }    
            
        Resolve(number+1);
    }
    

}
Resolve(1);