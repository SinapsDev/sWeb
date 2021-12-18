import * as S from './styles';

// import Logo from '../../assets/logo.png';
import Burger from './Burger';

type Props = {
    children?: ChildNode;
};

export default function Navbar(props: Props) {
    return (
        <>
            <S.Nav>
                <h1>Name</h1>
            </S.Nav>
            <Burger />
            {props.children}
        </>
    );
}