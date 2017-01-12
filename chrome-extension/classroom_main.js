var tableBody = document.getElementById('coursesTable').getElementsByTagName('TBODY')[0];

var foundClasses = [];

for (var i = 0; i < tableBody.children.length; i++) {
    var link = tableBody.children[i].getElementsByTagName('TD')[0].getElementsByTagName('A')[0];
    var term = tableBody.children[i].getElementsByTagName('TD')[2].innerHTML;
    foundClasses.push({
        name: link.innerText.replace(/\s*\(.*\)/, ''),
        url: link.href,
        term: term
    });
}

console.log("Eli's Extension: ", tableBody, foundClasses);

var bodyNode = document.getElementsByTagName("BODY")[0];

// Remove that nasty DOM 
while (bodyNode.firstChild) {
    bodyNode.removeChild(bodyNode.firstChild);
}

var ourStylesheetHref = "inject.css";

// Remove Those Horrendus Styles Sheets
Array.prototype.forEach.call(document.querySelectorAll('style,[rel="stylesheet"],[type="text/css"]'), function(element) {
    try {
        if (ourStylesheetHref !== element.href) {
            element.parentNode.removeChild(element);
        }
    } catch (err) {}
});

bodyNode.innerHTML = "\n    <div class=\"container\">\n        \n        <br>\n\n        <div class=\"jumbotron\">\n            <h1>Edit Class Shortcuts</h1>\n            <p>Edit classes shortcuts at home of better banner by cilcking on the buttons beside the class name.</p><p>This used to work all in one page until MSU started blocking iframe between my.msstate and mycourses.msstate origins :(</p>\n            <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" onclick=\"window.open('https://mycourses.msstate.edu','_self')\">Back to Main Page</a></p>\n        </div>\n\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Class Name</th>\n                    <th>Term</th>\n                </tr>\n            </thead>\n            <tbody  id=\"newTable\">\n            </tbody>\n        </table>\n\n        <h3>Don't make fun of me using bootstrap I realized this was broken at 3am before school starts. This is a 2 hour fix until I think of a better solution</h3>\n        <h4>All because the schools blocking iframe access to break my Extension (which is breaking parts of their own site). But they forget I can inject my code wherever.</h4>\n    \n    </div>\n";

function addClass(name, url, selected) {
    console.log('add class: ', name, url);
    for (var i = 0; i < selected.length; i++) {
        if (selected[i].name == name && selected[i].url == url) {
            return;
        }
    }
    selected.push({
        name: name,
        url: url
    });
    updateStorage(selected);
}

function removeClass(name, url, selected) {
    console.log('removeClass : ', name, url);
    for (var i = 0; i < selected.length; i++) {
        if (selected[i].name == name && selected[i].url == url) {
            selected.splice(i, 1);
            updateStorage(selected);
            return;
        }
    }
}

function updateStorage(classes) {
    chrome.storage.sync.set({ 'MyCourses': classes }, function() {
        console.log('Settings saved');

        chrome.storage.sync.get('MyCourses', function(classes) {
            console.log('Settings loaded', classes);
            setClasses(foundClasses, classes.MyCourses);
        });

    });
}

function setClasses(classes, selected) {

    selected = selected || [];

    document.getElementById('newTable').innerHTML = '';

    classes.forEach(function(schoolClass) {

        var added = false;
        for (var i = 0; i < selected.length; i++) {
            if (selected[i].name == schoolClass.name && selected[i].url == schoolClass.url) {
                added = true;
            }
        }

        var row = document.createElement("TR");

        row.innerHTML += '\n        <tr>\n            <td><a href="' + schoolClass.url + '">' + schoolClass.name + '</a></td>\n            <td>' + schoolClass.term + '</td>\n            <td>\n                <button\n                    class="btn btn-' + (added ? 'warning' : 'success') + '">\n                    ' + (added ? 'Remove from' : 'Add to') + ' Homescreen\n                </button>\n            </td>\n        </tr>\n    ';

        row.children[2].children[0].onclick = function() {
            if (added) {
                removeClass(schoolClass.name, schoolClass.url, selected);
            } else {
                addClass(schoolClass.name, schoolClass.url, selected);
            }
        };

        document.getElementById('newTable').appendChild(row);

    });

}

chrome.storage.sync.get('MyCourses', function(classes) {
    console.log('Settings loaded', classes);
    setClasses(foundClasses, classes.MyCourses);
});

document.body.style.display = "block";