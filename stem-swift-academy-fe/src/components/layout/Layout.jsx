import Header from '../Header/Header';
import Footer from '../Footer';

import './Layout.css';

const Layout = (props) => {
    return (
        <div className="flex flex-col items-center h-screen min-w-full max-w-full">
            <Header></Header>
            <main className="flex-grow min-w-full max-w-full">{props.children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;