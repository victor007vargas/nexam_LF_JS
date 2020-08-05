// □□□□□□  INTRODUCCION :   Declaración de Variables Globales □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
var pts=0; var mov=0 ;var flagdrop=0; var flagini=0; var parada="no"; var mycounter; var ct="ini";
var imgarra; var elecae; var recipe; var reogi;  var imebas="image/1.png";var idarra; var g3 ; var s=0; var m=0;
var kp1ca; var kp2ca; var kp3ca; var kp4ca; var kp5ca;
var lp1ca; var lp2ca; var lp3ca; var lp4ca; var mp1ca; var mp2ca; var mp3ca;
var np1ca; var np2ca; var op1ca ; var qp1ca;
var kp1cb; var kp2cb; var kp3cb; var kp4cb; var kp5cb;
var lp1cb; var lp2cb; var lp3cb; var lp4cb; var mp1cb; var mp2cb; var mp3cb;
var np1cb; var np2cb; var op1cb ; var qp1cb;
var kp1cc; var kp2cc; var kp3cc; var kp4cc; var kp5cc;
var lp1cc; var lp2cc; var lp3cc; var lp4cc; var mp1cc; var mp2cc; var mp3cc;
var np1cc; var np2cc; var op1cc ; var qp1cc;
var kp1cd; var kp2cd; var kp3cd; var kp4cd; var kp5cd;
var lp1cd; var lp2cd; var lp3cd; var lp4cd; var mp1cd; var mp2cd; var mp3cd;
var np1cd; var np2cd; var op1cd ; var qp1cd;
var kp1ce; var kp2ce; var kp3ce; var kp4ce; var kp5ce;
var lp1ce; var lp2ce; var lp3ce; var lp4ce; var mp1ce; var mp2ce; var mp3ce;
var np1ce; var np2ce; var op1ce ; var qp1ce;
var kp1cf; var kp2cf; var kp3cf; var kp4cf; var kp5cf;
var lp1cf; var lp2cf; var lp3cf; var lp4cf; var mp1cf; var mp2cf; var mp3cf;
var np1cf; var np2cf; var op1cf ; var qp1cf;
var kp1cg; var kp2cg; var kp3cg; var kp4cg; var kp5cg;
var lp1cg; var lp2cg; var lp3cg; var lp4cg; var mp1cg; var mp2cg; var mp3cg;
var np1cg; var np2cg; var op1cg ; var qp1cg;

var numa = [];numb = []; numc = [];numd =[];nume =[];numf=[]; numg = [];
var cola = [a1,a2,a3,a4,a5,a6,a7] ;
var colb = [b1,b2,b3,b4,b5,b6,b7] ;
var colc = [c1,c2,c3,c4,c5,c6,c7] ;
var cold = [d1,d2,d3,d4,d5,d6,d7] ;
var cole = [e1,e2,e3,e4,e5,e6,e7] ;
var colf = [f1,f2,f3,f4,f5,f6,f7] ;
var colg = [g1,g2,g3,g4,g5,g6,g7] ;
// □□□□□□  Fin □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□

// □□□□□□ 1 Inicio Funcion de Inicialaizacion  □□□□□□□□
$(function(){
setTimeout (flastit,2000); //***** 1.1 retardo accion color titulo (ver item 3)
}); // □□□□□□ Fin 1   □□□□□□□□□□□

// □□□□□□  2 Modulo cambio color titulo □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
function clrtitwh ()  {$(".main-titulo").animate({color:"blue"},320,function(){clrtitbl ()})}
function clrtitbl ()  {$(".main-titulo").animate({color:"yellow"},480,function(){clrtitwh ()})}
function flastit ()   {clrtitwh (),clrtitbl ()};
// □□□□□□  Fin 2 □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□


// □□□□□□ 3 Habilitacion Drag/Drop  □□□□□□□□□□□□□□□□□□□□
function init(){
$(".elemento").draggable({ // ****1.2 Habilita drag a elementos
cursor:"grab",containment:".panel-tablero",distance:5,drag:function(event,ui){reogi=$(this);imgarra=$(this).attr("src");idarra=$(this).attr("id");},
});//****fin 1.2
$(".elemento").droppable({drop: function( event, ui )// ****1.2 Habilita drop a elementos
{recipe =(this);elecae=$(this).attr("id");reasigel();} })};
function reasigel(){$(recipe).attr("src",imgarra); //**** 1.3 Asignacion de imagenes a ID origen destino por Drag/Drop
$(elecae).attr("src",imgarra);
flagdrop=1; if (flagdrop==1){deteceries();flagdrop=0;};mov=mov+1;$("#movimientos-text").text(mov);monitordrop();}//****fin reasigel
// □□□□□□ Fin 3   □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□

// □□□□□□  4 Acciones del boton Inicar □□□□□□
$(".btn-reinicio").click(function(){init();asiale();cronometro();ct="uno"})

// ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ Botones de Prueba
$(".bt2").click(function(){          });

$(".bt1").click(function(){reaccend()});
//⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂Fin de Botoner de prueba
// □□□□□□ Fin 4   □□□□□


// □□□□□□  5 Modulo Logica deteccion Series + Cambio dulces + Asigancion de Puntos  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□

