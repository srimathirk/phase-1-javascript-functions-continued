// code your solution here
function saturdayFun(play = "roller-skate"){
    return (`This Saturday, I want to ${play}!`);
}
console.log(saturdayFun());
console.log(saturdayFun('bathe my dog'));
function mondayWork(park = `go to the office`){
    return (`This Monday, I will ${park}.`)
}
console.log(mondayWork());
console.log(mondayWork(`work from home`));

function wrapAdjective(special , msg = 'You are'){
    return function (txt){
        return `${msg} ${special}${txt}${special}!`;
    };
    }
   console.log (wrapAdjective('*')("a hard worker"));
   console.log(wrapAdjective("%")("a dedicated programmer"));

