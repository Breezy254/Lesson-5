function clearAll(){
    document.querySelector('.inputdisplay').value='';
}

function deleteChar(){
    let currentValue=document.querySelector('.inputdisplay').value;
    document.querySelector('.inputdisplay').value=currentValue.substring(0,currentValue.length-1);
}

function insertChar(Char){
    document.querySelector('.inputdisplay').value= document.querySelector('.inputdisplay').value+Char;
}

function result(){
    document.querySelector('.inputdisplay').value=(eval(document.querySelector('.inputdisplay').value));
}