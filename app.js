const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

let campgrounds = [
    {name:'shimla', image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/SHIMLA.jpeg?p8rkDgUaxdIezLOdixVSYZfIdYEkHBUU'},
    {name:'morroco', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKMWfAua05Uz_m_aDHANO17dANCTtWTK4V8HaBCURI_-m7f9h'},
    {name:'himalaya', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV806EHN8UqegdayHBWyIuAdWHCZKUBc_4R_uNOOswjXmpS32G8g'}
]

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    
    res.render('campgrounds', {campgrounds:campgrounds});
});

app.post('/campgrounds', function(req, res){
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {
        name:name,
        image:image
    }

    campgrounds.push(newCampground);

    res.redirect('/campgrounds');

});

app.get('/campgrounds/new', function(req, res){
    res.render('new');
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
});