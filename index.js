// TANGRAM

var i = 45; // escala

var r1, r2, r3, r4, r5, r6, r7;       // indices rotacionais
r1 = r2 = r3 = r4 = r5 = r6 = r7 = 0;

var p; // rotacao
p = 15;

// quadrado
const rectangle = new Rectangle(3.5*i,3.5*i,blue)
    .pos(65,100,CENTER,CENTER)
    .rot(45)
    .drag();

var a, b, c;

// triangulo medio
const Tm = new Triangle(a=5*i, b=7*i, c=5*i,pink)
    .pos(200,125,LEFT,BOTTOM)
    .drag();
    
// triangulos pequenos
const Tp1 = new Triangle(a=5*i, b=3.5*i, c=3.5*i,green)
    .pos(-110,0,CENTER,CENTER)
    .rot(90)
    .drag();
const Tp2 = new Triangle(a=5*i, b=3.5*i, c=3.5*i,orange)
    .pos(275,125,RIGHT,BOTTOM)
    .drag();
    
// triangulos grandes
const Tg1 = new Triangle(a=7*i, b=10*i, c=7*i,yellow)
    .pos(-25,-250,CENTER,CENTER)
    .rot(-45)
    .drag();
const Tg2 = new Triangle(a=7*i, b=10*i, c=7*i,purple)
    .pos(240,0,CENTER,CENTER)
    .rot(45)
    .drag();
    
// paralelogramo
const parallelogram = new Container()
    .pos(165,-110,LEFT,CENTER);
const Tparallelo2 = new Triangle(a=5*i, b=3.5*i, c=3.5*i,red)
    .rot(-90)
    .addTo(parallelogram)
    .loc(i*2,i*2, parallelogram);
const Tparallelo1 = new Triangle(a=5*i, b=3.5*i, c=3.5*i,red)
    .rot(90)
    .addTo(parallelogram)
    .loc(i*2,-i/2, parallelogram);
parallelogram.drag();
parallelogram.drag({all:true});

// ROTACOES

rectangle.on("dblclick", ()=>{
    // girar
    r1 += p;
    rectangle.rot(r1);
});

Tm.on("dblclick", ()=>{
    // girar
    r2 += p;
    Tm.rot(r2);
});

Tp1.on("dblclick", ()=>{
    // girar
    r3 += p;
    Tp1.rot(r3);
});

Tp2.on("dblclick", ()=>{
    // girar
    r4 += p;
    Tp2.rot(r4);
});

Tg1.on("dblclick", ()=>{
    // girar
    r5 += p;
    Tg1.rot(r5);
});

Tg2.on("dblclick", ()=>{
    // girar
    r6 += p;
    Tg2.rot(r6);
});

parallelogram.on("dblclick", ()=>{
    // girar
    r7 += p;
    parallelogram.rot(r7);
});

// RESTART
const restart = new Rectangle(100,100,purple)
    .pos(50,50,RIGHT,BOTTOM);
// reset circle when pressing restart
restart.on("mousedown", ()=>{
    // posicoes iniciais
    rectangle.pos(-25,125,CENTER,CENTER).rot(45);
    Tm.pos(200,125,LEFT,BOTTOM).rot(0);
    Tp1.pos(-110,0,CENTER,CENTER).rot(90);
    Tp2.pos(275,125,RIGHT,BOTTOM).rot(0);
    Tg1.pos(-25,-250,CENTER,CENTER).rot(-45);
    Tg2.pos(240,0,CENTER,CENTER).rot(45);
    parallelogram.pos(-250,-80,CENTER,CENTER).rot(0);
    S.update();
});
restart.cur();

makeIcon("rotate", white)
    .alp(.8)
    .center(restart);

// legenda
STYLE = {bgColor:white};
const label = new Label("drag to move and double click to rotate")
    .sca(.7)
    .alp(.7)
    .ske(10)
    .loc(50,50);
