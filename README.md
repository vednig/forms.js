# forms.js
Open Sourced JS to Create Forms Dynamically.
Create Dynamic Forms Like these:<br />
## **Building Sample Subscribe Form with forms.js**
<ul>
<li>include 'bootstrap'
<li>include 'forms.js'
 
```html
<div id='df-1'></div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.min.js" integrity="sha384-5h4UG+6GOuV9qXh6HqOLwZMY4mnLPraeTrjT5v07o347pj6IkfuoASuGBhfDsp3d" crossorigin="anonymous"></script>
<script src='https://cdn.jsdelivr.net/gh/vednig/formearly/forms.js'></script>
<script>
    div=document.getElementById('df-1')
    x=formcreate(div,'GET','forms.js','uk',{'class':'red'})
    console.log(x)
    y=formadd(x,'label','y',{class:'container text-primary',value:'Go'},'Subscribe to Email')
    z=formadd(y,'input','z',{class:'form form-control',placeholder:'Email-Address'})
 </script>
```
+ This will create a form like this:
<img src=https://res.cloudinary.com/cloud9-labs/image/upload/v1609055306/readmefiles/form_gukytq.png />

## **Functions**
`formcreate` - creates form component <br>
  - div - provide DIV to add form to. <br>
  - form_type - `POST`/`GET` <br>
  - id - Id of New Element <br>
  - props - define props of element <br>
  - innerHTML - inside of element (can be label or div ) <br>
  
`formadd` - adds a component to formcreate object. <br>
  - div - provide formcreate instance <br>
  - element_type - `INPUT`/`BUTTON`/`LABEL` <br>
  - id - Id of New Element <br>
  - props - define props of element <br>
  - innerHTML - inside of element (can be label or div ) <br>
