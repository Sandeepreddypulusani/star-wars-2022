import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import StyledPaper from "./styles";

function SelectField(props) {

  const { data } = props;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledPaper>
      <FormControl fullWidth>
        <InputLabel id="select-a-character">Select a Character</InputLabel>
        <Select
          labelId="select-a-character"
          id="select-a-character"
          value={value}
          label="Select a Character"
          onChange={handleChange}
        >
          {data.charactersList.map((character) => {
            return <MenuItem value={character.url} key={character.url}>{character.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </StyledPaper>
  );
}

export default SelectField;
