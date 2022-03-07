import FormBox from '../components/FormBox'
import Input from '../components/Input'
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import styled from "styled-components";
import logo from '../img/하루루틴로고.png';
import Input1 from './Input1'
import Input2 from './Input2'

const Container = styled.div`
  position: absolute;
  left: 31%;
  top: 50%;
  height: 240px;
  width: 540px;
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

const ImgContainer = styled.div`
  position: absolute;
  left: 36%;
  bottom: 44%;
`;

function InputMain() {

  const [inputNum, setInputNum] = useState(1);

  const {register, handleSubmit, formState, getValues} = useForm({
    mode: "onChange",
  });
  let component = "Input"
  return (
    <div>
      <ImgContainer>
        <img src={logo} width="400" height="400"/>
      </ImgContainer>
      <Container>
        {
          (function () {
            if (inputNum === 1) return (<Input1 setInputNum={setInputNum}/>);
            else if (inputNum === 2) return (<Input2 setInputNum={setInputNum}/>);
          })()
        }
      </Container>
    </div>
  )
    ;
}

export default InputMain;