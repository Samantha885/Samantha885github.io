/* .js files add interaction to your website */
var factList = [
  "A person born in the African continent will live 17 years less than one born in America or Europe.",/*0*/
  "Africa has the world’s 10 countries with the highest under-five mortality rate.",/*1*/
  "Fewer than 50% of Africans have access to modern health facilities.",/*2*/
  "95% of Africa’s population is less than 60 years old, while the average life expectancy at birth is 60.",/*3*/
  "Approximately 1.6 million Africans died of malaria, tuberculosis, and HIV-related illnesses in 2015.",/*4*/
  "Globally, 50% of children under 5 who die of pneumonia, measles, HIV, tuberculosis, and malaria are in Africa.",/*5*/
  "In some parts of Zimbabwe, some nurses give painkillers to sick patients as a “treat-all drug”.",/*6*/
  "Only 37 out of 54 African states have some level of pharmaceutical production.",/*7*/
  "Many African countries spend less than 10% of their GDP on healthcare.",/*8*/
  "There is one doctor for every 6,355 people in Kenya (for reference the World Health Organization recommends for the doctor to people ratio to be 1:1,000)."/*9*/
]


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count]; 
  count++;
  if (count == factList.length){
    count = 0;
  }
}
