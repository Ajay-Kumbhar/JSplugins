let html = 
`<div id="lightbox">
    <i class="bi bi-x-circle" id="close" onclick="closebox()"></i>
    <i class="bi bi-arrow-left-circle" id="left" onclick="moveleft()"></i>
    <i class="bi bi-arrow-right-circle" id="right" onclick="moveright()"></i>
    <div> 
    <img id="lightimg" src="" alt="">
    </div>
</div>`;

let container = document.createElement('div');
container.innerHTML = html;
document.body.appendChild(container);

let images;

function setImgIndex(img){
    for(let i=0; i<images.length; i++){
        if(images[i].src == img.src){
            return i;
        }
    }
}

let imgindex;

function initialize(imgclass){
    images = document.getElementsByClassName(imgclass);
    for(let img of images){
        img.addEventListener('click', ()=>{
            document.getElementById('lightbox').style.display = "block";
            imgindex = setImgIndex(img);
            checkextreme(imgindex);
            setImage(img);
        })
    }
}

function setImage(img){
    document.getElementById('lightimg').src = img.src;
}

function checkextreme(i){
    if(i==0){
        document.getElementById('left').style.display="none";
        document.getElementById('right').style.display="block";
        document.get
    }else if(i==images.length-1){
        document.getElementById('right').style.display="none";
        document.getElementById('left').style.display="block";
    }else{
        document.getElementById('left').style.display="block";
        document.getElementById('right').style.display="block";
    }
}

function moveleft(){
    imgindex--;
    checkextreme(imgindex);
    setImage(images[imgindex]);
}

function moveright(){
    imgindex++;
    checkextreme(imgindex);
    setImage(images[imgindex]);
}

function closebox(){
    document.getElementById('lightbox').style.display="none";
}
