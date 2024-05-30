//
/*
to start with q1. we can
getElementsByClassName
querySelectorAll
think about live nodelist and static node lists (refer to slide deck)
run a loop
in the loop
--> modify the className to cool
*/
//console.log("hi");

const hotItems = document.querySelectorAll('li.hot');

// Loop through each hot item
for (const item of hotItems) {
  // Change class attribute to "cool"
  item.classList.remove('hot');
  item.classList.add('cool');
}

const hotElements = document.getElementsByClassName('hot');
if(hotElements >= 3) {
    hotElements[2].classList.remove('hot');
    hotElements[2].classList.add('cool');
}

const listItems = getElementsByTagName('li');
for(const item of listItems) {
    if(item.classList.contains('hot')) {
        item.classList.remove('hot');
        item.classList.add('cool');
        break; // break is needed so that the loop stops after first element is changed
    }
}