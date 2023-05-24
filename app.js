const carouselSlide = document.querySelector('.slideshow-container');
const carouselImages = document.querySelectorAll('.student');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 1;

var size = carouselImages[0].clientWidth; 

carouselSlide.style.transform = `translateX(-${counter * size + 60}px)`;

var take = 0;

// Button Listner

nextBtn.addEventListener('click',() =>{
    if(counter >= carouselImages.length-1) return;
    carouselSlide.style.transition =  `transform 0.4s ease-in-out`;
    size = carouselImages[counter].clientWidth;
    // console.log(counter+"next");
    counter++; 
    carouselSlide.style.transform = `translateX(${(-counter * size)-120*(counter-1)}px)`;
})
prevBtn.addEventListener('click',() =>{
    if(counter <= 0) return;
    carouselSlide.style.transition =  `transform 0.4s ease-in-out`;
    size = carouselImages[counter].clientWidth;
    counter--;
    carouselSlide.style.transform = `translateX(${(-counter * size)-60}px)`;
})

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition =  `none`;
        counter = carouselImages.length - 2 -1;
        carouselSlide.style.transform = `translateX(${-counter * size -60}px)`;
    }
    if(carouselImages[counter+2].id === 'firstClone'){
        carouselSlide.style.transition =  `none`;
        counter = carouselImages.length - counter - 2 ;
        carouselSlide.style.transform = `translateX(${-counter * size + 200}px)`;
    }
})

setInterval(function(){
    nextBtn.click();
    },
5000);


// ----------------------
// Company Slider

const carouselSlideCompany = document.querySelector(".slides-company");
const carouselImagesCompany = document.querySelectorAll(".slides-company img");

console.log(carouselImagesCompany);
const prevBtnCompany = document.querySelector('#prevBtnCompany');
const nextBtnCompany = document.querySelector('#nextBtnCompany');

var companySize = carouselImagesCompany[0].clientWidth;
// console.log(companySize);
var companyCounter = 1;

carouselSlideCompany.style.transform = `translateX(-${companyCounter * companySize +80}px)`;



nextBtnCompany.addEventListener('click',() =>{
    if(companyCounter >= carouselImagesCompany.length) return;
    carouselSlideCompany.style.transition =  `transform 0.4s ease-in-out`;
    companySize = carouselImagesCompany[companyCounter].clientWidth;
    // console.log(counter+"next");
    companyCounter++; 
    carouselSlideCompany.style.transform = `translateX(${(-companyCounter * companySize)-80}px)`;
})
prevBtnCompany.addEventListener('click',() =>{
    if(companyCounter <= 0) return;
    carouselSlideCompany.style.transition =  `transform 0.4s ease-in-out`;
    companySize = carouselImagesCompany[companyCounter].clientWidth;
    companyCounter--;
    carouselSlideCompany.style.transform = `translateX(${(-companyCounter * companySize)-40}px)`;
})

carouselSlideCompany.addEventListener('transitionend',()=>{
    if(carouselImagesCompany[companyCounter].id === 'lastCloneCompany'){
        carouselSlideCompany.style.transition =  `none`;
        companyCounter = carouselImagesCompany.length - 2-1;
        carouselSlideCompany.style.transform = `translateX(${-companyCounter * companySize + 80}px)`;
    }
    if(carouselImagesCompany[companyCounter+2].id === 'firstCloneCompany'){
        carouselSlideCompany.style.transition =  `none`;
        companyCounter = carouselImagesCompany.length - companyCounter - 2 ;
        carouselSlideCompany.style.transform = `translateX(${-companyCounter * companySize}px)`;
    }
})

// setInterval(function(){
//     nextBtnCompany.click();
//     },
// 3000);


// -------------------
// Header
// -------------------

const manualBtn1 = document.querySelector('.manual-btn1');
const manualBtn = document.querySelectorAll('.manual-btn')


function makeEmptyColor(){
    for(let j = 0; j < manualBtn.length; j++){
        manualBtn[j].style.backgroundColor ='transparent';
    }
}

manualBtn[0].style.backgroundColor = '#fff';

for(let j = 0; j< manualBtn.length; j++){
    manualBtn[j].addEventListener('click',()=>{
        makeEmptyColor();
        manualBtn[j].style.backgroundColor = '#fff'
    })
}







// ------------------
// Programs
// --------------------

const allBtn = document.querySelectorAll('.all-btn button');
const fullProgram = document.querySelectorAll('.full-program');
var countHolding = [1,1,1,1,1];

