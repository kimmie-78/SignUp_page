const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

//collecting data fromtextboxes
function test(){

//retrieving the data
 var Uname=document.getElementById('Uname').value
 console.log(Uname);

 var Fname=document.getElementById('Fname').value
 console.log(Fname);

 const Calder = document.querySelector('input[type="date"]');
 console.log(Calder.value);

 let Cnum=document.getElementById('Cnum').value
 console.log(Cnum);

 let emil=document.getElementById('emil').value
 console.log(emil);

 let pass=document.getElementById('pass').value
 console.log(pass);
 //storing the data
 var user =localStorage.setItem("Uname", Uname);
 var fuser =localStorage.setItem("Fname", Fname);
 var Calde =localStorage.setItem("Calder", Calder);
 var cnum =localStorage.setItem("  Cnum", Cnum);
 var emill =localStorage.setItem("emil", emil);
 var passw=localStorage.setItem("pass", pass);


}