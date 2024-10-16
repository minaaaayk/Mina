import React from 'react'
import styled from 'styled-components';

export const Modal = () => {
  return (
    // <a href="#modal-id"> show modal</a> // to show modal add #modal-id in url
    <ModalWrapper id="modal-id">
        Modal
         {/* <a href="#"> show modal</a> // to close remove the #modal-id from url */}
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
    // modal is hidden
    opacity: 0;
    visibility: hidden;

    &:target{ // show modal on url #modal-id
        opacity: 1;
        visibility: visible;
    }

`;

const MagazineText = styled.p`
    display: table-cell; // on wrapper
    column-rule: 1px solid black;
    column-gap: 2rem;
    column-count: 2; // count of text column like magazine

    hyphens: auto; // add dashed to world, related to languages (html lang="en/fa")

    @support(rule)  or (rule) { // to check support a property
        // style 
    }
    @media(min-resolution: 192dpi){
        // for check resolution
    }

    @media screen and (hover: none) { // for mobile
        
    }
`;

const Icon = styled.i`

    fill: currentColor; // use current text color


    // like background-clip : use for text
    // use icon mask there background-color:
    background-color: red;
    mask-image: url('url');
    mask-size: cover;

`;