document.addEventListener('DOMContentLoaded', function() {



  /****************************************************************** */

  //Sidebar

  /****************************************************************** */

  var elems = document.querySelectorAll('.sidenav');

  var instances = M.Sidenav.init(elems);



  /****************************************************************** */

  //Materialbox Images

  /****************************************************************** */

  var elems = document.querySelectorAll('.materialboxed');

  var instances = M.Materialbox.init(elems)



  const materialboxImages = document.querySelectorAll(".materialboxed");





  for (let i = 0; i < materialboxImages.length; i++) {

    const materialboxImage = materialboxImages[i];



    materialboxImage.addEventListener('click', ()=>{

      materialboxImage.style.boxShadow = "none";

    })



    materialboxImage.addEventListener('mouseover', ()=>{

      var x = document.querySelector(".Haus1");

      var y = document.querySelector(".Haus2");

      var z = document.querySelector(".Haus3");

    if(i <= 2){

      x.style.fontSize = "1.2em";

      x.style.color = "white";

      y.style.fontSize = z.style.fontSize = ".9em";

      y.style.color = z.style.color = "#ffffff80";

    }else if(i > 2 && i <= 5){

      y.style.fontSize = "1.2em";

      y.style.color = "white";

      x.style.fontSize = z.style.fontSize = ".9em";

      x.style.color = z.style.color = "#ffffff80";

    }else if(i > 5){

      z.style.fontSize = "1.2em";

      z.style.color = "white";

      x.style.fontSize =  y.style.fontSize = ".9em";

      x.style.color =  y.style.color = "#ffffff80";

    }

  })



  }



  /****************************************************************** */

  //Accordion

  /****************************************************************** */

  var elems = document.querySelectorAll('.collapsible');

  var instances = M.Collapsible.init(elems);



  /****************************************************************** */

  //NavBar

  /****************************************************************** */

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {

    var currentScrollPos = window.pageYOffset;

    if(currentScrollPos > 60){

/*       console.log("P" + prevScrollpos);

      console.log("C" + prevScrollpos); */

    if ((prevScrollpos) > (currentScrollPos)) {

      document.getElementById("navbar").style.top = "0";

      /*document.getElementById("swiper").style.opacity = "1";*/

    } else {

      document.getElementById("navbar").style.top = "-60px";

      /*document.getElementById("swiper").style.opacity = "0";*/

    }}

    prevScrollpos = currentScrollPos;



    var windowHeight = window.innerHeight;

    var currentScrollPos2 = window.pageYOffset;

    if(currentScrollPos2 < windowHeight){

      document.getElementById("1-mobile").classList.add("active-mobile");

      document.getElementById("2-mobile").classList.remove("active-mobile");

      document.getElementById("3-mobile").classList.remove("active-mobile");

      document.getElementById("4-mobile").classList.remove("active-mobile");

      document.getElementById("1").classList.add("underline");

      document.getElementById("2").classList.remove("underline");

      document.getElementById("3").classList.remove("underline");

      document.getElementById("4").classList.remove("underline");

    }else if(currentScrollPos2 > windowHeight && currentScrollPos2 < (windowHeight * 2)){

      document.getElementById("1-mobile").classList.remove("active-mobile");

      document.getElementById("2-mobile").classList.add("active-mobile");

      document.getElementById("3-mobile").classList.remove("active-mobile");

      document.getElementById("4-mobile").classList.remove("active-mobile");

      document.getElementById("1").classList.remove("underline");

      document.getElementById("2").classList.add("underline");

      document.getElementById("3").classList.remove("underline");

      document.getElementById("4").classList.remove("underline");

    }else if(currentScrollPos2 > (windowHeight * 2) && currentScrollPos2 < (windowHeight * 3)){

      document.getElementById("1-mobile").classList.remove("active-mobile");

      document.getElementById("2-mobile").classList.remove("active-mobile");

      document.getElementById("3-mobile").classList.add("active-mobile");

      document.getElementById("4-mobile").classList.remove("active-mobile");

      document.getElementById("1").classList.remove("underline");

      document.getElementById("2").classList.remove("underline");

      document.getElementById("3").classList.add("underline");

      document.getElementById("4").classList.remove("underline");

    }else if(currentScrollPos2 > (windowHeight * 3) && currentScrollPos2 < (windowHeight * 4)){

      document.getElementById("1-mobile").classList.remove("active-mobile");

      document.getElementById("2-mobile").classList.remove("active-mobile");

      document.getElementById("3-mobile").classList.remove("active-mobile");

      document.getElementById("4-mobile").classList.add("active-mobile");

      document.getElementById("1").classList.remove("underline");

      document.getElementById("2").classList.remove("underline");

      document.getElementById("3").classList.remove("underline");

      document.getElementById("4").classList.add("underline");

    }



  }



  /****************************************************************** */

  //Form Datepicker

  /****************************************************************** */

  var elems = document.querySelectorAll('.datepicker');



  var t = new Date();

  var dd = String(t.getDate());

  var mm = String(t.getMonth());

  var yyyy = t.getFullYear();

  var today = new Date(yyyy, mm, dd);



    var instancesdatepicker = M.Datepicker.init(elems,{

      minDate: today,

      i18n:{

        cancel: 'abbrechen',

        done: 'fertig',

        months:

                [

                  'Januar',

                  'Februar',

                  'März',

                  'April',

                  'Mai',

                  'Juni',

                  'Juli',

                  'August',

                  'September',

                  'Oktober',

                  'November',

                  'Dezember'

                ],

        monthsShort:

                [

                  'Jan',

                  'Feb',

                  'Mär',

                  'Apr',

                  'Mai',

                  'Jun',

                  'Jul',

                  'Aug',

                  'Sep',

                  'Okt',

                  'Nov',

                  'Dez'

                ],

        weekdays:

                [

                  'Sonntag',

                  'Montag',

                  'Dienstag',

                  'Mittwoch',

                  'Donnerstag',

                  'Freitag',

                  'Samstag'

                ],

        weekdaysShort:

                [

                  'Son',

                  'Mon',

                  'Die',

                  'Mit',

                  'Don',

                  'Fre',

                  'Sam'

                ],

        weekdaysAbbrev:	['S','M','D','M','D','F','S']

      }

    });





var date = new Date();

var todaysMonth = String(date.getMonth() + 1);



if(todaysMonth == 5 || todaysMonth == 6 || todaysMonth == 7 || todaysMonth == 8 || todaysMonth == 9) {

  const MBS = document.getElementsByClassName("MaiBisSeptember");

  for (let i = 0; i < MBS.length; i++) {

    const element = MBS[i];

    element.style.fontWeight = "bolder";

    element.style.fontSize = "1.1em";

  }

} else if(todaysMonth == 4 || todaysMonth == 10){

  const AUO = document.getElementsByClassName("AprilUndOktober");

  for (let i = 0; i < AUO.length; i++) {

    const element = AUO[i];

    element.style.fontWeight = "bolder";

    element.style.fontSize = "1.1em";

    }

}else if(todaysMonth == 1 || todaysMonth == 2 || todaysMonth == 3 || todaysMonth == 11 || todaysMonth == 12){

  const NBM = document.getElementsByClassName("NovemberBisMärz");

  for (let i = 0; i < NBM.length; i++) {

    const element = NBM[i];

    element.style.fontWeight = "bolder";

    element.style.fontSize = "1.1em";

    }

}

});