function makeNone(){
    for(let i =0; i < fullProgram.length; i++){
        fullProgram[i].style.display = `none`;
        allBtn[i].style.backgroundColor = "#fff";
        allBtn[i].style.color = "#000";
    }
}
makeNone();
fullProgram[0].style.display='block';
allBtn[0].style.backgroundColor = "#233c7b";
allBtn[0].style.color = "#fff";
var clickedBtn = 0;
for(let i =0; i<allBtn.length;i++){
    allBtn[i].addEventListener('click',() =>{
        makeNone();
        fullProgram[i].style.display = `block`;
        allBtn[i].style.backgroundColor = "#233c7b";
        allBtn[i].style.color = "#fff";
        countHolding[i] = 1;
    })
}
const carouselSlideCourse = document.querySelector(".course-slide1");
const carouselImagesCourse = document.querySelectorAll(".course-slide1 .course");

// console.log(carouselImagesCourse);
const prevBtnCourse = document.querySelector('#prevBtnCourse1');
const nextBtnCourse = document.querySelector('#nextBtnCourse1');

var courseSize = carouselImagesCourse[0].clientWidth;
console.log(courseSize);
console.log(carouselSlideCourse);
console.log(carouselImagesCourse);
// console.log(courseSize);
var courseCounter1 = 1;
courseCounter1 = countHolding[0];

carouselSlideCourse.style.transform = `translateX(-${courseCounter1 * courseSize +80}px)`;

nextBtnCourse.addEventListener('click',() => {
    if(courseCounter1 >= carouselImagesCourse.length-1) return;
    carouselSlideCourse.style.transition =  `transform 0.4s ease-in-out`;
    courseSize = carouselImagesCourse[courseCounter1].clientWidth;
    courseCounter1++;
    carouselSlideCourse.style.transform = `translateX(-${(courseCounter1 * courseSize)-80}px)`;
});

prevBtnCourse.addEventListener('click',() =>{
    if(courseCounter1 <= 0) return;
    carouselSlideCourse.style.transition =  `transform 0.4s ease-in-out`;
    courseSize = carouselImagesCourse[courseCounter1].clientWidth;
    courseCounter1--;
    carouselSlideCourse.style.transform = `translateX(${(-courseCounter1 * courseSize)-40}px)`;
});

carouselSlideCourse.addEventListener('transitionend',()=>{
    if(carouselImagesCourse[courseCounter1].id === 'lastCloneCourse'){
        carouselSlideCourse.style.transition =  `none`;
        courseCounter1 = carouselImagesCompany.length - 2-1;
        carouselSlideCourse.style.transform = `translateX(${-courseCounter1 * courseSize + 80}px)`;
    }
    if(carouselImagesCourse[courseCounter1+2].id === 'firstCloneCourse'){
        carouselSlideCourse.style.transition =  `none`;
        courseCounter1 = carouselImagesCourse.length - courseCounter1 - 2 ;
        carouselSlideCourse.style.transform = `translateX(${-courseCounter1 * courseSize}px)`;
    }
})

// setInterval(function(){
//     nextBtnCourse.click();
//     },
// 3000);




// ------------------




const carouselSlideCourse2 = document.querySelector(".course-slide2");
const carouselImagesCourse2 = document.querySelectorAll(".course-slide2 .course");

// console.log(carouselImagesCourse2);
const prevBtnCourse2 = document.querySelector('#prevBtnCourse2');
const nextBtnCourse2 = document.querySelector('#nextBtnCourse2');

var courseSize2 = carouselImagesCourse2[0].clientWidth;
console.log(courseSize2);
console.log(carouselSlideCourse2);
console.log(carouselImagesCourse2);
// console.log(courseSize2);
var courseCounter2 = 1;
courseCounter2 = countHolding[1];

carouselSlideCourse2.style.transform = `translateX(-${courseCounter2 * courseSize2 +80}px)`;

nextBtnCourse2.addEventListener('click',() => {
    if(courseCounter2 >= carouselImagesCourse2.length) return;
    carouselSlideCourse2.style.transition =  `transform 0.4s ease-in-out`;
    courseSize2 = carouselImagesCourse2[courseCounter2].clientWidth;
    console.log(courseCounter2);
    courseCounter2++;
    carouselSlideCourse2.style.transform = `translateX(-${(courseCounter2 * courseSize2)-80}px)`;
});

