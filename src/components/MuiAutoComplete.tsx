import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiAutoComplete = () => {
  type Skill = {
    id: number;
    label: string;
  };

  const skills = ["HTML", "CSS", "JavaScript", "Typescript", "React"];
  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  const [value, setValue] = useState<string | null>(null);
  const [skill, setskill] = useState<Skill | null>();

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete options={skillsOptions} renderInput={(params) => <TextField {...params} label="Skills" />} value={skill} onChange={(event: any, newValue: Skill | null) => setskill(newValue)} />
      <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="Skills" />} value={value} onChange={(event: any, newValue: string | null) => setValue(newValue)} freeSolo />
    </Stack>
  );
};

export default MuiAutoComplete;
