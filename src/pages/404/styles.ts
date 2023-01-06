import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 5rem;
  color: #fff;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin-bottom: 30px;
  h2 {
    font-size: 3rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 20%;
`;

export const GoHomeBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  background: #333333;
  color: white;
  padding: 17px;

  border: none;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #333333;
    border: 1px solid #333333;
  }
`;
