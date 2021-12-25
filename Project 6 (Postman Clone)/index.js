let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

let paramsradio = document.getElementById("paramsradio");
paramsradio.addEventListener('click', () => {
    document.getElementById("parametersBox").style.display = "block";
    document.getElementById("requestJsonBox").style.display = "none";
})

let jsonradio = document.getElementById("jsonradio");
jsonradio.addEventListener('click', () => {
    document.getElementById("requestJsonBox").style.display = "block";
    document.getElementById("parametersBox").style.display = "none";
})

let count = 1;

let addParam = document.getElementById("addParam");
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let str = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${count+1}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${count+1}" placeholder="Enter Parameter ${count+1} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${count+1}" placeholder="Enter Parameter ${count+1} Value">
                    </div>
                    <button class="btn btn-primary deleteParam">-</button>
                </div>`;
    count++;

    let paramElement = getElementFromString(str);
    params.appendChild(paramElement);

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam){
        item.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
        })
    }
})

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let submit = document.getElementById("submit");
submit.addEventListener('click',()=>{
    // document.getElementById("responseJsonText").value = "Please wait...Fetching response...";
    document.getElementById("responsePrism").value = "Please wait...Fetching response...";

    let url = document.getElementById("urlField").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    if(contentType=='params'){
        data = {};
        for(i=1;i<count+1;i++){
            if(document.getElementById('parameterKey'+(i))!=undefined){
                let key = document.getElementById('parameterKey'+(i)).value;
                let value = document.getElementById('parameterValue'+(i)).value;

                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else{
        data = document.getElementById("requestJsonText").value;
    }

    console.log(url);
    console.log(requestType);
    console.log(contentType);
    console.log(data);

    if(requestType=='GET'){
        fetch(url,{
            method: 'GET'
        })
        .then(response=>response.text())
        .then((text)=>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        })
    }
    else{
        fetch(url,{
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response=>response.text())
        .then((text)=>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        })
    }
})