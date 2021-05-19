import React, { useState } from 'react';
import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField,
  } from "@material-ui/core";
import { formatZipCode, reqBits, RequireError } from '../../Common/CommonVariables';

type Props = {
    mainId:string,
    subId:string,
    index:number,
    forms:any,
    item:any,
    className:string,
    reqBit:boolean,
}

export function ZipCode(props:Props)
{
    const {errors,register} = props.forms;
    const [zipCodeNumber,setZipCodeNumber] = useState(props.item[props.subId]);

    return (
        <React.Fragment>
            <TextField
            name={`${props.mainId}[${props.index}][${props.subId}]`}
            inputRef={register({
            required: {
                value: props.reqBit,
                message: RequireError,
            },
            maxLength: {
                value: 5,
                message: "Max 5 Digits",
            },
            minLength: {
                value: 5,
                message: "Min 5 Digits",
            },
            })}
            error={
            errors &&
            errors[props.mainId] &&
            errors[props.mainId][props.index] &&
            errors[props.mainId][props.index][props.subId]
            }
            helperText={
            errors &&
            errors[props.mainId] &&
            errors[props.mainId][props.index] &&
            errors[props.mainId][props.index][props.subId] &&
            errors[props.mainId][props.index][props.subId].message
            }
            variant="outlined"
            size="small"
            defaultValue={props.item[props.subId]}
            type="text"
            label={
            "Zip Code " +
            (() => {
                return reqBits.zipCode == true ? "*" : "";
            })()
            }
            value={zipCodeNumber}
            onChange={
              (e:any)=>{
                setZipCodeNumber(formatZipCode(e.target.value));
              }
            }
            className={props.className}
        ></TextField>
        </React.Fragment>

    );
}