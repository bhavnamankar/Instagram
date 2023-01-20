var arr = [
    { name: "Your story", dp: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600", story: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "_kritika_son", dp: "https://images.unsplash.com/photo-1520699713260-70e01f7c2998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGJlYXV0aWZ1JTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { name: "rajni_459", dp: "https://images.pexels.com/photos/889511/pexels-photo-889511.jpeg?auto=compress&cs=tinysrgb&w=600", story: "https://images.pexels.com/photos/3967501/pexels-photo-3967501.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },

    { name: "abhay_abh", dp: "https://images.unsplash.com/photo-1577919518833-57dc0a0105e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveSUyMHBvc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", story: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "prachta_677", dp: "https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { name: "arora_opa", dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJlYXV0aWZ1JTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.pexels.com/photos/2761351/pexels-photo-2761351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

    { name: "-priyan_eat", dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "anku_path", dp: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { name: "_deve_pop", dp: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.pexels.com/photos/2761351/pexels-photo-2761351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },


]

var post = [
    
    { name: "arora_opa", postimg: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60", link: "5461" },
    { name: "_deve_pop", postimg: "https://images.pexels.com/photos/2950150/pexels-photo-2950150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", link: "45461" },
    { name: "prachta_677", postimg: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGJlYXV0aWZ1JTIwZ2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", link: "75461" },

    {
        name: "_kritika_son", postimg: "https://images.unsplash.com/photo-1661869996480-3ce375e9683f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGJlYXV0aWZ1JTIwZ2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", link: "95461",
    },
]

var cluter = "";
var timer;
var timm;

arr.forEach(function (val, index) {

    cluter += `<div id="story" >
  
        <img id="${index}" src="${val.dp}" alt="">
        <div id="name">${val.name}</div>         
</div>`
})




document.querySelector("#stories").innerHTML = cluter;




document.querySelector("#stories").addEventListener("click", function (details) {
    document.querySelector("#card #full-sc").style.display = "initial";

    document.querySelector("#card #full-sc img").setAttribute("src", arr[details.target.id].story)


    document.querySelector("#card #full-sc #PostSection h3").innerHTML = arr[details.target.id].name;


    clearInterval(timer);
    clearTimeout(timm);
    runtimer();
})


function runtimer() {
    var progress = 0;
    timer = setInterval(function () {
        progress++;
        document.querySelector("#card #full-sc #inner #inside").style.width = progress + "%";
    }, 20)


    timm = setTimeout(function () {
        document.querySelector("#card #full-sc").style.display = "none";
    }, 2000)
}


var added = "";

post.forEach(function (post, index) {

    added += ` <div id="multi">

<div id="PostSection">
    <img src="${post.postimg}"
        alt="">
    <h3>${post.name}</h3>

    <i class="ri-more-2-line"></i>

</div>


<div class="iimg">
   <i class="ri-heart-3-fill    " id="center"></i>
    <img src="${post.postimg}"
        alt="">
</div>
<div id="icon">

<div id="inner">

<div id="icon-left">
<i class="ri-heart-3-line" id="love"></i>
<i class="ri-chat-1-line"></i>
<i class="ri-send-plane-line"></i>
</div>

<div id="save">
    <i class="ri-bookmark-line"></i>
</div>
</div>

   



    <h5> ${post.link } likes</h5>
</div>
</div>`


  
})

document.querySelector("#all").innerHTML = added;


var center = document.querySelector(".iimg #center");
var iimg = document.querySelector(".iimg ");
var red = document.querySelector("#icon #love");
var flag = 0;

    iimg.addEventListener("dblclick", function (dets) {
console.log(dets);
        center.style.opacity = 0.9;
        red.classList.remove("ri-heart-3-line");
        red.classList.add("ri-heart-3-fill");


        red.style.color = "red";

        flag = 1;
        setTimeout(function () {
            center.style.opacity = 0;
        }, 1000)
    })




red.addEventListener("click", function () {
    if (flag == 0) {
        red.classList.remove("ri-heart-3-line");
        red.classList.add("ri-heart-3-fill");
        red.style.color = "red";
        flag = 1;
    }
    else {
        red.classList.add("ri-heart-3-line");
        red.classList.remove("ri-heart-3-fill");
        red.style.color = "black";
        flag = 0;
    }
}
)



