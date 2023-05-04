let tableData = [
  { jmeno: "CSS young Boy", datumNarozeni: "17.12.2000", placeOfResidence: "Los Santos", telefoniCislo: "420544842", vek: 23 },
  { jmeno: "Script Girl", datumNarozeni: "25.4.1998", placeOfResidence: "Cyberpunk", telefoniCislo: "123456789", vek: 24 },
  { jmeno: "IT Man", datumNarozeni: "25.4.1998", placeOfResidence: "New down Vegas", telefoniCislo: "871514589", vek: 24 }
 ];

function addUser(){
  let nazev = document.getElementById("nazev").value;
  let datum = document.getElementById("datum").value;
  let bydliste = document.getElementById("bydliste").value;
  let telefon = document.getElementById("telefon").value;
  let vek = document.getElementById("vek").value;
  let novaOsoba = { jmeno: nazev, datumNarozeni: datum, placeOfResidence: bydliste, telefoniCislo: telefon, vek: vek };
  tableData.push(novaOsoba);
  console.log(tableData)
  myFunction();
}


function myFunction() {
  var table = document.getElementById("myTable");
  table.innerHTML = "<tr><td>Jméno a přijmení</td><td>Datum narození</td><td>Místo bydliště</td><td>Telefoní kontakt</td><td>věk</td></tr>";
  for (entity in tableData) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = tableData[entity]['jmeno'];
    var cell2 = row.insertCell(1);
    cell2.innerHTML = tableData[entity]['datumNarozeni'];
    var cell3 = row.insertCell(2);
    cell3.innerHTML = tableData[entity]['placeOfResidence'];
    var cell4 = row.insertCell(3);
    cell4.innerHTML = tableData[entity]['telefoniCislo'];
    var cell5 = row.insertCell(4);
    cell5.innerHTML = tableData[entity]['vek'];
  }
}



