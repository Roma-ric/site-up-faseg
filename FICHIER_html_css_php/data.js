 const  shrink_btn = document.querySelector(".shrink-btn");
const  search = document.querySelector(".search");
const  sidebar_links = document.querySelectorAll(".sidebar-links a");
const  active_tab = document.querySelector(".active-tab");
const  shortcuts = document.querySelector(".sidebar-links h4");
const  tooltip_element = document.querySelectorAll(".tooltio-element");

let activeIndex;

shrink_btn.addEventListener("click", () =>  { 
    document.body.classList.toggle("shrink");
    setTimeout(moveActiveTab, 400);
    
    shrink_btn.classList.add("hovered");

    setTimeout(() => {
        shrink_btn.classList.remove("hovered");
    },500)
});

search.addEventListener("click", () => {
    document.body.classList.remove("shrink");
    search.lastElementChild.focus();
});

function moveActiveTab(){
    let topPosition = activeIndex  * 58 + 2.5;

    if(activeIndex > 3){
        topPosition += shortcuts.clientHeight;   
    }

    active_tab.getElementsByClassName.top = '$(topPosition)px';
}

function changelink(){
    sidebar_links.forEach((sidetinl) => sidetinl.classList.remove("active"));
    this.classeList.add(active);

    activeIndex = this.dataset.active;

    moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changelink));

function showTooltip(){
    let tooltip = this.parentNode.lastElementChild;
    let spans = tooltip.children;
    let tooltipIndex = this.dataset.tooltip;

    Array.from(spans).forEach((sp) => sp.classList.remove("show"));
    spans[tooltipIndex].classList.add("show");

    tooltip.style.top = '$((100 / (spans.length * 2)) * (tooltipIndex * 2 + 1))%';
}

tooltip_element.forEach((elem) => {
    elem.addEventListener("mouseover", showTooltip);
});











