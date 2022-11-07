//valor de la entrada
const valorEntrada=200;

//defino inputs
nombre=document.getElementById("nombre");
apellido=document.getElementById("apellido");
mail=document.getElementById("mail");

cant=document.getElementById("cant").value;
cat=document.getElementById("cat");
total=document.getElementById("total");
resumen=document.getElementById("resumen");

//definir las variables de descuento
var descuentoEstudiante=80;
var descuentoTrainee=50;
var descuentoJunior=15;

//calcular
function total_a_pagar()
{ 
let totalValorTickets=(cant.value)*valorEntrada;

if(cat.value===0)
{
    totalValorTickets=totalValorTickets;
}

if(cat.value===1)
{
    totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
}

if(cat.value===2)
{
    totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
}

if(cat.value===3)
{
    totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
}

resumen.addEventListener("click", total_a_pagar);
total.innerHTML=totalValorTickets;

}

