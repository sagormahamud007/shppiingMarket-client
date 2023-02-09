import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { AuthContext } from "../../Context/ContextProvider";

const Container =styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient
(rgba(255,255,255,0.5)
,rgba(255,255,255,0.5)),
url('https://cdn.shopify.com/s/files/1/0597/8521/6156/files/pexels-vesna-mladenovic-814194.jpg?v=1659955065');
background-position: center;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`

const Wrapper =styled.div`
width: 25%;
padding: 20px;
background-color: white;
`

const Form =styled.form`
display: flex;
flex-direction: column;
`

const Title =styled.h1`
font-size: 24px;
font-weight: 300;
`

const Input =styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
border:1px solid gray;
`

const Button =styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`
const Error=styled.p`
margin-bottom:5px;
color:red;
`


const SignIn = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {userSignIn}=useContext(AuthContext)
    const [error,setError]=useState('')
    const location=useLocation();
    const navigate=useNavigate()

    const from=location.state?.from?.pathname || "/";

    const userHandleLogin=(data)=>{
        setError('')
    userSignIn(data.email,data.password)
    .then(result=>{
        toast('Login Successfully')
        const user=result.user;
        navigate(from,{replace:true});
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
    });

    }

    return (
        <Container>
       <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit(userHandleLogin)}>
            <Input placeholder="email"type={"email"} {...register("email",
              { required: "Email Address is required" })}/>

            <Input placeholder="password" type={"password"} {...register("password")}/>
         {errors.password && 
                <p role={"alert"}>
                {errors.password?.message}</p>}

                   <Error>{error}</Error>

            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD</Link><br></br>
            <Link to={'/signUp'} >CREATE A NEW ACCOUNT</Link>
        </Form>
       </Wrapper>
        </Container>
    );
};

export default SignIn;