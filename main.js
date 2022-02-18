class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="title">
            <h1>Animendar</h1> 
            <nav class="navigation">
                <ul>
                        <li><a href="index.html">Home</a></li>     
                        <li><a href="now.html">Now</a></li>
                        <li><a href="us.html">Us</a></li>  
                        <div class="onoffswitch">
                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0">
                            <label class="onoffswitch-label" for="myonoffswitch">
                                <span class="onoffswitch-inner"></span>
                                <span class="onoffswitch-switch"></span>
                            </label>
                        </div>
                </ul>
            </nav>
        </header>
        `
    }
}

customElements.define('page-header', Header)


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <a href="https://github.com/gordillolucas29" target="_blank"><img src="img/github.png" alt="github"></a>
            <p>made with a little ♡ (just a little)</p>
        </footer>
        `
    }
}

customElements.define('page-footer', Footer)



var myonoffswitch = document.getElementById("myonoffswitch");

myonoffswitch.onclick = function() {
    document.body.classList.toggle("dark-theme");

    // save in local storage

    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }

} 

// checkbox

// I will to fix bug with switch button >.<

// obtain values

if(localStorage.getItem('dark-mode') == 'true') {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}
