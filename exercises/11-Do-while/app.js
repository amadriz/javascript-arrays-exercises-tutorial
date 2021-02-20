let i = 20;

do {
    // Magic goes here;
    console.log(i);
    i--;

    if(i % 5 === 0){
        console.log(i+"!");
    } else if(i === 0){
        console.log("LIFTOFF");
    }
    
} while (i > 0);

