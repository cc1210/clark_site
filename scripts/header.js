var headArr = ['Home', 'Bio', 'Music', 'Tour', 'Gallery', 'Contact'];

//var headTbl = document.getElementById('header');
//var headDiv = document.createElement('div');
var headDiv = document.getElementById('headerDiv');
//var headClass = document.createAttribute('class');
var headEl = document.getElementsByTagName('head').item(0);
//var parent = headTbl.parentNode;

// set the class of the new div
//headClass.value = 'headerDiv';
//headDiv.setAttributeNode(headClass);

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
addElement(headEl, addFont("Ropa+Sans"));

// set the div wrapper as a replacement child for table
//parent.replaceChild(headDiv, headTbl);

// set table as the child of the div container
//headDiv.appendChild(headTbl);

headArr.forEach(function(element) {
//    let tbleH = document.createElement('th');
    let anchorDiv = document.createElement('div');
    let anchorSpan = document.createElement('span');
    let anchorDivClass = document.createAttribute('class');
    let anchorSpanId = document.createAttribute('id');
    let anchor = document.createElement('a');
    let menuItem = element.toUpperCase();
    let table = document.getElementById('header');
    let attr = document.createAttribute('href');
    let aClass = document.createAttribute('class');
    let text = document.createTextNode(menuItem);
    
//    table.appendChild(tbleH);
//    tbleH.appendChild(anchor);
    // assigning the child divs for each header anchor element
    headDiv.appendChild(anchorDiv);    
    anchorDivClass.value = menuItem.toLowerCase();
    anchorDiv.setAttributeNode(anchorDivClass);
    
    // assigning span a class
    anchorSpanId.value = 'span' + menuItem.toLocaleLowerCase();
    anchorSpan.setAttributeNode(anchorSpanId);
    
    // setting header anchor elements inside each child div and a span
    attr.value = 'clark' + element + '.html';
    aClass.value = 'navlink';
    anchor.setAttributeNode(attr);
    anchor.setAttributeNode(aClass);
    anchor.appendChild(text);
    anchorDiv.appendChild(anchorSpan);
    anchorSpan.appendChild(anchor);
});