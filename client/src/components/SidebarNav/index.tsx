import React, { useState } from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import './index.css'

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

interface Props {
    toggle: boolean;
}

const SidebarNav = (props: Props) => {
    const [toggle, setToggle] = useState(props.toggle);
    console.log(toggle)
    if (props.toggle) {
        return (
            <aside className='aside' style = {{opacity: 100, display: 'block'}}>
                <Icon>
                    <CloseIcon onClick = {() => {
                        setToggle(!toggle)
                    }} />
                </Icon>
            </aside>
        )
    } else {
        return (
            <aside className='aside' style = {{opacity: 0, display: 'none'}}>
                <Icon>
                    <CloseIcon onClick = {() => {
                        // setToggle(!toggle)
                    }} />
                </Icon>
            </aside>
        )
    }
}

export default SidebarNav;