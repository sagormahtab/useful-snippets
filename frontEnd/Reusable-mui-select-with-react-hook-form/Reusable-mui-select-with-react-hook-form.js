//There are two components here combined in one file for the demonstration purpose. 

//App.js
import React from "react";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import FormSelect from "./FormSelect";
import { useForm } from "react-hook-form";

const countries = [
  { id: 1, label: "Afghanistan" },
  { id: 2, label: "Albania" },
  { id: 3, label: "Algeria" },
  { id: 4, label: "Andorra" },
  { id: 5, label: "Angola" },
  { id: 6, label: "Antigua" },
  { id: 7, label: "Argentina" },
  { id: 8, label: "Armenia" },
  { id: 9, label: "Australia" },
  { id: 10, label: "Austria" },
  { id: 11, label: "Azerbaijan" },
  { id: 12, label: "The Bahamas" },
  { id: 13, label: "Bahrain" },
  { id: 14, label: "Bangladesh" },
  { id: 15, label: "Barbados" },
  { id: 16, label: "Belgium" },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSelect
          name="name"
          label="Shipping Country"
          control={control}
          className={classes.formControl}
        >
          {countries.map((country) => (
            <MenuItem key={country.id} value={country.id}>
              {country.label}
            </MenuItem>
          ))}
        </FormSelect>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


//FormSelect.js
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";

const FormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select labelId={labelId} label={label} {...field}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
export default FormSelect;
