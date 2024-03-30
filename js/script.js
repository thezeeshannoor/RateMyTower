// login to sign up form switch
document.addEventListener('DOMContentLoaded', () => {
  let signupSection=document.getElementById("signupSection");
  let loginSection=document.getElementById("loginSection");
  let loginFormBtn=document.getElementById("loginFormBtn");
  let signupFormBtn=document.getElementById("signupFormBtn");
  let accountTxt=document.getElementById("accountTxt");
  loginFormBtn.style.color="#004EEA";
  signupFormBtn.style.color="black";
  loginFormBtn.style.borderBottom="2px solid #004EEA"
  signupFormBtn.style.borderBottom="2px solid #D9D9D9"
  signupSection.style.display="none";

  document.getElementById("formSwitch").addEventListener('click',(e)=>{
    if(e.target.id=="loginFormBtn" || e.target.id=="loginFormSpan"){
      signupSection.style.display="none";
    loginSection.style.display="block";
    loginFormBtn.style.color="#004EEA"
    loginFormBtn.style.borderBottom="2px solid #004EEA"
    signupFormBtn.style.borderBottom="2px solid #D9D9D9"
    signupFormBtn.style.color="black";
    accountTxt.innerText="By Logging in to your Account you can:";
    }
    else if(e.target.id=="signupFormBtn" || e.target.id=="signupFormSpan"){
      loginSection.style.display="none";
    signupSection.style.display="block";

    signupFormBtn.style.color="#004EEA"
    signupFormBtn.style.borderBottom="2px solid #004EEA"
    loginFormBtn.style.borderBottom="2px solid #D9D9D9"
    loginFormBtn.style.color="black";
    accountTxt.innerText="By Creating an Account you can:";
    }
  })
 
  
});


  document.addEventListener('DOMContentLoaded', () => {
 //  Search filter menu
function adjustMapPosition() {
  var fixedElement = document.getElementById("mapImg");
  var footerElement = document.getElementById("footerSearch");

  // Calculate the position where the map should become relative
  var relativePosition = footerElement.offsetTop - window.innerHeight;

  // Check if the window width is greater than or equal to 1101 pixels
  if (window.matchMedia('(min-width: 1101px)').matches) {

      // Add a scroll event listener to the window
      window.addEventListener("scroll", function() {
          var scrollPosition = window.scrollY;

          // Check if the scroll position is greater than or equal to the calculated position
          if (scrollPosition >= relativePosition) {
              // If true, set the position of the map to relative
              fixedElement.style.position = "relative";
              fixedElement.style.top = "auto";
              fixedElement.style.left = "auto";
              fixedElement.style.width = "100%";
              fixedElement.style.height = "100%";
              fixedElement.style.objectFit = "cover";
          } else {
              // If false, set the position of the map back to fixed
              fixedElement.style.position = "fixed";
              fixedElement.style.top = "5px";
              fixedElement.style.left = "5px";
              fixedElement.style.width = "50%";
          }
      });
  }
}


window.addEventListener("resize", adjustMapPosition);

// Call adjustMapPosition initially (outside event listeners)
if (window.matchMedia('(min-width: 1101px)').matches) {
  adjustMapPosition();
}
  let map=document.getElementById("map");
  let mapSec=document.getElementById("mapSec");
  mapSec.style.display="none";
  map.onclick=()=>{
   
    if(mapSec.style.display==="none"){
      mapSec.style.display="block"
      
    }else{
      
      mapSec.style.display="none"
    }
  } 
    let r = document.getElementById("range");
  let rangeValue = document.getElementById("rangeValue");
  rangeValue.style.visibility="hidden";
  
  r.addEventListener("input", function() {
      let value = parseFloat(this.value).toFixed(1); 
      rangeValue.innerText = value; 
      if (value === "1.0") {
         document.getElementById("box1").style.visibility="visible";
         document.getElementById("box2").style.visibility="hidden";
        document.getElementById("box3").style.visibility="hidden";
        document.getElementById("box4").style.visibility="hidden";
        document.getElementById("box5").style.visibility="hidden";
      } else if(value ==="2.0"){
        document.getElementById("box2").style.visibility="visible";
        document.getElementById("box1").style.visibility="visible";
        
        document.getElementById("box3").style.visibility="hidden";
        document.getElementById("box4").style.visibility="hidden";
        document.getElementById("box5").style.visibility="hidden";
    
      }
      else if(value ==="3.0"){
        document.getElementById("box1").style.visibility="visible";
        document.getElementById("box3").style.visibility="visible";
        document.getElementById("box2").style.visibility="hidden";
      
        document.getElementById("box4").style.visibility="hidden";
        document.getElementById("box5").style.visibility="hidden";
      }
      else if(value ==="4.0"){
        document.getElementById("box1").style.visibility="visible";
        document.getElementById("box4").style.visibility="visible";
        document.getElementById("box2").style.visibility="hidden";
        document.getElementById("box3").style.visibility="hidden";
     
        document.getElementById("box5").style.visibility="hidden";
      }
      else if(value ==="5.0"){
        document.getElementById("box1").style.visibility="visible";
        document.getElementById("box5").style.visibility="visible";
        document.getElementById("box2").style.visibility="hidden";
        document.getElementById("box3").style.visibility="hidden";
        document.getElementById("box4").style.visibility="hidden";
    
      }
  
  });

      
  
      // Search Page filter dropdown
  let filterMenu=document.getElementById("filterMenu");
  let filterBtn=document.getElementById("filter");
  filterMenu.style.display="none";
  let search=document.getElementById('Search');
  
  
  search.addEventListener('click',(ev)=>{
    // filterBtn.onclick=()=>{
      if(ev.target.closest("#filter")!==null && filterMenu.style.display=="none"){
        filterMenu.style.display="block";
      }
   
      else if (ev.target.closest('#filterMenu') === null && ev.target !== "filter") {
        filterMenu.style.display = 'none';
      
     
    }
  });



});

