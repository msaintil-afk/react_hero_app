import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import animefight from '../../assets/images/animefight.mp4'
import { convertCompilerOptionsFromJson } from 'typescript';
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    width: '100%',
    height: '100%',


})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'absolute',
    // top: '50%',
    left: '50%',
    bottom: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})



export const Home = ( props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA href="#">Super Unchained⛓</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Signin</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
        <Main>    
        <video src={animefight} autoPlay loop muted width={'100%'} height={'100%'} />
        
                <MainText>
                
                    <h1>{props.title}</h1>
                    <p> Become a Hero</p>
                    <Button color='primary' variant='contained'>See the Heroes</Button>
                </MainText>
            </Main>

        </Root>
    )
}