// dato number y se escribe unicamente el numero. 
let numero = 99;
console.log(typeof numero);
// dato String y se escribe con comillas, para texto.
let userName = 'Lorenzo';
console.log(typeof userName);
// dato Boolean y se va sin comillas, true or false.
let logica = true;
console.log(typeof logica);
// dato undefined porque no tiene un =.
let password;
console.log(typeof password);
// dato bigint y se escribe una n despues del numero, este es para numero muy grandes ya que la variable number unicamente lee asta 2 ala 53.
let z = 3n ** 55n;
console.log(typeof z);
//  dato Symbol, se escribe la palabra unicamente "symbol"
let clave = Symbol ('Sym');
console.log (typeof clave);
// dato array, se escribe con corchetes y dividiendo por comas","son matrices.
let carros = ['Gtr', 500, true];
console.log(typeof (carros));
// dato object, se escribe dentro de comilla y poniendo dos puntos":". 
// a diferncia de la array esta describe cualidades de un objeto y la array es una lista de elementos.
let carro ={modelo: 'gtr', potencia: 300, velocidad: 215};
console.log(typeof carro);
// copiado por refencia, cambia el valor.
let x =[2,4];
let y = x;
y.push(5);

console.log(x);
console.log(y);
