import "./styles.css";
import { babes, createHomePage } from "./home.js";
import {bro, createMenuPage} from "./menu.js";
import {babyy, createContactPage} from "./contact.js";

console.log(babes);
console.log(bro);
console.log(babyy);

window.addEventListener("load", () => {
    const tabBtn = document.querySelectorAll(".tab");
    console.log( tabBtn[0])
    createHomePage();
    tabBtn.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            // console.log(e.target.textContent);
            
            const container = document.querySelector(".container");
            container.innerHTML = ""
            const homeBtn = document.querySelector("#tab1")
            const menuBtn = document.querySelector("#tab2")
            const contactBtn = document.querySelector("#tab3")

            if (e.target.textContent === "Home") {
                
                homeBtn.classList.add("active")
                menuBtn.classList.remove("active")
                contactBtn.classList.remove("active")
                createHomePage();

            } else if (e.target.textContent === "Menu") {

                menuBtn.classList.add("active")
                homeBtn.classList.remove("active")
                contactBtn.classList.remove("active")
                createMenuPage();

            } else if (e.target.textContent === "Contact") {

                contactBtn.classList.add("active")
                homeBtn.classList.remove("active")
                menuBtn.classList.remove("active")
                createContactPage();
            }

            
        })
    })
  
});



