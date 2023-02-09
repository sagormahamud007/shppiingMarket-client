import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";



const Container =styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient
(rgba(255,255,255,0.5)
,rgba(255,255,255,0.5)),
url('http://oshinewptheme.com/v31/wp-content/uploads/sites/38/2017/12/oshine-freelancer-2.jpg');
background-position: center;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`

const Wrapper =styled.div`
width: 40%;
padding: 20px;
background-color: white;
`

const Form =styled.form`
display: flex;
flex-wrap: wrap;
`

const Title =styled.h1`
font-size: 24px;
font-weight: 300;
`

const Input =styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border:1px solid gray;
`

const Agreement =styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button =styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`
const Errors=styled.div`
color:red;
margin-top:5px
margin-left:20px
`

const Error=styled.p`
margin-bottom:5px;
color:red;
`
const LebelContaine=styled.div`
margin-top:10px
`


const SignUp = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {createUser,userName}=useContext(AuthContext)
    const [error,setError]=useState('')
    const location=useLocation();
    const navigate=useNavigate()

    const from=location.state?.from?.pathname || "/";

    const onSubmit = data => {
        setError('')
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            toast('User Created Successfully')
            navigate(from,{replace:true});
            const userInfo={
                displayName:data.name
            }
            userName(userInfo)
            .then(()=>{})
            .catch(err=>console.log(err))
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
        <Title>SignUp</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Input placeholder="name"
             type={"text"} {...register("name",
             { required: true })}/>

            <Input placeholder="last name"
             type={"text"} {...register("name",
              { required: true })}/>

            <Input placeholder="username"
             type={"text"} 
            {...register("name",
             { required: true })}/>

            <Input placeholder="email"
             type={"email"} {...register("email",
              { required: "Email Address is required" })}/>
            

            <Input placeholder="password"
             type={"password"} {...register("password",
              { 
                required: "Password is required",
                pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])/, message:"password must be Uppercase & Spacial Character"},
                minLength: { value: 6, message: "Password Must be 6 character"},
             })}/>



            <Input placeholder="confirm password"
             type={"password"} {...register("password",
              {
                required: "Password is required",
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])/, message:"password must be Uppercase & Spacial Character"},
                minLength: { value: 6, message: "Password Must be 6 character"},
              })}/>
  
<LebelContaine>
            
<label for="product">Choose a Seller or Bayer : </label>

<select className="w-full" name="cars" id="cars">
  <option value="seller">Seller</option>
  <option value="bayer">Bayer</option>
</select>
</LebelContaine>
 
                
                 <Errors>{errors.password && 
                <p role={"alert"}>
                {errors.password?.message}</p>}</Errors>
                <Error>{error}</Error>
            <Agreement>By creating an account,
                 I consent to the processing of my personal data
                  in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
       </Wrapper>
        </Container>
    );
};

export default SignUp;