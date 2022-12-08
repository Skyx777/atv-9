let q= prompt('Digite um numero')
let r= prompt('Digite outro numero para a mutiplicação')

function calcularproduto(q,r){
    return q*r;
}
alert(`Seu resutado é ${q*r}`)


alert("Indo para a segunda parte")



 let y= prompt('Digite um número para fazer uma potência')
 let x= prompt('Digite outro número para ser o expoente')
 
 function potencia(x,y){
     return x**y
 }
 alert(potencia(y,x))

 alert('Indo para terceira parte')
 let i=prompt('Digite seu ano de nascimento')
 let n= prompt('Digite seu nome')
 const l= 2022

function idade(l,i){
    return l-i
}
alert(`Seu nome é ${n} e você tem ${idade(l,i)} anos`)

alert('indo para quarta parte')

let numero = prompt("Digite o valor da compra, seu saldo é de 50$")
if(numero>50){
    alert('Compra não aprovada')
}
else if (numero<50){
    alert('Compra aprovada')
}
else{
    alert('Compra aprovada')
}

	var u= prompt('Digite um numero')
	var v= prompt('Digite outro numero')
	var s= prompt('Digite um sinal')
	
	if(s==="+"){
	    alert(u+v)
	}
	else if(s==="-"){
	    alert(u-v)
	}
	else if(s==="*"){
	    alert(u*v)
	}
	else if(s==="/"){
	    alert(u/v)
	}
	else(alert("Não foi possivel calcular"))
