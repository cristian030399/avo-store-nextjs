import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCart } from '@store/Cart'
import { Container, Menu } from 'semantic-ui-react'
import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'

const Navbar = () => {
    const { pathname } = useRouter()
    const { count: cartCount } = useCart()
    return (
        <Menu size='huge' borderless pointing as='header' style={{ fontSize: '1.5rem' }}>
            <Container text>
                <Link href='/' passHref>
                    <Menu.Item
                        active={pathname === '/'}
                        title='Inicio | Todos los productos'
                    >
                        <Avocado />
                        Avo Store
                    </Menu.Item>
                </Link>
                <Menu.Menu position='right'>
                    <Link href='/cart' passHref>
                        <Menu.Item active={pathname === '/cart'}>
                            <ShoppingCartIcon cartCount={cartCount} name='Canasta' />
                        </Menu.Item>
                    </Link>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}

export default Navbar