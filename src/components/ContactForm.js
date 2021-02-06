import React, { useContext } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Button from "./atoms/Button";
import {
  StyledField,
  StyledFieldWrapper,
  StyledMessage,
  StyledWrapper,
  StyledFormik,
  StyledButton,
} from "./styledComponents/StyledContactForm";
import Context from "../context";

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("ENTER CORRECT EMAIL")
    .required("PLEASE COMPLETE THIS REQUIRED FIELD"),
  message: Yup.string().required("PLEASE COMPLETE THIS REQUIRED FIELD"),
  name: Yup.string().required("PLEASE COMPLETE THIS REQUIRED FIELD"),
});

// emailjs
const ContactForm = () => {
  const value = useContext(Context);
  const { handleMessageSentModalOpen, showAndCloseMessageSentModal } = value;

  const handleEmailSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            showAndCloseMessageSentModal();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          email: "",
          message: "",
          name: "",
        }}
        validationSchema={contactFormSchema}
        onSubmit={(values) => {
          console.log(values);

          values.email = "";
          values.message = "";
          values.name = "";
        }}
      >
        {({ values }) => (
          <StyledFormik onSubmit={handleEmailSend}>
            <StyledFieldWrapper>
              <label htmlFor="name">Name</label>
              <StyledField
                name="name"
                type="text"
                value={values.name}
                required
              />
              <ErrorMessage name="name" />
            </StyledFieldWrapper>

            <StyledFieldWrapper>
              <label htmlFor="email">Email</label>
              <StyledField
                name="email"
                type="email"
                value={values.email}
                required
              />
            </StyledFieldWrapper>
            <ErrorMessage name="email" />
            <StyledFieldWrapper>
              <label htmlFor="message">Message</label>
              <StyledMessage
                name="message"
                type="text"
                value={values.message}
                component="textarea"
                required
              />
            </StyledFieldWrapper>
            <ErrorMessage name="message" />

            <StyledButton>
              <Button type="submit" contact>
                Send
              </Button>
            </StyledButton>
          </StyledFormik>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default ContactForm;
