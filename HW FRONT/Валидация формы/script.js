 var err = {},
 	form = document.getElementById('form'),
 	input = form.getElementsByTagName("input"),
 	inputName = document.getElementById("name"),
 	inputSname = document.getElementById("sname"),
 	inputAge = document.getElementById("age"),
 	close = document.getElementById ('close'),
 	errName = document.getElementById ('errName'),
 	errSname = document.getElementById ('errSname'),
 	errAge = document.getElementById ('errAge'),
 	clearSpan = document.getElementsByClassName('clr'),
 	clrbutton = document.getElementById ('clrbutton');
clrbutton.addEventListener ('click',clr,false);
close.addEventListener ('click', regWindOpener,false);
inputName.addEventListener ('keyup',valid,false);
inputSname.addEventListener ('keyup',valid,false);
inputAge.addEventListener ('keyup',valid,false);

for (var i = 0; i < input.length ; i++) {
	input[i].addEventListener ('mouseout',mouseout,false);
}

function mouseout (){
	if (err.name =='' && err.sname =='' && err.age ==''){
		document.getElementById("button").disabled = false;
		return;
	}
	document.getElementById("button").disabled = true;
}
 //  если вдруг забуду спросить, - разве не опасно прописывать 
 // регулярки в паттерне (в атрибутах инпута?)Знаю что можно сравнивать 
 // в ивенте паттерн и введённое значение, но тогда смысла в валидации нет 
 // так как паттерн могут иизменить через отладку
function valid (e){
		if (e.target.id =='name'){
			var namePattern = /^[a-z]{2,12}$/
			if (namePattern.test(this.value)){ 
			err.name = '';
			errName.innerHTML = ''
			this.style.borderBottomColor =  '#3BA4C7';
			return;
	}
			this.style.borderBottomColor =  'red';
			errName.innerHTML = 'No valid Name'
			err.name = 'No valid Name'
		}
		if(e.target.id =='sname'){
			var snamePattern = /^[a-z]{2,12}$/
			if (snamePattern.test(this.value)){ 
			err.sname = '';
			errSname.innerHTML ='';
			this.style.borderBottomColor =  '#3BA4C7';
			return;
	}
			this.style.borderBottomColor =  'red';
			errSname.innerHTML = 'no validSname';
			err.sname = 'no validSname'
		}
		if (e.target.id == 'age') {
			var agePattern = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/
			if (agePattern.test(this.value)){ 
			err.age = '';
			errAge.innerHTML = '';
			this.style.borderBottomColor =  '#3BA4C7';
			return;
	}
			this.style.borderBottomColor =  'red';
			errAge.innerHTML = 'no validAge';
			err.age ='no validAge';
		}
	}
	
function clr (){
	
	for (var i = 0; i < input.length ; i++) {
	clearSpan[i].innerHTML ='';
	input[i].value = '';
	input[i].style.borderBottomColor =  '#3BA4C7';
	}
}




// просто открытие/закрытие формы по кнопке,и бесполезный экшн после валидации в сторонку пока их вынес.

var  button  = document.getElementById ('button'),
	 regbutton = document.getElementById('regbutton');
button.addEventListener ('click',act,false);
regbutton.addEventListener('click',regWindOpener,false);

function act (){
	location="http://google.com";
}

function regWindOpener() {
	if (form.style.display == 'none') {
		form.style.display = 'block';
		return;
	}
	form.style.display = 'none';
}

	