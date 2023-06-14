import styled from "styled-components";

export const ImageComponent = styled.div`
  width: 100%;
  height: 400px;
  background: gray;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SearchBox = styled.input`
  width: 50%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 2rem;
  margin-top: 1rem;
  margin-right: 1rem;

  &:focus {
    border: 1px solid #333;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const Filtering = styled.select`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 1rem;

  &:focus {
    border: 1px solid #333;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }

  option {
    font-size: 1.2rem;
  }

  option:hover {
    background: #333;
    color: white;
  }

  option:checked {
    background: #333;
    color: white;
  }

  option:active {
    background: #333;
    color: white;
  }

  option:focus {
    background: #333;
    color: white;
  }

  option:visited {
    background: #333;
    color: white;
  }

  option:disabled {
    background: #333;
    color: white;
  }
`;
