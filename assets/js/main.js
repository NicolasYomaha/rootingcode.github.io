window.onload = function () {
    var pt = `{ 
        "head_title":"Rooting Code - Desenvolvimento de Software",
        "parking_page_message":"Site em desenvolvimento",
        "skill1":"Desenvolvimento de Software",
        "skill2":"UI / UX / Desenho Gráfico.",
        "contact":"Contato:"
    }`;
    
    var en = `{ 
        "head_title":"Rooting Code - Software Development",
        "parking_page_message":"Site Under Construction",
        "skill1":"Software Development",
        "skill2":"UI / UX / Design.",
        "contact":"Contact:"
    }`;
    
    var es = `{
        "head_title":"Rooting Code - Desarrollo de Software",
        "parking_page_message":"Sitio en desarrollo",
        "skill1":"Desarrollo de Software",
        "skill2":"UI / UX / Desenho Gráfico",
        "contact":"Contacto:"
    }`;
    
    var lang = navigator.language;
    var translation = JSON.parse(en);
    
    if (lang == 'pt-BR' || lang == 'pt') {
        console.log('br')
        translation = JSON.parse(pt);
    } else if(lang == 'en-GB' || lang == 'en') {
        translation = JSON.parse(en);
        console.log('en')
    } else if(lang == 'es') {
        translation = JSON.parse(es);
        console.log('es')
    }
    
    Object.entries(translation).forEach(([key, value]) => {
        var element = document.getElementById(`${key}`);
        element.innerHTML = `${value}`;
    });

    var spans =  document.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('mouseover', function () {
            if (!spans[i].className.trim().includes('animation')) {
                spans[i].classList.add('animation')
                removeAnimation(spans[i].getAttribute('id'))
            }
        });
    }            
    
    function removeAnimation (id) {
        setTimeout(function() {
            var element = document.getElementById(id)
            if (element.className.trim().includes('animation')) {
                element.classList.remove('animation')
            }
        }, 1000, id)
    }

    var backgroundSound = new Audio("./DerekClegg-All-I-Want-Is-You.mp3");
    backgroundSound.loop = true;

    function changeSound (){
        var audio = new Audio("./change.wav");
        audio.play();
    }

    function pageSong (play = true) {
        if (play) {
            backgroundSound.play();
        } else {
            backgroundSound.pause();
        }
    }

    var skills = document.getElementsByClassName('skills');

    function toggleSound (active = false) {
        for (let ii = 0; ii < skills.length; ii++) {
            if (active) {
                skills[ii].addEventListener('click', changeSound, true)
            } else {
                skills[ii].removeEventListener('click', changeSound, true)
            }
        }

        active ? pageSong() : pageSong(false) 
    }

    toggleSound()

    var music_control = document.getElementById('music-control');
    music_control.addEventListener('click', function () {
        if (music_control.className.trim() == 'music-control disabled') {
            music_control.classList.remove('disabled')
            toggleSound(true)
        } else if (music_control.className.trim() == 'music-control') {
            music_control.classList.add('disabled')
            toggleSound()
        }
    });
};