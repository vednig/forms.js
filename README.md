# formearly
Open Sourced JS to Create Forms Dynamically.
Create Dynamic Forms Like these:<br />
**How to Create A Sample Subscribe Form with forms.js**
<ul>
<li>include 'bootstrap'
<li>include 'jquery
<li>include 'forms.js'
  
    div=document.getElementById('1')
    x=formcreate(div,'GET','forms.js','uk',{'class':'red'})
    console.log(x)
    y=formadd(x,'label','y',{class:'container text-primary',value:'Go'},'Subscribe to Email')
    z=formadd(y,'input','z',{class:'form form-control',placeholder:'Email-Address'})
