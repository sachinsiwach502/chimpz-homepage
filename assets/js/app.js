// nav bar----------------
let body = document.body;
let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menuBar");
let line_1 = document.querySelector(".first-line")
let line_2 = document.querySelector(".sec-line");
let line_3 = document.querySelector(".third-line");

function cross() {
    line_2.classList.add("d-none");
    // line_1.classList.add("transform-origin-center-center");
    line_1.classList.add("position-relative");
    line_1.style.top = "12px";
    line_1.style.left = "2px";
    line_1.style.transform = "rotate(45deg)"
    line_3.classList.add("position-relative");
    line_3.style.top = "-12px";
    line_3.style.transform = "rotate(-45deg)";
    line_1.classList.add("transition");
    line_3.classList.add("transition");

}
function line() {
    line_2.classList.remove("d-none");
    line_1.classList.remove("position-relative");
    line_1.style.transform = "rotate(0deg)"
    line_3.classList.remove("position-relative");
    line_3.style.transform = "rotate(0deg)";
}


// add show class in nav links--------------
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        cross();
        body.style.overflow = "hidden";
    } else {
        line();
        body.style.overflow = "auto";
    }
});


// accordina---------------------------------
let accordian = document.querySelectorAll(".accord_itm");

accordian.forEach(Element => {
    let plusimg = Element.querySelector(".plus");
    let minsimg = Element.querySelector(".mins");
    let clickable_accord = Element.querySelector(".accordian-head");
    let hidden_txt = Element.querySelector(".accordian_text");
    clickable_accord.addEventListener("click", () => {
        accordian.forEach(otherelement => {
            if (otherelement !== Element) {
                let plusimg = otherelement.querySelector(".plus");
                let minsimg = otherelement.querySelector(".mins");
                let hidden_txt = otherelement.querySelector(".accordian_text");
                hidden_txt.style.display = "none";
                minsimg.style.display = "none";
                plusimg.style.display = "flex"
            }

        });
        let txt_style = window.getComputedStyle(hidden_txt).display;
        if (txt_style === "none") {
            hidden_txt.style.display = "flex";
            plusimg.style.display = "none";
            minsimg.style.display = "flex";
        } else {
            hidden_txt.style.display = "none";
            plusimg.style.display = "flex";
            minsimg.style.display = "none";
        }
    });
});

// navlinks hidden show class----------
let navLinks = document.querySelectorAll(".nav_links")

navLinks.forEach(links => {
    links.addEventListener("click", () => {
        menuList.classList.remove("show");
        line();
        body.style.overflow = "auto";
    });
});



// scroll to top-----------------

let scroll_top = document.querySelector(".scroll_to_top");
let scrol_pt = 200;
scroll_top.style.display = "none";
window.addEventListener("scroll", () => {
    if (window.scrollY > scrol_pt) {
        scroll_top.style.display = "block"
    } else {
        scroll_top.style.display = "none";
    }
});

scroll_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0, behaviour: "smooth",
    })
});




// preloader---------------------
let preloader = document.querySelector(".preloader");
preloader.classList.add("d-flex");
setTimeout(() => {
    preloader.classList.add("d-none");
}, 3000);