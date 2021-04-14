const taka = document.getElementById('taka');
const dollar = document.getElementById('dollar');
const euro = document.getElementById('euro');
const rupi = document.getElementById('rupi');
taka.addEventListener('input', takaToDollarToEuroToRupi);
function takaToDollarToEuroToRupi(){
  const ta= parseFloat(taka.value);
  const dl = 0.012*ta;
  const eu =0.0099*ta;
  const ru =0.89*ta;
  dollar.value=dl;
  euro.value=eu;
  rupi.value=ru;
}
takaToDollarToEuroToRupi();

dollar.addEventListener('input', dollarToTkaToEuroToRupi);
function dollarToTkaToEuroToRupi(){
  const dl= parseFloat(dollar.value);
  const ta =84.79*dl;
  const eu =0.84*dl;
  const ru =75.28*dl;
  taka.value=ta;
  euro.value=eu;
  rupi.value=ru;
}
dollarToTkaToEuroToRupi();

euro.addEventListener('input', euroToTakaToDollarToRupi);
function euroToTakaToDollarToRupi(){
  const eu= parseFloat(euro.value);
  const ta = 101.24*eu;
  const dl =1.19*eu;
  const ru =89.85*eu;
  taka.value=ta;
  dollar.value=dl;
  rupi.value=ru;
}
euroToTakaToDollarToRupi();

rupi.addEventListener('input',rupiToTakaToDollarToEuro);
function rupiToTakaToDollarToEuro (){
  const ru= parseFloat(rupi.value);
  const ta = 1.13*ru;
  const dl =0.013*ru;
  const eu =0.011*ru;
  taka.value=ta;
  dollar.value=dl;
  euro.value=eu;
}
rupiToTakaToDollarToEuro();
