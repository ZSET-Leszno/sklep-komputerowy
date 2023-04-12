import React from "react";
import Input from "../UI/Input";
import { useState } from "react";

const NewsletterForm = () => {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const inputs = [
    {
      id: "01",
      name: "name",
      placeholder: "Name",
    },
    {
      id: "02",
      name: "phoneNumber",
      placeholder: "Phone number",
      type: "tel",
    },
    {
      id: "03",
      name: "email",
      placeholder: "E-mail",
      type: "email",
    },
  ];

  const inputsList = inputs.map((input) => <Input {...input} key={input.id} />);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      {inputsList}
      <button>Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
