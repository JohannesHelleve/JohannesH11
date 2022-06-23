
showMore = (projectNumber) => {
    const allElem = document.getElementsByClassName('more');
    const elem = allElem.item(projectNumber);
    const hiddenOrVisible = getComputedStyle(elem).visibility;
    hiddenOrVisible === "hidden" ? elem.style.visibility = "visible" : elem.style.visibility = "hidden";
}
