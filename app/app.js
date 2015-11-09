var app = angular.module('myApp', ['ngAnimate']);

app.controller('MyCtrl', function($scope) {
    
    console.log("Loading controller MyCtrl");

    $scope.nouvelEleve = {};
    $scope.listeEleves = [];
    
    $scope.ajouterEleve = function () {
        log("Elève ajouté");
    	// TODO : code pour ajouter un élève
    };
    
    $scope.supprimerEleve = function () {
        log("Elève supprimé");
        // // TODO : code pour supprimer un élève
    };
    
    // Cette fonction donne l'heure
    var getTime = function() {
     	var currentdate = new Date(); 
		return currentdate.getHours() + ":"  
             + currentdate.getMinutes() + ":" 
             + currentdate.getSeconds() + ":" 
             + currentdate.getMilliseconds();  
    }
    
    // cette fonction permet d'afficher un message sur la console avec l'heure d'affichage
    var log = function(text) {
        console.log("[" + getTime() + "] " + text);
    }
});
