(function(){
    console.info(document.getElementById('myHeading').innerHTML)
    document.querySelector('nav ul li a').setAttribute('href', 'https://mytimetable.shu.ac.uk/schedule');
    document.querySelector('nav ul li').setAttribute('class', 'currentPage');
})();