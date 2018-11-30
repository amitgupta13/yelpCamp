const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    let campgrounds = [
        {name:'shimla', image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/SHIMLA.jpeg?p8rkDgUaxdIezLOdixVSYZfIdYEkHBUU'},
        {name:'morroco', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKMWfAua05Uz_m_aDHANO17dANCTtWTK4V8HaBCURI_-m7f9h'},
        {name:'himalaya', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV806EHN8UqegdayHBWyIuAdWHCZKUBc_4R_uNOOswjXmpS32G8g'}
    ]
    res.render('campgrounds', {campgrounds:campgrounds});
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
});