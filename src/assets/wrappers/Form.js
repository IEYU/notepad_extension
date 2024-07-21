// ../assets/wrappers/Form.js
import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: auto;
  height: 20rem; /* Set height to match the body height */
  display: flex; /* Use flexbox to align children */
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%; /* Take up the full height of FormContainer */
`;

export const TitleInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px; /* Consistent margin with Textarea */
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 16px;
  font-family: Arial, sans-serif; /* Ensure the same font-family as Textarea */
`;

export const NoteTextarea = styled.textarea`
  border: none;
  font-size: 16px;
  resize: none;
  overflow-y: auto;
  outline: none;
  margin-bottom: 5px; /* Consistent margin with Input */
  flex: 1; /* Allow it to grow and fill available space */
  font-family: Arial, sans-serif; /* Ensure the same font-family as Input */
`;

export const HiddenSubmitButton = styled.button`
  display: none;
`;

export default { FormContainer, StyledForm, TitleInput, NoteTextarea, HiddenSubmitButton };
