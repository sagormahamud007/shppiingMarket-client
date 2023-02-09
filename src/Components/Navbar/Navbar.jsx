import { Search } from '@mui/icons-material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material'
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { AuthContext } from '../../Context/ContextProvider';

const Container = styled.div`
    height: 60px;
 `
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 `
const Left = styled.div`
flex: 1;
display:flex;
align-items:center;
 `
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 25px;
`

const Input = styled.input`
    border:none;
    &:hover{
        border: none;
    }
`

const Center = styled.div`
flex: 1;
text-align: center;
margin-bottom: 30px;
`
const Logo = styled.h1`
font-style:bold;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 20px;
`
const Right = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content: flex-end;
`

const Button=styled.button`
 margin-left:20px;
`


const Navbar = () => {
const {user,logOut}=useContext(AuthContext)

const { data:cartContent=[], refetch } = useQuery({
    queryKey: ['cartData', user?.email],
    queryFn:async () =>{
  const res = await fetch(`http://localhost:5000/cartData?email=${user?.email}`)
  const data = await res.json()
  return data
    }
  })

const HandleLogOut=()=>{
    logOut()
    .then(()=>{
        
    }).catch(error=>console.log(error))
}
refetch()
    return (

        <div className="navbar bg-base-100 overflow-hidden px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <input className='border' type="text" />
      <Search style={{ fontSize: "16px", color: "gray", }}></Search>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Market</a>
  </div>

  <div className="navbar-center hidden lg:flex">
  <Logo>Shopping Market</Logo>
  </div>
  <div className="navbar-end">
  <Link style={{textDecoration:'none'}} to='/'><MenuItem>HOME</MenuItem></Link>
                   {user?.uid ? 
                     <>
                      <Link style={{textDecoration:'none'}}
                     to='/dashBoard'> <MenuItem>DASHBOARD</MenuItem></Link>
                     <Button onClick={HandleLogOut} style={{textDecoration:'none'}}>
                        SIGN OUT</Button> 
                     </>
                     :
                     <Link style={{textDecoration:'none'}}
                     to='/signIn'> <MenuItem>SIGN IN</MenuItem></Link>
                   }
                   <MenuItem>   
                     <Badge badgeContent={cartContent?.length<=0 ? "0" :cartContent?.length} color="primary">
                    <Link to={'/cart'}><ShoppingCartOutlinedIcon /></Link>
                </Badge>
                </MenuItem>
  </div>
</div>
        // <Container>
        //     <Wrapper>
        //         <Left>
        //             <Language>
        //                 BD
        //             </Language>
        //             <SearchContainer>
        //                 <Input />
        //                 <Search style={{ fontSize: "16px", color: "gray" }}></Search>
        //             </SearchContainer>
        //         </Left>
        //         <Center>
        //         <Logo>Shopping Market</Logo>
        //         </Center>
        //         <Right>
        //         <Link style={{textDecoration:'none'}} to='/'><MenuItem>HOME</MenuItem></Link>
        //             {user?.uid ? 
        //              <>
        //               <Link style={{textDecoration:'none'}}
        //              to='/dashBoard'> <MenuItem>DASHBOARD</MenuItem></Link>
        //              <Button onClick={HandleLogOut} style={{textDecoration:'none'}}>
        //                 SIGN OUT</Button> 
        //              </>
        //              :
        //              <Link style={{textDecoration:'none'}}
        //              to='/signIn'> <MenuItem>SIGN IN</MenuItem></Link>
        //             }

        //             <MenuItem>
        //                 <Badge badgeContent={cartContent?.length<=0 ? "0" :cartContent?.length} color="primary">
        //                     <Link to={'/cart'}><ShoppingCartOutlinedIcon /></Link>
        //                 </Badge>
        //             </MenuItem>
        //         </Right>
        //     </Wrapper>
        // </Container>
    )
}

export default Navbar
