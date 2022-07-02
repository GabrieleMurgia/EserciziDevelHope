function sum(...args) {
    let somma=0;
    for(i=0;i<args.length;i++){
        somma = somma + parseInt(args[i]);
    }
    return somma;
}

console.log(sum(1, 2, 3, 4, 5));

