/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
//create Function
//create Elements
//cycle through function parameter using forEach
// inside forEach create elements for cycle
//add content to forEach Parameter
//append created element to forEach function name
function createMenu(menuItems) {

    const newMenu = document.createElement('div')
    const menuList = document.createElement('ul')
        //forEach to cycle through the ul adding li
    menuItems.forEach(items => {
            let menuItems = document.createElement('li')

            menuItems.textContent = items;
            //append li to ul
            menuList.append(menuItems)
        })
        // append ul to div
    newMenu.append(menuList)

    const menuHidden = document.querySelector('.menu-button')
        //refernce the div
    newMenu.classList.add('menu')
        //toggle menu
    menuHidden.addEventListener('click', () => {
        //menu- -open
        newMenu.classList.toggle('menu--open')
    })

    return newMenu;
}
//selecting the parent element
const menuHeader = document.querySelector('.header')
    //appening the menu and its items to the parent element
menuHeader.append(createMenu(menuItems))