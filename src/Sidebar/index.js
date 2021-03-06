import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';

//SVG Files
import logo from '../assets/logo.svg';
import Home from '../assets/home-solid.svg';
import Team from '../assets/social.svg';
import Calender from '../assets/sceduled.svg';
import Projects from '../assets/starred.svg';
import Documents from '../assets/draft.svg';
import PowerOff from '../assets/power-off-solid.svg';

const Container = styled.div`
    position: fixed;
    .active {
    border-right: 4px solid var(--white);
    img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
  }
}
`

const Button = styled.button`
    background-color: var(--black);
    border: none;
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    display:flex;
    justify-content: center;
    align-items: center;
    
    position: relative;

    &::before,
    &::after{
       content:"";
       background-color: var(--white);
       width: 1rem;
       height:2px;
       position: absolute;
       transition: all 0.3s ease;
      }

      &::before{
        top:${(props) => (props.clicked? "1.5": "1rem")};
        transform: ${(props) => (props.clicked? "rotate(135deg)": "rotate(0)")};
       }

      &::after{
        top:${(props) => (props.clicked? "1.2": "1.5rem")};
        transform: ${(props) => (props.clicked? "rotate(-135deg)": "rotate(0)")};
       }
`
const SidebarContainer = styled.div`
       background-color: var(--black);
       width:3.5rem;
       height:80vh;
       margin-top:1rem;
       border-radius:0 30px 30px 0;
       padding: 1rem 0;
       border-right:2px solid #009FFD;

       display:flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;

       position: relative;
`
const Logo = styled.div`
    width: 2rem;
    
    img{
        width:100%;
        height: auto;
    }
`
const SlickBar = styled.ul`
    color:var(--white);
    list-style: none;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--black);


    padding:2rem 0;

    position:absolute;
    top:6rem;
    left:0;

    width:${props => props.clicked? "12rem" : "3.5rem"};
    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0;
`

const Item = styled.li`
    width: 100%;
    padding: 1rem 0;
    cursor: pointer;

    display:flex;
    padding-left: 1rem;

    &:hover{
        border-right: 4px solid var(--white);
    }

    img {
        width: 1.2rem;
        height: auto;
        // filter: invert(81%) sepia(4%) saturate(855%) hue-rotate(162deg) brightness(86%) contrast(95%);
        //filter: invert(24%) sepia(73%) saturate(7332%) hue-rotate(355deg) brightness(90%) contrast(124%);
        filter:invert(59%) sepia(84%) saturate(804%) hue-rotate(358deg) brightness(100%) contrast(106%);
    }
`

const Text = styled.span`
    width:${(props) => (props.clicked? "100%" : "0")};
    overflow: hidden;
    margin-left: ${(props) => (props.clicked? "1.5rem" : "0")};
    transition: all 0.3 ease;
`

const Profile = styled.div`
    width:${(props) => (props.clicked? "14rem" : "3rem" )};
    height:3rem;

    padding: 0.5rem 1rem;
    // border:2px solid var(--white);
    border-radius: 20px;

    display:flex;
    align-items: center;
    justify-content: center;
    margin-left:${(props) => (props.clicked? "9rem" : "0")};

    background-color: var(--black);
    color: var(--white);

    transition: all 0.3s ease;

    img{
        width:2.5rem;
        height:2.5rem;
        border-radius: 50%;
        cursor: pointer;

        &:hover{
            border:2px solid var(--grey);
            padding: 2px;
        }
    }

`
const Name = styled.div`
    padding: 0 1.5rem;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4{
        display: inline-block;
    }

    a{
        font-size:0.8rem;
        text-decoration: none;
        color: var(--grey);

        &:hover{
            text-decoration: underline;
        }
    }
`

const Details = styled.div`
    display: ${(props) => (props.clicked? "flex": "none")};
    justify-content: space-between;
    align-items: center;
`
const Logout = styled.button`
    border:none;
    width: 2rem;
    height:2rem;
    background-color:transparent;

    img{
        width: 100%;
        height:auto;
        filter: invert(24%) sepia(73%) saturate(7332%) hue-rotate(355deg) brightness(90%) contrast(124%);
        transition: all 0.3s ease;

        &:hover{
            border:none;
            padding:0;
            opacity:0.5;
        }
    }


`


const Sidebar = () => {
    const navigate = useNavigate();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setProfileClick] = useState(false);
    const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <Container>
        <Button clicked={click} onClick={() => handleClick()}> </Button>
        <SidebarContainer>
            <Logo >
                <img src={logo} alt='logo' />
            </Logo>
            <SlickBar clicked={click}>
                <Item onClick={() => navigate(`/`)}>
                    <img src={Home} alt="Home" />
                    <Text clicked={click}> Home </Text>
                </Item>
                <Item onClick={() => navigate(`/team`)}>
                    <img src={Team} alt="Team" />
                    <Text clicked={click}> Team </Text>
                </Item>
                <Item onClick={() => navigate(`/calender`)}>
                    <img src={Calender} alt="Calender" />
                    <Text clicked={click}> Calender </Text>
                </Item>
                <Item onClick={() => navigate(`/documents`)}>
                    <img src={Documents} alt="Documents" />
                    <Text clicked={click}> Documents </Text>
                </Item>
                <Item onClick={() => navigate(`/tracker`)}>
                    <img src={Projects} alt="Projects" />
                    <Text clicked={click}> Tracker </Text>
                </Item>
            </SlickBar>



            <Profile clicked={profileClick}>
                <img onClick={() => handleProfileClick()} src='https://picsum.photos/280' alt='Profile' />
                <Details clicked={profileClick}>
                    <Name>
                        <h4>John&nbsp;Doe</h4>
                        <a href='/#'> View&nbsp;Profile</a>
                    </Name>
                  | <Logout>
                         <img src={PowerOff} alt='logout' />
                    </Logout>
                </Details>
            </Profile>
        </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
