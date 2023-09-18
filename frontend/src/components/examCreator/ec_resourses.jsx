import React from "react";
import "./css/ec_typing.css";
import styled from "styled-components";

const Title_clz = styled.h2`
  position: fixed;
  bottom: 30rem;
`;

const ec_resourses = (props) => {
  return (
    <div className="">
      <Title_clz className="text-info p-2 ">Resources</Title_clz>
      {/* <img src={props.imageUrl}></img> */}
      {/* {props.imageUrl.endsWith(".pdf") ? (
        <embed
          src={props.imageUrl}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      ) : (
        <img src={props.imageUrl} alt="firebase-file" />
      )} */}
      <object
        data={props.imageUrl}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link{" "}
          <a href={props.imageUrl}>to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default ec_resourses;
