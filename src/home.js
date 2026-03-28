import groupimg from "./assets/Group (burger+flag).png";
import sunset from "./assets/sunset-burger.png";
import cat from "./assets/image 29.png"

let babes = "yurhearddd";

function createHomePage() {
const container = document.querySelector(".container");

container.innerHTML = `<div class="hero">
            <h1>Keeping the tradition of the British style pub alive</h1>
            <p class="hero-text">One delicious pint at a time.</p>
        </div>

        <div class="features">
            <div class="left-feature">
                <h2>
                    Our British style pub menu features pub fare with flair.
                </h2>
            </div>

            <div class="right-feature">
                <p>
                    A talented crew of trained chefs crafts seasonal menus and specialty items using the freshest, locally sourced ingredients. <br> <br> 
                    Our bar offers a rotating selection of 24 craft beer taps and 2 casks, complemented by an enviable whisky collection that includes exciting whisky tastings.
                </p>
            </div>

        </div>

        <div class="gallery">
                <img class="gallery-img" src='${groupimg}'>
                <img class="gallery-img img2" src='${sunset}'>
        </div>


        <div class="bottom">
            <p class="bottom-text">As a family owned and operated business, we love our community and share our passion for craft beer. Our goal is to become your third place, and after 20 years in business, we believe we have kind of nailed it!</p>
            <img src='${cat}'>
        </div>

        <div class="footer">No  affiliation with the actual Cheshire Cat Pub, just a passion project</div>`
}

export {babes, createHomePage};