class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="title">
            <h1>Animendar</h1> 
            <div class="switchDarkMode">
            <input type="checkbox" class="checkbox" id="checkbox">
            <label for="checkbox" class="label">
                <i class="fa-solid fa-cloud-moon" id="moon"></i>
                <i class="fa-solid fa-cloud-sun" id="sun"></i>
                <div class="ball"></div>
            </label>
            </div>
            <nav class="navigation">
                <ul>
                        <li><a href="index.html">Home</a></li>     
                        <li><a href="now.html">Now</a></li>
                        <li><a href="us.html">Us</a></li>  

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
            <div id="footer">
            <a href="https://github.com/gordillolucas29" target="_blank"><i class="fa-brands fa-github"></i></a>
            <p>made with a little ♡ (just a little)</p>
            </div>
        </footer>
        `
    }
}

customElements.define('page-footer', Footer)

// ---------------------------------------------------------------


// Toggle Dark Mode
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');    

    // Save in Local Storage 

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

// Local Storage 
if(localStorage.getItem('dark-mode') == 'true') {
    document.body.classList.add("dark");
    checkbox.checked = true;
} else {
    document.body.classList.remove("dark");
    checkbox.checked = false;
}
