const menuItems = {
  starters: [
    {name:'Smoky Paneer Tikka',desc:'Char-grilled paneer, peppers and house spices.',price:'₹—',img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=300&q=80'},
    {name:'Crispy Corn',desc:'Golden sweet corn with a lively seasoning.',price:'₹—',img:'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=300&q=80'},
    {name:'Classic Chicken Tikka',desc:'Tender chicken, smoky edges and warming spices.',price:'₹—',img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=300&q=80'},
    {name:'Loaded Nachos',desc:'Crunchy nachos with cheese and fresh toppings.',price:'₹—',img:'https://images.unsplash.com/photo-1513456852971-30c0?auto=format&fit=crop&w=300&q=80'}
  ],
  mains: [
    {name:'Chef’s Signature Pasta',desc:'Comforting pasta tossed in a rich house sauce.',price:'₹—',img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=300&q=80'},
    {name:'Paneer Makhani',desc:'Paneer in a creamy tomato and butter gravy.',price:'₹—',img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80'},
    {name:'Coal-Grilled Chicken',desc:'A hearty grilled favourite with bold seasoning.',price:'₹—',img:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80'},
    {name:'Vegetable Biryani',desc:'Fragrant rice layered with spices and vegetables.',price:'₹—',img:'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=300&q=80'}
  ],
  drinks: [
    {name:'Citrus Cooler',desc:'A bright, refreshing citrus drink.',price:'₹—',img:'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=300&q=80'},
    {name:'Mint Mojito',desc:'Fresh mint, lime and a cooling finish.',price:'₹—',img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=300&q=80'},
    {name:'Signature Mocktail',desc:'A colourful house-style refreshing blend.',price:'₹—',img:'https://images.unsplash.com/photo-1536935338788846bb9981813?auto=format&fit=crop&w=300&q=80'},
    {name:'Classic Iced Coffee',desc:'Chilled coffee served over ice.',price:'₹—',img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80'}
  ],
  desserts: [
    {name:'Chocolate Brownie',desc:'Rich chocolate brownie, warm and indulgent.',price:'₹—',img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80'},
    {name:'Classic Cheesecake',desc:'Creamy cheesecake with a buttery base.',price:'₹—',img:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&q=80'},
    {name:'Gulab Jamun',desc:'Soft traditional sweets in fragrant syrup.',price:'₹—',img:'https://images.unsplash.com/photo-1666190092159-7a6b7f6d3b2f?auto=format&fit=crop&w=300&q=80'},
    {name:'Seasonal Ice Cream',desc:'A chilled, sweet finish to your meal.',price:'₹—',img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80'}
  ]
};
const menuGrid = document.getElementById('menuGrid');
function renderMenu(category){
  menuGrid.innerHTML = (menuItems[category] || []).map(item => `<article class="menu-item"><img loading="lazy" src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=300&q=80'"><div><h3>${item.name}</h3><p>${item.desc}</p></div><span class="menu-price">${item.price}</span></article>`).join('');
}
document.querySelectorAll('.menu-tab').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.menu-tab').forEach(tab => {tab.classList.remove('active');tab.setAttribute('aria-selected','false')});
  button.classList.add('active');button.setAttribute('aria-selected','true');renderMenu(button.dataset.category);
}));
renderMenu('starters');
const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {const open = nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent = open ? '×' : '☰'});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
let marathi = false;
document.getElementById('languageToggle').addEventListener('click',()=>{
  marathi=!marathi;document.documentElement.lang=marathi?'mr':'en';document.getElementById('languageToggle').textContent=marathi?'English':'मराठी';
  document.querySelectorAll('[data-en][data-mr]').forEach(el=>{el.innerHTML=marathi?el.dataset.mr:el.dataset.en});
  document.querySelectorAll('.menu-tab').forEach((el,i)=>{const en=['Starters','Mains','Drinks','Desserts'];const mr=['स्टार्टर्स','मुख्य पदार्थ','पेय','डेझर्ट'];el.textContent=marathi?mr[i]:en[i]});
});
document.getElementById('year').textContent=new Date().getFullYear();
