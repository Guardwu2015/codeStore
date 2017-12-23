// document.querySelector("button").onclick = function(){
//     ajax("get","data.txt",function(res){
//         alert(res);
//     })
// }

function ajax(method,url,next){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.send();
    xhr.onreadystatechange = function(){ 
        if(xhr.readyState === 4 && xhr.status === 200){ 
            next(xhr.responseText) 
        }
    }
}