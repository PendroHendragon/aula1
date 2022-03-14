function piramide(line){
    
    for(i=1;i<=line;i++){
        
        console.log("#".repeat(i));

    }
    
}
function calcPiramide(line){
    const a =1;
    let n2 = line-1;
    for(i=1;i<=line;i++){
        n = a+(i-1)*2;
        console.log(" ".repeat(n2)+"#".repeat(n));
        n2--;
    }
}


function piramide2(line){
    return " ".repeat(line);
    
    if(line>0){
        piramide2(line-1);
    }
    
}
function piramide3(line){
    return "#".repeat(line);
    
    if(line<10){
        piramide3(line+1);
    }
    
}
function imprimiPiramide(){
    console.log(piramide2(10)+piramide3(1));
}
calcPiramide(10);
