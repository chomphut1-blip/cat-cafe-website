const cats=[
{name:'โมจิ',breed:'Scottish Fold',age:'2 ปี',mood:'อ้อน',traits:['ชอบเกาคาง','นั่งตัก','ใจเย็น'],coat:'#d9b08c',bg:'#fde4d6',note:'เจ้าหนุ่มหน้าแป้นประจำเคาน์เตอร์ ชอบมานั่งใกล้คนเงียบ ๆ'},
{name:'ชูครีม',breed:'British Shorthair',age:'3 ปี',mood:'ชิล',traits:['ง่วงเก่ง','ชอบโซฟา','ถ่ายรูปสวย'],coat:'#c8c5bd',bg:'#e7edf1',note:'น้องสายชิลที่เชื่อว่าทุกมุมของร้านคือเตียงส่วนตัว'},
{name:'โกโก้',breed:'Domestic Shorthair',age:'1 ปี',mood:'เล่น',traits:['วิ่งเร็ว','ไม้ตกแมว','พลังเยอะ'],coat:'#5a463c',bg:'#eee0d7',note:'ตัวป่วนประจำร้าน เห็นของเล่นเมื่อไรพร้อมออกตัวทันที'},
{name:'ถั่วแดง',breed:'American Shorthair',age:'2 ปี',mood:'อ้อน',traits:['ขี้คุย','เดินตาม','ชอบคน'],coat:'#8f8d88',bg:'#e4e2df',note:'พนักงานต้อนรับสี่ขา เดินตามลูกค้าเหมือนเป็นไกด์ประจำโต๊ะ'},
{name:'ลาเต้',breed:'Ragdoll',age:'3 ปี',mood:'ชิล',traits:['ขนนุ่ม','ใจเย็น','ชอบหน้าต่าง'],coat:'#f1e8d6',bg:'#e4f0e6',note:'สายละมุนผู้ชอบรับแดดอ่อน ๆ และมองโลกผ่านกระจกบานใหญ่'},
{name:'มาร์ชเมลโล่',breed:'Persian',age:'4 ปี',mood:'ชิล',traits:['สุขุม','รักสวยงาม','โซนเงียบ'],coat:'#f3f0e8',bg:'#f5e9f0',note:'ราชินีแห่งมุมสงบ เดินช้าแต่มีออร่าจนทุกคนต้องหยุดมอง'},
{name:'พุดดิ้ง',breed:'Munchkin',age:'2 ปี',mood:'เล่น',traits:['ขาสั้น','ชอบกล่อง','แสนรู้'],coat:'#e3a35f',bg:'#fff0c9',note:'ขาสั้นแต่สปีดไม่สั้น โดยเฉพาะเมื่อได้ยินเสียงขนมกรอบ'},
{name:'มะลิ',breed:'Khao Manee',age:'1 ปี',mood:'อ้อน',traits:['ตาฟ้า','ขี้อ้อน','ชอบลูบหัว'],coat:'#fffdf7',bg:'#deeff2',note:'น้องขาวสะอาดสายอ้อน ชอบนอนใกล้มือที่พร้อมลูบหัว'},
{name:'โอรีโอ',breed:'Tuxedo',age:'2 ปี',mood:'เล่น',traits:['ช่างสังเกต','ซ่อนเก่ง','ชอบอุโมงค์'],coat:'#303032',bg:'#e8e7eb',note:'นักสำรวจชุดทักซิโด้ เจ้าของสถิติหามุมซ่อนใหม่ได้ทุกวัน'},
{name:'บราวนี่',breed:'Bengal Mix',age:'2 ปี',mood:'เล่น',traits:['ปีนเก่ง','อยากรู้อยากเห็น','พลังสูง'],coat:'#a86f42',bg:'#eadcca',note:'นักปีนป่ายของร้าน ชอบพื้นที่สูงและเกมที่ได้ใช้สมอง'},
{name:'ข้าวปั้น',breed:'Domestic Longhair',age:'3 ปี',mood:'อ้อน',traits:['ขนฟู','เสียงเบา','เดินตาม'],coat:'#d6c1a6',bg:'#e4efe5',note:'ก้อนขนฟูที่มักโผล่มานั่งข้าง ๆ ตอนคุณกำลังจิบกาแฟ'},
{name:'นมสด',breed:'Siamese Mix',age:'4 ปี',mood:'ชิล',traits:['คุยเก่ง','ฉลาด','รักระเบียบ'],coat:'#c7b197',bg:'#e6e4f3',note:'พี่ใหญ่ประจำบ้าน แมวคุยเก่งที่เหมือนรู้ตารางร้านดีกว่าทุกคน'}
];
function catSvg(coat){return `<svg viewBox="0 0 200 200" role="img" aria-label="ภาพวาดแมว"><ellipse cx="100" cy="137" rx="58" ry="47" fill="${coat}"/><circle cx="100" cy="84" r="53" fill="${coat}"/><path d="M58 55 66 18 88 45M142 55l-8-37-22 27" fill="${coat}" stroke="#5a4740" stroke-width="5" stroke-linejoin="round"/><path d="M66 19 72 45M134 19l-6 26" stroke="#e8afa9" stroke-width="8" stroke-linecap="round"/><ellipse cx="79" cy="83" rx="7" ry="9" fill="#382f2d"/><ellipse cx="121" cy="83" rx="7" ry="9" fill="#382f2d"/><path d="M95 100q5 6 10 0" fill="none" stroke="#382f2d" stroke-width="5" stroke-linecap="round"/><path d="M100 101q-8 10-17 5M100 101q8 10 17 5" fill="none" stroke="#382f2d" stroke-width="3" stroke-linecap="round"/><path d="M60 100 28 94M61 108 27 113M140 100l32-6M139 108l34 5" stroke="#6b554d" stroke-width="3" stroke-linecap="round"/></svg>`}
const grid=document.getElementById('catGrid');
function render(filter='all'){grid.innerHTML=cats.map((c,i)=>({...c,i})).filter(c=>filter==='all'||c.mood===filter).map(c=>`<article class="cat-card"><div class="cat-portrait" style="--catbg:${c.bg}"><span class="cat-no">CAT ${String(c.i+1).padStart(2,'0')}</span>${catSvg(c.coat)}</div><div class="cat-info"><div class="cat-info-top"><h3>${c.name}</h3><span class="pill">${c.mood==='อ้อน'?'สายอ้อน':c.mood==='เล่น'?'สายเล่น':'สายชิล'}</span></div><p><b>${c.breed}</b> • ${c.age}<br>${c.note}</p><div class="traits">${c.traits.map(t=>`<span>#${t}</span>`).join('')}</div></div></article>`).join('')}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)}));
document.getElementById('menuBtn').addEventListener('click',()=>document.querySelector('.site-header').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.site-header').classList.remove('open')));
function fakeSubmit(formId,msgId,text){document.getElementById(formId).addEventListener('submit',e=>{e.preventDefault();const msg=document.getElementById(msgId);msg.textContent=text;msg.style.color='#2d7b50';e.target.reset()})}
fakeSubmit('clubForm','clubMsg','✓ บันทึกตัวอย่างแล้ว — พร้อมนำไปเชื่อมฐานข้อมูลภายหลัง');
fakeSubmit('bookingForm','bookingMsg','✓ รับคำขอจองตัวอย่างแล้ว — ฟอร์มยังไม่ได้ส่งออกจากเครื่อง');
