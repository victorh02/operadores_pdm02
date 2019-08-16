let contador = 1;
let contador1 = 1;

// O while precisa de uma variavel para controlar o processo 
// de repetição todo processo é verificado na consição "contador <= 10"
// só vai entrar dentro do while quando a condição for verdadeira
 //while(contador <= 10) {
     //console.log(contador)
     // Variavel sendo incrementada
     //contador += 1;
 //}


 // Tabuada

 while(contador <=10){
     while(contador1 <=10){
         console.log(`${contador} x ${contador1} = ${contador * contador1}`)
         contador1++
     }
    contador1 = 0
    contador++
    console.log('----------------')
    }
    

    //mostrar todas as letras
    //let array1 = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    // while(contador1 <= array1.lenght) {
       //contador+=1
    //}