// contact page
document.addEventListener('DOMContentLoaded', () => {
  let generalInquiry=document.getElementById("generalInquiry");
  let addTower=document.getElementById("addTower");
  let contactDropDown=document.getElementById("contactDropDown");
  let reportTxt=document.getElementById("reportTxt");
  let report=document.getElementById("report");
  let partnerships=document.getElementById("partnerships");
  let advertise=document.getElementById("advertise");

 contactDropDown.addEventListener('change',()=>{
  if (contactDropDown.value === "generalInquiry") {
    addTower.style.display = "none";
    report.style.display = "none";
    advertise.style.display="none";

    generalInquiry.style.display = "block";
  } else if (contactDropDown.value === "addTower") {
    generalInquiry.style.display = "none";
    addTower.style.display = "block";
    report.style.display = "none";
    reportTxt.style.display = "none";
    advertise.style.display="none";
   
  } else if (contactDropDown.value === "report") {
    generalInquiry.style.display = "none";
    addTower.style.display = "none";
    report.style.display = "block";
    reportTxt.style.display = "block";
    advertise.style.display="none";
   
  }else if (contactDropDown.value === "partnerships") {
    generalInquiry.style.display = "none";
    addTower.style.display = "none";
    report.style.display = "none";
    reportTxt.style.display = "none";
    partnerships.style.display = "block";
    advertise.style.display="none";
   
  }
  else if (contactDropDown.value === "advertise") {
    generalInquiry.style.display = "none";
    addTower.style.display = "none";
    report.style.display = "none";
    reportTxt.style.display = "none";
    partnerships.style.display = "none";
    advertise.style.display="block";
   
  }
 })
  

});
// review Page
document.addEventListener('DOMContentLoaded', () => {

  // review headData Star

  let stars = document.querySelectorAll(".fa-star");

  for (let i = 0; i < stars.length; i++) {
    stars[i].onclick = () => {
      if (stars[i].classList.contains("fa-solid")) {
        if((i%5==4)||(i!=0 && stars[i+1].classList.contains("fa-regular"))||((i%5!=0 || i==0)  && stars[i+1].classList.contains("fa-regular")))
        {
          stars[i].classList.toggle("fa-solid");
        stars[i].classList.toggle("fa-regular");
        stars[i].classList.toggle("solStar");
        stars[i].classList.toggle("regStar");
        }
        // if(i%5==0){
        //   stars[i].classList.toggle("fa-regular");
        //   stars[i].classList.toggle("fa-solid");
        //   stars[i].classList.toggle("regStar");
        //   stars[i].classList.toggle("solStar");
        // }
      }else{
        if(i==0 ||i%5==0){
          stars[i].classList.toggle("fa-regular");
          stars[i].classList.toggle("fa-solid");
          stars[i].classList.toggle("regStar");
          stars[i].classList.toggle("solStar");
        }
        if(i!=0 && stars[i-1].classList.contains("fa-solid") && i%5!=0  ){
        stars[i].classList.toggle("fa-regular");
        stars[i].classList.toggle("fa-solid");
        stars[i].classList.toggle("regStar");
        stars[i].classList.toggle("solStar");
      }
      
    }
    };
  }
  
  let nextStep=document.getElementsByClassName("nextStep");
  let headData=document.getElementsByClassName("headData");
  let current=document.getElementById("current");
  let reviewPart=document.getElementsByClassName("reviewPart");
  let former=document.getElementById("former");
  let prospective=document.getElementById("prospective");
  let back=document.getElementsByClassName("back");
  let fill=document.getElementsByClassName("fill");
  headData[1].style.display="none";
  headData[2].style.display="none";
  headData[3].style.display="none";

  // chacracter count review page

let titleChar = document.getElementById("titleChar");
let titleCharTxt = document.getElementById("titleCharTxt");

let createCheck=document.getElementById("createCheck");
let reviewCheck=document.getElementById("reviewCheck");
let feedbackCheck=document.getElementById("feedbackCheck");
let postCheck=document.getElementById("postCheck");

titleChar.addEventListener("input", function () {
  titleCharTxt.innerText = titleChar.value.length;
});

let reviewChar = document.getElementById("reviewChar");
let reviewCharTxt = document.getElementById("reviewCharTxt");

reviewChar.addEventListener("input", function () {
  reviewCharTxt.innerText = reviewChar.value.length;
});

  back[0].onclick=()=>{
    headData[0].style.display="block";
    headData[1].style.display="none";
    headData[2].style.display="none";
    headData[3].style.display="none";

    createCheck.style.backgroundColor="#D9D9D9";
    createCheck.innerText="1";
    createCheck.style.color="black"
    fill[0].style.backgroundColor="#D9D9D9";

   
  };
  back[1].onclick=()=>{
    headData[0].style.display="none";
    headData[1].style.display="block";
    headData[2].style.display="none";
    headData[3].style.display="none";

    reviewCheck.style.backgroundColor="#D9D9D9";
    reviewCheck.innerText="2";
    reviewCheck.style.color="black"
    fill[1].style.backgroundColor="#D9D9D9";
  };
  back[2].onclick=()=>{
    headData[0].style.display="none";
    headData[1].style.display="none";
    headData[2].style.display="block";
    headData[3].style.display="none";

    feedbackCheck.style.backgroundColor="#D9D9D9";
    feedbackCheck.innerText="3";
    feedbackCheck.style.color="black"
    fill[2].style.backgroundColor="#D9D9D9";
    
    postCheck.style.backgroundColor="#D9D9D9";
    postCheck.innerText="4";
    postCheck.style.color="black"
 

    

  };
 nextStep[0].onclick=()=>{
  // check fill line
  
  createCheck.style.backgroundColor="#004EEA";
  createCheck.innerText="✔";
  createCheck.style.color="white"
  fill[0].style.backgroundColor="#004EEA";
  reviewPart[0].style.display="block";
  headData[0].style.display="none";
  headData[1].style.display="block";
  headData[2].style.display="none";
  headData[3].style.display="none";
  current.style.background=" linear-gradient(86deg, #024FEA 0%, #4B82F0 100%)";
  current.style.color="white";
  current.style.border="none";
 }

 nextStep[1].onclick=()=>{
   // check fill line
  
   reviewCheck.style.backgroundColor="#004EEA";
   reviewCheck.innerText="✔";
   reviewCheck.style.color="white"
   fill[1].style.backgroundColor="#004EEA";

  headData[0].style.display="none";
  headData[1].style.display="none";
  headData[2].style.display="block";
  headData[3].style.display="none";
 
 }
 nextStep[2].onclick=()=>{
     // check fill line
 
  feedbackCheck.style.backgroundColor="#004EEA";
  feedbackCheck.innerText="✔";
  feedbackCheck.style.color="white"
  fill[2].style.backgroundColor="#004EEA";

  headData[0].style.display="none";
  headData[1].style.display="none";
  headData[2].style.display="none";
  headData[3].style.display="block";
 
 }
 nextStep[3].onclick=()=>{
  // check fill line
  
  postCheck.style.backgroundColor="#004EEA";
  postCheck.innerText="✔";
  postCheck.style.color="white"
  
 }

 former.onclick=()=>{
  reviewPart[0].style.display="none";
  reviewPart[1].style.display="block";
  reviewPart[2].style.display="none";

  former.style.background=" linear-gradient(86deg, #024FEA 0%, #4B82F0 100%)";
  former.style.color="white";
  former.style.border="none";
  current.style.background="white";
  current.style.color="#024FEA";
  current.style.border="2px solid #024FEA";

  prospective.style.background="white";
  prospective.style.color="#024FEA";
  prospective.style.border="2px solid #024FEA";
 };

//  current btn
current.onclick=()=>{
  reviewPart[0].style.display="block";
  reviewPart[1].style.display="none";
  reviewPart[2].style.display="none";
  current.style.background=" linear-gradient(86deg, #024FEA 0%, #4B82F0 100%)";
  current.style.color="white";
  current.style.border="none";
  former.style.background="white";
  former.style.color="#024FEA";
  former.style.border="2px solid #024FEA";

  prospective.style.background="white";
  prospective.style.color="#024FEA";
  prospective.style.border="2px solid #024FEA";
 };

//  prospective
prospective.onclick=()=>{
  reviewPart[0].style.display="none";
  reviewPart[1].style.display="none";
  reviewPart[2].style.display="block";
  prospective.style.background=" linear-gradient(86deg, #024FEA 0%, #4B82F0 100%)";
  prospective.style.color="white";
  prospective.style.border="none";
  former.style.background="white";
  former.style.color="#024FEA";
  former.style.border="2px solid #024FEA";

  current.style.background="white";
  current.style.color="#024FEA";
  current.style.border="2px solid #024FEA";
 }
 

});


