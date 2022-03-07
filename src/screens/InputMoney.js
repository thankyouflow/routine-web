import FormBox from '../components/FormBox'
import Input from '../components/Input'
import {useForm} from "react-hook-form";
import React, {useState} from "react";

function InputMoney() {

  const [num, setNum] = useState("");

  const {register, handleSubmit, formState, getValues} = useForm({
    mode: "onChange",
  });

  const onSubmitValid = (data) => {
    console.log(data)
  };

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  return (
    <FormBox>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <input
          {...register("price", {
            required: true,
            onChange: (e) => {setNum(inputPriceFormat(e.target.value))},
          })}
          placeholder=""
          value={num}
        />
        <input
          type="submit"
          value={""}
          disabled={!formState.isValid}
        />
      </form>
    </FormBox>
  )
    ;
}

export default InputMoney;