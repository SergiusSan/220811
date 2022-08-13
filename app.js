const express = require('express');
const server = express();

//lvl1-2-4
let db = [
    {'title' : '2N3906', 'desc' : 'Транзистор 2N3906 PNP корпус TO-92 (PNP) (комплементарная пара к 2N3904)', 'price' : '0,74', 'info' : 'https://www.onsemi.com/pub/Collateral/2N3906-D.PDF'},
    {'title' : 'BC557', 'desc' : 'Транзистор BC557 PNP корпус TO-92 (NPN) комплементарная пара к -BC547', 'price' : '0,75', 'info' : 'https://www.onsemi.com/pdf/datasheet/bc556b-d.pdf'},
    {'title' : 'S8550', 'desc' : 'Транзистор SS8550 PNP корпус TO-92 (PNP) (U_ce = 25V / U_cb = 40V / U_eb = 6V / I_c = 1.5 А / P= 1 Wt / Коэффициент усиления по току (hfe): от 85 до 300 / F = 100 МГц ) ( усилительные схемы, задачи режима Push-pull)', 'price' : '0,80', 'info' : 'http://www.mouser.com/ds/2/149/SS8550-118608.pdf'},
    {'title' : 'BD140', 'desc' : 'Транзистор BD140 PNP корпус TO-126 (Аналог отечественного - КТ814 , комплементарная пара к BD139 кт815) Напряжение коллектор-эмиттер max 80 В / Напряжение коллектор-база max 100 В / Напряжение эмиттер-база max 5В / Ток коллектора max 1.5 А / P= 12.5 Вт / Коэффициент усиления по току (hfe): 40-250', 'price' : '1,69', 'info' : 'http://www.st.com/content/ccc/resource/technical/document/datasheet/25/1f/cf/0d/03/ad/4e/06/CD00001225.pdf/files/CD00001225.pdf/jcr:content/translations/en.CD00001225.pdf'},
    {'title' : 'TIP127', 'desc' : 'Транзистор TIP127 PNP корпус TO-220AB (Аналог отечественного - KT853A, KT8115A , комплементарная пара к TIP122 -КТ829A, KT8116A) Напряжение коллектор-эмиттер 100 В / Напряжение коллектор-база 100 В / Напряжение эмиттер-база 5В / Ток коллектора 5A (8A peak) / P= 65 Вт / Коэффициент усиления по току (hfe): >1000', 'price' : '5,55', 'info' : 'https://www.onsemi.com/pub/Collateral/TIP120-D.PDF'},
    {'title' : '2N3904', 'desc' : 'Транзистор 2N3904 NPN корпус TO-92 (NPN) (комплементарная пара к 2N3906)', 'price' : '0,74', 'info' : 'https://www.onsemi.com/pub/Collateral/2N3903-D.PDF'},
    {'title' : '2N2222', 'desc' : 'Транзистор 2N2222 NPN корпус TO-92 (NPN) ', 'price' : '0,84', 'info' : 'http://web.mit.edu/6.101/www/reference/2N2222A.pdf'},
    {'title' : 'BC547', 'desc' : 'Транзистор BC547 NPN корпус TO-92 (NPN) комплементарная пара к -BC557', 'price' : '0,69', 'info' : 'https://www.sparkfun.com/datasheets/Components/BC546.pdf'},
    {'title' : 'BC847', 'desc' : 'Транзистор BC847 NPN корпус SOT-23 45V / 0,1A / P=250mW / ft = 100Mhz', 'price' : '0,78', 'info' : 'https://assets.nexperia.com/documents/data-sheet/BC847_SER.pdf'},
    {'title' : 'S8050', 'desc' : 'Транзистор S8050 NPN корпус TO-92 Напряжение коллектор-эмиттер 20 В / Напряжение коллектор-база 30В / Напряжение эмиттер-база max 5В / Ток коллектора max 0,7А / P= 0,625Вт / F=100МГц / Коэффициент усиления по току (hfe): 85-300. Используются как в ключевых схемах (подключили к ноге мк и рулим нагрузкой в 0,7А), так и для двухтактных аудиоусилителей класса B.', 'price' : '0,67', 'info' : 'https://electronics.stackexchange.com/questions/320908/s8050-bjt-is-rated-for-700-ma-but-gets-extremely-hot-when-powering-a-12-volt-700'},
    {'title' : 'BD139', 'desc' : 'Транзистор BD139 NPN корпус TO-126 (Аналог отечественного - КТ815 , комплементарная пара к BD140 кт814) Напряжение коллектор-эмиттер max 80 В / Напряжение коллектор-база max 100 В / Напряжение эмиттер-база max 5В / Ток коллектора max 1.5 А / P= 12.5 Вт / Коэффициент усиления по току (hfe): 40-250', 'price' : '1,69', 'info' : 'http://www.st.com/content/ccc/resource/technical/document/datasheet/25/1f/cf/0d/03/ad/4e/06/CD00001225.pdf/files/CD00001225.pdf/jcr:content/translations/en.CD00001225.pdf'},
    {'title' : 'TIP122', 'desc' : 'Транзистор TIP122 NPN корпус TO-220AB (Аналог отечественного - КТ829A, KT8116A , комплементарная пара к TIP127 - KT853A) Напряжение коллектор-эмиттер 100 В / Напряжение коллектор-база 100 В / Напряжение эмиттер-база 5В / Ток коллектора 5A (8A peak) / P= 65 Вт / Коэффициент усиления по току (hfe): >1000', 'price' : '5,45', 'info' : 'https://www.onsemi.com/pub/Collateral/TIP120-D.PDF'},
    {'title' : '2SC5200', 'desc' : 'Транзистор 2SC5200 NPN корпус TO-3PL TOSHIBA - Japan Напряжение коллектор-эмиттер 230 В / Напряжение коллектор-база - 230В / Напряжение эмиттер-база 5В / Ток коллектора 15A / P= 150 Вт / Коэффициент усиления по току (hfe): 160 | F=30MHz (комплементарная пара - 2SA1943)', 'price' : '31,17', 'info' : 'https://toshiba.semicon-storage.com/info/docget.jsp?did=20668&prodName=2SC5200'},
    {'title' : '2SA1943', 'desc' : 'Транзистор 2SA1943 PNP корпус TO-3PL TOSHIBA - Japan Напряжение коллектор-эмиттер 250 В / Напряжение коллектор-база - 250В / Напряжение эмиттер-база 5В / Ток коллектора 17A / P= 150 Вт / Коэффициент усиления по току (hfe): 160 | F=30MHz (комплементарная пара - 2SC5200)', 'price' : '33,68', 'info' : 'https://www.mouser.com/datasheet/2/149/2SA1943-193839.pdf'},
]
//lvl3
server.get('/json', (req,res) => {
    res.setHeader('Content-Type', 'application/json'); 
    res.send(JSON.stringify(db));
    
});
server.get('/fromjson', (req,res) => {
    res.render('fromjson');

    
});

server.set('view engine', 'ejs');
server.set('views','./views');

server.use(express.static('./public'));

server.get('/', (req, res) => {
    res.render('main', {db});
});

server.get('/123', (req, res) => {
    res.send('/123');
});


 server.get('/goods/:id', (req, res) => {
    const { id } = req.params;;
    res.render('goods', { db, id });
 });

server.listen(3000);