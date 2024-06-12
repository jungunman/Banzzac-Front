import { navList } from "@constants/index";
import SvgSelector from "@components/Svg/SvgSelector";
import styled from "@emotion/styled";

import { Link, useLocation } from "react-router-dom";

export default function Navigator() {
  const { pathname } = useLocation();

  return (
    <Container>
      <ul>
        {navList.map((navItem) => (
          <NavItem key={navItem.name} active={navItem.route === pathname}>
            <Link to={navItem.route}>
              <SvgSelector
                svg={navItem.icon}
                width={24}
                height={24}
                stroke={navItem.route === pathname ? "#A86EFA" : "#212121"}
              />
              <div>{navItem.name}</div>
            </Link>
          </NavItem>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  border: 1px solid #212121;
  padding: 5px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 56px;
  position: fixed;
  width: calc(100% - (24px * 2));
  left: 24px;
  bottom: 15px;
  box-shadow: 0px 1px 3px 0px #0000004d;
  box-shadow: 0px 4px 8px 3px #00000026;
  background-color: #fff;
  z-index: 9999;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
  color: ${({ active }) => (active ? "#A86EFA" : "#212121")};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
