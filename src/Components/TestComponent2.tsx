import React, { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled(motion.div)`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  margin: 2rem auto;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const BlackDot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  margin: 2rem;
`;

const ToggleButton = styled.button`
  background: #fff;
  color: #000;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 2rem;
`;

const MotionTestComponent2 = () => {
  const [visibleBox, setVisibleBox] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleToggle = () => {
    setRotation((prev) => prev + 360);
    setVisibleBox((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <>
     <Link to="/test1" style={{ color: "blue" }}>Go to home</Link>
      <Wrapper
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.6 }}
      >
        <BlackDot />
        <Box
          animate={{ rotate: rotation }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            background:
              visibleBox === 1
                ? "linear-gradient(135deg, #ffa500, #ff4500)"
                : "linear-gradient(135deg, #00c6ff, #0072ff)",
          }}
        />

        <ToggleButton onClick={handleToggle}>
          Roll & Show Box {visibleBox === 1 ? 2 : 1}
        </ToggleButton>

        <BlackDot />
      </Wrapper>
    </>
  );
};

export default MotionTestComponent2;
