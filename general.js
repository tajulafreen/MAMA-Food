const hambur = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-section');
const hide = document.querySelector('.hide');
const logo = document.querySelector('.logo');

hambur.onclick = function myfunction() {
  menu.classList.toggle('active');
  hambur.classList.toggle('active');
  logo.classList.toggle('active');
  hide.classList.toggle('active');
};
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hambur.classList.remove('active');
  menu.classList.remove('active');
  logo.classList.remove('active');
  hide.classList.remove('active');
}));

const chef = [
  {
    name: 'Nancy Robert',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image.png',
  },
  {
    name: 'vikry khan',
    title: 'Teachers his india cusine ',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-2.png',
  },
  {
    name: 'kwame morsi',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-3.png',
  },
  {
    name: 'francis diaro',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-4.png',
  },
  {
    name: 'miaya kianu',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-5.png',
  },
  {
    name: 'eriz komaro',
    title: 'Teachers her California cuisine',
    about: 'Join Nancy on a culinary journey and, seasonal, and delicious Californian-Italian cooking style.',
    Image: './chef-image-6.png',
  },
];

const container = document.querySelector('.empty-container');
const teacher = () => {
  const card = document.createElement('div');
  card.classList = 'teacher-item';
  card.innerHTML += `
   <ul class="card-container">
   <li>
   <img src="${chef.Image}" alt="image" class="chef-image">
   </li>
   <li>
   <ul class="teach-text">
   <li>${chef.name}</li>
   <li>${chef.title}</li>
   <li>${chef.about}</li>
   </ul>
   </li>
   </ul>
   `;
  container.appendChild(card);
};
chef.forEach((e) => {
  teacher(e);
});