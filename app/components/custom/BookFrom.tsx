import React from 'react'
import styled from 'styled-components'
import { BackgroundImage, SecondaryHeading } from '../modules';
import { Color } from '../../constants';
import { opacityToHex } from '../../functions';

export const BookForm:React.FC = () => {

  return (
    <Wrapper>
        <BackgroundImage/>
        <FormWrapper> 
            <Form>
                <SecondaryHeading> Start Booking </SecondaryHeading>
                <InputWrapper>
                    <Label> Full name </Label>
                    <Input name="name" type="text" placeholder='Full name' required/>
                </InputWrapper>
                <InputWrapper>
                    <Label> Email </Label>
                    <Input name="email" type="email" placeholder='Email' required/>
                </InputWrapper>
            </Form>
        </FormWrapper>
    </Wrapper>
  )
}




const Wrapper = styled.div`
    position: relative;
    width: 70%;
    height: 50rem !important;
    span{
        
        border-radius: 10px;
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    }
    img {
        /* filter: blur(1px); */
    }
`;

const FormWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(105deg, ${Color.mainGray}${opacityToHex(0.9)} 50%, ${Color.mainBlue}${opacityToHex(0.25)} 50%);
    z-index: 2;
    border-radius: 10px;
`;

const Form = styled.form`
    padding: 6rem;
`;
const InputWrapper = styled.div``;
const Input = styled.input``;
const Label = styled.label``;

