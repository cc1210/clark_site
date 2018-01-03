var headArr = ['Home', 'Bio', 'Music', 'Tour', 'Gallery', 'Contact'];

headArr.forEach(function(element) {
    let tbleH = document.createElement('th');
    let anchor = document.createElement('a');
    let menuItem = element.toUpperCase();
    let table = document.getElementById('header');
    let attr = document.createAttribute('href');
    let text = document.createTextNode(menuItem);
    
    table.appendChild(tbleH);
    tbleH.appendChild(anchor);
    
    attr.value = 'clark' + element + '.html';
    anchor.setAttributeNode(attr);
    
    anchor.appendChild(text);
    
});
