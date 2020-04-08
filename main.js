/**
 * ESERCIZIO CHE PREVEDE DI MOSTRARE E NASCONDERE L'HAMBURGER A RISOLUZIONE <= 1000PX ALL'EVENTO DEL CLICK
 */
/**
 * PSEUDO CODICE
 * TARGHETIZZO L'ELEMENTO
 * APPLICO UN'AZIONE (CLICK)
 * SELEZIONO L'ELEMENTO (IN QUESTO CASO LA CLASSE DA MOSTRARE)
 * APPLICO IL METODO
 * 
 */
$('.header-right a[href]').click( function() {
  $('.hamburger-menu').show(1000);
});

$('.hamburger-menu a.close').click ( function() {
$('.hamburger-menu').hide(1500);
});