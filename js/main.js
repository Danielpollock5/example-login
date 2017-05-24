var people = [

{
	name: "danny",
	password: "meepins"
},
{
	name: "rebecca",
	password: "irish"
},
{
	name: "robert",
	password: "babylove"
}
]

function logIn(){
var name = document.getElementById('username').value
var password = document.getElementById('password').value

for (var i = 0; i < people.length; i++) {
	if (name == people[i].name && password == people[i].password) {
		alert(name + " you are logged in!");
		document.getElementById('site-wrapper').style.display = 'none'
		var welcome = document.createElement('h1')
		welcome.className = "welcome animated infinite bounce"
		welcome.textContent= 'SUH'
		document.getElementById('body').appendChild(welcome)
		return;
	}

	else{
		alert('please try again')
		return
	}
	
}}
function register(){
	var newName = document.getElementById('newUsername').value
	var newPass = document.getElementById('newPassword').value

	for (var i = 0; i < people.length; i++) {
		if (newName == people[i].name) {
			console.log('try again')
			return;
		}else if (newPass.length < 8) {
			console.log('password needs to be more than 8 characters')
			return
		}
	}

	people.push({
		name: newName,
		password: newPass
	})
	alert("new user created")
	
}