import * as S from './styles';

import { NavLink } from 'react-router-dom';

type Props = {
    open: boolean;
};

function RightNav(props: Props) {
    return (
        <S.Ul open={props.open}>
            <NavLink
                to='/menu1'
                activeStyle={{
                    fontWeight: 'bold',
                    color: '#52be80',
                }}
            >
                <S.Li>ACCUEIL</S.Li>
            </NavLink>
            <NavLink
                to='/menu2'
                activeStyle={{
                    fontWeight: 'bold',
                    color: '#52be80',
                }}
            >
                <S.Li>WIKI</S.Li>
            </NavLink>
            <NavLink
                to='/menu3'
                activeStyle={{
                    fontWeight: 'bold',
                    color: '#52be80',
                }}
            >
                <S.Li>WHITELIST</S.Li>
            </NavLink>
            <NavLink
                to='/login'
                activeStyle={{
                    fontWeight: 'bold',
                    color: '#52be80',
                }}
            >
                <S.Li>S'IDENTIFIER</S.Li>
            </NavLink>
            <NavLink
                to='/register'
                activeStyle={{
                    fontWeight: 'bold',
                    color: '#52be80',
                }}
            >

                <S.Li2>S'INSCRIRE</S.Li2>
            </NavLink>
        </S.Ul>
    );
}

export default RightNav;