prevBtnCourse2.addEventListener('click',() =>{
    if(courseCounter2 <= 0) return;
    carouselSlideCourse2.style.transition =  `transform 0.4s ease-in-out`;
    courseSize2 = carouselImagesCourse2[courseCounter2].clientWidth;
    courseCounter2--;
    carouselSlideCourse2.style.transform = `translateX(${(-courseCounter2 * courseSize2)-40}px)`;
});

carouselSlideCourse2.addEventListener('transitionend',()=>{
    if(carouselImagesCourse2[courseCounter2].id === 'lastCloneCourse2'){
        carouselSlideCourse2.style.transition =  `none`;
        courseCounter2 = carouselImagesCompany.length - 2-1;
        carouselSlideCourse2.style.transform = `translateX(${-courseCounter2 * courseSize2 + 80}px)`;
    }
    if(carouselImagesCourse2[courseCounter2+2].id === 'firstCloneCourse2'){
        carouselSlideCourse2.style.transition =  `none`;
        courseCounter2 = carouselImagesCourse2.length - courseCounter2 - 2 ;
        carouselSlideCourse2.style.transform = `translateX(${-courseCounter2 * courseSize2}px)`;
    }
})

// setInterval(function(){
//     nextBtnCourse2.click();
//     },
// 3000);






const carouselSlideCourse3 = document.querySelector(".course-slide3");
const carouselImagesCourse3 = document.querySelectorAll(".course-slide3 .course");

// console.log(carouselImagesCourse3);
const prevBtnCourse3 = document.querySelector('#prevBtnCourse3');
const nextBtnCourse3 = document.querySelector('#nextBtnCourse3');

var courseSize3 = carouselImagesCourse3[0].clientWidth;
console.log(courseSize3);
console.log(carouselSlideCourse3);
console.log(carouselImagesCourse3);
// console.log(courseSize3);
var courseCounter3 = 1;
courseCounter3 = countHolding[2];

carouselSlideCourse3.style.transform = `translateX(-${courseCounter3 * courseSize3 +80}px)`;

nextBtnCourse3.addEventListener('click',() => {
    if(courseCounter3 >= carouselImagesCourse3.length) return;
    carouselSlideCourse3.style.transition =  `transform 0.4s ease-in-out`;
    courseSize3 = carouselImagesCourse3[courseCounter3].clientWidth;
    courseCounter3++;
    carouselSlideCourse3.style.transform = `translateX(-${(courseCounter3 * courseSize3)-80}px)`;
});

prevBtnCourse3.addEventListener('click',() =>{
    if(courseCounter3 <= 0) return;
    carouselSlideCourse3.style.transition =  `transform 0.4s ease-in-out`;
    courseSize3 = carouselImagesCourse3[courseCounter3].clientWidth;
    courseCounter3--;
    carouselSlideCourse3.style.transform = `translateX(${(-courseCounter3 * courseSize3)-40}px)`;
});

carouselSlideCourse3.addEventListener('transitionend',()=>{
    if(carouselImagesCourse3[courseCounter3].id === 'lastCloneCourse3'){
        carouselSlideCourse3.style.transition =  `none`;
        courseCounter3 = carouselImagesCompany.length - 2-1;
        carouselSlideCourse3.style.transform = `translateX(${-courseCounter3 * courseSize3 + 80}px)`;
    }
    if(carouselImagesCourse3[courseCounter3+2].id === 'firstCloneCourse3'){
        carouselSlideCourse3.style.transition =  `none`;
        courseCounter3 = carouselImagesCourse3.length - courseCounter3 - 2 ;
        carouselSlideCourse3.style.transform = `translateX(${-courseCounter3 * courseSize3}px)`;
    }
})

// setInterval(function(){
//     nextBtnCourse3.click();
//     },
// 3000);




// ------------------

const carouselSlideCourse5 = document.querySelector(".course-slide5");
const carouselImagesCourse5 = document.querySelectorAll(".course-slide5 .course");

const prevBtnCourse5 = document.querySelector('#prevBtnCourse5');
const nextBtnCourse5 = document.querySelector('#nextBtnCourse5');

var courseSize5 = carouselImagesCourse5[0].clientWidth;
console.log(courseSize5);
console.log(carouselSlideCourse5);
console.log(carouselImagesCourse5);
// console.log(courseSize5);
var courseCounter5 = 1;
courseCounter5 = countHolding[4];

carouselSlideCourse5.style.transform = `translateX(-${courseCounter5 * courseSize5 +80}px)`;

nextBtnCourse5.addEventListener('click',() => {
    if(courseCounter5 >= carouselImagesCourse5.length) return;
    carouselSlideCourse5.style.transition =  `transform 0.4s ease-in-out`;
    courseSize5 = carouselImagesCourse5[courseCounter5].clientWidth;
    courseCounter5++;
    carouselSlideCourse5.style.transform = `translateX(-${(courseCounter5 * courseSize5)-80}px)`;
});

