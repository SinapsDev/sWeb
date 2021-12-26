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
                <S.Title>Limitless Life</S.Title>
            </S.Nav>
            <Burger />
            {props.children}
        </>
    );
}