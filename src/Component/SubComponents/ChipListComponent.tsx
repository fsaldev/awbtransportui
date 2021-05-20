/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { reqBits, states, statesAbbrivations } from '../../Common/CommonVariables';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { register } from '../../services/registerApi';

type Props = {
    name:string;
    form:any;
    defaultValues:any;
    setListFunction:any;
}

export default function FixedTags(props:Props) {
    const fixedOptions: string | any[] = [];
    const {register,control} = props.form;
    const [defaultValuesObj,setDefaultValuesObj] = useState([]);
    const [value, setValue] = React.useState(defaultValuesObj);

    useEffect(()=>{
        let arr:any = [];
        props.defaultValues.forEach((element:string) => {
            arr.push({value:element});
        });
        console.log("Array");
        console.log(props.defaultValues);
        setDefaultValuesObj(arr);
        console.log(defaultValuesObj);
    },[props.defaultValues]);

    useEffect(()=>{
        props.setListFunction(value);
        console.log("UseEffect")
        console.log(value)
    },[value]);

    return (
        <React.Fragment>
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Label Placement</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="start"
                        control={
                            <Checkbox color="primary" 
                            onChange={(e:any)=>{
                                let s = [statesAbbrivations[0] , statesAbbrivations[1]];
                                console.log("s");
                                console.log(s);
                                console.log("s.filter");
                                console.log(...s.filter((option) => fixedOptions.indexOf(option) === -1));
                                setValue([
                                    ...fixedOptions,
                                    ...s.filter((option) => fixedOptions.indexOf(option) === -1),
                                    ]);
                            }}
                            />
                        }
                        label="Start"
                        labelPlacement="start"
                        />
                    </FormGroup>
                    </FormControl>
                    <Autocomplete
                        multiple
                        aria-multiline
                        aria-rowspan={4}
                        id="fixed-tags-demo"
                        size="small"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue([
                            ...fixedOptions,
                            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                            ]);
                        }}
                        options={statesAbbrivations}
                        getOptionLabel={(option) => option.value}
                        renderTags={(tagValue, getTagProps) =>
                            tagValue.map((option, index) => (
                            <Chip
                                label={option.value}
                                {...getTagProps({ index })}
                                disabled={fixedOptions.indexOf(option) !== -1}
                            />
                            ))
                        }
                        name={props.name}
                        inputRef={register(
                            props.name,
                            {require:true}
                        )}
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Fixed tag" variant="outlined" placeholder="Favorites" />
                        )}
                        />
        </React.Fragment>
    );
}
