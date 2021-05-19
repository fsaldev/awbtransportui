import React from "react";
import {
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Snackbar,
  } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Controller, useForm } from "react-hook-form";
import { reqBits } from "../../Common/CommonVariables";
import styleClasses from "../../Common/styleClasses";

type Props = {
    controlProp:any;
    manualStatesProp:any;
    idProp:string;
    reqBitProp:boolean;
    setManualStateFunction:any;
    question:string;
}

export default function CheckBoxComponent(props:Props){
    const classes = styleClasses.useStyles();
    const {controlProp, manualStatesProp,idProp,reqBitProp,question} = props;

    return(
        <React.Fragment>
            <FormControl component="fieldset">
                <FormGroup aria-label="position">
                <Controller
                rules={{ required: reqBitProp}}
                control={controlProp}
                name={idProp}
                as={
                    <FormControlLabel
                        className={classes.text}
                        control={
                        <Checkbox 
                            // name="united_state_citizen"
                            defaultChecked={manualStatesProp[idProp]==="Yes"}
                            onClick={((e:any)=>{
                            if(manualStatesProp[idProp] === "No")
                            {
                                props.setManualStateFunction({...manualStatesProp,[idProp]:"Yes"});
                            }
                            else
                            {
                                props.setManualStateFunction({...manualStatesProp,[idProp]:"No"});
                            }
                            })}
                            color="primary" />
                        }
                        label={question}
                        labelPlacement="end"
                    />
                }
                ></Controller>
                </FormGroup>
            </FormControl>
        </React.Fragment>
    );
} 