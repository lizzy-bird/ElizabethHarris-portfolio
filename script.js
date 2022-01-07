// * Fixed Nav Background * //

//select the header
headerNav = document.getElementById("headerNav");

//when the user scrolls away from the top of the page, run headerBackground function to give it a background colour
window.addEventListener('scroll', headerBackground);

function headerBackground() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
  headerNav.style.backgroundColor = "var(--nav-bg)";
  headerNav.style.color = "var(--text-color)";
  } else {
    headerNav.style.backgroundColor = "transparent";
  }  
}

// * Scroll to top button * //
// From W3 Schools //

//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mybutton.addEventListener('click', topFunction);

// * Theme Changer * //
// create a variable for the toggle
// listen for when the toggle is clicked
// when the toggle is clicked, update variables to different colours and add a new event listener to catch the next click and update again (ad nauseum)

const toggle = document.getElementById('colorToggle');

toggle.addEventListener('click', handleClick);

function handleClick () {
  console.log('light mode')
  document.documentElement.style.setProperty('--bgcolor', '#dbd4c7');
  document.documentElement.style.setProperty('--nav-bg', 'rgba(219, 212, 199, 0.9)');
  document.documentElement.style.setProperty('--text-color', '#414252');
  document.documentElement.style.setProperty('--nav-color', '#414252');
  document.documentElement.style.setProperty('--secondary-color', '#f7fbf8');
  document.documentElement.style.setProperty('--accent-color', '#ab8979');
  document.documentElement.style.setProperty('--button-color', '#695b6f');
  document.documentElement.style.setProperty('--glow-color', 'rgba(171, 137, 121, 0.7) 0px 0px 30px');
  document.documentElement.style.setProperty('--h1-shadow', '4px 1px 8px #f7fbf8');
  document.documentElement.style.setProperty('--header-gradient', 'linear-gradient(28deg, rgba(105,91,111,1) 13%, rgba(171,137,121,1) 30%, rgba(219,212,199,1) 67%, rgba(105,91,111,1) 93%')
  document.documentElement.style.setProperty('--project-border', 'linear-gradient(28deg, rgba(105,91,111,1) 13%, rgba(171,137,121,1) 23%, rgba(255,255,255,1) 66%, rgba(105,91,111,1) 93%)');
  document.documentElement.style.setProperty('--background-image', '#dbd4c7');
  toggle.addEventListener('click', handleSecondClick);
}

function handleSecondClick () {
  // console.log('winter')
  document.documentElement.style.setProperty('--bgcolor', '#dcddd8');
  document.documentElement.style.setProperty('--nav-bg', 'rgba(220, 221, 216, 0.9)');
  document.documentElement.style.setProperty('--text-color', '#273333');
  document.documentElement.style.setProperty('--nav-color', '#273333');
  document.documentElement.style.setProperty('--secondary-color', '#779897');
  document.documentElement.style.setProperty('--accent-color', '#526a64');
  document.documentElement.style.setProperty('--button-color', '#3d0c15');
  document.documentElement.style.setProperty('--glow-color', 'rgba(220, 221, 216, 0.7) 0px 0px 30px');
  document.documentElement.style.setProperty('--h1-shadow', '4px 1px 8px #dcddd8');
  document.documentElement.style.setProperty('--header-gradient', 'linear-gradient(28deg, rgba(220,221,216,1) 5%, rgba(175,197,191,1) 25%, rgba(119,152,151,1) 62%, rgba(82,106,100,1) 74%, rgba(39,51,51,1) 88%)')
  document.documentElement.style.setProperty('--project-border', 'linear-gradient(28deg, rgba(175,197,191,1) 5%, rgba(119,152,151,1) 25%, rgba(82,106,100,1) 49%, rgba(39,51,51,1) 80%');
  document.documentElement.style.setProperty('--background-image', 'url("../files/snowBackground.png")');
  toggle.addEventListener('click', handleThirdClick);
}

