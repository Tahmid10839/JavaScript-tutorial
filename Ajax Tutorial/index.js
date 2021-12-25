
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){

    console.log('You have clicked the fetchBtn');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    //Post Request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');

    //What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On Progress');
    }

    xhr.onreadystatechange = function(){
        console.log('Ready state is ',xhr.readyState);
    }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log('Some Error occured');
        }
        
    }

    params = `{"name":"testdsad","salary":"123","age":"23"}`;

    //Send the request
    xhr.send(params);

    
}

let popBtn = document.getElementById('backupBtn');
popBtn.addEventListener('click',popHandler);
    
function popHandler(){
    console.log('You have clicked the popBtn');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    
    //What to do when response is ready
    xhr.onload = function(){
        if(this.status===200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for (key in obj){
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log('Some Error occured');
        }
        
    }
    //Send the request
    xhr.send();
}