document.addEventListener('DOMContentLoaded', () => {
let listingsSec=document.getElementById("listingsSec");
let starRating=document.getElementById("starRating");
starRating.style.display="none";
listingsSec.addEventListener('click',(ev)=>{
  // filterBtn.onclick=()=>{
    if(ev.target.closest("#filterStar")!==null && starRating.style.display=="none"){
      starRating.style.display="block";
    }
 
    else if (ev.target.closest('#starRating') === null && ev.target !== "filterStar") {
      starRating.style.display = 'none';
    
   
  }
});
});

document.addEventListener('DOMContentLoaded', () => {
  let listingsSec=document.getElementById("listingsSec");
  let usrRating=document.querySelectorAll(".usrRating");
  let usrRatingMenu=document.querySelectorAll(".usrRatingMenu");
  // console.log(usrRatingMenu,"k");
 
  // usrRatingMenu.style.display="none";
    usrRatingMenu.forEach((ele)=>{
      ele.style.visibility="hidden";
    })

    usrRating.forEach((ele,index)=>{
      
      // usrRatingMenu[index].style.display="none";
      ele.addEventListener('click',(ev)=>{
        
        
      // ele.style.display="none";
      console.log(index);
      console.log(usrRatingMenu[index])
      if(usrRatingMenu[index].style.visibility=="hidden" && usrRating[index]!==null){
      
        usrRatingMenu[index].style.visibility="visible";
      } else if ( usrRatingMenu[index].style.visibility == "visible" ) {

  usrRatingMenu[index].style.visibility = "hidden";
  
}

// ...

   
    
  });
    });
    // filterBtn.onclick=()=>{
     
 
  });
 // Passwrord show and hide
  document.addEventListener('DOMContentLoaded', () => {
   


  let passIcon=document.getElementById('passIcon');
  let toggleTxt=document.getElementById('togTxt');
  let passImg=document.getElementById('passImg');
  let passHide=document.getElementById('passHide');

  
  let passIconOne=document.getElementById('passIconOne');
  let toggleTxtOne=document.getElementById('togTxtOne');
  let passImgOne=document.getElementById('passImgOne');
  let passHideOne=document.getElementById('passHideOne');

passIcon.addEventListener('click',()=>{
  if(document.getElementById('password').type=="password"){
    document.getElementById('password').type="text";
   toggleTxt.innerText="Hide";
   passImg.style.display="none";
   passHide.style.display="inline";
  }else{
    document.getElementById('password').type="password";
    toggleTxt.innerText="Show";
    passImg.style.display="inline";
    passHide.style.display="none";

  }
});
passIconOne.addEventListener('click',()=>{
  if(document.getElementById('passwordOne').type=="password"){
    document.getElementById('passwordOne').type="text";
   toggleTxtOne.innerText="Hide";
   passImgOne.style.display="none";
   passHideOne.style.display="inline";
  }else{
    document.getElementById('passwordOne').type="password";
    toggleTxtOne.innerText="Show";
    passImgOne.style.display="inline";
    passHideOne.style.display="none";

  }
});


});

