var urlLink = document.baseURI;
var urlArr = urlLink.split('\/');
var headLinkArr = document.getElementsByClassName('navlink');
var imgSvg = "<img src=\"stylesheets\\Images\\header\\menuArrow.svg\" alt=\"currentMenuItemIcon\" class=\"currentHeadLink\">";
var headArr = ['home', 'bio', 'music', 'tour', 'gallery', 'contact'];

// Get the last part of the URL
function getPageName(arr) {
    return arr[arr.length - 1];
}

let currentPage = getPageName(urlArr);

// Compare the header links to the current page and set a style for the link that matches
for (step = 0; step < headLinkArr.length; step ++) {
    var headElem = headLinkArr.item(step);
    var spanElem = document.getElementById('span' + headArr[step]);
    var spanImgElem = document.createElement('span');
    var spanImgElemId = document.createAttribute('id');
    
    if ( currentPage === headElem.getAttribute('href')) {
        headElem.setAttribute('id', 'currentPage');
        spanImgElem.setAttribute('id', 'currentPageImg');
        spanElem.insertAdjacentElement('beforebegin', spanImgElem);
        spanImgElem.insertAdjacentHTML('afterbegin', imgSvg);
    }
}
