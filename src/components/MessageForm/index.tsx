import { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./index.css"
import gmail from "../../assets/images/gmail.svg"
import linkedin from "../../assets/images/linkedin.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import instagram from "../../assets/images/instagram.svg"

const MessageForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (values: any, resetForm: () => void) => {
    const { user_name, user_email, message } = values;

    const emailBody = `Name: ${user_name}\nEmail: ${user_email}\n\nMessage: ${message}`;
    console.error(emailBody);
    

    if (form.current) {
      const currentForm = form.current as HTMLFormElement;

      try {
        await emailjs.sendForm("service_u5usa3i", "template_gnnk38r", currentForm, "WhIa-BxTLwXX4sWHm");
        console.log("SUCCESS!");
        resetForm();
      } catch (error: any) {
        console.log("FAILED...", error.text);
      }
    } else {
      console.error("Form ref is not assigned.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white gap-6 py-14 shadow-custom">
      <div className="flex flex-col items-start w-4/5 justify-start gap-4">
        <h1 className="font-extrabold text-xl">Let's Chat, Reach Out to Me</h1>
        <p className="text-sm">Have questions or feedback? i'm here to help. Send me a message, and i will respond within 24 hours</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => sendEmail(values, resetForm)}
      >
        <Form className=" flex flex-col gap-5 w-4/5" ref={form}>
          <div className="flex flex-col gap-1 ">
            <label className="font-medium" htmlFor="user_name">Name</label>
            <Field className="h-8 w-full bg-gray-100" type="text" name="user_name" />
            <ErrorMessage name="user_name" component="div" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="user_email">Email</label>
            <Field className="h-8 w-full bg-gray-100" type="email" name="user_email" />
            <ErrorMessage name="user_email" component="div" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="message">Message</label>
            <Field className="min-h-24 w-full bg-gray-100" as="textarea" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>

          <button className="flex self-center bg-custom-skyblue font-bold text-white py-1 w-full items-center justify-center" type="submit">Send</button>
        </Form>
      </Formik>
      <div className="flex flex-col items-center justify-center gap-11 mt-9">
        <h1>Or visit my social media</h1>
        <div className="flex flex-row gap-9">
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=jokosetiawan.career@gmail.com&su=Subject&body=Message+here&tf=cm">
            <img className="custom-img" src={gmail} alt="" />
          </a>
          <a href="www.linkedin.com/in/jstwan">
            <img className="custom-img" src={linkedin} alt="" />
          </a>
          <a href="https://wa.me/+6281276131433">
            <img className="custom-img" src={whatsapp} alt="" />
          </a>
          <a href="https://www.instagram.com/joko._.setiawan?igsh=MW9iaGtkYmtmeHMzNg==">
            <img className="custom-img" src={instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
