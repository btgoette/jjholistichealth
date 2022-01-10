import Navbar from 'components/layout/Navbar.jsx'
import Footer from 'components/layout/Footer'


export default function PageLayout({ children }) {

    return (

        <>
            <Navbar />
            <main className="page-wrapper">
                {children}
            </main>
            <Footer />
        </>
    )
}