function deteceries(){// **** Deteciion de Imagenes
ica1=$("#a1").attr("src");icb1=$("#b1").attr("src");icc1=$("#c1").attr("src");icd1=$("#d1").attr("src");ice1=$("#e1").attr("src");icf1=$("#f1").attr("src");icg1=$("#g1").attr("src");
ica3=$("#a2").attr("src");icb2=$("#b2").attr("src");icc2=$("#c2").attr("src");icd2=$("#d2").attr("src");ice2=$("#e2").attr("src");icf2=$("#f2").attr("src");icg2=$("#g2").attr("src");
ica2=$("#a2").attr("src");icb3=$("#b3").attr("src");icc3=$("#c3").attr("src");icd3=$("#d3").attr("src");ice3=$("#e3").attr("src");icf3=$("#f3").attr("src");icg3=$("#g3").attr("src");
ica4=$("#a4").attr("src");icb4=$("#b4").attr("src");icc4=$("#c4").attr("src");icd4=$("#d4").attr("src");ice4=$("#e4").attr("src");icf4=$("#f4").attr("src");icg4=$("#g4").attr("src");
ica5=$("#a5").attr("src");icb5=$("#b5").attr("src");icc5=$("#c5").attr("src");icd5=$("#d5").attr("src");ice5=$("#e5").attr("src");icf5=$("#f5").attr("src");icg5=$("#g5").attr("src");
ica6=$("#a6").attr("src");icb6=$("#b6").attr("src");icc6=$("#c6").attr("src");icd6=$("#d6").attr("src");ice6=$("#e6").attr("src");icf6=$("#f6").attr("src");icg6=$("#g6").attr("src");
ica7=$("#a7").attr("src");icb7=$("#b7").attr("src");icc7=$("#c7").attr("src");icd7=$("#d7").attr("src");ice7=$("#e7").attr("src");icf7=$("#f7").attr("src");icg7=$("#g7").attr("src");
// ****   Logica series col a



//---------------- Logica  imagenes columan a -------------------
if ((ica2==ica1)&&(ica3==ica2)){kp1ca=1;if (ica4==ica3){kp1ca=0;kp2ca=1;if(ica5==ica4){kp2ca=0;kp3ca=1;if(ica6==ica5){kp3ca=0;kp4ca=1;if(ica7==ica6){kp4ca=0;kp5ca=1};};};};};
if ((ica3==ica2)&&(ica4==ica3)){lp1ca=1;if (ica5==ica4){lp1ca=0;lp2ca=1;if(ica6==ica5){lp2ca=0;lp3ca=1;if(ica7===ica6){lp3ca=0;lp4ca=1};};};};
if ((ica4==ica3)&&(ica5==ica4)){mp1ca=1;if (ica6==ica5){mp1ca=0;mp2ca=1;if(ica7==ica6){mp2ca=0;mp3ca=1};};};
if ((ica5==ica4)&&(ica6==ica5)){np1ca=1;if (ica7==ica6){np1ca=0;np2ca=1};};
if ((ica6==ica5)&&(ica7==ica6)){op1ca=1};
//---------------- logica imagenes columan b -------------------
if ((icb2==icb1)&&(icb3==icb2)){kp1cb=1;if (icb4==icb3){kp1cb=0;kp2cb=1;if(icb5==icb4){kp2cb=0;kp3cb=1;if(icb6==icb5){kp3cb=0;kp4cb=1;if(icb7==icb6){kp4cb=0;kp5cb=1};};};};};
if ((icb3==icb2)&&(icb4==icb3)){lp1cb=1;if (icb5==icb4){lp1cb=0;lp2cb=1;if(icb6==icb5){lp2cb=0;lp3cb=1;if(icb7===icb6){lp3cb=0;lp4cb=1};};};};
if ((icb4==icb3)&&(icb5==icb4)){mp1cb=1;if (icb6==icb5){mp1cb=0;mp2cb=1;if(icb7==icb6){mp2cb=0;mp3cb=1};};};
if ((icb5==icb4)&&(icb6==icb5)){np1cb=1;if (icb7==icb6){np1cb=0;np2cb=1};};
if ((icb6==icb5)&&(icb7==icb6)){op1cb=1};
//---------------- logica imagenes columan c -------------------
if ((icc2==icc1)&&(icc3==icc2)){kp1cc=1;if (icc4==icc3){kp1cc=0;kp2cc=1;if(icc5==icc4){kp2cc=0;kp3cc=1;if(icc6==icc5){kp3cc=0;kp4cc=1;if(icc7==icc6){kp4cc=0;kp5cc=1};};};};};
if ((icc3==icc2)&&(icc4==icc3)){lp1cc=1;if (icc5==icc4){lp1cc=0;lp2cc=1;if(icc6==icc5){lp2cc=0;lp3cc=1;if(icc7===icc6){lp3cc=0;lp4cc=1};};};};
if ((icc4==icc3)&&(icc5==icc4)){mp1cc=1;if (icc6==icc5){mp1cc=0;mp2cc=1;if(icc7==icc6){mp2cc=0;mp3cc=1};};};
if ((icc5==icc4)&&(icc6==icc5)){np1cc=1;if (icc7==icc6){np1cc=0;np2cc=1};};
if ((icc6==icc5)&&(icc7==icc6)){op1cc=1};
//---------------- logica imagenes columan d -------------------
if ((icd2==icd1)&&(icd3==icd2)){kp1cd=1;if (icd4==icd3){kp1cd=0;kp2cd=1;if(icd5==icd4){kp2cd=0;kp3cd=1;if(icd6==icd5){kp3cd=0;kp4cd=1;if(icd7==icd6){kp4cd=0;kp5cd=1};};};};};
if ((icd3==icd2)&&(icd4==icd3)){lp1cd=1;if (icd5==icd4){lp1cd=0;lp2cd=1;if(icd6==icd5){lp2cd=0;lp3cd=1;if(icd7===icd6){lp3cd=0;lp4cd=1};};};};
if ((icd4==icd3)&&(icd5==icd4)){mp1cd=1;if (icd6==icd5){mp1cd=0;mp2cd=1;if(icd7==icd6){mp2cd=0;mp3cd=1};};};
if ((icd5==icd4)&&(icd6==icd5)){np1cd=1;if (icd7==icd6){np1cd=0;np2cd=1};};
if ((icd6==icd5)&&(icd7==icd6)){op1cd=1};
//---------------- logica imagenes columan e -------------------
if ((ice2==ice1)&&(ice3==ice2)){kp1ce=1;if (ice4==ice3){kp1ce=0;kp2ce=1;if(ice5==ice4){kp2ce=0;kp3ce=1;if(ice6==ice5){kp3ce=0;kp4ce=1;if(ice7==ice6){kp4ce=0;kp5ce=1};};};};};
if ((ice3==ice2)&&(ice4==ice3)){lp1ce=1;if (ice5==ice4){lp1ce=0;lp2ce=1;if(ice6==ice5){lp2ce=0;lp3ce=1;if(ice7===ice6){lp3ce=0;lp4ce=1};};};};
if ((ice4==ice3)&&(ice5==ice4)){mp1ce=1;if (ice6==ice5){mp1ce=0;mp2ce=1;if(ice7==ice6){mp2ce=0;mp3ce=1};};};
if ((ice5==ice4)&&(ice6==ice5)){np1ce=1;if (ice7==ice6){np1ce=0;np2ce=1};};
if ((ice6==ice5)&&(ice7==ice6)){op1ce=1};
//---------------- logica imagenes columan f -------------------
if ((icf2==icf1)&&(icf3==icf2)){kp1cf=1;if (icf4==icf3){kp1cf=0;kp2cf=1;if(icf5==icf4){kp2cf=0;kp3cf=1;if(icf6==icf5){kp3cf=0;kp4cf=1;if(icf7==icf6){kp4cf=0;kp5cf=1};};};};};
if ((icf3==icf2)&&(icf4==icf3)){lp1cf=1;if (icf5==icf4){lp1cf=0;lp2cf=1;if(icf6==icf5){lp2cf=0;lp3cf=1;if(icf7===icf6){lp3cf=0;lp4cf=1};};};};
if ((icf4==icf3)&&(icf5==icf4)){mp1cf=1;if (icf6==icf5){mp1cf=0;mp2cf=1;if(icf7==icf6){mp2cf=0;mp3cf=1};};};
if ((icf5==icf4)&&(icf6==icf5)){np1cf=1;if (icf7==icf6){np1cf=0;np2cf=1};};
if ((icf6==icf5)&&(icf7==icf6)){op1cf=1};
//---------------- logica imagenes columan g -------------------
if ((icg2==icg1)&&(icg3==icg2)){kp1cg=1;if (icg4==icg3){kp1cg=0;kp2cg=1;if(icg5==icg4){kp2cg=0;kp3cg=1;if(icg6==icg5){kp3cg=0;kp4cg=1;if(icg7==icg6){kp4cg=0;kp5cg=1};};};};};
if ((icg3==icg2)&&(icg4==icg3)){lp1cg=1;if (icg5==icg4){lp1cg=0;lp2cg=1;if(icg6==icg5){lp2cg=0;lp3cg=1;if(icg7===icg6){lp3cg=0;lp4cg=1};};};};
if ((icg4==icg3)&&(icg5==icg4)){mp1cg=1;if (icg6==icg5){mp1cg=0;mp2cg=1;if(icg7==icg6){mp2cg=0;mp3cg=1};};};
if ((icg5==icg4)&&(icg6==icg5)){np1cg=1;if (icg7==icg6){np1cg=0;np2cg=1};};
if ((icg6==icg5)&&(icg7==icg6)){op1cg=1};
//--------------------------------------------------------------------
// Series Columna A
if (kp1ca==1){ana10();gena1();
  ni();$("#a2").attr("src",imgx);
  ni();$("#a3").attr("src",imgx);
  kp1ca=0;pt10()};

if (kp2ca==1){ana20();gena1();
   ni();$("#a4").attr("src",imgx);kp2ca=0;pt20();};

if (kp3ca==1){ana40();gena1();
  ni();$("#a4").attr("src",imgx);
  ni();$("#a5").attr("src",imgx);kp3ca=0;pt40();};

if (kp4ca==1){ana70();gena1();
  ni();$("#a4").attr("src",imgx);
  ni();$("#a5").attr("src",imgx);
  ni();$("#a6").attr("src",imgx);kp4ca=0;pt70();};

if (kp5ca==1){ana100();gena1();
  ni();$("#a4").attr("src",imgx);
  ni();$("#a5").attr("src",imgx);
  ni();$("#a6").attr("src",imgx);
  ni();$("#a7").attr("src",imgx);kp5ca=0;pt100();};

if (lp1ca==1){
ima1=$("#a1").attr("src");
$("#a5").attr("src",ima1);
gena1();
ni();$("#a2").attr("src",imgx);
ni();$("#a3").attr("src",imgx);lp1ca=0;pt10();};

if (lp2ca==1){
ima1=$("#a1").attr("src");
$("#a6").attr("src",ima1);
gena1();
ni();$("#a2").attr("src",imgx);
ni();$("#a3").attr("src",imgx);
ni();$("#a4").attr("src",imgx);lp2ca=0;pt20();};

if (lp3ca==1){
ima1=$("#a1").attr("src");
$("#a7").attr("src",ima1);
gena1();
ni();$("#a2").attr("src",imgx);
ni();$("#a3").attr("src",imgx);
ni();$("#a4").attr("src",imgx);
ni();$("#a5").attr("src",imgx);lp3ca=0;pt40();};

if (lp4ca==1){
gena1();
ni();$("#a2").attr("src",imgx);
ni();$("#a3").attr("src",imgx);
ni();$("#a4").attr("src",imgx);
ni();$("#a5").attr("src",imgx);lp4ca=0;pt70();};

if(mp1ca==1){
  gena1();
  ima1=$("#a1").attr("src");
  ima2=$("#a2").attr("src");
  $("#a6").attr("src",ima1);
  $("#a7").attr("src",ima2);
  ni();$("#a3").attr("src",imgx);
  ni();$("#a4").attr("src",imgx);
  ni();$("#a5").attr("src",imgx);mp1ca=0;pt10();};

if(mp2ca==1){
  gena1();
  ima1=$("#a1").attr("src");
  ima2=$("#a2").attr("src");
  $("#a2").attr("src",ima1);
  $("#a7").attr("src",ima2);
  ni();$("#a3").attr("src",imgx);
  ni();$("#a4").attr("src",imgx);
  ni();$("#a5").attr("src",imgx);
  ni();$("#a6").attr("src",imgx);mp2ca=0;pt20();};

  if(mp3ca==1){
    ima1=$("#a1").attr("src");
    $("#a2").attr("src",ima1);
    gena1();
    ni();$("#a3").attr("src",imgx);
    ni();$("#a4").attr("src",imgx);
    ni();$("#a5").attr("src",imgx);
    ni();$("#a6").attr("src",imgx);
    ni();$("#a6").attr("src",imgx);mp3ca=0;pt40();};

    if(np1ca==1){
    gena1();
    ni();$("#a4").attr("src",imgx);
    ni();$("#a5").attr("src",imgx);
    ni();$("#a6").attr("src",imgx);np1ca=0;pt10();};

    if(np2ca==1){
    ima1=$("#a1").attr("src");
    $("#a2").attr("src",ima1);
    gena1();
    ni();$("#a4").attr("src",imgx);
    ni();$("#a5").attr("src",imgx);
    ni();$("#a6").attr("src",imgx);
    ni();$("#a6").attr("src",imgx);np2ca=0;pt20(); };

    if (op1ca){
     ima1=$("#a1").attr("src");
     $("#a2").attr("src",ima1);
     gena1();
     ni();$("#a5").attr("src",imgx);
     ni();$("#a6").attr("src",imgx);
     ni();$("#a7").attr("src",imgx);op1ca=0;pt10();};

    if(qp1ca){
      gena1();
      ni();$("#a2").attr("src",imgx);
      ni();$("#a3").attr("src",imgx);
      ni();$("#a5").attr("src",imgx);
      ni();$("#a6").attr("src",imgx);
      ni();$("#a7").attr("src",imgx);qp1ca=0;};
//------------------------------------------------------------------------------------------
// Series Columna B


       if (kp1cb==1){ana10();genb1();
       ni();$("#b2").attr("src",imgx);
       ni();$("#b3").attr("src",imgx);
       kp1cb=0;pt10()};
       if (kp2cb==1){ana20();genb1();
       ni();$("#b4").attr("src",imgx);kp1cb=0;kp2cb=0;pt20();};
       if (kp3cb==1){ana40();genb1();
       ni();$("#b4").attr("src",imgx);
       ni();$("#b5").attr("src",imgx);kp3cb=0;pt40();};
       if (kp4cb==1){ana70();genb1();
       ni();$("#b4").attr("src",imgx);
       ni();$("#b5").attr("src",imgx);
       ni();$("#b6").attr("src",imgx);kp4cb=0;pt70();};

       if (kp5cb==1){anb100();genb1();
       ni();$("#b4").attr("src",imgx);
       ni();$("#b5").attr("src",imgx);
       ni();$("#b6").attr("src",imgx);
       ni();$("#b7").attr("src",imgx);kp5cb=0;pt100();};

       if (lp1cb==1){
       imb1=$("#b1").attr("src");
       $("#b5").attr("src",imb1);
       genb1();
       ni();$("#b2").attr("src",imgx);
       ni();$("#b3").attr("src",imgx);lp1cb=0;pt10();};

       if (lp2cb==1){
       imb1=$("#b1").attr("src");
       $("#b6").attr("src",imb1);
       genb1();
       ni();$("#b2").attr("src",imgx);
       ni();$("#b3").attr("src",imgx);
       ni();$("#b4").attr("src",imgx);lp2cb=0;pt20();};

       if (lp3cb==1){
       imb1=$("#b1").attr("src");
       $("#b7").attr("src",imb1);
       genb1();
       ni();$("#b2").attr("src",imgx);
       ni();$("#b3").attr("src",imgx);
       ni();$("#b4").attr("src",imgx);
       ni();$("#b5").attr("src",imgx);lp3cb=0;pt40();};

       if (lp4cb==1){
       genb1();
       ni();$("#b2").attr("src",imgx);
       ni();$("#b3").attr("src",imgx);
       ni();$("#b4").attr("src",imgx);
       ni();$("#b5").attr("src",imgx);lp4cb=0;pt70();};

       if(mp1cb==1){
         genb1();
         imb1=$("#b1").attr("src");
         imb2=$("#b2").attr("src");
         $("#b6").attr("src",imb1);
         $("#b7").attr("src",imb2);
         ni();$("#b3").attr("src",imgx);
         ni();$("#b4").attr("src",imgx);
         ni();$("#b5").attr("src",imgx);mp1cb=0;pt10();};

       if(mp2cb==1){
         genb1();
         imb1=$("#b1").attr("src");
         imb2=$("#b2").attr("src");
         $("#b2").attr("src",imb1);
         $("#b7").attr("src",imb2);
         ni();$("#b3").attr("src",imgx);
         ni();$("#b4").attr("src",imgx);
         ni();$("#b5").attr("src",imgx);
         ni();$("#b6").attr("src",imgx);mp2cb=0;pt20();};

         if(mp3cb==1){
           imb1=$("#b1").attr("src");
           $("#b2").attr("src",imb1);
           genb1();
           ni();$("#b3").attr("src",imgx);
           ni();$("#b4").attr("src",imgx);
           ni();$("#b5").attr("src",imgx);
           ni();$("#b6").attr("src",imgx);
           ni();$("#b6").attr("src",imgx);mp3cb=0;pt40();};

           if(np1cb==1){
           genb1();
           ni();$("#b4").attr("src",imgx);
           ni();$("#b5").attr("src",imgx);
           ni();$("#b6").attr("src",imgx);np1cb=0;pt10();};

           if(np2cb==1){
           imb1=$("#b1").attr("src");
           $("#b2").attr("src",imb1);
           genb1();
           ni();$("#b4").attr("src",imgx);
           ni();$("#b5").attr("src",imgx);
           ni();$("#b6").attr("src",imgx);
           ni();$("#b6").attr("src",imgx);np2cb=0;pt20(); };

           if (op1cb){
            imb1=$("#b1").attr("src");
            $("#b2").attr("src",imb1);
            genb1();
            ni();$("#b5").attr("src",imgx);
            ni();$("#b6").attr("src",imgx);
            ni();$("#b7").attr("src",imgx);op1cb=0;pt10();};

           if(qp1cb){
             genb1();
             ni();$("#b2").attr("src",imgx);
             ni();$("#b3").attr("src",imgx);
             ni();$("#b5").attr("src",imgx);
             ni();$("#b6").attr("src",imgx);
             ni();$("#b7").attr("src",imgx);qp1cb=0;};
//------------------------------------------------------------------------------------------
// Series Columna C


       if (kp1cc==1){ana10();genc1();
       ni();$("#c2").attr("src",imgx);
       ni();$("#c3").attr("src",imgx);
       kp1cc=0;pt10()};
       if (kp2cc==1){ana20();genc1();
       ni();$("#c4").attr("src",imgx);kp1cc=0;kp2cc=0;pt20();};
       if (kp3cc==1){ana40();genb1();
       ni();$("#c4").attr("src",imgx);
       ni();$("#c5").attr("src",imgx);kp3cc=0;pt40();};
       if (kp4cc==1){ana70();genc1();
       ni();$("#c4").attr("src",imgx);
       ni();$("#c5").attr("src",imgx);
       ni();$("#c6").attr("src",imgx);kp4cc=0;pt70();};

       if (kp5cc==1){anb100();genc1();
       ni();$("#c4").attr("src",imgx);
       ni();$("#c5").attr("src",imgx);
       ni();$("#c6").attr("src",imgx);
       ni();$("#c7").attr("src",imgx);kp5cc=0;pt100();};

       if (lp1cc==1){
       imc1=$("#c1").attr("src");
       $("#c5").attr("src",imc1);
       genc1();
       ni();$("#c2").attr("src",imgx);
       ni();$("#c3").attr("src",imgx);lp1cc=0;pt10();};

       if (lp2cc==1){
       imc1=$("#c1").attr("src");
       $("#c6").attr("src",imc1);
       genc1();
       ni();$("#c2").attr("src",imgx);
       ni();$("#c3").attr("src",imgx);
       ni();$("#c4").attr("src",imgx);lp2cc=0;pt20();};

       if (lp3cc==1){
       imc1=$("#c1").attr("src");
       $("#c7").attr("src",imc1);
       genc1();
       ni();$("#c2").attr("src",imgx);
       ni();$("#c3").attr("src",imgx);
       ni();$("#c4").attr("src",imgx);
       ni();$("#c5").attr("src",imgx);lp3cc=0;pt40();};

       if (lp4cc==1){
       genc1();
       ni();$("#c2").attr("src",imgx);
       ni();$("#c3").attr("src",imgx);
       ni();$("#c4").attr("src",imgx);
       ni();$("#c5").attr("src",imgx);lp4cc=0;pt70();};

       if(mp1cc==1){
         genc1();
         imc1=$("#c1").attr("src");
         imc2=$("#c2").attr("src");
         $("#c6").attr("src",imc1);
         $("#c7").attr("src",imc2);
         ni();$("#c3").attr("src",imgx);
         ni();$("#c4").attr("src",imgx);
         ni();$("#c5").attr("src",imgx);mp1cc=0;pt10();};

       if(mp2cc==1){
         genc1();
         imc1=$("#c1").attr("src");
         imc2=$("#c2").attr("src");
         $("#c2").attr("src",imc1);
         $("#c7").attr("src",imc2);
         ni();$("#c3").attr("src",imgx);
         ni();$("#c4").attr("src",imgx);
         ni();$("#c5").attr("src",imgx);
         ni();$("#c6").attr("src",imgx);mp2cc=0;pt20();};

         if(mp3cc==1){
           imc1=$("#c1").attr("src");
           $("#c2").attr("src",imc1);
           genc1();
           ni();$("#c3").attr("src",imgx);
           ni();$("#c4").attr("src",imgx);
           ni();$("#c5").attr("src",imgx);
           ni();$("#c6").attr("src",imgx);
           ni();$("#c6").attr("src",imgx);mp3cc=0;pt40();};

           if(np1cc==1){
           genc1();
           ni();$("#c4").attr("src",imgx);
           ni();$("#c5").attr("src",imgx);
           ni();$("#c6").attr("src",imgx);np1cc=0;pt10();};

           if(np2cc==1){
           imc1=$("#c1").attr("src");
           $("#c2").attr("src",imc1);
           genc1();
           ni();$("#c4").attr("src",imgx);
           ni();$("#c5").attr("src",imgx);
           ni();$("#c6").attr("src",imgx);
           ni();$("#c6").attr("src",imgx);np2cc=0;pt20(); };

           if (op1cc){
            imc1=$("#c1").attr("src");
            $("#c2").attr("src",imc1);
            genc1();
            ni();$("#c5").attr("src",imgx);
            ni();$("#c6").attr("src",imgx);
            ni();$("#c7").attr("src",imgx);op1cc=0;pt10();};

           if(qp1cc){
             genc1();
             ni();$("#c2").attr("src",imgx);
             ni();$("#c3").attr("src",imgx);
             ni();$("#c5").attr("src",imgx);
             ni();$("#c6").attr("src",imgx);
             ni();$("#c7").attr("src",imgx);qp1cc=0;};


//------------------------------------------------------------------------------------------
// Series Columna console.dir();


       if (kp1cd==1){ana10();gend1();
       ni();$("#d2").attr("src",imgx);
       ni();$("#d3").attr("src",imgx);
       kp1cd=0;pt10()};
       if (kp2cd==1){ana20();gend1();
       ni();$("#d4").attr("src",imgx);kp1cd=0;kp2cd=0;pt20();};
       if (kp3cd==1){ana40();gend1();
       ni();$("#d4").attr("src",imgx);
       ni();$("#d5").attr("src",imgx);kp3cd=0;pt40();};
       if (kp4cd==1){ana70();gend1();
       ni();$("#d4").attr("src",imgx);
       ni();$("#d5").attr("src",imgx);
       ni();$("#d6").attr("src",imgx);kp4cd=0;pt70();};

       if (kp5cd==1){anb100();gend1();
       ni();$("#d4").attr("src",imgx);
       ni();$("#d5").attr("src",imgx);
       ni();$("#d6").attr("src",imgx);
       ni();$("#d7").attr("src",imgx);kp5cd=0;pt100();};

       if (lp1cd==1){
       imd1=$("#d1").attr("src");
       $("#d5").attr("src",imd1);
       gend1();
       ni();$("#d2").attr("src",imgx);
       ni();$("#d3").attr("src",imgx);lp1cd=0;pt10();};

       if (lp2cd==1){
       imd1=$("#d1").attr("src");
       $("#d6").attr("src",imd1);
       gend1();
       ni();$("#d2").attr("src",imgx);
       ni();$("#d3").attr("src",imgx);
       ni();$("#d4").attr("src",imgx);lp2cd=0;pt20();};

       if (lp3cd==1){
       imd1=$("#d1").attr("src");
       $("#d7").attr("src",imd1);
       gend1();
       ni();$("#d2").attr("src",imgx);
       ni();$("#d3").attr("src",imgx);
       ni();$("#d4").attr("src",imgx);
       ni();$("#d5").attr("src",imgx);lp3cd=0;pt40();};

       if (lp4cd==1){
       gend1();
       ni();$("#d2").attr("src",imgx);
       ni();$("#d3").attr("src",imgx);
       ni();$("#d4").attr("src",imgx);
       ni();$("#d5").attr("src",imgx);lp4cd=0;pt70();};

       if(mp1cd==1){
         gend1();
         imd1=$("#d1").attr("src");
         imd2=$("#d2").attr("src");
         $("#d6").attr("src",imd1);
         $("#d7").attr("src",imd2);
         ni();$("#d3").attr("src",imgx);
         ni();$("#d4").attr("src",imgx);
         ni();$("#d5").attr("src",imgx);mp1cd=0;pt10();};

       if(mp2cd==1){
         gend1();
         imd1=$("#d1").attr("src");
         imd2=$("#d2").attr("src");
         $("#d2").attr("src",imd1);
         $("#d7").attr("src",imd2);
         ni();$("#d3").attr("src",imgx);
         ni();$("#d4").attr("src",imgx);
         ni();$("#d5").attr("src",imgx);
         ni();$("#d6").attr("src",imgx);mp2cd=0;pt20();};

         if(mp3cd==1){
           imd1=$("#d1").attr("src");
           $("#d2").attr("src",imd1);
           gend1();
           ni();$("#d3").attr("src",imgx);
           ni();$("#d4").attr("src",imgx);
           ni();$("#d5").attr("src",imgx);
           ni();$("#d6").attr("src",imgx);
           ni();$("#d6").attr("src",imgx);mp3cd=0;pt40();};

           if(np1cd==1){
           gend1();
           ni();$("#d4").attr("src",imgx);
           ni();$("#d5").attr("src",imgx);
           ni();$("#d6").attr("src",imgx);np1cd=0;pt10();};

           if(np2cd==1){
           imd1=$("#d1").attr("src");
           $("#d2").attr("src",imd1);
           gend1();
           ni();$("#d4").attr("src",imgx);
           ni();$("#d5").attr("src",imgx);
           ni();$("#d6").attr("src",imgx);
           ni();$("#d6").attr("src",imgx);np2cd=0;pt20(); };

           if (op1cd){
            imd1=$("#d1").attr("src");
            $("#d2").attr("src",imd1);
            gend1();
            ni();$("#d5").attr("src",imgx);
            ni();$("#d6").attr("src",imgx);
            ni();$("#d7").attr("src",imgx);op1cd=0;pt10();};

           if(qp1cd){
             gend1();
             ni();$("#d2").attr("src",imgx);
             ni();$("#d3").attr("src",imgx);
             ni();$("#d5").attr("src",imgx);
             ni();$("#d6").attr("src",imgx);
             ni();$("#d7").attr("src",imgx);qp1cd=0;};
//------------------------------------------------------------------------------------------
// Series Columna E


       if (kp1ce==1){ana10();gene1();
       ni();$("#e2").attr("src",imgx);
       ni();$("#e3").attr("src",imgx);
       kp1ce=0;pt10()};
       if (kp2ce==1){ana20();gene1();
       ni();$("#e4").attr("src",imgx);kp1ce=0;kp2ce=0;pt20();};
       if (kp3ce==1){ana40();gene1();
       ni();$("#e4").attr("src",imgx);
       ni();$("#e5").attr("src",imgx);kp3ce=0;pt40();};
       if (kp4ce==1){ana70();gene1();
       ni();$("#e4").attr("src",imgx);
       ni();$("#e5").attr("src",imgx);
       ni();$("#e6").attr("src",imgx);kp4ce=0;pt70();};

       if (kp5ce==1){anb100();gene1();
       ni();$("#e4").attr("src",imgx);
       ni();$("#e5").attr("src",imgx);
       ni();$("#e6").attr("src",imgx);
       ni();$("#e7").attr("src",imgx);kp5ce=0;pt100();};

       if (lp1ce==1){
       ime1=$("#e1").attr("src");
       $("#e5").attr("src",ime1);
       gene1();
       ni();$("#e2").attr("src",imgx);
       ni();$("#e3").attr("src",imgx);lp1ce=0;pt10();};

       if (lp2ce==1){
       ime1=$("#e1").attr("src");
       $("#e6").attr("src",ime1);
       gene1();
       ni();$("#e2").attr("src",imgx);
       ni();$("#e3").attr("src",imgx);
       ni();$("#e4").attr("src",imgx);lp2ce=0;pt20();};

       if (lp3ce==1){
       ime1=$("#e1").attr("src");
       $("#e7").attr("src",ime1);
       gene1();
       ni();$("#e2").attr("src",imgx);
       ni();$("#e3").attr("src",imgx);
       ni();$("#e4").attr("src",imgx);
       ni();$("#e5").attr("src",imgx);lp3ce=0;pt40();};

       if (lp4ce==1){
       gene1();
       ni();$("#e2").attr("src",imgx);
       ni();$("#e3").attr("src",imgx);
       ni();$("#e4").attr("src",imgx);
       ni();$("#e5").attr("src",imgx);lp4ce=0;pt70();};

       if(mp1ce==1){
         gene1();
         ime1=$("#e1").attr("src");
         ime2=$("#e2").attr("src");
         $("#e6").attr("src",ime1);
         $("#e7").attr("src",ime2);
         ni();$("#e3").attr("src",imgx);
         ni();$("#e4").attr("src",imgx);
         ni();$("#e5").attr("src",imgx);mp1ce=0;pt10();};

       if(mp2ce==1){
         gene1();
         ime1=$("#e1").attr("src");
         ime2=$("#e2").attr("src");
         $("#e2").attr("src",ime1);
         $("#e7").attr("src",ime2);
         ni();$("#e3").attr("src",imgx);
         ni();$("#e4").attr("src",imgx);
         ni();$("#e5").attr("src",imgx);
         ni();$("#e6").attr("src",imgx);mp2ce=0;pt20();};

         if(mp3ce==1){
           ime1=$("#e1").attr("src");
           $("#e2").attr("src",ime1);
           gene1();
           ni();$("#e3").attr("src",imgx);
           ni();$("#e4").attr("src",imgx);
           ni();$("#e5").attr("src",imgx);
           ni();$("#e6").attr("src",imgx);
           ni();$("#e6").attr("src",imgx);mp3ce=0;pt40();};

           if(np1ce==1){
           gene1();
           ni();$("#e4").attr("src",imgx);
           ni();$("#e5").attr("src",imgx);
           ni();$("#e6").attr("src",imgx);np1ce=0;pt10();};

           if(np2ce==1){
           ime1=$("#e1").attr("src");
           $("#e2").attr("src",ime1);
           gene1();
           ni();$("#e4").attr("src",imgx);
           ni();$("#e5").attr("src",imgx);
           ni();$("#e6").attr("src",imgx);
           ni();$("#e6").attr("src",imgx);np2ce=0;pt20(); };

           if (op1ce){
            ime1=$("#e1").attr("src");
            $("#e2").attr("src",ime1);
            gene1();
            ni();$("#e5").attr("src",imgx);
            ni();$("#e6").attr("src",imgx);
            ni();$("#e7").attr("src",imgx);op1ce=0;pt10();};

           if(qp1ce){
             gene1();
             ni();$("#e2").attr("src",imgx);
             ni();$("#e3").attr("src",imgx);
             ni();$("#e5").attr("src",imgx);
             ni();$("#e6").attr("src",imgx);
             ni();$("#e7").attr("src",imgx);qp1ce=0;};


//------------------------------------------------------------------------------------------
// Series Columna F
if (kp1cf==1){ana10();genf1();
ni();$("#f2").attr("src",imgx);
ni();$("#f3").attr("src",imgx);
kp1cf=0;pt10()};
if (kp2cf==1){ana20();genf1();
ni();$("#f4").attr("src",imgx);kp1cf=0;kp2cf=0;pt20();};
if (kp3cf==1){ana40();genf1();
ni();$("#f4").attr("src",imgx);
ni();$("#f5").attr("src",imgx);kp3cf=0;pt40();};
if (kp4cf==1){ana70();genf1();
ni();$("#f4").attr("src",imgx);
ni();$("#f5").attr("src",imgx);
ni();$("#f6").attr("src",imgx);kp4cf=0;pt70();};

if (kp5cf==1){anb100();genf1();
ni();$("#f4").attr("src",imgx);
ni();$("#f5").attr("src",imgx);
ni();$("#f6").attr("src",imgx);
ni();$("#f7").attr("src",imgx);kp5cf=0;pt100();};

if (lp1cf==1){
imf1=$("#f1").attr("src");
$("#f5").attr("src",imf1);
genf1();
ni();$("#f2").attr("src",imgx);
ni();$("#f3").attr("src",imgx);lp1cf=0;pt10();};

if (lp2cf==1){
imf1=$("#f1").attr("src");
$("#f6").attr("src",imf1);
genf1();
ni();$("#f2").attr("src",imgx);
ni();$("#f3").attr("src",imgx);
ni();$("#f4").attr("src",imgx);lp2cf=0;pt20();};

if (lp3cf==1){
imf1=$("#f1").attr("src");
$("#f7").attr("src",imf1);
genf1();
ni();$("#f2").attr("src",imgx);
ni();$("#f3").attr("src",imgx);
ni();$("#f4").attr("src",imgx);
ni();$("#f5").attr("src",imgx);lp3cf=0;pt40();};

if (lp4cf==1){
genf1();
ni();$("#f2").attr("src",imgx);
ni();$("#f3").attr("src",imgx);
ni();$("#f4").attr("src",imgx);
ni();$("#f5").attr("src",imgx);lp4cf=0;pt70();};

if(mp1cf==1){
  genf1();
  imf1=$("#f1").attr("src");
  imf2=$("#f2").attr("src");
  $("#f6").attr("src",imf1);
  $("#f7").attr("src",imf2);
  ni();$("#f3").attr("src",imgx);
  ni();$("#f4").attr("src",imgx);
  ni();$("#f5").attr("src",imgx);mp1cf=0;pt10();};

if(mp2cf==1){
  genf1();
  imf1=$("#f1").attr("src");
  imf2=$("#f2").attr("src");
  $("#f2").attr("src",imf1);
  $("#f7").attr("src",imf2);
  ni();$("#f3").attr("src",imgx);
  ni();$("#f4").attr("src",imgx);
  ni();$("#f5").attr("src",imgx);
  ni();$("#f6").attr("src",imgx);mp2cf=0;pt20();};

  if(mp3cf==1){
    imf1=$("#f1").attr("src");
    $("#f2").attr("src",imf1);
    genf1();
    ni();$("#f3").attr("src",imgx);
    ni();$("#f4").attr("src",imgx);
    ni();$("#f5").attr("src",imgx);
    ni();$("#f6").attr("src",imgx);
    ni();$("#f6").attr("src",imgx);mp3cf=0;pt40();};

    if(np1cf==1){
    genf1();
    ni();$("#f4").attr("src",imgx);
    ni();$("#f5").attr("src",imgx);
    ni();$("#f6").attr("src",imgx);np1cf=0;pt10();};

    if(np2cf==1){
    imf1=$("#f1").attr("src");
    $("#f2").attr("src",imf1);
    genf1();
    ni();$("#f4").attr("src",imgx);
    ni();$("#f5").attr("src",imgx);
    ni();$("#f6").attr("src",imgx);
    ni();$("#f6").attr("src",imgx);np2cf=0;pt20(); };

    if (op1cf){
     imf1=$("#f1").attr("src");
     $("#f2").attr("src",imf1);
     genf1();
     ni();$("#f5").attr("src",imgx);
     ni();$("#f6").attr("src",imgx);
     ni();$("#f7").attr("src",imgx);op1cf=0;pt10();};

    if(qp1cf){
      genf1();
      ni();$("#f2").attr("src",imgx);
      ni();$("#f3").attr("src",imgx);
      ni();$("#f5").attr("src",imgx);
      ni();$("#f6").attr("src",imgx);
      ni();$("#f7").attr("src",imgx);qp1cf=0;};


//------------------------------------------------------------------------------------------
// Series Columna G
if (kp1cg==1){ana10();geng1();
  ni();$("#g2").attr("src",imgx);
  ni();$("#g3").attr("src",imgx);
  kp1cg=0;pt10()};

if (kp2cg==1){ana20();geng1();
   ni();$("#g4").attr("src",imgx);kp1cg=0;kp2cg=0;pt20();};

if (kp3cg==1){ana40();geng1();
  ni();$("#g4").attr("src",imgx);
  ni();$("#g5").attr("src",imgx);kp3cg=0;pt40();};

if (kp4cg==1){ana70();geng1();
  ni();$("#g4").attr("src",imgx);
  ni();$("#g5").attr("src",imgx);
  ni();$("#g6").attr("src",imgx);kp4cg=0;pt70();};

if (kp5cg==1){ana100();geng1();
  ni();$("#g4").attr("src",imgx);
  ni();$("#g5").attr("src",imgx);
  ni();$("#g6").attr("src",imgx);
  ni();$("#g7").attr("src",imgx);kp5cg=0;pt100();};

if (lp1cg==1){
img1=$("#g1").attr("src");
$("#g5").attr("src",img1);
geng1();
ni();$("#g2").attr("src",imgx);
ni();$("#g3").attr("src",imgx);lp1cg=0;pt10();};

if (lp2cg==1){
img1=$("#g1").attr("src");
$("#g6").attr("src",img1);
geng1();
ni();$("#g2").attr("src",imgx);
ni();$("#g3").attr("src",imgx);
ni();$("#g4").attr("src",imgx);lp2cg=0;pt20();};

if (lp3cg==1){
img1=$("#g1").attr("src");
$("#g7").attr("src",img1);
geng1();
ni();$("#g2").attr("src",imgx);
ni();$("#g3").attr("src",imgx);
ni();$("#g4").attr("src",imgx);
ni();$("#g5").attr("src",imgx);lp3cg=0;pt40();};

if (lp4cg==1){
geng1();
ni();$("#g2").attr("src",imgx);
ni();$("#g3").attr("src",imgx);
ni();$("#g4").attr("src",imgx);
ni();$("#g5").attr("src",imgx);lp4cg=0;pt70();};

if(mp1cg==1){
  geng1();
  img1=$("#g1").attr("src");
  img2=$("#g2").attr("src");
  $("#g6").attr("src",img1);
  $("#g7").attr("src",img2);
  ni();$("#g3").attr("src",imgx);
  ni();$("#g4").attr("src",imgx);
  ni();$("#g5").attr("src",imgx);mp1cg=0;pt10();};

if(mp2cg==1){
  geng1();
  img1=$("#g1").attr("src");
  img2=$("#g2").attr("src");
  $("#g2").attr("src",img1);
  $("#g7").attr("src",img2);
  ni();$("#g3").attr("src",imgx);
  ni();$("#g4").attr("src",imgx);
  ni();$("#g5").attr("src",imgx);
  ni();$("#g6").attr("src",imgx);mp2cg=0;pt20();};

  if(mp3cg==1){
    img1=$("#g1").attr("src");
    $("#g2").attr("src",img1);
    geng1();
    ni();$("#g3").attr("src",imgx);
    ni();$("#g4").attr("src",imgx);
    ni();$("#g5").attr("src",imgx);
    ni();$("#g6").attr("src",imgx);
    ni();$("#g6").attr("src",imgx);mp3cg=0;pt40();};

    if(np1cg==1){
    geng1();
    ni();$("#g4").attr("src",imgx);
    ni();$("#g5").attr("src",imgx);
    ni();$("#g6").attr("src",imgx);np1cg=0;pt10();};

    if(np2cg==1){
    img1=$("#g1").attr("src");
    $("#g2").attr("src",img1);
    geng1();
    ni();$("#g4").attr("src",imgx);
    ni();$("#g5").attr("src",imgx);
    ni();$("#g6").attr("src",imgx);
    ni();$("#g6").attr("src",imgx);np2cg=0;pt20(); };

    if (op1cg){
     img1=$("#g1").attr("src");
     $("#g2").attr("src",img1);
     geng1();
     ni();$("#g5").attr("src",imgx);
     ni();$("#g6").attr("src",imgx);
     ni();$("#g7").attr("src",imgx);op1cg=0;pt10();};

    if(qp1cg){
      geng1();
      ni();$("#g2").attr("src",imgx);
      ni();$("#g3").attr("src",imgx);
      ni();$("#g5").attr("src",imgx);
      ni();$("#g6").attr("src",imgx);
      ni();$("#g7").attr("src",imgx);qp1cg=0;};

//------------------------------------------------------------------------------------------
};// □□□□□□  Fin Modulo 5 □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□




