var pt = `{ 
    "head_title":"Rooting Code - Desenvolvimento de Software",
    "parking_page_message":"Em breve... site em desenvolvimento"
}`;

var en = `{ 
    "head_title":"Rooting Code - Software Development",
    "parking_page_message":"Coming Soon... Site is under construction"
}`;

var es = `{
    "head_title":"Rooting Code - Desarrollo de Software",
    "parking_page_message":"Próximamente... Sitio en desarrollo"
}`;

var lang = navigator.language;
var translation = JSON.parse(en);

if (lang == 'pt-BR' || lang == 'pt') {
    translation = JSON.parse(pt);
} else if(lang == 'en-GB' || lang == 'en') {
    translation = JSON.parse(en);
} else if(lang == 'es') {
    translation = JSON.parse(es);
}

Object.entries(translation).forEach(([key, value]) => {
    var element = document.getElementById(`${key}`);
    element.innerHTML = `${value}`;
});