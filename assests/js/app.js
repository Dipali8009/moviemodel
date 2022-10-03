let cl=console.log

let showModal=document.getElementById('showModal');
let myModal=document.getElementById('myModal');
let backdrop=document.getElementById('backdrop');
let title=document.getElementById('title');
let imgUrl=document.getElementById('imgUrl');
let rating=document.getElementById('rating');
let addMovie=document.getElementById('addMovie');
let info=document.getElementById('info')
let myCloseBtns=Array.from(document.querySelectorAll('.myClose'));
let movieArray=[];

let GallaryHandler=(eve) => {
// backdrop.classList.add('show');
// myModal.classList.add('show');
// toggleshowClass(backdrop, 'show')
// toggleshowClass(myModal, 'show')
toggleshowClass();
};
let onCloseHandler=(e) => {
    // backdrop.classList.remove("show");
    // myModal.classList.remove("show");
    // toggleshowClass(backdrop, 'show')
    // toggleshowClass(myModal, 'show')
    toggleshowClass();
};


// function toggleshowClass(ele,nameOfClass){
//     // ele.classList.toggle(nameOfClass)
// }

let addMovieHandler=(eve) => {
    let movieObj= {
        title:title.value,
        imgUrl:imgUrl.value,
        rating:rating.value
    }
    movieArray.push(movieObj);
    let result="";
    movieArray.forEach((obj) =>{
        result += `
        <div class="col-md-4">
        <div class="card">
        <div class="card-body">
        <h5>${obj.title}</h5>
        <img src="${obj.imgUrl}" alt ="">
        <p>${obj.rating}/5</p>
        </div>
        </div>
        </div>`;
    });
    info.innerHTML = result;
    title.value='';
    imgUrl.value='';
    rating.value='';
    toggleshowClass();
};


function toggleshowClass(){
    backdrop.classList.toggle("show");
    myModal.classList.toggle("show");
    // myModal.classList.remove("show");
}

showModal.addEventListener('click', GallaryHandler);

addMovie.addEventListener('click', addMovieHandler)
myCloseBtns.forEach(btn => {
    btn.addEventListener('click', onCloseHandler)
})