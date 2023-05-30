import Header from './Header';
import Footer from './Footer';
import Main from './Main';

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