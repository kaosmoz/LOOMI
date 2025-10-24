const boutonBurger = document.getElementById('bouton-burger');
const menuMobile = document.getElementById('menu-mobile');

boutonBurger.addEventListener('click', () => {
  menuMobile.classList.toggle('ouvert');
});



// Gestion du clic à l’extérieur de la sidebar
document.addEventListener('click', (event) => {
  const isClickInsideMenuMobile = menuMobile.contains(event.target);
  const isClickOnBoutonBurger = boutonBurger.contains(event.target);

  // Si le clic n'est ni sur la sidebar, ni sur le bouton, on la ferme
  if (!isClickInsideMenuMobile && !isClickOnBoutonBurger) {
    menuMobile.classList.remove('ouvert');
  }
});


// Gestion ouverture/fermeture side bar messagerie

// Sélection des éléments
const boutonMessagerie = document.getElementById('bouton-message'); // bouton dans la navbar
const barreMessagerie = document.getElementById('sidebar-message'); // sidebar
const boutonFermer = document.getElementById('fermer-sidebar'); // bouton ✖

// Ouvrir la sidebar quand on clique sur le bouton messagerie
boutonMessagerie.addEventListener('click', () => {
  barreMessagerie.classList.add('active');
  boutonMessagerie.classList.add('disparu'); 
});

// Fermer la sidebar avec le bouton "x"
boutonFermer.addEventListener('click', () => {
  barreMessagerie.classList.remove('active');
  boutonMessagerie.classList.remove('disparu'); 
});

// Fermer la sidebar en cliquant n'importe où en dehors
document.addEventListener('click', (e) => {
  if (!barreMessagerie.contains(e.target) && !boutonMessagerie.contains(e.target)) {
    barreMessagerie.classList.remove('active');
    boutonMessagerie.classList.remove('disparu'); 
  }
});
