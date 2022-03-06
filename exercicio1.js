function donuts(count){
    info = `Number of donuts: ${count}`;
    if(count >= 10){
        info = `Number of donuts: many`;
    }
    return info;
}


function test(func, esp){


    out = func;

    if(out === esp){
        sign = 'test passed';
        info = '';

    }else{
        sign = 'errror';
        info = `o correto e ${esp}`;

    }

    console.log(`${sign} retornou ${out} ${info}`);

    
}
test(donuts(4), 'Number of donuts: 4');
test(donuts(11), 'Number of donuts: many')