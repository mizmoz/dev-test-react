import styled from "styled-components";

const StyledFormContainer = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #6faeed;
`;

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: flex-end
`

const Flexrow = styled.div`
  width: 100%;
  display: flex;
`

const FlexColumnCountry = styled.div`
  flex: 2;
  width: ${(props) => props.size / 12 * 100}vw;
  margin-right: 12px;
`

const FlexColumn = styled.div`
  flex: 1;
  color: white;
  width: ${(props) => props.size / 12 * 100}vw;
  margin-right: 12px;
`

const FlexColumnLarger = styled.div`
  flex: 3;
  color: white;
  width: ${(props) => props.size / 12 * 100}vw;
`

const Input = styled.input`
  border: 1px solid #ccc;
  height: 100%;
  border-radius: 4px;
  padding: 10px;
`

const SearchInput = styled.input`
  border: 1px solid #ccc;
  height: 100%;
  border-radius: 4px;
  padding: 10px;
  width: 300px;
`

const AddButton = styled.button`
  border: 1px solid #6faeed;
  height: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
`

const ErrorContainer = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #721c24;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`

const TryAgain = styled.a`
  color: #721c24;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`

const UpdateButton = styled.a`
  color: #6faeed;
  font-weight: bold;
  margin-right: 6px;
  :hover {
    text-decoration: underline;
  }
`

const DeleteButton = styled.a`
  color: #721c24;
  font-weight: bold;
  margin-right: 6px;
  :hover {
    text-decoration: underline;
  }
`

const StyledTable = styled.table`
  width: 100%;
  margin-top: 10px;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  border: 1px solid #6faeed;
  caption-side: bottom;

  td,
  th {
    border: none;
    text-align: center;
    padding: 10px;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 10px 20px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #fff;
    }
    :nth-of-type(even) {
      background-color: rgb(243, 249, 255);
    }
    :hover {
      background-color: rgb(243, 249, 255);
    }
  }
  thead > tr {
    background-color: rgb(195, 221, 247);
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export {
  StyledFormContainer,
  Flexrow,
  FlexColumn,
  FlexColumnCountry,
  FlexColumnLarger,
  Input,
  AddButton,
  ErrorContainer,
  TryAgain,
  UpdateButton,
  StyledTable,
  DeleteButton,
  SearchInput,
  SearchInputContainer
}