prevBtnCourse5.addEventListener('click',() =>{
    if(courseCounter5 <= 0) return;
    carouselSlideCourse5.style.transition =  `transform 0.4s ease-in-out`;
    courseSize5 = carouselImagesCourse5[courseCounter5].clientWidth;
    courseCounter5--;
    carouselSlideCourse5.style.transform = `translateX(${(-courseCounter5 * courseSize5)-40}px)`;
});

carouselSlideCourse5.addEventListener('transitionend',()=>{
    if(carouselImagesCourse5[courseCounter5].id === 'lastCloneCourse5'){
        carouselSlideCourse5.style.transition =  `none`;
        courseCounter5 = carouselImagesCompany.length - 2-1;
        carouselSlideCourse5.style.transform = `translateX(${-courseCounter5 * courseSize5 + 80}px)`;
    }
    if(carouselImagesCourse5[courseCounter5+2].id === 'firstCloneCourse5'){
        carouselSlideCourse5.style.transition =  `none`;
        courseCounter5 = carouselImagesCourse5.length - courseCounter5 - 2 ;
        carouselSlideCourse5.style.transform = `translateX(${-courseCounter5 * courseSize5}px)`;
    }
})

// setInterval(function(){
//     nextBtnCourse5.click();
//     },
// 3000);




const carouselSlideCourse4 = document.querySelector(".course-slide4");
const carouselImagesCourse4 = document.querySelectorAll(".course-slide4 .course");

// console.log(carouselImagesCourse4);
const prevBtnCourse4 = document.querySelector('#prevBtnCourse4');
const nextBtnCourse4 = document.querySelector('#nextBtnCourse4');

var courseSize4 = carouselImagesCourse4[0].clientWidth;
console.log(courseSize4);
console.log(carouselSlideCourse4);
console.log(carouselImagesCourse4);
// console.log(courseSize4);
var courseCounter4 = 1;
courseCounter4 = countHolding[3];

carouselSlideCourse4.style.transform = `translateX(-${courseCounter4 * courseSize4 +80}px)`;

nextBtnCourse4.addEventListener('click',() => {
    if(courseCounter4 >= carouselImagesCourse4.length) return;
    carouselSlideCourse4.style.transition =  `transform 0.4s ease-in-out`;
    courseSize4 = carouselImagesCourse4[courseCounter4].clientWidth;
    courseCounter4++;
    carouselSlideCourse4.style.transform = `translateX(-${(courseCounter4 * courseSize4)-80}px)`;
});

prevBtnCourse4.addEventListener('click',() =>{
    if(courseCounter4 <= 0) return;
    carouselSlideCourse4.style.transition =  `transform 0.4s ease-in-out`;
    courseSize4 = carouselImagesCourse4[courseCounter4].clientWidth;
    courseCounter4--;
    carouselSlideCourse4.style.transform = `translateX(${(-courseCounter4 * courseSize4)-40}px)`;
});

carouselSlideCourse4.addEventListener('transitionend',()=>{
    if(carouselImagesCourse4[courseCounter4].id === 'lastCloneCourse4'){
        carouselSlideCourse4.style.transition =  `none`;
        courseCounter4 = carouselImagesCompany.length - 2;
        carouselSlideCourse4.style.transform = `translateX(${-courseCounter4 * courseSize4 + 80}px)`;
    }
    if(carouselImagesCourse4[courseCounter4].id === 'firstCloneCourse4'){
        carouselSlideCourse4.style.transition =  `none`;
        courseCounter4 = carouselImagesCourse4.length - courseCounter4 ;
        carouselSlideCourse4.style.transform = `translateX(${-courseCounter4 * courseSize4}px)`;
    }
})

setInterval(function(){
    nextBtnCompany.click();
    nextBtnCompany2.click();
    nextBtnCourse4.click();
    nextBtnCourse.click();
    nextBtnCourse2.click();
    nextBtnCourse3.click();
    nextBtnCourse5.click();
    nextBtn4.click();
    },
3000);









// --------------------------------
// Hackathon




const carouselSlideCompany2 = document.querySelector(".slides-company2");
const carouselImagesCompany2 = document.querySelectorAll(".slides-company2 img");

console.log(carouselImagesCompany2);
const prevBtnCompany2 = document.querySelector('#prevBtnCompany2');
const nextBtnCompany2 = document.querySelector('#nextBtnCompany2');

