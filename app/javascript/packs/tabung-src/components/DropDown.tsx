import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Container, ErrorMessage, IconContainer, Menu, MenuItem, StyledDropdown} from "./DropDown.styles";

type Props = {
  value: string;
  options: string[];
  placeholder?: string;
  error?: Error;
  isDisabled?: boolean;
  onChange: (option: string) => void;
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
      if (value === '') {
        setIsOpen(false);
      }
      else {
        setIsOpen(true);
      }
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

  useEffect(() => {
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
          <FontAwesomeIcon icon={faSearch} color="#000000" />
        </IconContainer>
        {errorMessage}
        <Menu isOpen={isOpen}>{items}</Menu>
      </Container>
  );
}
