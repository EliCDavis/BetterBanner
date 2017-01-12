/**
 * This should be injected into pages that the user might want to be redirected
 * back to the extensions injections but we're not sure=
 * 
 * Eli
 * 
 */

console.log("Wrong page!");
var elementToInstert = document.createElement("div");
elementToInstert.innerHTML = "<center><h1 style='display:inline'><a href='https://mycourses.msstate.edu/'>Go To Better Banner</a></h1><h3 onclick='self.parentNode.parentNode.removeChild(self.parentNode.parentNode)'></h3></center>";
document.body.insertBefore(elementToInstert, document.body.firstChild)