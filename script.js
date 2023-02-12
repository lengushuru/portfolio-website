// code for the mobile menu

const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => navMenu.classList.remove('show'));

const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach((n) => n.addEventListener('click', () => navMenu.classList.remove('show')));

// code for work section
// Array of objects for the projects in the portfolio

const Portfolio = [
  {
    id: 'zero',
    modal_class: 'modal_class0',
    project_img:'./images/university-tech.png',
    close_popup: 'close-popup0',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby on Rails'],
    seeLive: 'https://lengushuru.github.io/samburu-tech-week/',
    seePeoject: 'https://github.com/lengushuru/samburu-tech-week',
  },
  {
    id: 'first',
    modal_class: 'modal_class1',
    project_img:'./images/work2.png',
    close_popup: 'close-popup1',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby on Rails'],
    seeLive: 'https://lengushuru.github.io/Lengushuru-portfolio/',
    seePeoject: '#',
  },
  {
    id: 'second',
    modal_class: 'modal_class2',
    close_popup: 'close-popup2',
    project_img:'./images/university-tech.png',
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: '#',
    seePeoject: '#',
  },
  {
    id: 'third',
    modal_class: 'modal_class3',
    project_img:'./images/university-tech.png',
    close_popup: 'close-popup3',
    title: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard some additional text will be added later',
    technologies: ['HTML', 'CSS', 'Javasript'],
    seeLive: '#',
    seePeoject: '#',
  },
  {
    id: 'fourth',
    close_popup: 'close-popup4',
    project_img:'./images/university-tech.png',
    modal_class: 'modal_class4',
    title: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['HTML', 'CSS', 'Javasript'],
    seeLive: '#',
    seePeoject: '#',
  },
  {
    id: 'fifth',
    close_popup: 'close-popup5',
    project_img:'./images/university-tech.png',
    modal_class: 'modal_class5',
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['HTML', 'CSS', 'Javasript'],
    seeLive: '#',
    seePeoject: '#',
  },
  {
    id: 'sixth',
    close_popup: 'close-popup6',
    project_img:'./images/university-tech.png',
    modal_class: 'modal_class6',
    title: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['HTML', 'CSS', 'Javasript'],
    seeLive: '#',
    seePeoject: '#',
  },
];

const topCard = document.createElement('div');
topCard.innerHTML = `
<div class="work-title">
<h2>My Resent work</h2>
<div></div>
</div>
<div class="container">
<div class="work1">

</div>

<div class="card"></div>

</div>
`;
document.querySelector('.portfolio').appendChild(topCard);
const cards = document.querySelector('.card');

// create a card for each project in the portfolio array
// and append it to the cards div in the html file
Portfolio.forEach((project) => {
  // map through the languages array and create a list
  // item for each language and join them together to form a string
  const stack = project.technologies.map((lang) => `<li>${lang}</li>`).join('');
  if (project.id === 'zero') {
    const background = document.createElement('div');
    background.className = 'background';
    document.querySelector('.work1').appendChild(background);

    const headCard = document.createElement('div');
    headCard.className = 'work1-text';
    headCard.innerHTML = `

  <h3 class="work-subtitle">Multi-Post Stories</h3>
    <p class="works-desk">A daily selection of privately personalized reads; no accounts or sign-ups required. has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy
      text.</p>
      <ul class="lang-list">
      <li>css</li>
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
    <a href="#" id = ${`${project.id}1`}>see project</a>
  `;
    document.querySelector('.work1').appendChild(headCard);
  } else {
    const card = document.createElement('div');
    card.classList.add('other-works');
    card.innerHTML = `
            <h3 class="card-subtitle2">${project.title}</h3>
            <p class="card-text2">${project.description}</p>
            <ul class="lang-list2">
            ${stack}
           </ul>
           <div class="prj-link" id = ${`${project.id}1`}><a class=''>See project</a></div>`;
    cards.appendChild(card);
    document.querySelector('.card').appendChild(card);
  }
});

// modal window

