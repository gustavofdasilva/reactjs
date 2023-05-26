
function Header() {
    return (
        <header>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="react-logo"/>
                <ul className="nav-itens">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function Main() {
    return (
        <main>
            <h1>Reasons why I am studying React</h1>
            <ol>
                <li>It's a awesome technology that helps to build beautiful UIs</li>
                <li>It's very hirable</li>
                <li>It's very famous and cool</li>
            </ol>
        </main>
    )
}
function Footer() {
    return (
        <footer>
            <p>2023 Silva development. All rights deserved</p>
        </footer>
    )
}
function Page() {
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.querySelector('#root'))