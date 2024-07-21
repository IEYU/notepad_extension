import styled from 'styled-components';

// Wrapper for the Notes component
const Wrapper = styled.nav`
  height: 20rem; /* Set height to 20rem */
  display: flex; /* Use flexbox to align children */
  flex-direction: column;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  flex: 1; /* Allow it to grow and fill available space */
`;

export default Wrapper;
