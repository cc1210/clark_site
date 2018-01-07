var headArr = ['Home', 'Bio', 'Music', 'Tour', 'Gallery', 'Contact'];

var headTbl = document.getElementById('header');
var headDiv = document.createElement('div');
var headClass = document.createAttribute('class');
var headEl = document.getElementsByTagName('head').item(0);
var parent = headTbl.parentNode;

// set the class of the new div
headClass.value = 'headerDiv';
headDiv.setAttributeNode(headClass);

function addFont(font) {
    let link = document.createElement('link');
    let relAttr = document.createAttribute('rel');
    let hrefAttr = document.createAttribute('href');
    
    relAttr.value = 'stylesheet';
    hrefAttr.value = 'https://fonts.googleapis.com/css?family=' + font;
    link.setAttributeNode(relAttr);
    link.setAttributeNode(hrefAttr);
    return link;
}

function addElement(parentElement, newElement) {
    parentElement.appendChild(newElement);
}

addElement(headEl, addFont("Lobster")); 

// set the div wrapper as a replacement child for table
parent.replaceChild(headDiv, headTbl);

// set table as the child of the div container
headDiv.appendChild(headTbl);

headArr.forEach(function(element) {
    let tbleH = document.createElement('th');
    let anchor = document.createElement('a');
    let menuItem = element.toUpperCase();
    let table = document.getElementById('header');
    let attr = document.createAttribute('href');
    let aClass = document.createAttribute('class');
    let text = document.createTextNode(menuItem);
    
    table.appendChild(tbleH);
    tbleH.appendChild(anchor);
    
    attr.value = 'clark' + element + '.html';
    aClass.value = 'navlink';
    anchor.setAttributeNode(attr);
    anchor.setAttributeNode(aClass);
    anchor.appendChild(text);
    
});