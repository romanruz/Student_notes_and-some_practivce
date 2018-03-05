var err = {};
var form = document.getElementById('form');
var input = form.getElementsByTagName("input");
var inputName = document.getElementById("name");
var inputSname = document.getElementById("sname");
var inputAge = document.getElementById("age");
inputName.addEventListener ('keyup',validName,false);
inputSname.addEventListener ('keyup',validSname,false);
inputAge.addEventListener ('keyup',validAge,false);

for (var i = 0; i < input.length ; i++) {
	input[i].addEventListener ('mouseover',mouseover,false);
	input[i].addEventListener ('mouseout',mouseout,false);
}
function mouseover (){

	for (var i = 0; i < input.length ; i++) {
		if(input[i].value ==''){
		input[i].style.borderBottomColor =  'red';
		}
	}
}
function mouseout (){
	for (var i = 0; i < input.length ; i++) {
		input[i].style.borderBottomColor =  'black'
	}
	
	if (err.name =='' && err.sname =='' && err.age ==''){
		document.getElementById("button").disabled = false;
		return;
	}
	document.getElementById("button").disabled = true;
}
function validName (){

	var pattern = /^[a-z]{2,12}$/
	console.log (this.value);
	console.log(pattern.test(this.value))
	if (pattern.test(this.value)){ 
		err.name = '';
		return;
	}
	err.name = 'No valid Name'
}
function validSname (){

	var pattern = /^[a-z]{2,12}$/
	console.log (this.value);
	console.log(pattern.test(this.value))
	if (pattern.test(this.value)){ 
		err.sname = '';
		return;
	}
	err.sname = 'no validSname'
}
function validAge (){

	var pattern = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/
	console.log (this.value);
	console.log(pattern.test(this.value))
	if (pattern.test(this.value)){ 
		err.age = '';
		return;
	}
	err.age ='no validAge';
}

	


// просто открытие формы по кнопке, в сторонку пока его вынес.
var regbutton = document.getElementById('regbutton');
regbutton.addEventListener('click',regWindOpener,false);


function regWindOpener() {
	if (form.style.display == 'none') {
		form.style.display = 'block';
		return;
	}
	
	form.style.display = 'none';
}

	