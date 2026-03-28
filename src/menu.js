let bro = "diamond";

function createMenuPage() {
const container = document.querySelector(".container");
container.innerHTML = `<div class="menu-hero">
            <p>Menu</p>
        </div>

        <ul class="menu-container">

            <li class="open-menu-listing">
                <div class="menu-listing-title">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.5" stroke="black"/>
                    </svg>
                
                    <p>Hot Apps</p>
                </div>

                <div class="open-list-content">
                    <div class="menu-item">
                        <p class="item-title">FRESH CUT CHIPS 
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="black"/>
                            </svg>
                            
                        <strong>9$</strong></p>

                        <div class="item-details">
                            add gravy  2
                        </div>
                    </div>

                    <div class="menu-item">
                        <p class="item-title">Poutine 
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="black"/>
                            </svg>
                            
                        <strong>15$</strong></p>

                        <div class="item-details">
                            fresh cut chips | St Albert's cheese curds | gravy
                        </div>
                    </div>

                    <div class="menu-item">
                        <p class="item-title">Smokey Mozza Sticks 
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="black"/>
                            </svg>
                            
                        <strong>18$</strong></p>

                        <div class="item-details">
                            house made mozzarella sticks | smokey ketchup | fresh parmesan
                        </div>
                    </div>
                </div>

            </li>


            <li class="menu-listing">
                
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="black"/>
                    </svg>
                
                <p>Cold Apps</p>
            </li>

            <li class="menu-listing">
                
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="black"/>
                    </svg>
                
                <p>Handhelds</p>
            </li>

            <li class="menu-listing">
                
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="black"/>
                    </svg>
                
                <p>Mains</p>
            </li>


            <li class="menu-listing">
                
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="black"/>
                    </svg>
                
                <p>Desserts</p>
            </li>
        </ul>


        <div class="footer">No  affiliation with the actual Cheshire Cat Pub, just a passion project</div>`
}

export {bro, createMenuPage};