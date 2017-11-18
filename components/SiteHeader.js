import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Link from 'next/link';

const SiteHeader = (props) => (

    <div>
        <Menu fixed='top' size='large' inverted compact>
            <Container>
                <Menu.Item style={{ padding: '10px', paddingRight: '15px', paddingLeft: '0' }} >
                    <h1 className="site-logo">kpow</h1>
                </Menu.Item>
                <Menu.Item position='right'>allstars</Menu.Item>
                <Menu.Item >allbooks</Menu.Item>
                <Menu.Item >resume</Menu.Item>

            </Container>
        </Menu>
    </div>

)

export default SiteHeader;
