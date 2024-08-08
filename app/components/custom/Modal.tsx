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