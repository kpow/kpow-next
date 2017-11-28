import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Link from 'next/link';

const SiteHeader = (props) => (

    <div>
        <Menu fixed='top' size='large' inverted compact>
            <Container>
                <Link href="/"><Menu.Item style={{ padding: '10px', paddingRight: '15px', paddingLeft: '0' }} >
                    <h1 className="site-logo">kpow</h1>
                </Menu.Item></Link>
                <Link href="/allstars"><Menu.Item position='right'>allstars</Menu.Item></Link>
                <Link href="/allbooks"><Menu.Item >allbooks</Menu.Item></Link>
                <Link href="/resume"><Menu.Item >resume</Menu.Item></Link>

            </Container>
        </Menu>
    </div>

)

export default SiteHeader;
