import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  value: string;
  options: string[];
  placeholder?: string;
  error?: Error;
  isDisabled?: boolean;
  onChange: (option: string) => void;
};

type StyledDropdownProps = {
  borderColor: string;
  borderColorFocus: string;
};

type MenuProps = {
  isOpen: boolean;
};

export default function Dropdown(props: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { value, options, placeholder, error, isDisabled, onChange } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState<string>(value);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  let handleChange = onChange;
  let borderColor = "#BFBFBF";
  let borderColorFocus = "#000000";
  let errorMessage = null;

  useEffect(() => {
    setDisplayValue(props.value);
    setFilteredOptions(props.options);
  }, [props]);

  function handleClick(e: MouseEvent) {
    if (ref.current === null) {
      return;
    }

    if (ref.current.contains(e.target as Element)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  function handleChangeText(e: ChangeEvent<HTMLInputElement>) {
    /*
      If a user were to use Tab to navigate to the input text field,
      it is possible for the options to be filtered as the user types
      but the dropdown will not be shown. So the dropdown will be forced
      open here.
     */
    setIsOpen(true);
    const newOptions: string[] = options.filter((option: string) =>
        option.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayValue(e.target.value);
    setFilteredOptions(newOptions);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      selectOption(filteredOptions[0]);
    }
  }

  function selectOption(option: string) {
    setIsOpen(false);
    setDisplayValue(option);
    handleChange(option);
  }

  React.useEffect(() => {
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  if (isDisabled) {
    handleChange = () => {};
  }

  if (error) {
    borderColor = "#D50065";
    borderColorFocus = "#D50065";
    errorMessage = <ErrorMessage>{error.message}</ErrorMessage>;
  }

  const items = filteredOptions.map(option => (
      <MenuItem
          key={option}
          onClick={() => {
            selectOption(option);
          }}
      >
        {option}
      </MenuItem>
  ));

  return (
      <Container ref={ref}>
        <StyledDropdown
            type="text"
            placeholder={placeholder}
            value={displayValue}
            borderColor={borderColor}
            borderColorFocus={borderColorFocus}
            onChange={handleChangeText}
            onKeyDown={handleKeyDown}
        />
        <IconContainer>
          <FontAwesomeIcon icon={faChevronDown} color="#000000" />
        </IconContainer>
        {errorMessage}
        <Menu isOpen={isOpen}>{items}</Menu>
      </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const StyledDropdown = styled.input`
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

const IconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
`;

const Menu = styled.div`
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

const MenuItem = styled.div`
  padding: 5px 10px;

  &:hover {
    background: #EAEAEA;
  }
`;

const ErrorMessage = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: #D50065;
`;
