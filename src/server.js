    num = 0
    ind=0
    dope=0
    var code=window.location.pathname

    function add1(x){
	dope=parseInt(dope)+parseInt(1);
	var column=document.createElement("div");
	column.setAttribute("id", dope);
	column.setAttribute("class","col-sm");	
	var col = document.getElementById("fooBar");
	col.appendChild(column);
	add(x)
}
    function add(x){
        num=parseInt(num)+parseInt(1);
        //Create an input type dynamically.
        var element = document.createElement("input");
        var labelname = "Question"+ num +"."
            //Create Labels
        var label = document.createElement("label");
        label.innerHTML = labelname;     
        idname =  "Question"+ num
	var divname = "Question "+ num
        //Assign different attributes to the element.
        element.setAttribute("type", "text");
        element.setAttribute("placeholder", "Your Question Here");
        element.setAttribute("name", "Question"+num);
        element.setAttribute("style", "width:200px");
        element.setAttribute("id", idname);
	element.setAttribute("class", "input-group-text");
	element.setAttribute("aria-describedby", "basic-addon1");
	element.setAttribute("style","background-color:black;color:white");
        label.setAttribute("style", "font-weight:normal;color:red");
    // 'foobar' is the div id, where new fields are to be added
    var foo = document.getElementById(dope);
    //Append the element in page (in span).
    foo.appendChild(label);
    foo.appendChild(element);
    if (x=="multi") {
            for (let index = 1; index < 5; index++) {
                var element = document.createElement("input");
                var labelname = "Option"+ index +"."
                //Create Labels
                var label = document.createElement("Label");
                label.innerHTML = labelname;     
                idname =  "Option"+ index
                //Assign different attributes to the element.
                element.setAttribute("type", "text");
                element.setAttribute("placeholder", "Option here.");
                element.setAttribute("name", divname);
                element.setAttribute("style", "width:200px;");
                element.setAttribute("id", idname);
                label.setAttribute("style", "font-weight:normal;color:#149fc9;");
		element.setAttribute("class","form-control form-control");

                // 'foobar' is the div id, where new fields are to be added
                var foo = document.getElementById(dope);
                foo.appendChild(label);
                foo.appendChild(element);
            }
        }
    }
