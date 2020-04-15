import styled from "styled-components";

type StyledDropdownProps = {
  borderColor: string;
  borderColorFocus: string;
};

type MenuProps = {
  isOpen: boolean;
};

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const StyledDropdown = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 8px 0;
  font-size: 12px;
  border-bottom: 1px solid ${(props: StyledDropdownProps) => props.borderColor};
  transition: border-bottom-color 300ms;
  cursor: pointer;

  &:focus {
    border-bottom: 1px solid ${(props: StyledDropdownProps) => props.borderColorFocus};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
`;

export const Menu = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow-y: auto;
  visibility: ${(props: MenuProps) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props: MenuProps) => (props.isOpen ? 1 : 0)};
  position: absolute;
  right: 0px;
  z-index: 1;
  background: white;
  border: 1px solid #EAEAEA;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  transition: opacity 300ms linear;
`;

export const MenuItem = styled.div`
  padding: 5px 10px;

  &:hover {
    background: #EAEAEA;
  }
`;

export const ErrorMessage = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: #D50065;
`;