// □□□□□□  6 Modulo logica de cambios columnas x drag and drop □□□□□□
function monitordrop(){
if ((idarra)=="a1"){llena1()};if ((idarra)=="a2"){llena2()};if ((idarra)=="a3"){llena3()};if ((idarra)=="a4"){llena4()};if ((idarra)=="a5"){llena5()};if ((idarra)=="a6"){llena6()};if ((idarra)=="a7"){llena7()};
if ((idarra)=="b1"){llenb1()};if ((idarra)=="b2"){llenb2()};if ((idarra)=="b3"){llenb3()};if ((idarra)=="b4"){llenb4()};if ((idarra)=="b5"){llenb5()};if ((idarra)=="b6"){llenb6()};if ((idarra)=="b7"){llenb7()};
if ((idarra)=="c1"){llenc1()};if ((idarra)=="c2"){llenc2()};if ((idarra)=="c3"){llenc3()};if ((idarra)=="c4"){llenc4()};if ((idarra)=="c5"){llenc5()};if ((idarra)=="c6"){llenc6()};if ((idarra)=="c7"){llenc7()};
if ((idarra)=="d1"){llend1()};if ((idarra)=="d2"){llend2()};if ((idarra)=="d3"){llend3()};if ((idarra)=="d4"){llend4()};if ((idarra)=="d5"){llend5()};if ((idarra)=="d6"){llend6()};if ((idarra)=="d7"){llend7()};
if ((idarra)=="e1"){llene1()};if ((idarra)=="e2"){llene2()};if ((idarra)=="e3"){llene3()};if ((idarra)=="e4"){llene4()};if ((idarra)=="e5"){llene5()};if ((idarra)=="e6"){llene6()};if ((idarra)=="e7"){llene7()};
if ((idarra)=="f1"){llenf1()};if ((idarra)=="f2"){llenf2()};if ((idarra)=="f3"){llenf3()};if ((idarra)=="f4"){llenf4()};if ((idarra)=="f5"){llenf5()};if ((idarra)=="f6"){llenf6()};if ((idarra)=="f7"){llenf7()};
if ((idarra)=="g1"){lleng1()};if ((idarra)=="g2"){lleng2()};if ((idarra)=="g3"){lleng3()};if ((idarra)=="g4"){lleng4()};if ((idarra)=="g5"){lleng5()};if ((idarra)=="g6"){lleng6()};if ((idarra)=="g7"){lleng7()};
};

        function llena1(){ // ***** Inicio LLenados a  *****************************************************
        $("#a1").css("top","-40px");
        $("#a1").css("left","0px");
        $("#a1").animate({top:"0px"},500);
        ni();$("#a1").attr("src",imgx);
        };

        function llena2(){
        ima1=$("#a1").attr("src");
        $("#a2").css("top","0px");
        $("#a2").css("left","0px");
        $("#a2").attr("src",ima1);
        $("#a1").css("top","-40px");
        $("#a1").css("left","0px");
        $("#a1").animate({top:"0px"},500);
        ni();$("#a1").attr("src",imgx); };

        function llena3(){
        ima1=$("#a1").attr("src");
        ima2=$("#a2").attr("src");
        $("#a3").css("top","0px");
        $("#a3").css("left","0px");
        $("#a2").attr("src",ima1);
        $("#a3").attr("src",ima2);
        $("#a1").css("top","-40px");
        $("#a1").css("left","0px");
        $("#a1").animate({top:"0px"},500);
        ni();$("#a1").attr("src",imgx);};


        function llena4(){
        ima1=$("#a1").attr("src");
        ima2=$("#a2").attr("src");
        ima3=$("#a3").attr("src");
        $("#a4").css("top","0px");
        $("#a4").css("left","0px");
        $("#a2").attr("src",ima1);
        $("#a3").attr("src",ima2);
        $("#a4").attr("src",ima3);
        $("#a1").css("top","-40px");
        $("#a1").css("left","0px");
        $("#a1").animate({top:"0px"},500);
        ni();$("#a1").attr("src",imgx);};

        function llena5(){
        ima1=$("#a1").attr("src");
        ima2=$("#a2").attr("src");
        ima3=$("#a3").attr("src");
        ima4=$("#a4").attr("src");
        $("#a5").css("top","0px");
        $("#a5").css("left","0px");
        $("#a2").attr("src",ima1);
        $("#a3").attr("src",ima2);
        $("#a4").attr("src",ima3);
        $("#a5").attr("src",ima4);
        $("#a1").css("top","-40px");
        $("#a1").css("left","0px");
        $("#a1").animate({top:"0px"},500);
        ni();$("#a1").attr("src",imgx); };

        function llena6(){
        ima1=$("#a1").attr("src");
        ima2=$("#a2").attr("src");
        ima3=$("#a3").attr("src");
        ima4=$("#a4").attr("src");
        ima5=$("#a5").attr("src");
        $("#a6").css("top","0px");
        $("#a6").css("left","0px");
        $("#a2").attr("src",ima1);
        $("#a3").attr("src",ima2);
        $("#a4").attr("src",ima3);
        $("#a5").attr("src",ima4);
        $("#a6").attr("src",ima5);
        $("#a1").css("top","-40px");
        $("#a1").css("left","0px");
        $("#a1").animate({top:"0px"},500);
        ni(); $("#a1").attr("src",imgx); };

        function llena7(){
        ima1=$("#a1").attr("src");
        ima2=$("#a2").attr("src");
        ima3=$("#a3").attr("src");
        ima4=$("#a4").attr("src");
        ima5=$("#a5").attr("src");
        ima6=$("#a6").attr("src");
        $("#a7").css("top","0px");
        $("#a7").css("left","0px");
        $("#a2").attr("src",ima1);
        $("#a3").attr("src",ima2);
        $("#a4").attr("src",ima3);
        $("#a5").attr("src",ima4);
        $("#a6").attr("src",ima5);
        $("#a7").attr("src",ima6);
        $("#a1").css("top","-40px");
        $("#a1").css("left","0px");
        $("#a1").animate({top:"0px"},500);
        ni();$("#a1").attr("src",imgx);};
         // *************** Fin Llenados a *************************************************************************************************************

        function llenb1(){ // ***** Inicio LLenados b*****
        $("#b1").css("top","-40px");
        $("#b1").css("left","0px");
        $("#b1").animate({top:"0px"},500);
        ni();$("#b1").attr("src",imgx);
        };

       function llenb2(){
         imb1=$("#b1").attr("src");
         $("#b2").css("top","0px");
         $("#b2").css("left","0px");
         $("#b2").attr("src",imb1);
         $("#b1").css("top","-60px");
         $("#b1").css("left","0px");
         $("#b1").animate({top:"0px"},500);
         ni();$("#b1").attr("src",imgx);
         };


         function llenb3(){
         imb1=$("#b1").attr("src");
         imb2=$("#b2").attr("src");
         $("#b3").css("top","0px");
         $("#b3").css("left","0px");
         $("#b2").attr("src",imb1);
         $("#b3").attr("src",imb2);
         $("#b1").css("top","-40px");
         $("#b1").css("left","0px");
         $("#b1").animate({top:"0px"},500);
         ni();$("#b1").attr("src",imgx);
         };


         function llenb4(){
         imb1=$("#b1").attr("src");
         imb2=$("#b2").attr("src");
         imb3=$("#b3").attr("src");
         $("#b4").css("top","0px");
         $("#b4").css("left","0px");
         $("#b2").attr("src",imb1);
         $("#b3").attr("src",imb2);
         $("#b4").attr("src",imb3);
         $("#b1").css("top","-40px");
         $("#b1").css("left","0px");
         $("#b1").animate({top:"0px"},500);
         ni();$("#b1").attr("src",imgx);
         };

         function llenb5(){
         imb1=$("#b1").attr("src");
         imb2=$("#b2").attr("src");
         imb3=$("#b3").attr("src");
         imb4=$("#b4").attr("src");
         $("#b5").css("top","0px");
         $("#b5").css("left","0px");
         $("#b2").attr("src",imb1);
         $("#b3").attr("src",imb2);
         $("#b4").attr("src",imb3);
         $("#b5").attr("src",imb4);
         $("#b1").css("top","-40px");
         $("#b1").css("left","0px");
         $("#b1").animate({top:"0px"},500);
         ni();$("#b1").attr("src",imgx);
         };

         function llenb6(){
         imb1=$("#b1").attr("src");
         imb2=$("#b2").attr("src");
         imb3=$("#b3").attr("src");
         imb4=$("#b4").attr("src");
         imb5=$("#b5").attr("src")
         $("#b6").css("top","0px");
         $("#b6").css("left","0px");
         $("#b2").attr("src",imb1);
         $("#b3").attr("src",imb2);
         $("#b4").attr("src",imb3);
         $("#b5").attr("src",imb4);
         $("#b6").attr("src",imb5);
         $("#b1").css("top","-40px");
         $("#b1").css("left","0px");
         $("#b1").animate({top:"0px"},500);
         ni();$("#b1").attr("src",imgx);
         };

         function llenb7(){
         imb1=$("#b1").attr("src");
         imb2=$("#b2").attr("src");
         imb3=$("#b3").attr("src");
         imb4=$("#b4").attr("src");
         imb5=$("#b5").attr("src");
         imb6=$("#b6").attr("src");
         $("#b7").css("top","0px");
         $("#b7").css("left","0px");
         $("#b2").attr("src",imb1);
         $("#b3").attr("src",imb2);
         $("#b4").attr("src",imb3);
         $("#b5").attr("src",imb4);
         $("#b6").attr("src",imb5);
         $("#b7").attr("src",imb6);
         $("#b1").css("top","-40px");
         $("#b1").css("left","0px");
         $("#b1").animate({top:"0px"},500);
         ni();$("#b1").attr("src",imgx);
         }; // *************** Fin Llenados Columna b ******************************************************************************************************


         function llenc1(){ // ***** Inicio LLenados Columna C ************************************************************************************

          $("#c1").css("top","-40px");
          $("#c1").css("left","0px");
          $("#c1").animate({top:"0px"},500);
          ni();$("#c1").attr("src",imgx);
          };

        function llenc2(){
          imc1=$("#c1").attr("src");
          $("#c2").css("top","0px");
          $("#c2").css("left","0px");
          $("#c2").attr("src",imc1);
          $("#c1").css("top","-40px");
          $("#c1").css("left","0px");
          $("#c1").animate({top:"0px"},500);
          ni();$("#c1").attr("src",imgx);
          };


          function llenc3(){
          imc1=$("#c1").attr("src");
          imc2=$("#c2").attr("src");
          $("#c3").css("top","0px");
          $("#c3").css("left","0px");
          $("#c2").attr("src",imc1);
          $("#c3").attr("src",imc2);
          $("#c1").css("top","-40px");
          $("#c1").css("left","0px");
          $("#c1").animate({top:"0px"},500);
          ni();$("#c1").attr("src",imgx);
            };


            function llenc4(){
            imc1=$("#c1").attr("src");
            imc2=$("#c2").attr("src");
            imc3=$("#c3").attr("src");
            $("#c4").css("top","0px");
            $("#c4").css("left","0px");
            $("#c2").attr("src",imc1);
            $("#c3").attr("src",imc2);
            $("#c4").attr("src",imc3);
            $("#c1").css("top","-40px");
            $("#c1").css("left","0px");
            $("#c1").animate({top:"0px"},500);
            ni();$("#c1").attr("src",imgx);};


              function llenc5(){
              imc1=$("#c1").attr("src");
              imc2=$("#c2").attr("src");
              imc3=$("#c3").attr("src");
              imc4=$("#c4").attr("src");
              $("#c5").css("top","0px");
              $("#c5").css("left","0px");
              $("#c2").attr("src",imc1);
              $("#c3").attr("src",imc2);
              $("#c4").attr("src",imc3);
              $("#c5").attr("src",imc4);
              $("#c1").css("top","-40px");
              $("#c1").css("left","0px");
              $("#c1").animate({top:"0px"},500);
              ni();$("#c1").attr("src",imgx); };

                function llenc6(){
                imc1=$("#c1").attr("src");
                imc2=$("#c2").attr("src");
                imc3=$("#c3").attr("src");
                imc4=$("#c4").attr("src");
                imc5=$("#c5").attr("src");
                $("#c6").css("top","0px");
                $("#c6").css("left","0px");
                $("#c2").attr("src",imc1);
                $("#c3").attr("src",imc2);
                $("#c4").attr("src",imc3);
                $("#c5").attr("src",imc4);
                $("#c6").attr("src",imc5);
                $("#c1").css("top","-40px");
                $("#c1").css("left","0px");
                $("#c1").animate({top:"0px"},500);
                ni();$("#c1").attr("src",imgx);
                  };

                  function llenc7(){
                  imc1=$("#c1").attr("src");
                  imc2=$("#c2").attr("src");
                  imc3=$("#c3").attr("src");
                  imc4=$("#c4").attr("src");
                  imc5=$("#c5").attr("src");
                  imc6=$("#c6").attr("src");
                  $("#c7").css("top","0px");
                  $("#c7").css("left","0px");
                  $("#c2").attr("src",imc1);
                  $("#c3").attr("src",imc2);
                  $("#c4").attr("src",imc3);
                  $("#c5").attr("src",imc4);
                  $("#c6").attr("src",imc5);
                  $("#c7").attr("src",imc6);
                  $("#c1").css("top","-40px");
                  $("#c1").css("left","0px");
                  $("#c1").animate({top:"0px"},500);
                  ni();$("#c1").attr("src",imgx);
                }; // *************** Fin Llenados c **********************************************************************************************************************************



                function llend1(){ // ***** Inicio LLenados Columna D *****
                $("#d1").css("top","-40px");
                $("#d1").css("left","0px");
                $("#d1").animate({top:"0px"},500);
                numx=Math.floor((Math.random() * 4) + 1);
                var imgete="image/1.png"
                imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
                $("#d1").attr("src",imgx);
                };

                function llend2(){
                imd1=$("#d1").attr("src");
                $("#d2").css("top","0px");
                $("#d2").css("left","0px");
                $("#d2").attr("src",imd1);
                $("#d1").css("top","-40px");
                $("#d1").css("left","0px");
                $("#d1").animate({top:"0px"},500);
                numx=Math.floor((Math.random() * 4) + 1);
                var imgete="image/1.png"
                imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
                $("#d1").attr("src",imgx);
                };


                function llend3(){
                imd1=$("#d1").attr("src");
                imd2=$("#d2").attr("src");
                $("#d3").css("top","0px");
                $("#d3").css("left","0px");
                $("#d2").attr("src",imd1);
                $("#d3").attr("src",imd2);
                $("#d1").css("top","-40px");
                $("#d1").css("left","0px");
                $("#d1").animate({top:"0px"},500);
                numx=Math.floor((Math.random() * 4) + 1);
                var imgete="image/1.png"
                imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
                $("#d1").attr("src",imgx);
                };


                function llend4(){
                imd1=$("#d1").attr("src");
                imd2=$("#d2").attr("src");
                imd3=$("#d3").attr("src");
                $("#d4").css("top","0px");
                $("#d4").css("left","0px");
                $("#d2").attr("src",imd1);
                $("#d3").attr("src",imd2);
                $("#d4").attr("src",imd3);
                $("#d1").css("top","-40px");
                $("#d1").css("left","0px");
                $("#d1").animate({top:"0px"},500);
                numx=Math.floor((Math.random() * 4) + 1);
                var imgete="image/1.png"
                imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
                $("#d1").attr("src",imgx);
                };


                function llend5(){
                imd1=$("#d1").attr("src");
                imd2=$("#d2").attr("src");
                imd3=$("#d3").attr("src");
                imd4=$("#d4").attr("src");
                $("#d5").css("top","0px");
                $("#d5").css("left","0px");
                $("#d2").attr("src",imd1);
                $("#d3").attr("src",imd2);
                $("#d4").attr("src",imd3);
                $("#d5").attr("src",imd4);
                $("#d1").css("top","-40px");
                $("#d1").css("left","0px");
                $("#d1").animate({top:"0px"},500);
                numx=Math.floor((Math.random() * 4) + 1);
                var imgete="image/1.png"
                imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
                $("#d1").attr("src",imgx);
                };

               function llend6(){
               imd1=$("#d1").attr("src");
               imd2=$("#d2").attr("src");
               imd3=$("#d3").attr("src");
               imd4=$("#d4").attr("src");
               imd5=$("#d5").attr("src");
               $("#d6").css("top","0px");
               $("#d6").css("left","0px");
               $("#d2").attr("src",imd1);
               $("#d3").attr("src",imd2);
               $("#d4").attr("src",imd3);
               $("#d5").attr("src",imd4);
                $("#d6").attr("src",imd5);
               $("#d1").css("top","-40px");
               $("#d1").css("left","0px");
               $("#d1").animate({top:"0px"},500);
                numx=Math.floor((Math.random() * 4) + 1);
                var imgete="image/1.png"
                imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
                $("#d1").attr("src",imgx);
                };

               function llend7(){
               imd1=$("#d1").attr("src");
               imd2=$("#d2").attr("src");
               imd3=$("#d3").attr("src");
               imd4=$("#d4").attr("src");
               imd5=$("#d5").attr("src");
                imd6=$("#d6").attr("src");
                $("#d7").css("top","0px");
                $("#d7").css("left","0px");
                $("#d2").attr("src",imd1);
                $("#d3").attr("src",imd2);
                $("#d4").attr("src",imd3);
                $("#d5").attr("src",imd4);
                $("#d6").attr("src",imd5);
                $("#d7").attr("src",imd6);
                $("#d1").css("top","-40px");
                $("#d1").css("left","0px");
                $("#d1").animate({top:"0px"},500);
                numx=Math.floor((Math.random() * 4) + 1);
                var imgete="image/1.png"
               imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
               $("#d1").attr("src",imgx);
              }; // *************** Fin Llenados D ****************


              function llene1(){ // ***** Inicio LLenados Columna E *****

              $("#e1").css("top","-40px");
              $("#e1").css("left","0px");
              $("#e1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#e1").attr("src",imgx);
              };

              function llene2(){
              ime1=$("#e1").attr("src");
              $("#e2").css("top","0px");
              $("#e2").css("left","0px");
              $("#e2").attr("src",ime1);
              $("#e1").css("top","-40px");
              $("#e1").css("left","0px");
              $("#e1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#e1").attr("src",imgx);
              };


              function llene3(){
              ime1=$("#e1").attr("src");
              ime2=$("#e2").attr("src");
              $("#e3").css("top","0px");
              $("#e3").css("left","0px");
              $("#e2").attr("src",ime1);
              $("#e3").attr("src",ime2);
              $("#e1").css("top","-40px");
              $("#e1").css("left","0px");
              $("#e1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#e1").attr("src",imgx);
              };


              function llene4(){
              ime1=$("#e1").attr("src");
              ime2=$("#e2").attr("src");
              ime3=$("#e3").attr("src");
              $("#e4").css("top","0px");
              $("#e4").css("left","0px");
              $("#e2").attr("src",ime1);
              $("#e3").attr("src",ime2);
              $("#e4").attr("src",ime3);
              $("#e1").css("top","-40px");
              $("#e1").css("left","0px");
              $("#e1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#e1").attr("src",imgx);
              };


              function llene5(){
              ime1=$("#e1").attr("src");
              ime2=$("#e2").attr("src");
              ime3=$("#e3").attr("src");
              ime4=$("#e4").attr("src");
              $("#e5").css("top","0px");
              $("#e5").css("left","0px");
              $("#e2").attr("src",ime1);
              $("#e3").attr("src",ime2);
              $("#e4").attr("src",ime3);
              $("#e5").attr("src",ime4);
              $("#e1").css("top","-40px");
              $("#e1").css("left","0px");
              $("#e1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#e1").attr("src",imgx);
              };

              function llene6(){
              ime1=$("#e1").attr("src");
              ime2=$("#e2").attr("src");
              ime3=$("#e3").attr("src");
              ime4=$("#e4").attr("src");
              ime5=$("#e5").attr("src");
              $("#e6").css("top","0px");
              $("#e6").css("left","0px");
              $("#e2").attr("src",ime1);
              $("#e3").attr("src",ime2);
              $("#e4").attr("src",ime3);
              $("#e5").attr("src",ime4);
              $("#e6").attr("src",ime5);
              $("#e1").css("top","-40px");
              $("#e1").css("left","0px");
              $("#e1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#e1").attr("src",imgx);
              };

              function llene7(){
              ime1=$("#e1").attr("src");
              ime2=$("#e2").attr("src");
              ime3=$("#e3").attr("src");
              ime4=$("#e4").attr("src");
              ime5=$("#e5").attr("src");
              ime6=$("#e6").attr("src");
              $("#e7").css("top","0px");
              $("#e7").css("left","0px");
              $("#e2").attr("src",ime1);
              $("#e3").attr("src",ime2);
              $("#e4").attr("src",ime3);
              $("#e5").attr("src",ime4);
              $("#e6").attr("src",ime5);
              $("#e7").attr("src",ime6);
              $("#e1").css("top","-40px");
              $("#e1").css("left","0px");
              $("#e1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#e1").attr("src",imgx);
              }; // *************** Fin Llenados E ****************


              function lleng1(){ // ***** Inicio LLenados Columna G *****

              $("#g1").css("top","-40px");
              $("#g1").css("left","0px");
              $("#g1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#g1").attr("src",imgx);
              };

              function lleng2(){
              img1=$("#g1").attr("src");
              $("#g2").css("top","0px");
              $("#g2").css("left","0px");
              $("#g2").attr("src",img1);
              $("#g1").css("top","-40px");
              $("#g1").css("left","0px");
              $("#g1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#g1").attr("src",imgx);
              };


              function lleng3(){
              img1=$("#g1").attr("src");
              img2=$("#g2").attr("src");
              $("#g3").css("top","0px");
              $("#g3").css("left","0px");
              $("#g2").attr("src",img1);
              $("#g3").attr("src",img2);
              $("#g1").css("top","-40px");
              $("#g1").css("left","0px");
              $("#g1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#g1").attr("src",imgx);
              };


              function lleng4(){
              img1=$("#g1").attr("src");
              img2=$("#g2").attr("src");
              img3=$("#g3").attr("src");
              $("#g4").css("top","0px");
              $("#g4").css("left","0px");
              $("#g2").attr("src",img1);
              $("#g3").attr("src",img2);
              $("#g4").attr("src",img3);
              $("#g1").css("top","-40px");
              $("#g1").css("left","0px");
              $("#g1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#g1").attr("src",imgx);
              };


              function lleng5(){
              img1=$("#g1").attr("src");
              img2=$("#g2").attr("src");
              img3=$("#g3").attr("src");
              img4=$("#g4").attr("src");
              $("#g5").css("top","0px");
              $("#g5").css("left","0px");
              $("#g2").attr("src",img1);
              $("#g3").attr("src",img2);
              $("#g4").attr("src",img3);
              $("#g5").attr("src",img4);
              $("#g1").css("top","-40px");
              $("#g1").css("left","0px");
              $("#g1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#g1").attr("src",imgx);
              };

              function lleng6(){
              img1=$("#g1").attr("src");
              img2=$("#g2").attr("src");
              img3=$("#g3").attr("src");
              img4=$("#g4").attr("src");
              img5=$("#g5").attr("src");
              $("#g6").css("top","0px");
              $("#g6").css("left","0px");
              $("#g2").attr("src",img1);
              $("#g3").attr("src",img2);
              $("#g4").attr("src",img3);
              $("#g5").attr("src",img4);
              $("#g6").attr("src",img5);
              $("#g1").css("top","-40px");
              $("#g1").css("left","0px");
              $("#g1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#g1").attr("src",imgx);
              };

              function lleng7(){
              img1=$("#g1").attr("src");
              img2=$("#g2").attr("src");
              img3=$("#g3").attr("src");
              img4=$("#g4").attr("src");
              img5=$("#g5").attr("src");
              img6=$("#g6").attr("src");
              $("#g7").css("top","0px");
              $("#g7").css("left","0px");
              $("#g2").attr("src",img1);
              $("#g3").attr("src",img2);
              $("#g4").attr("src",img3);
              $("#g5").attr("src",img4);
              $("#g6").attr("src",img5);
              $("#g7").attr("src",img6);
              $("#g1").css("top","-40px");
              $("#g1").css("left","0px");
              $("#g1").animate({top:"0px"},500);
              numx=Math.floor((Math.random() * 4) + 1);
              var imgete="image/1.png"
              imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
              $("#g1").attr("src",imgx);
            }; //  **************** Fin  f

            function llenf1(){ // ***** Inicio LLenados Columna F *****

            $("#f1").css("top","-40px");
            $("#f1").css("left","0px");
            $("#f1").animate({top:"0px"},500);
            numx=Math.floor((Math.random() * 4) + 1);
            var imgete="image/1.png"
            imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
            $("#f1").attr("src",imgx);
            };

            function llenf2(){
            imf1=$("#f1").attr("src");
            $("#f2").css("top","0px");
            $("#f2").css("left","0px");
            $("#f2").attr("src",imf1);
            $("#f1").css("top","-40px");
            $("#f1").css("left","0px");
            $("#f1").animate({top:"0px"},500);
            numx=Math.floor((Math.random() * 4) + 1);
            var imgete="image/1.png"
            imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
            $("#f1").attr("src",imgx);
            };


            function llenf3(){
            imf1=$("#f1").attr("src");
            imf2=$("#f2").attr("src");
            $("#f3").css("top","0px");
            $("#f3").css("left","0px");
            $("#f2").attr("src",imf1);
            $("#f3").attr("src",imf2);
            $("#f1").css("top","-40px");
            $("#f1").css("left","0px");
            $("#f1").animate({top:"0px"},500);
            numx=Math.floor((Math.random() * 4) + 1);
            var imgete="image/1.png"
            imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
            $("#f1").attr("src",imgx);
            };


            function llenf4(){
            imf1=$("#f1").attr("src");
            imf2=$("#f2").attr("src");
            imf3=$("#f3").attr("src");
            $("#f4").css("top","0px");
            $("#f4").css("left","0px");
            $("#f2").attr("src",imf1);
            $("#f3").attr("src",imf2);
            $("#f4").attr("src",imf3);
            $("#f1").css("top","-40px");
            $("#f1").css("left","0px");
            $("#f1").animate({top:"0px"},500);
            numx=Math.floor((Math.random() * 4) + 1);
            var imgete="image/1.png"
            imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
            $("#f1").attr("src",imgx);
            };


            function llenf5(){
            imf1=$("#f1").attr("src");
            imf2=$("#f2").attr("src");
            imf3=$("#f3").attr("src");
            imf4=$("#f4").attr("src");
            $("#f5").css("top","0px");
            $("#f5").css("left","0px");
            $("#f2").attr("src",imf1);
            $("#f3").attr("src",imf2);
            $("#f4").attr("src",imf3);
            $("#f5").attr("src",imf4);
            $("#f1").css("top","-40px");
            $("#f1").css("left","0px");
            $("#f1").animate({top:"0px"},500);
            numx=Math.floor((Math.random() * 4) + 1);
            var imgete="image/1.png"
            imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
            $("#f1").attr("src",imgx);
            };

            function llenf6(){
            imf1=$("#f1").attr("src");
            imf2=$("#f2").attr("src");
            imf3=$("#f3").attr("src");
            imf4=$("#f4").attr("src");
            imf5=$("#f5").attr("src");
            $("#f6").css("top","0px");
            $("#f6").css("left","0px");
            $("#f2").attr("src",imf1);
            $("#f3").attr("src",imf2);
            $("#f4").attr("src",imf3);
            $("#f5").attr("src",imf4);
            $("#f6").attr("src",imf5);
            $("#f1").css("top","-40px");
            $("#f1").css("left","0px");
            $("#f1").animate({top:"0px"},500);
            numx=Math.floor((Math.random() * 4) + 1);
            var imgete="image/1.png"
            imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
            $("#f1").attr("src",imgx);
            };

            function llenf7(){
            imf1=$("#f1").attr("src");
            imf2=$("#f2").attr("src");
            imf3=$("#f3").attr("src");
            imf4=$("#f4").attr("src");
            imf5=$("#f5").attr("src");
            imf6=$("#f6").attr("src");
            $("#f7").css("top","0px");
            $("#f7").css("left","0px");
            $("#f2").attr("src",imf1);
            $("#f3").attr("src",imf2);
            $("#f4").attr("src",imf3);
            $("#f5").attr("src",imf4);
            $("#f6").attr("src",imf5);
            $("#f7").attr("src",imf6);
            $("#f1").css("top","-40px");
            $("#f1").css("left","0px");
            $("#f1").animate({top:"0px"},500);
            numx=Math.floor((Math.random() * 4) + 1);
            var imgete="image/1.png"
            imgx=[imgete.slice(0,6),numx,imgete.slice(7,11)] .join("")
            $("#f1").attr("src",imgx);};
