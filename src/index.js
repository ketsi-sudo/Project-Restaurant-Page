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
            if (e.target.textContent === "Home") {
                createHomePage();
            } else if (e.target.textContent === "Menu") {
                createMenuPage();
            } else if (e.target.textContent === "Contact") {
                createContactPage();
            }

            
        })
    })
  
});



