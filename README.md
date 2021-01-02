# forms.js
Open Sourced JS to Create Forms Dynamically.
Create Dynamic Forms Like these:<br />
**How to Create A Sample Subscribe Form with forms.js**
<ul>
<li>include 'bootstrap'
<li>include 'jquery
<li>include 'forms.js'
 
```html
   // code for creating
<div id='1'></div>
<script>https://cdn.jsdelivr.net/gh/vednig/formearly/forms.js</script>
<script>
    div=document.getElementById('1')
    x=formcreate(div,'GET','forms.js','uk',{'class':'red'})
    console.log(x)
    y=formadd(x,'label','y',{class:'container text-primary',value:'Go'},'Subscribe to Email')
    z=formadd(y,'input','z',{class:'form form-control',placeholder:'Email-Address'})
 <script>
```
+ This will create a form like this:
<img src=https://res.cloudinary.com/cloud9-labs/image/upload/v1609055306/readmefiles/form_gukytq.png />