var companySize2 = carouselImagesCompany2[0].clientWidth;
// console.log(companySize2);
var companyCounter2 = 1;

carouselSlideCompany2.style.transform = `translateX(-${companyCounter2 * companySize2 +80}px)`;



nextBtnCompany2.addEventListener('click',() =>{
    if(companyCounter2 >= carouselImagesCompany2.length) return;
    carouselSlideCompany2.style.transition =  `transform 0.4s ease-in-out`;
    companySize2 = carouselImagesCompany2[companyCounter2].clientWidth;
    // console.log(counter+"next");
    companyCounter2++; 
    carouselSlideCompany2.style.transform = `translateX(${(-companyCounter2 * companySize2)-80}px)`;
})
prevBtnCompany2.addEventListener('click',() =>{
    if(companyCounter2 <= 0) return;
    carouselSlideCompany2.style.transition =  `transform 0.4s ease-in-out`;
    companySize2 = carouselImagesCompany2[companyCounter2].clientWidth;
    companyCounter2--;
    carouselSlideCompany2.style.transform = `translateX(${(-companyCounter2 * companySize2)-40}px)`;
})

carouselSlideCompany2.addEventListener('transitionend',()=>{
    if(carouselImagesCompany2[companyCounter2].id === 'lastCloneCompany2'){
        carouselSlideCompany2.style.transition =  `none`;
        companyCounter2 = carouselImagesCompany2.length - 2-1;
        carouselSlideCompany2.style.transform = `translateX(${-companyCounter2 * companySize2 + 80}px)`;
    }
    if(carouselImagesCompany2[companyCounter2+2].id === 'firstCloneCompany2'){
        carouselSlideCompany2.style.transition =  `none`;
        companyCounter2 = carouselImagesCompany2.length - companyCounter2 - 2 ;
        carouselSlideCompany2.style.transform = `translateX(${-companyCounter2 * companySize2}px)`;
    }
})

// setInterval(function(){
//     nextBtnCompany2.click();
//     },
// 3000);






// -------------------------



const carouselSlide4 = document.querySelector('.slideshow-container4');
const carouselImages4 = document.querySelectorAll('.teacher');

const prevBtn4 = document.querySelector('#prevBtn4');
const nextBtn4 = document.querySelector('#nextBtn4');


let counter4 = 1;

var size4 = carouselImages4[0].clientWidth; 

carouselSlide4.style.transform = `translateX(-${counter4 * size4 + 60}px)`;

// Button Listner

nextBtn4.addEventListener('click',() =>{
    if(counter4 >= carouselImages4.length-1) return;
    carouselSlide4.style.transition =  `transform 0.4s ease-in-out`;
    size4 = carouselImages4[counter4].clientWidth;
    // console.log(counter4+"next");
    counter4++; 
    carouselSlide4.style.transform = `translateX(${(-counter4 * size4)-120*(counter4-1)}px)`;
})
prevBtn4.addEventListener('click',() =>{
    if(counter4 <= 0) return;
    carouselSlide4.style.transition =  `transform 0.4s ease-in-out`;
    size4 = carouselImages4[counter4].clientWidth;
    counter4--;
    carouselSlide4.style.transform = `translateX(${(-counter4 * size4)-60}px)`;
})

carouselSlide4.addEventListener('transitionend',()=>{
    if(carouselImages4[counter4].id === 'lastClone4'){
        carouselSlide4.style.transition =  `none`;
        counter4 = carouselImages4.length - 2;
        carouselSlide4.style.transform = `translateX(${-counter4 * size4 -60}px)`;
    }
    if(carouselImages4[counter4+1].id === 'firstClone4'){
        carouselSlide4.style.transition =  `none`;
        counter4 = carouselImages4.length - counter4 - 2 +1;
        carouselSlide4.style.transform = `translateX(${-counter4 * size4 + 200}px)`;
    }
})

// setInterval(function(){
//     nextBtn4.click();
//     },
// 3000);





var dc = document.querySelector('#dc');
var se = document.querySelector('#se');
var st = document.querySelector('#st');
var k = 0;
var n = 0;
var m = 0;

setInterval(()=>{
    if(k < 400){
        k++;
        dc.innerHTML = k + "+";
    }
},1)

setInterval(()=>{
    if(m < 10000){
        m += 25;
        st.innerHTML = m + "+";
    }
},1)

setInterval(()=>{
    if (n < 400000){
        n += 1000;
        se.innerHTML = n + "+";
    }
},1)