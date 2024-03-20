"use client";

import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";

export default function Sidebar() {
  const theme = useGlobalState();
  console.log(theme);
  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
          <div className="image">
            <Image
              width={70}
              height={70}
              src="/avatar1.png"
              alt="profile"
            ></Image>
          </div>
          <h1>
            <span>Sin</span>
            <span>Doe</span>
          </h1>
        </div>
        <ul className="nav-items"></ul>
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.colorGrey3};
`;
