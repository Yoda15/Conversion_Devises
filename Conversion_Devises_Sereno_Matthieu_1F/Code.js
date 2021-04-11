function validation(){
  var valeurdepart = document.getElementById('money').value;
  var devisesdepart = document.getElementById('devisesdepart').value;
  var devisesarrive = document.getElementById('devisesarrive').value;
  var valeur = document.getElementById(devisesdepart + "_" + devisesarrive).innerHTML;
  var valeurarrive = parseFloat(valeurdepart)*parseFloat(valeur);
  alert(valeurdepart + " " + devisesdepart + " est égal à " + valeurarrive + " " + devisesarrive);
}