function handleThirdClick () {
  // console.log('retro rainbow')
  document.documentElement.style.setProperty('--bgcolor', '#eca172');
  document.documentElement.style.setProperty('--nav-bg', 'rgba(231, 44, 44, 0.9)');
  document.documentElement.style.setProperty('--text-color', '#026a81');
  document.documentElement.style.setProperty('--nav-color', '#eed1b0');
  document.documentElement.style.setProperty('--secondary-color', '#eed1b0');
  document.documentElement.style.setProperty('--accent-color', '#00868f');
  document.documentElement.style.setProperty('--button-color', '#e72c2c');
  document.documentElement.style.setProperty('--glow-color', 'rgba(	0, 134, 143, 0.7) 0px 0px 30px')
  document.documentElement.style.setProperty('--h1-shadow', '4px 1px 8px #eed1b0');
  document.documentElement.style.setProperty('--header-gradient', 'linear-gradient(166deg, rgba(2,106,129,1) 25%, rgba(231,44,44,1) 75%)')
  document.documentElement.style.setProperty('--project-border', 'linear-gradient(166deg, rgba(2,106,129,1) 25%, rgba(231,44,44,1) 75%)');
  document.documentElement.style.setProperty('--background-image', '#eed1b0');
  toggle.addEventListener('click', handleFourthClick);
}

function handleFourthClick () {
  // console.log('soft neutral');
  document.documentElement.style.setProperty('--bgcolor', '#f4eeed');
  document.documentElement.style.setProperty('--nav-bg', 'rgba(244, 238, 237, 0.9)');
  document.documentElement.style.setProperty('--text-color', '#9b8585');
  document.documentElement.style.setProperty('--nav-color', '#000000');
  document.documentElement.style.setProperty('--secondary-color', '#efd9d1');
  document.documentElement.style.setProperty('--accent-color', '#ddb7ab');
  document.documentElement.style.setProperty('--button-color', '#999b84');
  document.documentElement.style.setProperty('--glow-color', 'rgba(	0, 0, 0, 0.7) 0px 0px 30px')
  document.documentElement.style.setProperty('--h1-shadow', '4px 1px 8px #000000');

  document.documentElement.style.setProperty('--header-gradient', 'radial-gradient(circle, rgba(244,238,237,1) 0%, rgba(153,155,132,1) 55%)')
  document.documentElement.style.setProperty('--project-border', 'linear-gradient(32deg, rgba(155,133,133,1) 20%, rgba(153,155,132,1) 55%, rgba(221,183,171,1) 86%)');
  document.documentElement.style.setProperty('--background-image', '#999b84');
  toggle.addEventListener('click', handleFifthClick);
}

function handleFifthClick () {
  // console.log('spooky')
  document.documentElement.style.setProperty('--bgcolor', 'black');
  document.documentElement.style.setProperty('--nav-bg', 'rgba(0, 255, 0, 0.9)');
  document.documentElement.style.setProperty('--text-color', 'white');
  document.documentElement.style.setProperty('--secondary-color', 'white');
  document.documentElement.style.setProperty('--accent-color', 'orange');
  document.documentElement.style.setProperty('--button-color', 'purple');
  document.documentElement.style.setProperty('--glow-color', 'rgba(0, 128, 0, 0.7) 0px 0px 30px')
  document.documentElement.style.setProperty('--header-gradient', 'linear-gradient(28deg, rgba(255,165,0,1) 13%, rgba(111,0,185,1) 69%, rgba(46,209,0,1) 95%)')
  document.documentElement.style.setProperty('--project-border', 'linear-gradient(28deg, rgba(255,165,0,1) 13%, rgba(111,0,185,1) 69%, rgba(46,209,0,1) 95%)');
  document.documentElement.style.setProperty('--background-image', 'url("../files/spookyBackground.png")');
  // document.documentElement.style.setProperty('--header-font', "'Nosifer', cursive");
  toggle.addEventListener('click', handleFinalClick);
}

function handleFinalClick() {
  document.location.reload();
}



