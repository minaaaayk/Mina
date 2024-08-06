"use clint"
import React, { useState } from 'react'
import styled from 'styled-components'
import { BackgroundImage, SecondaryHeading, AnimatedButton } from '../modules';
import { Color } from '../../constants';
import { opacityToHex } from '../../functions';
import { useIsRtl } from '../../hooks/useIsRtl';

export const BookForm:React.FC = () => {
    const [option, setOption] = useState("1");
  const isRtl = useIsRtl();
  return (
    <Wrapper>
        <BackgroundImage/>
        <FormWrapper> 
            <SecondaryHeading> Start Booking </SecondaryHeading>
            <Form>
                <InputWrapper>
                    <Input name="name" type="text" placeholder='Full name' required/>
                    <Label> Full name </Label>
                </InputWrapper>
                <InputWrapper>
                    <Input name="email" type="email" placeholder='Email' required/>
                    <Label> Email </Label>
                </InputWrapper>

                <RadioWrapper>
                    <RadioItem>
                        <Radio name="type" required checked={option === "1"} onChange={() =>setOption("1")}/>
                        <RadioLabel onClick={() =>setOption("1")}> Option1 </RadioLabel>
                    </RadioItem>
                    <RadioItem >
                        <Radio name="type" required checked={option === "2"} onChange={() =>setOption("2")}/>
                        <RadioLabel onClick={() =>setOption("2")}> Option2 </RadioLabel>
                    </RadioItem>
                </RadioWrapper>
            </Form>
            <Btn color={Color.mainGreen}>Next step {isRtl ? `←` : `→`} </Btn>
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
    padding: 6rem;
`;

const Form = styled.form`
    margin: 2.5rem 0 5rem;
`;

const Btn = styled(AnimatedButton)`
    color: white;
`;
//----------------------------------------------------------------
const InputWrapper = styled.div`
    margin-bottom: 2rem;
    width: 50rem;
`;

const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 700;
    margin: .7rem 2rem 0;
    display: block;
    transition: all .2s;
    opacity: 1;
`;


const Input = styled.input`
    font-size: 1.5rem;
    width: 100%;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    font-family: inherit;
    border-bottom: 3px solid transparent;
    display: block;
    transition: all .5s;

    &::placeholder{
        color: #999;
    }
    &:invalid{
        border-bottom: 3px solid ${Color.mainPink};
    }

    &:focus{
        outline: none;
        box-shadow: 0 1rem 2rem rgba(0, 0 , 0, .1);
        border-bottom: 3px solid ${Color.mainGreen};
    }
    &:placeholder-shown + ${Label}{
        opacity: 0;
        visibility: 0;
        position: fixed;
        transform: translateY(-4rem);
        z-index: -1;
    }
`;

//---------------------------------------------------------------------------
const RadioWrapper = styled.div`
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem 0;
`;

const RadioItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;
const RadioLabel = styled.label`
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    cursor: pointer; 
    position: relative;
    &::before{
        margin: 0 10px;
        content: "";
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 4px solid ${Color.mainGreen};
        border-radius: 50%;
        z-index: 1;
    }
    &::after{
        content: "";
        display: inline-block;
        position: absolute;
        left: 19px;
        top: 9px;

        width: 12px;
        height: 12px;
        background-color: ${Color.mainGreen};
        border-radius: 50%;
        opacity: 0;
    }
    
`;
const Radio = styled.input.attrs({ type: "radio" })`
    width: 3rem;
    height: 3rem;
    display: none;
    &:checked{
        & + ${RadioLabel}::after {
            opacity: 1;
        }
    }
`;