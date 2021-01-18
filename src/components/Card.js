import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotateX(180deg);
  }


  to {

    transform: rotateX(0deg);
  }
`;

const hide = keyframes`
  from {
  opacity:0.0;
  }
  50%{opacity:0.0;}
  to{
  opacity:1.0;
  }
`;

const InnerCointainer = styled.div`
  animation: ${hide} 0.32s ease-in-out;
`;

const Perspective = styled.div`
  display: grid;
  height: 100vh;
  justify-items: center;
  align-items: center;

  perspective: 3900px;
`;

const Cointainer = styled.div`
  width: 520px;
  max-width: 98vw;
  animation: ${rotate} 0.32s ease-in-out;
  transform-style: preserve-3d;
`;

const Display = styled.div`
  grid-template-rows: auto 1fr;
`;

/*
 * props ->
 * front
 * back
 */
const Card = () => {
  const { name, title } = useParams();
  const [showFront, setShowFront] = useState(true);
  return (
    <Perspective>
      <Cointainer
        onClick={() => setShowFront(!showFront)}
        key={showFront}
        className="bg-white cursor-pointer rounded shadow"
      >
        <InnerCointainer>
          {showFront && (
            <>
              <div
                className="grid p-4 items-center justify-center text-sm"
                style={{ minHeight: "250px" }}
              >
                <LogoAnimation />
              </div>
            </>
          )}

          {!showFront && (
            <>
              <Back name={name} title={title} />
            </>
          )}
        </InnerCointainer>
      </Cointainer>
    </Perspective>
  );
};

const BackCointainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 8fr 2fr;
  min-height: 250px;
`;

const Back = ({ name, title }) => (
  <BackCointainer>
    <div
      style={{ background: "#4e5dce" }}
      className="py-8 px-8 font-bold text-2xl md:text-4xl text-white"
    >
      {name || "Rishav Thakur"}
    </div>
    <div
      style={{ background: "#00d09c" }}
      className="grid items-center w-full h-full text-md font-semibold text-md  px-8 text-white"
    >
      <span>
        {" "}
        {title}
        <span className="font-bold"> @Groww</span>
      </span>
    </div>
  </BackCointainer>
);

export default Card;
