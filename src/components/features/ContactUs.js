import React, { useRef, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/contact-us.png";
import { TextareaAutosize } from "@mui/material";
import emailjs from "@emailjs/browser";
import OCTEAM from "components/features/OCTEAM.js";







const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-blue-700`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`;
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`lg:ml-6 mt-6 lg:mt-0`;

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      Feel free to <span tw="text-blue-700">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const [toCheck, setToCheck] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [error, setError] = useState("")

  const checkPassword = (e) => {
    e.preventDefault()
    setIsDisabled(true)
    setTimeout(()=>{
      setIsDisabled(false)
    },60000)
    console.log(toCheck)
    setError("")

    fetch("http://tsypdeploytest.alwaysdata.net/api/participants/send/cred",{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({email:toCheck})
  })
  .then(function(res){ 
    console.log(res.status)
    if(res.status===404){
      setIsDisabled(false)
      setError("The email you entered doesn't exist in our database")
    } 
  })
  .catch(function(res){
    setIsDisabled(false)
      setError("Sorry we are having a temporarily problem, please try again later 😒")
    
  })


       /*  const xhr = new XMLHttpRequest()
    //open a get request with the remote server URL
    xhr.open("POST", "http://102.219.179.115/api/participants/send/cred",)
    //send the Http request
    xhr.send({email:toCheck})

    //EVENT HANDLERS

    //triggered when the response is completed
    xhr.onload = function() {
      if (xhr.status === 200) {
        //parse JSON datax`x
        const data = JSON.parse(xhr.responseText)
        console.log(data)
      }else if (xhr.status === 404) {
        console.log("No records found")
      }
    }

    //triggered when a network-level error occurs with the request
    xhr.onerror = function() {
      console.log("Network error occurred")
    }

    //triggered periodically as the client receives data
    //used to monitor the progress of the request
    xhr.onprogress = function(e) {
      if (e.lengthComputable) {
        console.log(`${e.loaded} B of ${e.total} B loaded!`)
      } else {
        console.log(`${e.loaded} B loaded!`)
      }
    } */


  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72zxmoo",
        "template_tpfsjye",
        form.current,
        "pzkneTrVZmLTBd0jb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <OCTEAM />
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <Form ref={form} onSubmit={sendEmail}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email Address"
                  />
                  <br />

                  <TextareaAutosize
                    style={{
                      border: "1px solid",
                      borderColor:
                        "rgba(229, 231, 235, var(--tw-border-opacity))",
                    }}
                    minRows={5}
                    name="message"
                    placeholder="Your message"
                  />
                  <SubmitButton
                    style={{
                      marginTop: "1em",
                      marginLeft: "0px",
                      borderColor: "text-blue-700",
                    }}
                    type="submit"
                  >
                    {submitButtonText}
                  </SubmitButton>
                </div>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>Get your credentials</Subheading>}
              <Heading>Get your passwords</Heading>
              <Description>Make sure to use the email used during the registration process</Description>
              <Form ref={form} onSubmit={checkPassword}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="The email used in the registration form"
                    onChange={(e)=>setToCheck(e.target.value)}
                  />
                  <br />

                  <SubmitButton
                    style={{
                      marginTop: "1em",
                      marginLeft: "0px",
                      borderColor: "text-blue-700",
                    }}
                    type="submit"
                    disabled={isDisabled}
                  >
                    {submitButtonText}
                  </SubmitButton>
                  {isDisabled?<p style={{color:"red"}}>Please check your email to find your password, Wait for 1 minute before trying again</p>:<></>}
                  {!isDisabled?<p style={{color:"red"}}>{error}</p>:<></>}
                </div>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
                  </Container>
    </div>
  );
};
