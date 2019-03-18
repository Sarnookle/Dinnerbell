import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../logo.svg'

const ScFriend = styled.div`
    height: 40px;
    text-align: center;
    font-size: 14px;
    display: flex;
    padding-bottom: 12px;
`;

const ScProfilePicture = styled.img`
    width: 30%;
    height: 100%;
`;

const ScUserInfo = styled.span`
    margin: auto 0px;
`;


class Friend extends Component {

    render() {
        return (
            <ScFriend>
                <ScProfilePicture src={logo} alt={"profile"}/>
                <ScUserInfo>{this.props.friend.name}</ScUserInfo>
            </ScFriend>
        );
    }
}

export default Friend;
