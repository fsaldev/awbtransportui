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
import React, { Component, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionActions from "@material-ui/core/AccordionActions";
import { styleClasses } from "../../Common/styleClasses";
import {
  Address,
  reqBits,
  EmploymentAccidentHistories,
  EmploymentAccidentHistoryInfo,
  employmentAccidentHistoryDummyElement,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from ".././SubComponents/RadioQuestions";
import ErrorBoundary from "../ErrorBoundary";

type Props = {
  idPrefix: string;
  employmentAccidentHistoryList: EmploymentAccidentHistories;
  useForm: any;
  setEmploymentAccidentHistoryList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export default function EmploymentAccidentHistory(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors, defaultValues } = Forms;

  const [
    employmentAccidentHistoryState,
    employmentAccidentHistoryStateHandler,
  ] = useState(props.employmentAccidentHistoryList);
  //   const [errorsList, errorListHandler] = useState();
  useEffect(() => {
    employmentAccidentHistoryStateHandler(props.employmentAccidentHistoryList);
  }, [props.employmentAccidentHistoryList]);

  useEffect(() => {
    props.setEmploymentAccidentHistoryList(employmentAccidentHistoryState);
  }, [employmentAccidentHistoryState]);

  const addAddress = (event: any) => {
    event.preventDefault();
    employmentAccidentHistoryStateHandler([
      ...employmentAccidentHistoryState,
      employmentAccidentHistoryDummyElement,
    ]);
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {employmentAccidentHistoryState.map(
          (
            employmentAccidentHistoryItem: EmploymentAccidentHistoryInfo,
            index: number
          ) => {
            console.log("----------------------ERRORS----------------------");
            console.log(errors);
            console.log(errors[props.idPrefix]);
            console.log(
              errors[props.idPrefix]?.employmentAccidentHistorystatus
            );
            console.log("----------------------ERRORS----------------------");
            return (
              <Accordion elevation={3}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Accident Record for past three (3) years: 1
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="baseline"
                    spacing={3}
                  >
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        name="dateOfAccident"
                        helperText="Date of Accident"
                        type="date"
                        size="small"
                        className="col-12"
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        label="Num of Fatalities"
                        name="numberofFatalities"
                        size="small"
                        type="number"
                        className="col-12"
                      ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Num of Injured People"
                        name="numberofPeopleleInjured"
                        size="small"
                        className="col-12"
                        type="number"
                      ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        size="small"
                        label="Nature of Accidents"
                        name="NatureOfAccidents"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        className="col-12"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Location of Accident"
                        name="LocationOfAccidents"
                        size="small"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        className="col-12"
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          }
        )}
        <Grid item xs={12} style={{ padding: "20px 10px" }}>
          <Button
            size="small"
            className="col-6"
            variant="contained"
            color="primary"
            onClick={(e) => {
              employmentAccidentHistoryStateHandler([
                ...employmentAccidentHistoryState,
                employmentAccidentHistoryDummyElement,
              ]);
              console.log(employmentAccidentHistoryState);
            }}
          >
            Another Employment Accident History
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
