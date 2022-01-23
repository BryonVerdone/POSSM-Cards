//array of members

const members = [
  {
    name: 'Earl',
    job: 'Vocals & Guitar',
    img: './photos/Earl.jpg',
    text: 'Earl is a high school Health and PE teacher who for some reason decided it was a good idea to learn how to play guitar and then sing in front of people. Having no social awareness he then formed a band and made his friends and family pretend to be fans. Earl is having a blast being a part of POSSM, surfing whenever possible and hanging out with his wife Jane and 6 year-old daughter Lillian. He is the oldest member of the band… but just barely.',
  },
  {
    name: 'Jer',
    job: 'Vocals & Guitar',
    img: './photos/Jer.jpeg',
    text: `A former high school student of Earl's, he spends most of his free time swiping right on Tinder and driving from Mansfield to play shows in Hartford. Jeremy is POSSM's Bass and sometimes lead guitar player and reels in the cougars with his sexy riffs and sweet sweet vocals. Jer has earned his masters in Spanish from ECSU and recently returned from a sabbatical living and working in Central America to immerse himself in the language and culture.`,
  },
  {
    name: 'Craig',
    job: 'Guitar',
    img: './photos/craig.jpg',
    text: 'Craig has been in the POSSM orbit for the last few years adding noises to their sound. He has also spent a lot of nights making music in his basement and catching live music whenever possible. Aside from his musical endeavors, Craig loves spending time with his family and thanks them for putting up with his attempting to realize his adolescent rock and roll dreams.',
  },
  {
    name: 'Ben',
    job: 'Drums',
    img: './photos/Ben.jpg',
    text: 'Ben earned his graduate degree from The Hartt School of Music in composition and holds a degree in percussion which makes him wildly underqualified to hold any job in the real world and wildly overqualified to play in POSSM. Ben moved to Connecticut from Colorado and has since grown a fantastic mustache. Ben has fallen in love with the Hartford community and appreciates the opportunity play fun music with guys that are almost as handsome as he is.',
  },
  {
    name: 'Dave',
    job: 'percussion,keys',
    img: './photos/Dave.jpg',
    text: 'He shakes stuff and makes things go peep boop bop ',
  },
  {
    name: 'Bryon',
    job: 'Bass',
    img: './photos/Bryon.jpg',
    text: 'The latest and youngest addition to the band Bryon was somehow convinced to play bass for us ',
  },
];

// select items

const img = document.getElementById('img');
const person = document.getElementById('person');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
// set starting item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});
let currentItem = 0;

function showPerson(member) {
  const item = members[member];
  img.src = item.img;
  person.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > members.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = members.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * members.length);
  showPerson(currentItem);
});
