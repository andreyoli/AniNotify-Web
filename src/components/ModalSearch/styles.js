import styled from 'styled-components'
import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'

export const CloseModal = styled(MdClose)`
  position: absolute;
  width: 5em;
  height: 5em;
  top: 0;
  right: 0;
  margin: 10px 10px 0 0;
  @media (max-width: 768px) {
    width: 4em;
    height: 4em;
  }
`

export const ModalSearch = styled(Modal)`
  position: fixed;
  outline: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  backdrop-filter: saturate(180%) blur(5px);
  transition: all 0.5s ease;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  .modal-base_after-open {
    opacity: 1;
    transform: scale(1);
  }

  .modal-base_before-close {
    transform: scale(0.2);
    opacity: 0;
  }
  input {
    margin-top: 100px;
    width: 80%;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0);
    &::placeholder {
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    background: rgba(10, 15, 36);
    input {
      width: 90%;
      margin: 20px 20px 0;
    }
  }
`

export const Results = styled.div`
  min-width: 80%;
  max-width: 80%;
  overflow-y: scroll;

  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    outline: 1px solid slategrey;
  }
  @media (max-width: 768px) {
    max-width: 90%;
  }
`
