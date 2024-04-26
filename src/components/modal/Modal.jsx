import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ModalAnimation.module.css";
import OTP from "../../pages/transfer/components/OTP";
import { Box, Button, Text, Icon, Input } from "@chakra-ui/react";


const Backdrop = () => {
  return (
    <Box
      position={"fixed"}
      top={"0"}
      left={"0"}
      w={"100%"}
      height={"100vh"}
      zIndex={"10"}
      bg={"blackAlpha.600"}
      backdropFilter={"blur(10px)"}
    ></Box>
  );
};

const ModalOverlay = (props) => {
  return (
    <Box
      bg="#fff5f5"
      position={"fixed"}
      top={"30vh"}
      // padding={"5px"}
      marginRight={"10px"}
      borderRadius={"12px"}
      border={"2px solid #c92a2a"}
      left={["0", "12.5%", "25%"]}
      w={["100%", "75%", "50%"]}
      zIndex={"100"}
      className={classes.modal}
    >
      <OTP />
      <Text py={"1rem"} px={"27px"} textAlign={"left"} color={"#212529"}>
        {props.message}
      </Text>
      <Box display={"flex"} justifyContent={"center"} p={"1rem"}>
        <Button
          // className="bg-blue-900"
          w={"20%"}
          bg={"#c92a2a"}
          alignSelf={"left"}
          borderRadius={"5px"}
          color={"white"}
          onClick={props.onCancel}
          _hover={{ bg: "#ff6b6b", borderColor: "#fff" }}
        >
          Ok
        </Button>
      </Box>
    </Box>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCancel={props.onCancel}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;