document.addEventListener('DOMContentLoaded', () => {
  // Reviews Data
const reviewData=[
{
  exp:"Awosome Experience",
  time:"Published 54 minutes ago",
  star:"1",
  txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis ex at cum quis assumenda neque possimus natus culpa. Suscipit quaerat quos omnis ut ducimus consectetur laborum expedita ipsam cum."
  ,name:"Lukas",
  src:"images/image1.png",
},
{
  exp:"Awosome Experience",
  time:"Published 54 minutes ago",
  star:"1",
  txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis ex at cum quis assumenda neque possimus natus culpa. Suscipit quaerat quos omnis ut ducimus consectetur laborum expedita ipsam cum."
  ,name:"Lukas",
  src:"images/image1.png",
},

{
  exp:"Great Experience",
  time:"Published 1 hour ago",
  star:"1",
  txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis ex at cum quis assumenda neque possimus natus culpa. Suscipit quaerat quos omnis ut ducimus consectetur laborum expedita ipsam cum."
  ,name:"Thomas",
  src:"images/image2.png",
},
{
  exp:"Great Experience",
  time:"Published 1 hour ago",
  star:"1",
  txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis ex at cum quis assumenda neque possimus natus culpa. Suscipit quaerat quos omnis ut ducimus consectetur laborum expedita ipsam cum."
  ,name:"Thomas",
  src:"images/image2.png",
},
{
  exp:"Best Experience",
  time:"Published 4 hour ago",
  star:"1",
  txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis ex at cum quis assumenda neque possimus natus culpa. Suscipit quaerat quos omnis ut ducimus consectetur laborum expedita ipsam cum."
  ,name:"Noor",
  src:"images/image3.png",
},
{
  exp:"Best Experience",
  time:"Published 4 hour ago",
  star:"1",
  txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis ex at cum quis assumenda neque possimus natus culpa. Suscipit quaerat quos omnis ut ducimus consectetur laborum expedita ipsam cum."
  ,name:"Noor",
  src:"images/image3.png",
},
];


let time=document.querySelectorAll(".time");
let exp=document.querySelectorAll(".exp");
let txt=document.querySelectorAll(".txt");
let namee=document.querySelectorAll(".name");
let starShow=document.querySelectorAll(".starShow");
let profile=document.querySelectorAll(".profile");
let reviewRgtBtn=document.getElementById("reviewRgtBtn")
let num=document.querySelectorAll(".num");
let numIndex=0;


document.getElementById("oneBtn").style.backgroundColor="#004EEA";
document.getElementById("oneBtn").style.color="white";
let firstIndex=0,secondIndex=1;
document.getElementById("pagination").addEventListener('click',(ev)=>{

if(ev.target.id=="oneBtn"){
  document.getElementById("oneBtn").style.backgroundColor="#004EEA";
  document.getElementById("oneBtn").style.color="white";

  document.getElementById("twoBtn").style.backgroundColor="#F7F7F7";
  document.getElementById("twoBtn").style.color="#2B2E34";

  document.getElementById("thirdBtn").style.backgroundColor="#F7F7F7";
  document.getElementById("thirdBtn").style.color="#2B2E34";
  firstIndex=0; secondIndex=1;
  
}else if(ev.target.id=="twoBtn"){
  document.getElementById("twoBtn").style.backgroundColor="#004EEA";
  document.getElementById("twoBtn").style.color="white";

  document.getElementById("oneBtn").style.backgroundColor="#F7F7F7";
  document.getElementById("oneBtn").style.color="#2B2E34";

  document.getElementById("thirdBtn").style.backgroundColor="#F7F7F7";
  document.getElementById("thirdBtn").style.color="#2B2E34";
  firstIndex=2; secondIndex=3;

}else if(ev.target.id=="thirdBtn"){
  document.getElementById("thirdBtn").style.backgroundColor="#004EEA";
  document.getElementById("thirdBtn").style.color="white";

  document.getElementById("twoBtn").style.backgroundColor="#F7F7F7";
  document.getElementById("twoBtn").style.color="#2B2E34";

  document.getElementById("oneBtn").style.backgroundColor="#F7F7F7";
  document.getElementById("oneBtn").style.color="#2B2E34";
  firstIndex=4; secondIndex=5;
}
else if(ev.target.id=="reviewRgtBtn"){
  if(firstIndex==5){
    firstIndex=4; secondIndex=5;
  }
  numIndex++;
  num[numIndex].style.backgroundColor="#004EEA";
  num[numIndex].style.color="white";
  for(let i=0;i<num.length;i++){
    if(i!=numIndex){
      num[i].style.backgroundColor="#F7F7F7";
      num[i].style.color="#2B2E34";
    }
  }
 firstIndex = firstIndex + 2; secondIndex = secondIndex + 2;
   console.log(firstIndex)

}
else if(ev.target.id=="reviewLftBtn"){
  if(firstIndex<0){
    firstIndex=0; secondIndex=1;
  }
 firstIndex = firstIndex - 2; secondIndex = secondIndex -2;


}
console.log(firstIndex,secondIndex)
time[0].innerText=reviewData[firstIndex].time;
exp[0].innerText=reviewData[firstIndex].exp;
txt[0].innerText=reviewData[firstIndex].txt;
namee[0].innerText=reviewData[firstIndex].name;
profile[0].src=reviewData[firstIndex].src;

time[1].innerText=reviewData[secondIndex].time;
exp[1].innerText=reviewData[secondIndex].exp;
txt[1].innerText=reviewData[secondIndex].txt;
namee[1].innerText=reviewData[secondIndex].name;
profile[1].src=reviewData[secondIndex].src;
});

});
// heart icon toggle
let heartClass = document.querySelectorAll(".heart");



