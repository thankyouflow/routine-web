import styled from "styled-components";


const Container = styled.div`
  position: absolute;
  left: 30%;
  top: 22%;
  height: 55%;
  width: 40%;
  background-color:rgba(255,255,255,.9);
  border-radius: 20px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

function FormBox({children}) {
  return
  <div>
  <div></div>
  <Container>{children}</Container>
    </div>;
}

export default FormBox;