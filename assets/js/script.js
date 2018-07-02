var i=0;
var slide=document.getElementById('sm-slider').children;
slide[i].classList.add("active");
console.log(slide);

var left=document.getElementById('left-arw');
left.addEventListener("click",function() { movel();});

var right=document.getElementById('right-arw');
right.addEventListener("click",function() { mover();}); 

function mover() {
	i++;
	if(i<slide.length) {
	slide[i-1].classList.remove("active");	
	slide[i].classList.add("active");
	console.log(i);
	} else {
		i=0;
		slide[slide.length-1].classList.remove("active");	
		slide[i].classList.add("active");
		console.log(i);
	}
}


function movel() {
	i--;
	if(i>=0) {
	slide[i+1].classList.remove("active");	
	slide[i].classList.add("active");	
	console.log(i);
	} else {
		i=slide.length-1;
		slide[0].classList.remove("active");	
		slide[i].classList.add("active");
		console.log(i);
	}
}

// -------------------------------Slider Modal-----------------------------------

var modal=document.getElementById('slider-modal').children;
// modal[0].addEventListener("click",function() { show();});
// modal[1].addEventListener("click",function() { show();});
// modal[2].addEventListener("click",function() { show();});
console.log(modal);

for(j=0;j<modal.length;j++)
{
	modal[j].addEventListener("click",function() { show();});
}

function show () {
	var image=event.target;
	var src=image.parentElement.children[0].getAttribute('src');
	var title=image.parentElement.children[1].innerHTML;
	var btn=image.parentElement.children[2].innerHTML;
	console.log(src);
	document.getElementById("active-img").setAttribute('src',src);
	console.log(document.getElementById("active-img").parentNode.nextElementSibling);
	document.getElementById("active-img").parentNode.nextElementSibling.children[0].innerHTML=title;
	document.getElementById("active-img").parentNode.nextElementSibling.children[1].innerHTML=btn;
}




//-----------------------------------------------------------------------------


//-------------------slider-------------------------------

var leftbtn=document.getElementById('left-btn');
leftbtn.addEventListener("click",function() { slidel();});

var rightbtn=document.getElementById('right-btn');
rightbtn.addEventListener("click",function() { slider();}); 

var n=0;
function slidel(){
	n=n-400;
	if(n>=-800) {
	console.log(n);
	document.getElementById('slider-modal').style.marginLeft=n+'px';
	}
	else {
		n=0;
		document.getElementById('slider-modal').style.marginLeft=n+'px';
	}	
}

function slider(){
	console.log(n);
	n=n+400;
	if(n==400) {	
		n=-800;
		document.getElementById('slider-modal').style.marginLeft=n+'px';
		console.log(n);
	}
	else {
		console.log(n);
		document.getElementById('slider-modal').style.marginLeft=n+'px';
	}	
}

// ---------------------------------------------------------


// -------------------------------Modal-----------------------------------

	var modal2=document.getElementById('modal').children;
	console.log(modal2);
	for(k=0;k<modal2.length;k++)
	{
		modal2[k].addEventListener("click",function() { pop(this);});
	}

function pop (list) {
	var mypop=list.cloneNode(true);
	document.getElementById('popup').style.height=100+'%';
	document.getElementById('popup').children[0].append(mypop);
	console.log(document.getElementById('popup'));
	document.getElementById('close').style.display='block';
	document.getElementById('popup').onclick=function() { close(this,mypop); };
}

function close(not,mypop)
{
	if(not==event.target||event.target==document.getElementById('close')){
		document.getElementById('close').style.display='none';	
		document.getElementById('popup').children[0].removeChild(mypop);
		document.getElementById('popup').style.height=0+'%';
	}
}
// -----------------------------------------------------------------------