heartClass.forEach((heart, index) => {
    heart.addEventListener('click', () => {
        console.log(`Heart ${index} clicked`);
        if (heart.classList.contains('fa-regular')) {
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
            heart.style.color = "#FD6C77";
        } else {
            heart.classList.remove('fa-solid');
            heart.classList.add('fa-regular');
            heart.style.color = "white";
        }
    });
});






// Search pages arrow icons images

const arrowImages=[
  {
    srcc:[
      "images/image1.png" ,"images/image3.png" 
    ]
  },

  {
    srcc:[
      "images/image 2.png" ,"images/image3.png" ,"images/image2.png"
    ]
  },

  {
    srcc:[
      "images/image 3.png" ,"images/image3.png" ,"images/image2.png"
    ]
  },
  {
    srcc:[
      "images/image 6.png" ,"images/image3.png" ,"images/image2.png"
    ]
  },
  {
    srcc:[
      "images/image 5.png" ,"images/image3.png" ,"images/image2.png"
    ]
  },
  {
    srcc:[
      "images/image 4.png" ,"images/image3.png" ,"images/image2.png"
    ]
  },

];
let imgShif=document.getElementsByClassName("imgShif");
let shifter=document.querySelectorAll(".rightArrow");
let shifterLft=document.querySelectorAll(".leftArrow");


