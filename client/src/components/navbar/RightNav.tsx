import * as S from './styles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
} from 'react-router-dom';

type Props = {
    open: boolean;
};

function RightNav(props: Props) {
    return (
        <Router>
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
                    to='/menu4'
                    activeStyle={{
                        fontWeight: 'bold',
                        color: '#52be80',
                    }}
                >
                    <S.Li>SE CONNECTER</S.Li>
                </NavLink>
                <NavLink
                    to='/menu5'
                    activeStyle={{
                        fontWeight: 'bold',
                        color: '#52be80',
                    }}
                >

                    <S.Li2>S'INSCRIRE</S.Li2>
                </NavLink>
            </S.Ul>

            <Switch>
                <Route exact path='/menu1'>
                    <S.Icon>
                        <h1>Test</h1>
                    </S.Icon>
                </Route>
                <Route exact path='/menu2'>
                    <S.Icon>
                        <h1>Test</h1>
                    </S.Icon>
                </Route>
                <Route exact path='/menu3'>
                    <S.Icon>
                        <h1>Test</h1>
                    </S.Icon>
                </Route>
                <Route exact path='/menu4'>
                    <S.Icon>
                        <h1>Test</h1>
                    </S.Icon>
                </Route>

                <Redirect to='/menu1' />
            </Switch>
        </Router>
    );
}

export default RightNav;