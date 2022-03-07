import React from "react";
import styled from "styled-components";
import logo from "../img/everyPartyLogo.png";


const Day = styled.div`
  position: absolute;
  left: 3%;
  top: 3%;
  font-size: 21px;
`;

const Dday = styled.div`
  position: absolute;
  left: 51%;
  top: 22%;
  font-size: 21px;
`;

const ProgressContainer = styled.div`
    position: absolute;
    width: ${(props) => props.width};
    background-color: rgb(50 100 150 / 15%);
    border-radius: .5rem;
    left: 14%;
    top: 46%;
`;

const Progress = styled.div`
    width: ${(props) => props.width};
    background-color: rgb(109 210 254);
    height: 26px;
    border-radius: .5rem;
`;

const ImgContainer = styled.div`
  position: absolute;
  left: 12%;
  bottom: 29.4%;
`;

const StartButton = styled.button`
  position: absolute;
  left: 38%;
  bottom: 13%;
  width: 130px;
  height: 38px;
  background-color: rgb(109 210 254 / 60%);
  border-radius: .5rem;
  text-align:center;
  font-weight: bold;
  font-family: "Goyang";
  font-size: 20px;
  border: 0;
    &:hover {
    background-color: rgb(109 210 254 / 70%);
  }
`;

function Input1() {
  let now = new Date();
  let month = now.getMonth().length == 2 ?  now.getMonth() : '0' + now.getMonth()
  let date = now.getDate().length == 2 ?  now.getDate() : '0' + now.getDate()

  const startDate = new Date(2022, 2, 21);
  const endDate = new Date(2022, 8, 30);
  const tempDate = new Date(2022, 3, 1);

  let totalGap = endDate.getTime() - startDate.getTime()
  let total = Math.floor(totalGap / (1000 * 60 * 60 * 24));

  let gap = endDate.getTime() - tempDate.getTime();
  let dDay = Math.floor(gap / (1000 * 60 * 60 * 24));

  let temp = total - dDay

  return (
    <div>
      <ProgressContainer width={String(total * 2) + 'px'}>
        <Progress width={String(temp * 2) + 'px'}></Progress>
      </ProgressContainer>
      <Day>{now.getFullYear() + '. ' + month + '. ' + date}</Day>
      <Dday>{'출시   ' + dDay + '일 전'}</Dday>
      <ImgContainer>
        <img src={logo} width="300" height="190"/>
      </ImgContainer>
      <StartButton onClick={console.log('dfsdf')}>Start</StartButton>
    </div>
  )
    ;
}

export default Input1;