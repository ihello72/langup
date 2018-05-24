import React, { Component } from 'react';
import styled from 'styled-components';

import NavItem from '../../atoms/NavItem';

const Container = styled.div`
    display: block;
    width: 80%;
    margin: 10px auto;

    color: #757575;
    text-align: center;
`;

class Nav extends Component {
    render() {
        return (
            <Container>
                <NavItem>홈</NavItem>
                <NavItem>오픈사전</NavItem>
                <NavItem>공유단어장</NavItem>
                <NavItem>나의단어장</NavItem>
            </Container>
        );
    };
};

export default Nav;