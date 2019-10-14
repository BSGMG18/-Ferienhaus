document.addEventListener('DOMContentLoaded', function() {


  /****************************************************************** */
  //Sidebar
  /****************************************************************** */
  let elemsSidenav = document.querySelectorAll('.sidenav');
  let instancesSidenav = M.Sidenav.init(elemsSidenav);


  /****************************************************************** */
  //Materialbox Images
  /****************************************************************** */
  let elemsMaterialbox = document.querySelectorAll('.materialboxed');
  let instancesMaterialboxed = M.Materialbox.init(elemsMaterialbox)
  const materialboxImages = document.querySelectorAll(".materialboxed");
  for (let i = 0; i < materialboxImages.length; i++) {
    const materialboxImage = materialboxImages[i];
    materialboxImage.addEventListener('click', ()=>{
      materialboxImage.style.boxShadow = "none";
    })
    materialboxImage.addEventListener('mouseover', ()=>{
        let x = document.querySelector(".Haus1");
        let y = document.querySelector(".Haus2");
        let z = document.querySelector(".Haus3");
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
  let elemsCollapsible = document.querySelectorAll('.collapsible');
  let instancesCollapsible = M.Collapsible.init(elemsCollapsible);


  /****************************************************************** */
  //NavBar
  /****************************************************************** */
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if(currentScrollPos > 60){
      if ((prevScrollpos) > (currentScrollPos)) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
    }
    prevScrollpos = currentScrollPos;
    let windowHeight = window.innerHeight;
    let currentScrollPos2 = window.pageYOffset;
    let mobile_nav1 = document.getElementById("1-mobile");
    let mobile_nav2 = document.getElementById("2-mobile");
    let mobile_nav3 = document.getElementById("3-mobile");
    let mobile_nav4 = document.getElementById("4-mobile");
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    let nav4 = document.getElementById("4");
    if(currentScrollPos2 < windowHeight){
      mobile_nav1.classList.add("active-mobile");
      mobile_nav2.classList.remove("active-mobile");
      mobile_nav3.classList.remove("active-mobile");
      mobile_nav4.classList.remove("active-mobile");
      nav1.classList.add("underline");
      nav2.classList.remove("underline");
      nav3.classList.remove("underline");
      nav4.classList.remove("underline");
    }else if(currentScrollPos2 > windowHeight && currentScrollPos2 < (windowHeight * 2)){
      mobile_nav1.classList.remove("active-mobile");
      mobile_nav2.classList.add("active-mobile");
      mobile_nav3.classList.remove("active-mobile");
      mobile_nav4.classList.remove("active-mobile");
      nav1.classList.remove("underline");
      nav2.classList.add("underline");
      nav3.classList.remove("underline");
      nav4.classList.remove("underline");
    }else if(currentScrollPos2 > (windowHeight * 2) && currentScrollPos2 < (windowHeight * 3)){
      mobile_nav1.classList.remove("active-mobile");
      mobile_nav2.classList.remove("active-mobile");
      mobile_nav3.classList.add("active-mobile");
      mobile_nav4.classList.remove("active-mobile");
      nav1.classList.remove("underline");
      nav2.classList.remove("underline");
      nav3.classList.add("underline");
      nav4.classList.remove("underline");
    }else if(currentScrollPos2 > (windowHeight * 3) && currentScrollPos2 < (windowHeight * 4)){
      mobile_nav1.classList.remove("active-mobile");
      mobile_nav2.classList.remove("active-mobile");
      mobile_nav3.classList.remove("active-mobile");
      mobile_nav4.classList.add("active-mobile");
      nav1.classList.remove("underline");
      nav2.classList.remove("underline");
      nav3.classList.remove("underline");
      nav4.classList.add("underline");
    }
  }


  /****************************************************************** */
  //Form Datepicker
  /****************************************************************** */
  let elemsDatepicker = document.querySelectorAll('.datepicker');
  let t = new Date();
  let dd = String(t.getDate());
  let mm = String(t.getMonth());
  let yyyy = t.getFullYear();
  let today = new Date(yyyy, mm, dd);
  let instancesDatepicker = M.Datepicker.init(elemsDatepicker,{
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
  let date = new Date();
  let todaysMonth = String(date.getMonth() + 1);
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
