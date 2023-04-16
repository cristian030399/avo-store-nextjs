import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import { Container } from 'semantic-ui-react'
// import styles from './layout.module.css'

const Layout = ({ children }) => {
    //  className={styles.container}
    return (
        <>
            <Navbar />
            <Container as='main' text>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout