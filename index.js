let nomes = ['Hermes', 'Pitágoras', 'Débora', 'Aurora', 'Sêneca', 'Miguel', 'Thiago', 'Bhor']
let xp = [12000 , 4500, 6300, 9750, 9000, 7560, 10500, 950];
 

for(let i = 0; i < nomes.length; i++){
    let heroi = nomes[i];
    let nivel;


if (xp[i] < 1000){
    nivel = 'Ferro';
}else if(xp[i] >= 1001 && xp[i]<= 2000){
    nivel ='Bronze';
} else if(xp[i] >= 2001 && xp[i] < 5000){
    nivel = 'Prata';
}else if(xp[i] >= 6001 && xp[i] <= 7000){
    nivel = 'Ouro';
}else if (xp[i] >= 7001 && xp[i] <= 8000){
    nivel = 'Platina';
}else if(xp[i] >= 8001 && xp[i] <= 9000){
    nivel = 'Ascendente';
}else if(xp[i] >= 9001 && xp[i] <= 10000){
   nivel ='Imortal';
}else{
    nivel = 'Radiante';
}

if ((heroi.endsWith('a') && heroi !== 'Sêneca') || heroi.endsWith('e') ) {
    
    console.log('A Heroína de nome ' + heroi + ' tem ' + xp[i] + ' de XP e está no nível ' + nivel + '!');
} else {

console.log ('O Herói de nome ' + heroi + ' tem ' +  xp[i] + ' de XP e está no nível ' + nivel + '!');
}
}