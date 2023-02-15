import styled from 'styled-components';

const BoxOne = styled.div`
  background-color: green;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 10rem;
`;

const BoxTwo = styled.div`
  background-color: blue;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxThree = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  height: 80vh;
`;

const BoxFour = styled.div`
  background-color: purple;
  width: 50vw;
  height: 20vh;
`;
export const Box1 = () => {
  return (
    <BoxOne>
      <BoxTwo>
        <BoxThree>
          <BoxFour />
          <BoxFour />
        </BoxThree>
      </BoxTwo>
    </BoxOne>
  );
}

