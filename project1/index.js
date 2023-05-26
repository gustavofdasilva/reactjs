function NavBar() {
    return(
        <div>
            <h2>NavBar</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

const navTop = (
    <nav>
        <h1>Gym Life company</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

function vanillaJs() {
    let div = document.querySelector('#root')
    let h1 = document.createElement('h1')

    h1.textContent = 'Hello, React!';
    h1.setAttribute('class', 'header')
    div.appendChild(h1)
}


ReactDOM.render(
navTop
, document.querySelector('#root'))