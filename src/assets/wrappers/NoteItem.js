import styled from 'styled-components';

// Wrapper component for the entire note item
const Wrapper = styled.nav`
  font-size: large;
  border-radius: 10px;
  border: transparent;
  background-color: #f0f0f576;
  color: rgb(0, 0, 0);
  margin: 10px auto; /* Center horizontally and add vertical margin */
  padding: 10px; /* Add padding for inner content spacing */
  text-align: left; /* Align text to the left */
  max-width: 600px; /* Optional: Limit the maximum width */
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #e0e0e5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }
`;

const Text = styled.div`
  font-size: medium;
  padding: 0 1rem; /* Apply padding to the left and right */
  color: black;
  text-decoration: none;
`;

const Date = styled.div`
  font-size: x-small;
  padding: 0 1rem; /* Apply padding to the left and right */
  color: black;
  text-decoration: none; /* Ensure no underline or decoration */
`;


export { Wrapper, Text, Date }; /* Named exports */