// □□□□□□□□□□□   FIN 6   LLenados □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□




// □□□□□□  7 Modulo Generación de numero aleatorio de 1 a 4 y asignación a cajones □□□□□□
function asiale(){

var i ;
for (i=0; i < cola.length ;i++)
{ numa = (cola[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colb.length ;i++)
{ numb += (colb[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colc.length ;i++)
{ numc += (colc[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < cold.length ;i++)
{ numd += (cold[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < cole.length ;i++)
{ nume += (cole[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colf.length ;i++)
{ numf += (colf[i]=Math.floor((Math.random() * 4) + 1))};
for (i=0; i < colg.length ;i++)
{ numg += (colg[i]=Math.floor((Math.random() * 4) + 1))};
a1=cola.slice(0,1); a2=cola.slice(1,2) ;a3=cola.slice(2,3) ;a4=cola.slice(3,4) ;a5=cola.slice(4,5); a6=cola.slice(5,6) ;a7=cola.slice(6,7);
b1=colb.slice(0,1); b2=colb.slice(1,2) ;b3=colb.slice(2,3) ;b4=colb.slice(3,4) ;b5=colb.slice(4,5); b6=colb.slice(5,6) ;b7=colb.slice(6,7);
c1=colc.slice(0,1); c2=colc.slice(1,2) ;c3=colc.slice(2,3) ;c4=colc.slice(3,4) ;c5=colc.slice(4,5); c6=colc.slice(5,6) ;c7=colc.slice(6,7);
d1=cold.slice(0,1); d2=cold.slice(1,2) ;d3=cold.slice(2,3) ;d4=cold.slice(3,4) ;d5=cold.slice(4,5); d6=cold.slice(5,6) ;d7=cold.slice(6,7);
e1=cole.slice(0,1); e2=cole.slice(1,2) ;e3=cole.slice(2,3) ;e4=cole.slice(3,4) ;e5=cole.slice(4,5); e6=cole.slice(5,6) ;e7=cole.slice(6,7);
f1=colf.slice(0,1); f2=colf.slice(1,2) ;f3=colf.slice(2,3) ;f4=colf.slice(3,4) ;f5=colf.slice(4,5); f6=colf.slice(5,6) ;f7=colf.slice(6,7);
g1=colg.slice(0,1); g2=colg.slice(1,2) ;g3=colg.slice(2,3) ;g4=colg.slice(3,4) ;g5=colg.slice(4,5); g6=colg.slice(5,6) ;g7=colg.slice(6,7);


if (a1==1){$("#a1").attr("src","image/1.png");} if (b1==1){$("#b1").attr("src","image/1.png");} if (c1==1){$("#c1").attr("src","image/1.png");} if (d1==1){$("#d1").attr("src","image/1.png");} if (e1==1){$("#e1").attr("src","image/1.png");}if (f1==1){$("#f1").attr("src","image/1.png");}if (g1==1){$("#g1").attr("src","image/1.png");}
if (a1==2){$("#a1").attr("src","image/2.png");} if (b1==2){$("#b1").attr("src","image/2.png");} if (c1==2){$("#c1").attr("src","image/2.png");} if (d1==2){$("#d1").attr("src","image/2.png");} if (e1==2){$("#e1").attr("src","image/2.png");}if (f1==2){$("#f1").attr("src","image/2.png");}if (g1==2){$("#g1").attr("src","image/2.png");}
if (a1==3){$("#a1").attr("src","image/3.png");} if (b1==3){$("#b1").attr("src","image/3.png");} if (c1==3){$("#c1").attr("src","image/3.png");} if (d1==3){$("#d1").attr("src","image/3.png");} if (e1==3){$("#e1").attr("src","image/3.png");}if (f1==3){$("#f1").attr("src","image/3.png");}if (g1==3){$("#g1").attr("src","image/3.png");}
if (a1==4){$("#a1").attr("src","image/4.png");} if (b1==4){$("#b1").attr("src","image/4.png");} if (c1==4){$("#c1").attr("src","image/4.png");} if (d1==4){$("#d1").attr("src","image/4.png");} if (e1==4){$("#e1").attr("src","image/4.png");}if (f1==4){$("#f1").attr("src","image/4.png");}if (g1==4){$("#g1").attr("src","image/4.png");}

if (a2==1){$("#a2").attr("src","image/1.png");} if (b2==1){$("#b2").attr("src","image/1.png");} if (c2==1){$("#c2").attr("src","image/1.png");} if (d2==1){$("#d2").attr("src","image/1.png");} if (e2==1){$("#e2").attr("src","image/1.png");}if (f2==1){$("#f2").attr("src","image/1.png");}if (g2==1){$("#g2").attr("src","image/1.png");}
if (a2==2){$("#a2").attr("src","image/2.png");} if (b2==2){$("#b2").attr("src","image/2.png");} if (c2==2){$("#c2").attr("src","image/2.png");} if (d2==2){$("#d2").attr("src","image/2.png");} if (e2==2){$("#e2").attr("src","image/2.png");}if (f2==2){$("#f2").attr("src","image/2.png");}if (g2==2){$("#g2").attr("src","image/2.png");}
if (a2==3){$("#a2").attr("src","image/3.png");} if (b2==3){$("#b2").attr("src","image/3.png");} if (c2==3){$("#c2").attr("src","image/3.png");} if (d2==3){$("#d2").attr("src","image/3.png");} if (e2==3){$("#e2").attr("src","image/3.png");}if (f2==3){$("#f2").attr("src","image/3.png");}if (g2==3){$("#g2").attr("src","image/3.png");}
if (a2==4){$("#a2").attr("src","image/4.png");} if (b2==4){$("#b2").attr("src","image/4.png");} if (c2==4){$("#c2").attr("src","image/4.png");} if (d2==4){$("#d2").attr("src","image/4.png");} if (e2==4){$("#e2").attr("src","image/4.png");}if (f2==4){$("#f2").attr("src","image/4.png");}if (g2==4){$("#g2").attr("src","image/4.png");}

if (a3==1){$("#a3").attr("src","image/1.png");} if (b3==1){$("#b3").attr("src","image/1.png");} if (c3==1){$("#c3").attr("src","image/1.png");} if (d3==1){$("#d3").attr("src","image/1.png");} if (e3==1){$("#e3").attr("src","image/1.png");}if (f3==1){$("#f3").attr("src","image/1.png");}if (g3==1){$("#g3").attr("src","image/1.png");}
if (a3==2){$("#a3").attr("src","image/2.png");} if (b3==2){$("#b3").attr("src","image/2.png");} if (c3==2){$("#c3").attr("src","image/2.png");} if (d3==2){$("#d3").attr("src","image/2.png");} if (e3==2){$("#e3").attr("src","image/2.png");}if (f3==2){$("#f3").attr("src","image/2.png");}if (g3==2){$("#g3").attr("src","image/2.png");}
if (a3==3){$("#a3").attr("src","image/3.png");} if (b3==3){$("#b3").attr("src","image/3.png");} if (c3==3){$("#c3").attr("src","image/3.png");} if (d3==3){$("#d3").attr("src","image/3.png");} if (e3==3){$("#e3").attr("src","image/3.png");}if (f3==3){$("#f3").attr("src","image/3.png");}if (g3==3){$("#g3").attr("src","image/3.png");}
if (a3==4){$("#a3").attr("src","image/4.png");} if (b3==4){$("#b3").attr("src","image/4.png");} if (c3==4){$("#c3").attr("src","image/4.png");} if (d3==4){$("#d3").attr("src","image/4.png");} if (e3==4){$("#e3").attr("src","image/4.png");}if (f3==4){$("#f3").attr("src","image/4.png");}if (g3==4){$("#g3").attr("src","image/4.png");}

if (a4==1){$("#a4").attr("src","image/1.png");} if (b4==1){$("#b4").attr("src","image/1.png");} if (c4==1){$("#c4").attr("src","image/1.png");} if (d4==1){$("#d4").attr("src","image/1.png");} if (e4==1){$("#e4").attr("src","image/1.png");}if (f4==1){$("#f4").attr("src","image/1.png");}if (g4==1){$("#g4").attr("src","image/1.png");}
if (a4==2){$("#a4").attr("src","image/2.png");} if (b4==2){$("#b4").attr("src","image/2.png");} if (c4==2){$("#c4").attr("src","image/2.png");} if (d4==2){$("#d4").attr("src","image/2.png");} if (e4==2){$("#e4").attr("src","image/2.png");}if (f4==2){$("#f4").attr("src","image/2.png");}if (g4==2){$("#g4").attr("src","image/2.png");}
if (a4==3){$("#a4").attr("src","image/3.png");} if (b4==3){$("#b4").attr("src","image/3.png");} if (c4==3){$("#c4").attr("src","image/3.png");} if (d4==3){$("#d4").attr("src","image/3.png");} if (e4==3){$("#e4").attr("src","image/3.png");}if (f4==3){$("#f4").attr("src","image/3.png");}if (g4==3){$("#g4").attr("src","image/3.png");}
if (a4==4){$("#a4").attr("src","image/4.png");} if (b4==4){$("#b4").attr("src","image/4.png");} if (c4==4){$("#c4").attr("src","image/4.png");} if (d4==4){$("#d4").attr("src","image/4.png");} if (e4==4){$("#e4").attr("src","image/4.png");}if (f4==4){$("#f4").attr("src","image/4.png");}if (g4==4){$("#g4").attr("src","image/4.png");}

if (a5==1){$("#a5").attr("src","image/1.png");} if (b5==1){$("#b5").attr("src","image/1.png");} if (c5==1){$("#c5").attr("src","image/1.png");} if (d5==1){$("#d5").attr("src","image/1.png");} if (e5==1){$("#e5").attr("src","image/1.png");}if (f5==1){$("#f5").attr("src","image/1.png");}if (g5==1){$("#g5").attr("src","image/1.png");}
if (a5==2){$("#a5").attr("src","image/2.png");} if (b5==2){$("#b5").attr("src","image/2.png");} if (c5==2){$("#c5").attr("src","image/2.png");} if (d5==2){$("#d5").attr("src","image/2.png");} if (e5==2){$("#e5").attr("src","image/2.png");}if (f5==2){$("#f5").attr("src","image/2.png");}if (g5==2){$("#g5").attr("src","image/2.png");}
if (a5==3){$("#a5").attr("src","image/3.png");} if (b5==3){$("#b5").attr("src","image/3.png");} if (c5==3){$("#c5").attr("src","image/3.png");} if (d5==3){$("#d5").attr("src","image/3.png");} if (e5==3){$("#e5").attr("src","image/3.png");}if (f5==3){$("#f5").attr("src","image/3.png");}if (g5==3){$("#g5").attr("src","image/3.png");}
if (a5==4){$("#a5").attr("src","image/4.png");} if (b5==4){$("#b5").attr("src","image/4.png");} if (c5==4){$("#c5").attr("src","image/4.png");} if (d5==4){$("#d5").attr("src","image/4.png");} if (e5==4){$("#e5").attr("src","image/4.png");}if (f5==4){$("#f5").attr("src","image/4.png");}if (g5==4){$("#g5").attr("src","image/4.png");}

if (a6==1){$("#a6").attr("src","image/1.png");} if (b6==1){$("#b6").attr("src","image/1.png");} if (c6==1){$("#c6").attr("src","image/1.png");} if (d6==1){$("#d6").attr("src","image/1.png");} if (e6==1){$("#e6").attr("src","image/1.png");}if (f6==1){$("#f6").attr("src","image/1.png");}if (g6==1){$("#g6").attr("src","image/1.png");}
if (a6==2){$("#a6").attr("src","image/2.png");} if (b6==2){$("#b6").attr("src","image/2.png");} if (c6==2){$("#c6").attr("src","image/2.png");} if (d6==2){$("#d6").attr("src","image/2.png");} if (e6==2){$("#e6").attr("src","image/2.png");}if (f6==2){$("#f6").attr("src","image/2.png");}if (g6==2){$("#g6").attr("src","image/2.png");}
if (a6==3){$("#a6").attr("src","image/3.png");} if (b6==3){$("#b6").attr("src","image/3.png");} if (c6==3){$("#c6").attr("src","image/3.png");} if (d6==3){$("#d6").attr("src","image/3.png");} if (e6==3){$("#e6").attr("src","image/3.png");}if (f6==3){$("#f6").attr("src","image/3.png");}if (g6==3){$("#g6").attr("src","image/3.png");}
if (a6==4){$("#a6").attr("src","image/4.png");} if (b6==4){$("#b6").attr("src","image/4.png");} if (c6==4){$("#c6").attr("src","image/4.png");} if (d6==4){$("#d6").attr("src","image/4.png");} if (e6==4){$("#e6").attr("src","image/4.png");}if (f6==4){$("#f6").attr("src","image/4.png");}if (g6==4){$("#g6").attr("src","image/4.png");}

if (a7==1){$("#a7").attr("src","image/1.png");} if (b7==1){$("#b7").attr("src","image/1.png");} if (c7==1){$("#c7").attr("src","image/1.png");} if (d7==1){$("#d7").attr("src","image/1.png");} if (e7==1){$("#e7").attr("src","image/1.png");}if (f7==1){$("#f7").attr("src","image/1.png");}if (g7==1){$("#g7").attr("src","image/1.png");}
if (a7==2){$("#a7").attr("src","image/2.png");} if (b7==2){$("#b7").attr("src","image/2.png");} if (c7==2){$("#c7").attr("src","image/2.png");} if (d7==2){$("#d7").attr("src","image/2.png");} if (e7==2){$("#e7").attr("src","image/2.png");}if (f7==2){$("#f7").attr("src","image/2.png");}if (g7==2){$("#g7").attr("src","image/2.png");}
if (a7==3){$("#a7").attr("src","image/3.png");} if (b7==3){$("#b7").attr("src","image/3.png");} if (c7==3){$("#c7").attr("src","image/3.png");} if (d7==3){$("#d7").attr("src","image/3.png");} if (e7==3){$("#e7").attr("src","image/3.png");}if (f7==3){$("#f7").attr("src","image/3.png");}if (g7==3){$("#g7").attr("src","image/3.png");}
if (a7==4){$("#a7").attr("src","image/4.png");} if (b7==4){$("#b7").attr("src","image/4.png");} if (c7==4){$("#c7").attr("src","image/4.png");} if (d7==4){$("#d7").attr("src","image/4.png");} if (e7==4){$("#e7").attr("src","image/4.png");}if (f7==4){$("#f7").attr("src","image/4.png");}if (g7==4){$("#g7").attr("src","image/4.png");}

}
// □□□□□□  Fin 7 □□□□□□

// □□□□□□  8  Funciones Generales □□□□□□
function nx (){numx=Math.floor((Math.random() * 4) + 1)}; // Genracion de Numero aleatorio de 1 A 4♪
function ni (){nx();imgx=[imebas.slice(0,6),numx,imebas.slice(7,11)] .join("")}
function gena1(){$("#a1").css("top","-40px");$("#a1").css("left","0px");$("#a1").animate({top:"0px"},500); ni();$("#a1").attr("src",imgx);}
function genb1(){$("#b1").css("top","-40px");$("#b1").css("left","0px");$("#b1").animate({top:"0px"},500); ni();$("#b1").attr("src",imgx);}
function genc1(){$("#c1").css("top","-40px");$("#c1").css("left","0px");$("#c1").animate({top:"0px"},500); ni();$("#c1").attr("src",imgx);}
function gend1(){$("#d1").css("top","-40px");$("#d1").css("left","0px");$("#d1").animate({top:"0px"},500); ni();$("#d1").attr("src",imgx);}
function gene1(){$("#e1").css("top","-40px");$("#e1").css("left","0px");$("#e1").animate({top:"0px"},500); ni();$("#e1").attr("src",imgx);}
function genf1(){$("#f1").css("top","-40px");$("#f1").css("left","0px");$("#f1").animate({top:"0px"},500); ni();$("#f1").attr("src",imgx);}
function geng1(){$("#g1").css("top","-40px");$("#g1").css("left","0px");$("#g1").animate({top:"0px"},500); ni();$("#g1").attr("src",imgx);}


  function pt10(){pts=pts+10;$("#score-text").text(pts);};
  function pt20(){pts=pts+10;$("#score-text").text(pts);};
  function pt40(){pts=pts+20;$("#score-text").text(pts);};
  function pt70(){pts=pts+30;$("#score-text").text(pts);};
  function pt100(){pts=pts+30;$("#score-text").text(pts);};

  function cronometro(){ s=60; m=1;
  if ((parada=="no")&&(ct=="ini")){mycounter=setInterval(counter,500);};
  if (ct=="uno"){reaccend();ct="ini"};
  if (parada=="si"){reaccend();};
  };


  function counter(){s=s-1;if(s==0){m=0;s=59};
  $("#timer").text("0"+m+":"+s);
  if((s==1)&&(m==0)){parada="si";clearInterval(mycounter);$("#timer").text(" Ohh tiempo agotado!");}
  if(parada=="si"){setTimeout(accend,2000);};
  }

  function accend(){
  $(".elemento").hide();
  $(".panel-tablero").animate({opacity:0.1,width: "-=1450"}, 500, );
  $(".panel-score").animate({width: "+=1000"}, 3000, );
  $(".data-info").css("color","green");
  $(".data-titulo").css("color","white");
  $(".data-info").css("font-size","3.2em");
  $("#timer").text("Intentalo nuevamente!");
  $(".btn-reinicio").text("Re-Iniciar");
  parada="si"};


  function reaccend (){
    location.reload()};


// nemonico: animacion columna a puntos 10 ,20 , 40 , 70 , 100
function ana10(){};
function ana20(){};
function ana40(){};
function ana70(){};
function ana100(){};






//                            FIN DEL PROGRAMA JS
//*******************************************************************
