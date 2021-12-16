
function time() {
    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById("day").innerText = days;
    document.getElementById("hour").innerText = hours;
    document.getElementById("min").innerText = minutes;
    document.getElementById("sec").innerText = seconds;
}

setInterval(time,1000);


//------------slider------------------//



function next() {
    if (document.getElementsByClassName('fixed')[0].classList.contains("active")){

        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");

        document.getElementsByClassName('fixed')[0].classList.remove("active");


    }else if (document.getElementsByClassName('fixed')[1].classList.contains("active")){

        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[2].classList.contains("active")){

        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");

        document.getElementsByClassName('fixed')[2].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[3].classList.contains("active")){

        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");

        document.getElementsByClassName('fixed')[3].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[4].classList.contains("active")){

        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[8].classList.add("active");

        document.getElementsByClassName('fixed')[4].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[5].classList.contains("active")){

        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[8].classList.add("active");
        document.getElementsByClassName('fixed')[9].classList.add("active");

        document.getElementsByClassName('fixed')[5].classList.remove("active");

    }
}







function prev() {
    if (document.getElementsByClassName('fixed')[9].classList.contains("active")){

        document.getElementsByClassName('fixed')[8].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");

        document.getElementsByClassName('fixed')[9].classList.remove("active");


    }else if (document.getElementsByClassName('fixed')[8].classList.contains("active")){

        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");

        document.getElementsByClassName('fixed')[8].classList.remove("active");


    } 

}


/*----------------------------------side menu-----------------------------------*/


let menu = document.getElementById('mainmenu');

function showmenu() {
    menu.style.display = 'block';
}

function hidemenu(){
    menu.style.display = 'none';
    menu.style.transition = '0s';
}


