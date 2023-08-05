function getValue(x){
    document.getElementById('inputbox').value += x;
}

function clearData(y){
    document.getElementById('inputbox').value = y;
}

function result(){
    var res = eval(document.getElementById('inputbox').value);
    document.getElementById('inputbox').value = res;
}