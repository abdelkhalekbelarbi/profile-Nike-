const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

///DOM:document object module:
const silderwrapper=document.querySelector(".silder-wrapper");
const menuitem=document.querySelectorAll(".menuitem");
const productImg=document.querySelector(".productImg");
const productTitle=document.querySelector(".productTitle");
const productPrice=document.querySelector(".productPrice");
const color=document.querySelectorAll(".color");
const size=document.querySelectorAll(".size");
const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");
////my consapt:
let choosenProduct=products[0];
menuitem.forEach((item,index)=>{
item.addEventListener("click",()=>{
///change the current slide:
silderwrapper.style.transform=`translateX(${-100*index}vw)`;
////change the choosen product:
choosenProduct=products[index];
///change the text of products:
productTitle.textContent=choosenProduct.title;
///change the price of product:
productPrice.textContent="$" +choosenProduct.price;
///change the image of product :
productImg.src=choosenProduct.colors[0].img;

///assign new colors:
color.forEach((abdo,index)=>{
abdo.style.backgroundColor=choosenProduct.colors[index].code;
})
})
})

color.forEach((abdo,index)=>{
abdo.addEventListener("click",()=>{
productImg.src=choosenProduct.colors[index].img;
})
})

size.forEach((item,index)=>{
item.addEventListener("click",()=>{
size.forEach((item)=>{
item.style.color="black";
item.style.backgroundColor="white"
})
item.style.backgroundColor="black";
item.style.color="white";
})
})


productButton.addEventListener("click",()=>{
payment.style.display="flex";
})

close.addEventListener("click",()=>{
payment.style.display="none";
})