Portfolio.forEach((project) => {
  // map through the languages array and create
  // a list item for each language and join them together to form a string
  const stack = project.technologies.map((lang) => `<li>${lang}</li>`).join('');
  const modal = document.createElement('div');
  cards.appendChild(modal);
  const popup = document.createElement('div');
  popup.id = project.id;
  popup.innerHTML = `
  <div class=${project.modal_class}>
    <div class="modal-top">
      <h2 class="modal-title">${project.title}</h2>
      <img  src="images/close_btn.png" id = ${project.close_popup} alt="">
    </div>
    <ul class="list_height">
      ${stack}
    </ul>
    <div class="modal-main">
      <img class="modal-img"  src=${project.project_img} alt="">
      <div class="text-btns">
        <p>${project.description}</p>
        <div class="modal-btn">
          <div class="modal-btns">
            <div class="prj-btn">
              <a href= ${project.seeLive}>See Live</a>
              <img src="images/see-live.png" alt="">
            </div>
            <div class="prj-btn">
              <a  href=${project.seePeoject}>See Source</a>
              <img src="images/see-source.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  modal.appendChild(popup);
});

// code for showing popup window when clicking on the
// project card in the work section of the portfolio page
const openPopup0 = document.getElementById('zero1');
const openPopup1 = document.getElementById('first1');
const openPopup2 = document.getElementById('second1');
const openPopup3 = document.getElementById('third1');
const openPopup4 = document.getElementById('fourth1');
const openPopup5 = document.getElementById('fifth1');
const openPopup6 = document.getElementById('sixth1');

const popup0 = document.getElementById('zero');
const popup1 = document.getElementById('first');
const popup2 = document.getElementById('second');
const popup3 = document.getElementById('third');
const popup4 = document.getElementById('fourth');
const popup5 = document.getElementById('fifth');
const popup6 = document.getElementById('sixth');

openPopup0.addEventListener('click', () => {
  popup0.style.display = 'flex';
  document.querySelector('.modal_class0').style.display = 'flex';
});

openPopup1.addEventListener('click', () => {
  popup1.style.display = 'flex';
  document.querySelector('.modal_class1').style.display = 'flex';
});

openPopup2.addEventListener('click', () => {
  popup2.style.display = 'flex';
  document.querySelector('.modal_class2').style.display = 'flex';
});

openPopup3.addEventListener('click', () => {
  popup3.style.display = 'flex';
  document.querySelector('.modal_class3').style.display = 'flex';
});

openPopup4.addEventListener('click', () => {
  popup4.style.display = 'flex';
  document.querySelector('.modal_class4').style.display = 'flex';
});

openPopup5.addEventListener('click', () => {
  popup5.style.display = 'flex';
  document.querySelector('.modal_class5').style.display = 'flex';
});

openPopup6.addEventListener('click', () => {
  popup6.style.display = 'flex';
  document.querySelector('.modal_class6').style.display = 'flex';
});

// code for closing popup window when clicking on the close button

const closePopup1 = document.getElementById('close-popup1');
const closePopup0 = document.getElementById('close-popup0');
const closePopup2 = document.getElementById('close-popup2');
const closePopup3 = document.getElementById('close-popup3');
const closePopup4 = document.getElementById('close-popup4');
const closePopup5 = document.getElementById('close-popup5');
const closePopup6 = document.getElementById('close-popup6');

closePopup0.addEventListener('click', () => {
  popup0.style.display = 'none';
  document.querySelector('.modal_class0').style.display = 'none';
});

closePopup1.addEventListener('click', () => {
  popup1.style.display = 'none';
  document.querySelector('.modal_class1').style.display = 'none';
});

closePopup2.addEventListener('click', () => {
  popup2.style.display = 'none';
  document.querySelector('.modal_class2').style.display = 'none';
});

closePopup3.addEventListener('click', () => {
  popup3.style.display = 'none';
  document.querySelector('.modal_class3').style.display = 'none';
});

closePopup4.addEventListener('click', () => {
  popup4.style.display = 'none';
  document.querySelector('.modal_class4').style.display = 'none';
});

closePopup5.addEventListener('click', () => {
  popup5.style.display = 'none';
  document.querySelector('.modal_class5').style.display = 'none';
});

closePopup6.addEventListener('click', () => {
  popup6.style.display = 'none';
  document.querySelector('.modal_class6').style.display = 'none';
});

const contactForm = document.getElementById('form');
contactForm.addEventListener('submit', (event) => {
  const emailInput = document.getElementById('email');
  const errorMsg = document.querySelector('.error');

  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.style.display = 'flex';
  } else {
    errorMsg.style.display = 'none';
    contactForm.submit();
  }
});

//q: to merge two git branches
//git checkout master
//git merge feature
//git push origin master

