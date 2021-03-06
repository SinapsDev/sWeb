import styled from 'styled-components';

interface Props {
    Text?: string;
    Background?:string;
    Color?: string;
    Width?: string;
    Height?: string;
    Size?: string;
    Weight?: string;
    Margin?: string;
    MobileHeight?: string;
    MobileWidth?: string;
}

export const Button = styled.div<Props>`
    display: flex;
    width: ${(props) => props.Width ? props.Width : '20%'};
    height: ${(props) => props.Height ? props.Height : '8vh'};;
    color: ${(props) => props.Color ? props.Color : '#000'};
    background-color: ${(props) => props.Background};
    font-size: ${(props) => props.Size ? props.Size : '1.2rem'};
    font-weight: ${(props) => props.Weight ? props.Weight : '500'};
    margin: ${(props) => props.Margin ? props.Margin : '0'};
    cursor: pointer;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    border-radius: 7px;
    position: relative;
    @media (max-width: 768px) {
        height: ${(props) => props.MobileHeight ? props.MobileHeight : '8vh'};
        width: ${(props) => props.MobileWidth ? props.MobileWidth : '80%'};
    }
`