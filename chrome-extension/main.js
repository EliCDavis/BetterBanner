

var tableBody = document.getElementById('coursesTable').getElementsByTagName('TBODY')[0];

console.log("Eli's Extension: ", tableBody);

var foundClasses = [];

for (var i = 0; i < tableBody.children.length; i++) {
    var link = tableBody.children[i].getElementsByTagName('TD')[0].getElementsByTagName('A')[0];
    foundClasses.push({
        name: link.innerText.replace(/\s*\(.*\)/, ''),
        url: link.href
    });
}