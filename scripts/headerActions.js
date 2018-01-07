var urlLink = document.baseURI;
var urlArr = urlLink.split('\/');
var headLinkArr = document.getElementsByClassName('navlink');

// Get the last part of the URL
function getPageName(arr) {
    return arr[arr.length - 1];
}

let currentPage = getPageName(urlArr);

// Compare the header links to the current page and set a style for the link that matches
for (step = 0; step < headLinkArr.length; step ++) {
    var headElem = headLinkArr.item(step);
    console.log(headElem);
    if ( currentPage === headElem.getAttribute('href')) {
        headElem.setAttribute('id', 'currentPage');
    }
}
