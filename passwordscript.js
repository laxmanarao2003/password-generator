let rval=document.getElementById("rangeval");
let inpval=document.getElementById("inpval");
let element=document.getElementById("rangeinp");
let gnrate=document.getElementById("gnrate");
let upperid=document.getElementById("upper");
let lowerid=document.getElementById("lower");
let numsid=document.getElementById("nums");
let symbsid=document.getElementById("symbs");
let copybtn=document.getElementById("copybtn");
let alertbtn=document.getElementById("alert");
let loader=document.getElementById("loader");
let bdyopacity=document.getElementById("bdyopacity");
let pswd=document.getElementById("pswdindicator");
let btnclose=document.getElementById("btnclose");

element.addEventListener("mouseup", rfunc=()=>{
    document.getElementById("rangeval").innerHTML = element.value;
});

gnrate.addEventListener("click",func1=()=> {
  if(upperid.checked==false && lowerid.checked==false &&numsid.checked==false &&symbsid.checked==false)
  {
    alert("Please Include the characters");
  }
  else
  {
    bdyopacity.style.opacity="0.6";
    loader.style.display="block";
    setTimeout(func2,1000);
  }
});
let func2=()=>{
  bdyopacity.style.opacity="1";
  loader.style.display="none";
  passwordgnrate();
}
    let passwordgnrate=()=>{
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let nums="0123456789";
    let asciival="!#$%&^@~()_[]{}\\t;*+,-./?<=>:";

    let len=document.getElementById("rangeinp");
    let n=len.value;
    let res="",fres="";

    (upperid.checked)?  res+=upper : "";
    (lowerid.checked)?  res+=lower : "";
    (numsid.checked)?  res+=nums : "";
    (symbsid.checked)?  res+=asciival:"";
    for(let k=1;k<=n;k++)
    {
      fres+=res.charAt(Math.floor(Math.random()*res.length));
    }
    inpval.value=fres;
    if(upperid.checked && lowerid.checked && numsid.checked && symbsid.checked)
    {
      pswd.innerHTML="Your Password is too Strong";
      pswd.classList.remove("text-warning");
      pswd.classList.remove("text-danger");
      pswd.classList.add("text-success");
    }
    else if((upperid.checked && lowerid.checked && numsid.checked ) || (lowerid.checked && numsid.checked && symbsid.checked) 
    ||(upperid.checked && numsid.checked && symbsid.checked) ||(upperid.checked && lowerid.checked && symbsid.checked))
    {
      pswd.innerHTML="Your Password is Medium";
      pswd.classList.remove("text-success");
      pswd.classList.remove("text-danger");
      pswd.classList.add("text-warning");
    }
    else
    {
      pswd.innerHTML="Your Password is Weak";
      pswd.classList.remove("text-warning");
      pswd.classList.remove("text-success");
      pswd.classList.add("text-danger");
    }

};

copybtn.addEventListener("click",mtoclip=()=>{
    if(inpval.value=="")
    {
      alert("Something went wrong ,there is no text content!");
    }
    else
    {
      inpval.select();
      document.execCommand("copy");
      alertbtn.classList.add("d-flex");
      alertbtn.style.display="block";
    }
});

btnclose.addEventListener("click",closealert=()=>{
  alertbtn.classList.remove("d-flex");
  alertbtn.style.display="none";
});
