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
import { makeStyles } from '@material-ui/core';

type Props = {
    name:string;
    form:any;
    defaultValues:string;
    setListFunction:any;
    label:string;
    reqBit:boolean;
    className:string;
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }));

let arr:string[] = [];

export default function FixedTags(props:Props) {
    const classes = useStyles();
    const {register,control} = props.form;
    const [strOfStates,setStrOfStates] = useState("");
    const NorthEastStates = "CT,ME,MA,NH,NJ,NY,PA,RI,VT,DE,MD";
    const SouthWestStates = "AZ,CA,CO,NV,NM,OK,TX,UT";
    const [selectedStates,setSelectedStates] = useState<{value:string}[]>(commaStringToArray(props.defaultValues));

    function commaStringToArray(stringArg:string){
        try {
            if(stringArg === "")return[];
            let strArr:string[] = stringArg.split(',');
            let strObjArr:{value:string}[] = [];
            strArr.forEach((strValue:string)=>{strObjArr.push({value:strValue})});
            return strObjArr;
        }
        catch(ex)
        {
            console.log(ex); 
            return [];           
        }
    }

    function arrOfStringToCommaString(arrOfStringObj:{value:string}[]) {
        try {
              let val:string = "";
              arrOfStringObj.forEach((element,index,arr)=>{
                if(typeof element === "string") {
                    arr[index] = {value:element};
                  }
                val += arr[index].value+",";
              });
              setStrOfStates(val);
              val = val.slice(0,val.length-1);
              return val;
          }
          catch(ex)
          {
              console.log(ex);
              return "";
          }
    }

    function InsertNewStates(states:string) {
      if(strOfStates === "") 
      {
        setStrOfStates(states);  
      }
      else
      {
        setStrOfStates(strOfStates+","+states);
      }
      setSelectedStates(commaStringToArray(strOfStates));
      props.setListFunction(strOfStates);
    }


    function DeleteStates (states:string){
      let totalInsertedStates = commaStringToArray(props.defaultValues);

      let filteredArrObj:{value:string}[] = totalInsertedStates.filter(
            (element:{value:string}) => {
              return states.includes(element.value) === false;
            }
        );
    }

    function handleNorthEastCheckBox(e:any){
      if(e.target.checked)
      {
          InsertNewStates(NorthEastStates);
      }
      else
      {
          DeleteStates(NorthEastStates);
      }
    }

    function handleSouthWestCheckBox(e:any){
      if(e.target.checked)
      {
          InsertNewStates(SouthWestStates);
      }
      else
      {
          DeleteStates(SouthWestStates);
      }
    }

    function autoCompleteOnChange(e:any,value:{value:string}[]) {
      setSelectedStates(value)
      props.setListFunction(arrOfStringToCommaString(value));
    }

    return (
      <React.Fragment>
        {/* <FormControl component="fieldset" className="col-10">
          <FormLabel component="legend">Regions in US States</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="Northeast"
              control={<Checkbox color="primary" 
                onChange={(e:any)=>{
                  handleNorthEastCheckBox(e);
                }}
              />}
              label="Northeast"
            />
            <FormControlLabel
              value="Southwest"
              control={<Checkbox color="primary" 
                onChange={(e:any)=>{
                  handleSouthWestCheckBox(e);
                }}
              />}
              label="Southwest"
            />
            <FormControlLabel
              value="West"
              control={<Checkbox color="primary" />}
              label="West"
            />
            <FormControlLabel
              value="Southeast"
              control={<Checkbox color="primary" />}
              label="Southeast"
            />
            <FormControlLabel
              value="Midwest"
              control={<Checkbox color="primary" />}
              label="Midwest"
            />
          </FormGroup>
        </FormControl> */}
          <Autocomplete
            multiple
            freeSolo={true}
            autoSelect={true}
            id="auto"
            options={statesAbbrivations}
            getOptionLabel={(option) => option.value}
            style={{padding:"0px"}}
            filterSelectedOptions
            className="col-12"
            onChange={(e:any,value:any)=>{
              autoCompleteOnChange(e,value);
            }}
            defaultValue={selectedStates}
            value={selectedStates}
            renderInput={(params) => (
              <TextField
                    className="col-10"
                    multiline
                    rows={2}
                    {...params}
                    variant="outlined"
                    placeholder="States"
                    label={props.label}
                    inputRef={register(props.name,{required:props.reqBit})}
                />
            )}
          />
      </React.Fragment>
      );
}