let lftArrow=0;
shifter.forEach((arrow, index) => {
  let ch = 0;  // Initialize ch to 0
  arrow.onclick = () => {
    if (arrow.classList.contains("rightArrow")) {
      if (ch < arrowImages[index].srcc.length - 1) {
        ch++;
      } else {
        ch = 0;  // Reset to the first image when reaching the end
      }
      imgShif[index].src = arrowImages[index].srcc[ch];
      console.log(arrowImages[index].srcc[ch]);
    }
  };

  shifterLft[index].onclick = () => {
    if (shifterLft[index].classList.contains("leftArrow")) {
      if (ch > 0) {
        ch--;
      } else {
        ch = arrowImages[index].srcc.length - 1;  // Reset to the last image when reaching the beginning
      }
      imgShif[index].src = arrowImages[index].srcc[ch];
      console.log(arrowImages[index].srcc[ch]);
    } else {
      console.log("exceeded");
    }
  };
  
});



// if(filterMenu.style.display=="block" && !filterBtn.clicked==true) {
//   filterMenu.style.display="none";
  
 
// }
// });
 


// if(!filterBtn.clicked==true){
//   document.getElementsByTagName("body")[0].addEventListener('click',()=>{
//     filterMenu.style.display="block";
//   })
  
// }







// navbar responsivness
let navMenu=document.getElementById('menu');
let nav=document.getElementById('nav');
let storeMenu=navMenu.innerHTML;
navMenu.onclick=()=>{
if(nav.style.display=="block"||nav.style.display=="flex"){
    nav.style.display="none";
    navMenu.innerHTML=storeMenu;
}else{nav.style.display="flex";

navMenu.innerText="X";
navMenu.style.fontSize="30px";


}
}
// navbar end 
let td=0;
let towerCon = document.getElementById("towerCon");
document.addEventListener('DOMContentLoaded', () => {
  let towerCon = document.getElementById("towerCon");
  let twrArrowLeft = document.getElementById("twrArrowLeft");
  let twrArrowRight = document.getElementById("twrArrowRight");
  let sliderImg=document.getElementById("sliderImg");
  let sig =document.getElementById("sig");
  let reviewNum=document.getElementById("reviewNum");
  let review=document.getElementById("review");
  let txt=document.getElementById("txt");

  sliderImg.src=popularTower[td].src;
  sig.innerText=popularTower[td].cat;
  reviewNum.innerText=popularTower[td].reviewNum ;
  review.innerText=popularTower[td].review;
  txt.innerText=popularTower[td].txt;
  if (towerCon && twrArrowLeft) {
    towerCon.addEventListener("click", (e) => {
      if (e.target === twrArrowRight && td<popularTower.length-1) {
       td++;
       sliderImg.src=popularTower[td].src;
       sig.innerText=popularTower[td].cat;
       reviewNum.innerText=popularTower[td].reviewNum ;
       review.innerText=popularTower[td].review;
       txt.innerText=popularTower[td].txt;

      } else if(e.target === twrArrowLeft && td>0){
        td--;
        sliderImg.src=popularTower[td].src;
        sig.innerText=popularTower[td].cat;
        reviewNum.innerText=popularTower[td].reviewNum ;
        review.innerText=popularTower[td].review;
        txt.innerText=popularTower[td].txt;
      }
    });
  }
});

