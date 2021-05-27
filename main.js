
const prevBtn = document.querySelector('#prevBtn-js');
const nextBtn = document.querySelector('#nextBtn-js');
const sliderContainer = document.querySelector('#sliderJs');




let counterImg = 1;

nextBtn.addEventListener('click',()=>{
if(counterImg === 5 ){
counterImg = 0;
}else{
counterImg++
sliderContainer.style.backgroundImage = `
url(img/img${counterImg}.jpg`
}
})


prevBtn.addEventListener('click',()=>{


if(counterImg === 1){
  counterImg = 6;
}{
  counterImg--
sliderContainer.style.backgroundImage = `
url(img/img${counterImg}.jpg`
}

})