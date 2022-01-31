const tabIcons = document.querySelectorAll(".tab-item");
// console.log(tabIcons)
const tabContents = document.querySelectorAll(".tab-content-item");
// console.log(tabContents)


// select tab content items
function selectIcon(e){
    // remove border 
    removeBorder();
    // remove show class
    removeShow();
    // add border bottom 
    this.classList.add("tab-border");
    // get content ite from DOM
    const tabcontentItem = document.querySelector(`#${this.id}-content`);
    // add show class to the content
    tabcontentItem.classList.add('show')
}

// function for remove border
function removeBorder(){
    tabIcons.forEach(icon => icon.classList.remove('tab-border'));
}

// function to remove show class
function removeShow(){
    tabContents.forEach(content => content.classList.remove('show'));
}



// listen to the click on tab

tabIcons.forEach(icon =>{ icon.addEventListener('click',selectIcon)});