// desktop slider main page

document.addEventListener('DOMContentLoaded', () => {
  const popularTower = [
    {
        src: "images/image1.png" ,
        reviewNum:"1,149",
        review:"reviews1",
        txt:"No. 9",
        cat:"A+"
      
    },
    {
        src: "images/image2.png" ,
        reviewNum:"529",
        review:"reviews2",
        txt:"LIV Residence",
        cat:"A+"
      
    },
    {
        src: "images/image3.png" ,
        reviewNum:"119",
        review:"reviews3",
        txt:"Continental",
        cat:"A+"
      
    },
    {
        src: "images/image4.png" ,
        reviewNum:"542",
        review:"reviews4",
        txt:"Skyview",
        cat:"A+"
    },
    {
      src: "images/image2.png" ,
      reviewNum:"529",
      review:"reviews5",
      txt:"LIV Residence",
      cat:"A+"
    
  },
  {
    src: "images/image4.png" ,
    reviewNum:"542",
    review:"reviews6",
    txt:"Skyview",
    cat:"A+"
},
{
  src: "images/image2.png" ,
  reviewNum:"529",
  review:"reviews7",
  txt:"z",
  cat:"A+"
},
    // Add more images as needed
];

  const twrArrowLeftDsk = document.getElementById("twrArrowLeftDsk");
  const twrArrowRightDsk = document.getElementById("twrArrowRightDsk");
  const sliderImgDesktop = document.getElementsByClassName("sliderImgDesktop");
  const sigDesktop = document.getElementsByClassName("sigDesktop");
  const reviewNumDesktop = document.getElementsByClassName("reviewNumDesktop");
  const reviewDesktop = document.getElementsByClassName("reviewDesktop");
  const txtDesktop = document.getElementsByClassName("txtDesktop");

  let currentSlideIndex = 0;
let n;
  function updateDesktopSlider() {
    // const sliderIndex=()=>{
    //   if (window.matchMedia('(max-width: 500px)').matches) {
       
    //    return n = 1;
    // } else {
    //   return n=4
       
    // }
 
    // }
    // Check if there is enough data to fill all four divs
    if (currentSlideIndex  < popularTower.length) {
    
      for (let i = 0; i < 4; i++) {
        const index = currentSlideIndex + i;
        sliderImgDesktop[i].src = popularTower[index].src;
        sigDesktop[i].innerText = popularTower[index].cat;
        reviewNumDesktop[i].innerText = popularTower[index].reviewNum;
        reviewDesktop[i].innerText = popularTower[index].review;
        txtDesktop[i].innerText = popularTower[index].txt;
      }
    } else {
      // If not enough data, reset to the beginning
      currentSlideIndex = 0;
    }
  }

  updateDesktopSlider();

  if (twrArrowLeftDsk && twrArrowRightDsk) {
    twrArrowLeftDsk.addEventListener("click", () => {
      if (currentSlideIndex > 0) {
        currentSlideIndex--; // Move to the previous item
        updateDesktopSlider();
      }
      else if(currentSlideIndex==0){
        currentSlideIndex=popularTower.length-1;
        // currentSlideIndex--
        updateDesktopSlider();
      }
    });
   
    twrArrowRightDsk.addEventListener("click", () => {
    
      if (currentSlideIndex  < popularTower.length -1 ) {
        currentSlideIndex++; // Move to the next item
    
      }
      else {
        currentSlideIndex=0;
      }
   console.log(currentSlideIndex);

      updateDesktopSlider();
    });
  }
});








