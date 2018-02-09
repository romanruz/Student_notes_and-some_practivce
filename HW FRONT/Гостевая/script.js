var list = [];
function ask() 
{
	var err = document.getElementById('err');
	err.innerHTML = '';
	var person = {
	name:'',
	sname:'',
	age:''
	}
	person.name = document.getElementById("name").value;
	person.sname = document.getElementById("sname").value;
	person.age = document.getElementById("age").value;
	list.push(person);
	document.getElementById("name").value = '';
	document.getElementById("sname").value= '';
	document.getElementById("age").value = '';
}
		
	
function see()
{
	if(list.length == 0){
		var err = document.getElementById('err');
		err.innerHTML = 'Введите данные о людях';
		return
	}
	var person ={};
	for(var i = 0; i<list.length;i++ ){
		person = list[i]
		var table = document.getElementById("table")
		var tr = document.createElement('tr');
		table.appendChild(tr);
		var tdname = document.createElement('td');
		var tdsname = document.createElement('td');
		var tdage = document.createElement('td');
		tdname.innerText = person.name;
		tdsname.innerText = person.sname;
		tdage.innerText = person.age;
		tr.appendChild(tdname);
		tr.appendChild(tdsname);
		tr.appendChild(tdage);
	}
	list = [];
	return list;
}