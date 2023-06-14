import styled from "styled-components";

export const MovieContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 15px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-gap: 10px;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-gap: 5px;
    h2 {
      font-size: 19px;
    }
  }
`;

export const MovieComponent = styled.div`
  background: #333;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const MovieContent = styled.div`
  padding: 1rem;
  h2 {
    text-align: left;
  }
  p {
    text-align: left;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
`;

export const ModalContent = styled.div`
  button {
    position: fixed;
    right: 12px;
    top: 12px;
  }

  img {
    width: 250px;
    height: 350px;
    object-fit: cover;
    background-position: center;
  }
`;
