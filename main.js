// select
let repoInput = document.querySelector(".container .nameFiled input");
let getBtn = document.querySelector(".container .nameFiled .button1");
let dataArea = document.querySelector(".container .dataFiled h2");
let mainDiv = document.querySelector(".dataFiled")
let clear = document.querySelector(".container .nameFiled .button2");

getBtn.onclick = function(){
    if(repoInput.value ==""){
        dataArea.innerHTML="Input cant be Empty";
    }else{
        dataArea.innerHTML="";
        fetch(`https://api.github.com/users/${repoInput.value}/repos`)
        .then((response) => response.json())
        .then((data) => 
        data.forEach(e => {
            let dataDiv = document.createElement("div");
            dataDiv.classList.add("dataDiv")
            let repoArea = document.createElement("p");
            let repoUrl  = document.createElement("a");
            let urlText = document.createTextNode("visit repo");
            repoUrl.appendChild(urlText);
            repoUrl.setAttribute("href", `https://github.com/${repoInput.value}/${e.name}`);
            repoUrl.setAttribute("target", "_blank");
            repoArea.classList.add("repo");
            dataDiv.appendChild(repoArea);
            dataDiv.appendChild(repoUrl);
            mainDiv.appendChild(dataDiv)
            repoArea.innerHTML=`${e.name}`;
            repoInput.value ="";
        })
        );
    }     
}
clear.onclick = function (){
    mainDiv.innerHTML="";
    repoInput.value ="";
}