// Home Page Reviewed Towe js
const twrImg = [
    { src: 'images/image4.png', rating: '4.5' ,txt:'Marina Diamond 6',loc:'Dubai Marina'},
    { src: 'images/image4.png', rating: '2.4' ,txt:'La Vista Residence 2',loc:'Dubai Silicon Oasis'},
    { src: 'images/image4.png', rating: '5.0' ,txt:'Cayan Tower',loc:''},
    { src: 'images/image4.png', rating: '4.1' ,txt:'DEC Towers',loc:''},
    { src: 'images/image4.png', rating: '4.5' ,txt:'Princess Tower',loc:'Dubai Marina'},
    { src: 'images/image4.png', rating: '2.4' ,txt:'API Tecom Building',loc:'Barsha Heights'},
    { src: 'images/image4.png', rating: '5.0' ,txt:'Lake View Tower',loc:'Jumeriah Lakes Towers'},
    { src: 'images/image4.png', rating: '4.1' ,txt:'The Residences at Marina Gate 2',loc:'Dubai Marina'},
    { src: 'images/image4.png', rating: '4.5' ,txt:'Marina Diamond 6',loc:'Dubai Marina'},
    { src: 'images/image4.png', rating: '2.4' ,txt:'La Vista Residence 2',loc:'Dubai Silicon Oasis'},
    { src: 'images/image4.png', rating: '5.0' ,txt:'Cayan Tower',loc:''},
    { src: 'images/image4.png', rating: '4.1' ,txt:'DEC Towers',loc:''},

  ];
  
  const reviewedTwr = document.getElementById('reviewed');
  const reviewedBtn = document.getElementById('reviewedBtn');
  const reviewedBtnShowLess = document.getElementById('reviewedBtnShowLess');
  reviewedBtnShowLess.style.display="none";
  const index = 7;
  
  const createReviewDiv = (imgSrc, rating,txt,loc) => {
    const reviewedDiv = document.createElement('div');
    reviewedDiv.classList.add('reviewedDiv');
    reviewedDiv.style.backgroundImage = `url(${imgSrc})`;
  
    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('ratingDiv');
    ratingDiv.innerHTML = `<h1>${rating}</h1><span class="star">★</span>`;
  
    const twrDiv = document.createElement('div');
    twrDiv.classList.add('twrDiv');
    twrDiv.innerText = `${txt}`;

    let loca=document.createElement('p');
    loca.innerText=`${loc}`;

    twrDiv.appendChild(loca);
  
    reviewedDiv.appendChild(ratingDiv);
    reviewedDiv.appendChild(twrDiv);
  
    return reviewedDiv;
  };
  
  reviewedBtn.onclick = () => {
    reviewedBtn.style.display = 'none';
    reviewedBtnShowLess.style.display="block"
   
    for (let i = 8; i < twrImg.length; i++) {
      reviewedTwr.appendChild(createReviewDiv(twrImg[i].src, twrImg[i].rating,twrImg[i].txt,twrImg[i].loc));
    }
  };
  reviewedBtnShowLess.onclick = () => {
    while (reviewedTwr.firstChild) {
      reviewedTwr.removeChild(reviewedTwr.firstChild);
    }
  
    reviewedBtn.style.display = 'block';
    reviewedBtnShowLess.style.display = 'none';
  
    for (let i = 0; i <= index; i++) {
      reviewedTwr.appendChild(createReviewDiv(twrImg[i].src, twrImg[i].rating, twrImg[i].txt, twrImg[i].loc));
    }
  };
  
  for (let i = 0; i <= index; i++) {
    reviewedTwr.appendChild(createReviewDiv(twrImg[i].src, twrImg[i].rating,twrImg[i].txt,twrImg[i].loc));
  }
 
  

//   explore tower reviews and prices 
const exploreTwr = ['Dubai Marina','Media City','DFC','The Palm','DownTown','City Walk','Beach residence',
'Dubai Marina','Dubai Marina','Media City','DFC','The Palm','DownTown','City Walk'];

const explore=document.getElementById('explore');
const exploreBtn = document.getElementById('exploreBtn');
const exploreBtnShowLess = document.getElementById('exploreBtnShowLess');
exploreBtnShowLess.style.display="none";
const exploreIndex=7;

const exploreDiv = (area) => {
    const exploreDiv = document.createElement('div');
    exploreDiv.classList.add('exploreDiv');
    exploreDiv.innerText = `${area}`;
    // explore.appendChild(exploreDiv);
  
    return exploreDiv;
  };
  
  exploreBtn.onclick = () => {
    exploreBtn.style.display = 'none';
    exploreBtnShowLess.style.display = 'block';
  
    for (let i = 6; i < exploreTwr.length; i++) {
      explore.appendChild(exploreDiv(exploreTwr[i]));
    }
  };
  
  for (let i = 0; i <= exploreIndex; i++) {
    explore.appendChild(exploreDiv(exploreTwr[i]));
  };
  exploreBtnShowLess.onclick = () => {
    while (explore.firstChild) {
      explore.removeChild(explore.firstChild);
    }
  
    exploreBtn.style.display = 'block';
    exploreBtnShowLess.style.display = 'none';
  
    for (let i = 0; i <= exploreIndex; i++) {
      explore.appendChild(exploreDiv(exploreTwr[i]));
    };
  };


  

  

