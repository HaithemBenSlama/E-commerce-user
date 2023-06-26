import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #5542f6;
  border: 0;
  color: #fff;
  padding: 5px 15px;
  border-raduis: 5px;
`;

export default function PrimaryBtn({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
