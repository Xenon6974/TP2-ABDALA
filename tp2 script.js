function EsGrito(f){
    let flag = 'escrito';
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < f.length; i++){
        if(f.charAt(i) == '!'){
            count1++;
        }
        if((f.charAt(i)).match(/[a-z]/i)){
            count2++;
        }
    }
    if(count1 > count2){
        flag = 'ESGRITO';
    }
    return flag;
}

let frase = prompt('ingrese frase','');

document.write(EsGrito(frase));