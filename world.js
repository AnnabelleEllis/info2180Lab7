window.onload = function(){
    document.getElementById("lookup").addEventListener("click",getCountry);
    
    function getCountry(){
        var xhr = new XMLHttpRequest();
       console.log("Hello");
        
        xhr.onreadystatechange = function(){
            console.log("Hello2");
            if(this.status == 200){
                console.log(this.responseText);
                var countries = this.responseText;
                document.getElementById('result').innerHTML = countries;
            }else if(this.status == 400){
                console.log("There is an error");
        }
         
    }
    xhr.open("GET","world.php?country=Jamaica",true);
    xhr.send();

}
}

window.onload = function(){
    ajax_request(request);
    main();
}

//accepts a requests 

function ajax_request(request){
   let requestObject = new XMLHttpRequest();
   let url = "/world.php?"+request;

   requestObject.onreadystatechange=function(){
       if(this.readyState == XMLHttpRequest.DONE){
           if(this.status == 200){
               $("#result")[0].innerHTML = "<p>"+this.responseText+"<\p>";
           }else{
               $("#result")[0].innerHTML = "Error";
           }
       }
   }
   requestObject.open("GET", url, true);
   requestObject.send();
}


function main(){
   var lookup = document.getElementById("lookup");
   $("#country").after("<label for='all'>Select all countries</label><input type='checkbox' name='all' id='all'/>");
   lookup.onclick = function(){   
       if($("#all")[0].checked){
           ajax_request("all=true");
       }else{
           ajax_request("country="+document.getElementById("country").value.trim());
       } 
   }
}