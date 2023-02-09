import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import img from '../../Asstes/Slider img/footer payment.png'

const Container = styled.div`
display: flex;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`

const Dece = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
display: flex;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 10px;
`
const Payment=styled.img`
width:100%
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shopping.</Logo>
                <Dece>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aliquam exercitationem molestias similique neque sunt repellendus at sed ad. Necessitatibus.</Dece>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook></Facebook>
                    </SocialIcon>

                    <SocialIcon color='E4405f'>
                        <LinkedIn></LinkedIn>
                    </SocialIcon>

                    <SocialIcon color='3B5999'>
                        <Instagram></Instagram>
                    </SocialIcon>

                    <SocialIcon color='55ACEE'>
                        <Twitter></Twitter>
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room></Room>  1216. Mirpur is one of the largest thana in Dhaka, Bangladesh.
                </ContactItem>
                <ContactItem>
                    <Phone></Phone>  +8801751473051
                </ContactItem>
                <ContactItem>
                    <Email></Email>    contact@shopping.com
                </ContactItem>
                <Payment src={img}/>
            </Right>

        </Container>
    );
};

export default Footer;