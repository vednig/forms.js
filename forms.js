
function formcreate(div,method,action,cls,data) {
    var formelement = document.createElement("form");
    formelement.setAttribute('id','x_forms_beta');
    formelement.setAttribute('action',action);
    formelement.setAttribute('class',cls);
    formelement.setAttribute('method',method);
    for (let index = 0; index < Object.keys(data).length; index++) {
        key=Object.keys(data)[index]
        const value = data[key];
        formelement.setAttribute(key,value);
    }
    var bdy = document.body;
    console.log(bdy)
    if (div!=null){
    div.appendChild(formelement);
        return formelement;
}
    else{
        bdy.appendChild(formelement)
        return formelement
    }

}
function formaddmulti(form,type,count,cls,data,text,html){
    for (index=0;index<count;index++){
    var addelement = document.createElement(type);
    if (text!=undefined){
    addelement.innerText=text
}
    addelement.setAttribute('class',cls);
    if (html!=undefined){
    addelement.innerHTML+=html
}
    for (let index = 0; index < Object.keys(data).length; index++) {
        key=Object.keys(data)[0]
        const value = data[key];
        addelement.setAttribute(key,value);
    }
    form.appendChild(addelement);
    return addelement;
}
}
function formadd(form,type,id,data,text,html){

    var addelement = document.createElement(type);
    if (text!=undefined){
    addelement.innerText=text
}
    addelement.setAttribute('id',id);
    if (html!=undefined){
    addelement.innerHTML+=html
}
    for (let index = 0; index < Object.keys(data).length; index++) {
        key=Object.keys(data)[index]
        const value = data[key];
        addelement.setAttribute(key.toString(),value.toString());
        console.log(key,value)
    }
    form.appendChild(addelement);
    //addelement+=html
    return addelement;
    
}
