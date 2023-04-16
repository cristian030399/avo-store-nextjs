import Link from 'next/link';
import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';
import styles from './Footer.module.css'

const Footer = () => (
    <Segment
        vertical
        as='footer'
        style={{
            padding: '4em 0em',
            marginTop: '3em',
            borderTop: '1px solid #f2f2f2'
        }}>
        <Container text>
            <Grid stackable>
                <Grid.Column width={4}>
                    <Header as={'h4'} content='Nosotros' />
                    <List>
                        <List.Item>
                            <Link href={'/about'}>
                                Conoce más
                            </Link>
                        </List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Header as={'h4'} content='Servicios' />
                    <List>
                        <List.Item>
                            <Link href={'/'}>
                                Todos los productos
                            </Link>
                        </List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Header as={'h4'} content='Hecho para' />
                    <p>
                        <a href="https://platzi.com/">Platzi y su curso de Next.JS</a> de Platzi dictado por <a href="https://twitter.com/jonalvarezz">@jonalvarezz</a>
                    </p>
                    <List horizontal style={{ display: 'flex' }}>
                        <List.Item
                            icon='twitter'
                            style={{ display: 'flex' }}
                            content={<a href="https://twitter.com/jonalvarezz">Twitter</a>}
                        ></List.Item>
                        <List.Item
                            icon='github'
                            style={{ display: 'flex' }}
                            content={<a href="https://github.com/jonalvarezz/platzi-nextjs">GitHub</a>}
                        />
                    </List>
                </Grid.Column>
            </Grid>
            <div className={styles.colophon}>
                <p className={styles['colophon-entry']}>
                    Icons made by{' '}
                    <a
                        target="_blank"
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                    >
                        Freepik
                    </a>
                    {' from '}
                    <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                    </a>
                </p>
                <p className={styles["colophon-entry"]}>
                    Avocado images taken from{' '}
                    <a
                        className="acnor"
                        target="_blank"
                        href="https://www.californiaavocado.com/avocado101/avocado-varieties"
                        title="California Avocado"
                    >
                        Avocado 101
                    </a>
                    {' at '}
                    <a
                        target="_blank"
                        href="https://www.californiaavocado.com"
                        title="Flaticon"
                    >
                        California Avocado
                    </a>
                </p>
            </div>
        </Container>
    </Segment>
)

export default Footer;