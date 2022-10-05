import React from 'react';
import Header from './partials/header'
import Footer from './partials/footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;