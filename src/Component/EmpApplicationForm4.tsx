import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styleClasses from "../Common/styleClasses";
import { update } from "../services/updateApi";
import { snackbarDuratuion,autoSubmit } from "../Common/CommonVariables";
import AlertComponent from "./SubComponents/AlertComponent";
import { useEffect } from "react";
import drug_and_alcohol_policy_snapshot_1 from "../assets/images/drug and alcohol policy snapshot 1.jpg";

type Props = { data?: any; handler?: any; setData: any };

export default function EmpApplicationForm4(props: Props) {
  //-------------SNACKBAR-------------
  const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
  const [snackOpen, setSnackOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  //console.log("CLOSE AUTO");
  //console.log(props);
    // if (succesOrErrorBit === "success") {
    props.handler[0]();
    // }
  };
  //-------------SNACKBAR-------------

  const onSubmit = async (data: any) => {
    props.handler[0]();

    //-------------SNACKBAR-------------
    // setSuccesOrErrorBit("success");
    // setSnackOpen(true);
    // console.log("SUbmits Forms4");

    //-------------SNACKBAR-------------
  };

  const classes = styleClasses.useStyles();
  return (
    <div>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={onSubmit}>
          <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={12} md={10}>
              <Paper elevation={3} className={classes.paper}>
                <h4>Drug and Alcohol Misuse Policy</h4>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={10} style={{ marginBottom: "10px" , textAlign:"center"}}>
              <div id="div1" style={{height:"600px"}}>
                <div id="div2" style={{height:"inherit",overflow:"auto" ,border:"1px dashed black", textAlign:"center" , alignContent:"center", alignItems:"center"}}>
                {/* PAGE 1 */}
                  <Paper
                    elevation={3}
                    style={{ paddingLeft: "40px", paddingRight: "60px" }}
                    className={(classes.heading, classes.paperProminantStyle)}
                  >
                    <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography align="left" variant="subtitle2">
                          AWB Transport Inc
                          <br />
                          5751 La Venta Way
                          <br />
                          Sacramento, CA 95835
                          <br />
                          <br />
                          <br />
                          Effective Date: 7/20/2018
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography align="right" variant="subtitle2">
                          <br />
                          U.S. Department of Transportation
                          <br />
                          Federal Motor Carrier Safety Administration
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography align="center" variant="subtitle2">
                          FEDERAL MOTOR CARRIER SAFETY ADMINISTRATION (FMSCA)
                          <br />
                          <br />
                        </Typography>
                        <Typography align="justify" variant="subtitle2">
                          THIS POLICY APPLIES ONLY TO COMMERCIAL DRIVER'S LICENSE (CDL) HOLDERS AND OTHER DRIVERS AS INDICATED. THESE
                          PROVISIONS ONLY APPLY IF THE CDL IS REQUIRED FOR WORK PURPOSES.
                          <br />
                        </Typography>
                        <br />
                        <Typography align="left" variant="body1">
                          <b>A. General.</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              <b>
                                A complete copy of the anti-drug/alcohol misuse prevention procedures is available to all employees.
                                This policy only discusses the FMCSA provisions of the mandated drug and alcohol testing regulations
                                and how they relate to employees. Portions of this policy that exceed Department of Transportation
                                rules and regulations are in bold.
                              </b>
                            </li>
                            <li>
                              The provisions contained in the Company Anti-Drug/Alcohol Misuse Prevention Plan (AMPP) are applicable
                              to those Company employees who perform safety-sensitive trucking functions covered under 49 CFR Part
                              382. This policy will also be in effect for any employee who hold a Class B or C drivers license.
                              <b>
                                These employees will not be included in the DOT regulated random drug testing pool but will be in a
                                random pool of their own.
                              </b>
                            </li>
                            <li>
                              Company employees who only perform trucking functions must be aware of the general testing provisions
                              discussed in the Company policy and must be aware of the specific highway regulations as set forth in
                              this policy.
                            </li>
                            <li>
                              The Company recognizes that the misuse of drugs and alcohol in today's society is a major problem, which
                              has also found its way into the trucking industry. The purpose of this policy is to reduce highway
                              accidents that result from driver misuse of drugs and alcoholic substances, thereby reducing fatalities,
                              injuries, and property damage. The Department of Transportation, Federal Motor Carrier Safety
                              Administration, has established extensive regulations requiring testing under certain circumstances. In
                              light of the above, the Company has adopted this plan to specify the circumstances under which testing
                              may be required, the procedures for conducting such testing and the methods and procedures for complying
                              with the requirements of the Federal Motor Carrier Safety Administration regulations.
                            </li>
                            <li>
                              The Company will implement necessary and reasonable measures to maintain a work environment, free of
                              drugs and alcohol. Employees with drug and alcohol misuse problems are strongly encouraged to seek
                              assistance.
                            </li>
                            <li>
                              The Companies Designated Employee Representative is <b>Usman Khalid</b>
                            </li>
                            <li>
                              <b>
                                These policies and procedures are not intended to create a contract between the Company and its
                                employees. All employment with the Company is at-will” and can be terminated by the Company or the
                                employee for any reason or no reason.
                              </b>
                            </li>
                          </ol>
                        </Typography>
                        <Typography align="left" variant="body1">
                          <b>B. Applicability.</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              This information is applicable to every Company employee who operates a commercial motor vehicle in
                              interstate or intrastate commerce and is subject to the commercial driver license requirements of 49 CFR
                              Part 382.
                            </li>
                            <li>
                              For purposes of these regulations the Company is considered an employer with regard to the Federal Motor
                              Carrier Safety Administration alcohol regulations. As an employer who employ’s drivers, the Company must
                              comply with the requirements outlined herein as they apply to the employer and to drivers. All Company
                              employees who perform safety-sensitive trucking functions shall be subject to the drug and alcohol
                              misuse testing provisions.
                            </li>
                            <li>The following exceptions apply with regard to the Company and their drivers:</li>
                            <ol type="a">
                              <li>
                                When required to comply with the alcohol and /or controlled substances testing requirements of 49 CFR
                                Parts 653 and 654 of the Federal Transit Administration regulations; OR
                              </li>
                              <li>When granted a full waiver from the requirements of the commercial driver license program; OR</li>
                              <li>When granted an optional State waiver from the requirements of part 383 of this subchapter; OR</li>
                              <li>
                                When foreign domiciled operations, with respect to any driver whose place of reporting for duty (home
                                terminal) for commercial motor vehicle transportation services is located outside the territory of the
                                United States.
                              </li>
                            </ol>
                          </ol>
                        </Typography>
                        <Typography align="left" variant="body1">
                          <b>C. Policy.</b>
                          <br />
                          <b>ALCOHOL PROHIBITIONS</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              <b>Prohibited Alcohol</b>- The presence in the body, possession, use, distribution, dispensing, and/or
                              unlawful manufacture of alcohol or alcoholic products is not condoned while conducting Company business,
                              or while in work areas or Company vehicles on or off Company premises. No employee will work under the
                              influence of alcohol. It will be against the Company policy for any supervisor/manager that has actual
                              knowledge of a driver using a controlled substance or alcohol to permit the driver to perform or
                              continue to perform safety-sensitive functions.
                            </li>
                            <li>
                              <b>Drivers Subject to Alcohol Testing Covered Under This Plan</b>- Company drivers and contract drivers
                              under contract for 90 days or more in any period of 365 days, who perform safety sensitive trucking
                              functions covered under 49 CFR Parts 382 and 383, and who meet the definition of "Driver" in D.6. of
                              this section.
                            </li>
                            <li>
                              <b>Alcohol Prohibitions.</b>
                            </li>
                            <ol type="a">
                              <li>No driver shall be on duty, as defined in 395.2, if the driver uses alcohol.</li>
                              <li>
                                No driver shall be on duty, as defined in 395.2, if the driver tests positive for use of alcohol.
                              </li>
                              <li>
                                A person who tests positive for the use of alcohol is medically unqualified to operate a commercial
                                motor vehicle and will be not be permitted to perform covered functions and may be subject to
                                disciplinary action up to and including termination.
                              </li>
                              <li>
                                A person who refuses to be tested under the plan provisions shall not be permitted to operate a
                                commercial motor vehicle. Such refusal shall be treated as a positive alcohol test and subject the
                                driver to the restrictions contained in paragraph (c) above.
                              </li>
                              <li>No employee will consume alcohol (4) four hours prior to performing safety sensitive functions.</li>
                              <li>
                                It is against Company policy for a driver to consume alcohol within eight (8) hours after an accident
                                that requires a drug alcohol test.
                              </li>
                              <li>
                                It is against policy to allow any driver that has a Breath-Alcohol Content (BrAC) of .02 -039 grams
                                per 210 liters of breath to operate any vehicle. An employee with a BrAC of .02-.039 must be removed
                                from duty for one shift or 24 hours. Upon return to work the employee must have a BrAC below .02.
                              </li>
                              <li>
                                An employee with a BrAC of .04 grams per 210 liters of breath will be considered to be in violation of
                                this policy and the Department of Transportation rules, and will be subject to disciplinary action. An
                                employee with a BrAC of .04 or higher will be considered to be disqualified from driving.
                              </li>
                            </ol>
                          </ol>
                        </Typography>
                        <br />
                        <Typography align="justify" variant="body2">
                          <u>
                            Drug/Alcohol Misuse Prevention Plan herein sets forth the requirements of 49 CFR Parts 382 and 40. Those
                            areas of the plan that appear in bold and underlined print reflect this company? independent authority to
                            require additional provisions with regard to the alcohol testing procedures.
                          </u>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography align="justify" variant="subtitle2">
                          <b>DRUG PROHIBITIONS</b>
                          <br />
                        </Typography>
                        <br />
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              <u>Prohibited Drugs -</u> The presence in the body
                              (including the presence as a metabolite), possession,
                              use, distribution, dispensing, and/or unlawful
                              manufacture of prohibited drugs is not condoned while
                              conducting Company business, or while in work areas or
                              Company vehicles on or off Company premises. No
                              employee will work under the influence of prohibited
                              drugs. The following drugs are prohibited:
                              <b>
                                Marijuana, Cocaine, Opioids, Amphetamines,
                                Phencyclidine, 6AM, Ecstasy
                              </b>
                            </li>
                            <li>
                              <u>
                                Drivers Subject to Testing Covered Under This Plan
                              </u>{" "}
                              - Company drivers and contract drivers under contract
                              for 90 days or more in any period of 365 days, who
                              perform safety sensitive trucking functions covered
                              under 49 CFR Parts 382 and 383, and who meet the
                              definition of "Driver" in D.6. of this section.
                            </li>
                            <li>
                              <u>Drug Use Prohibitions</u>
                            </li>
                            <ol>
                              <li>
                                No driver shall be on duty, as defined in 395.2, if
                                the driver uses any controlled substance, except as
                                provided in 391.97 (prescribed drugs).
                              </li>
                              <li>
                                No driver shall be on duty, as defined in 395.2, if
                                the driver tests positive for use of controlled
                                substances, except as provided in 397.97 (prescribed
                                drugs).
                              </li>
                              <li>
                                A person who tests positive for the use of a
                                controlled substances as defined in 49 CFR Part 40,
                                is medically unqualified to operate a commercial
                                motor vehicle and will be suspended without pay.
                              </li>
                              <li>
                                A person who refuses to be tested under the plan
                                provisions shall not be permitted to operate a
                                commercial motor vehicle. Such refusal shall be
                                treated as a positive test and subject the driver to
                                the restrictions contained in paragraph (c) above.
                              </li>
                              <li>
                                <b>
                                  Use of a prescription drug, where the prescribing
                                  physician advises that it could impair the ability
                                  of an employee to operate in a safety sensitive
                                  manner must be reported to the employee’s
                                  supervisor.
                                </b>
                              </li>
                            </ol>
                          </ol>
                        </Typography>
                        <Typography align="left" variant="body1">
                          <b>D. Definitions:</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              <b>"Alcohol"</b> means the intoxicating agent in
                              beverage alcohol, ethyl alcohol, or other low
                              molecular weight alcohols including methyl and
                              isopropyl alcohol.
                            </li>
                            <li>
                              <b>"Alcohol Concentration"</b> means the alcohol in a
                              volume of breath expressed in terms of grams of
                              alcohol per 210 liters of breath.
                            </li>
                            <li>
                              <b>"Alcohol Testing"</b> - testing conducted by a
                              Department of Transportation (DOT), certified
                              breath-alcohol technician using a DOT approved
                              breath-testing device.
                            </li>
                            <li>
                              <b>"Commercial Motor Vehicle"</b> - means a motor
                              vehicle or combination of motor vehicles used in
                              commerce to transport passengers or property if the
                              motor vehicle-
                            </li>
                            <ol>
                              <li>
                                Has a gross combination weight rating of 26,001 or
                                more pounds inclusive of a towed unit with a gross
                                vehicle weight rating of more than 10,000 pounds; or
                              </li>
                              <li>
                                Has a gross vehicle weight rating of 26,001 or more
                                pounds; or
                              </li>
                              <li>
                                Is designed to transport 16 or more passengers,
                                including the driver; or
                              </li>
                              <li>
                                Is of any size and is used in the transportation of
                                material found to be hazardous for the purposes of
                                the Hazardous Materials Transportation Act and which
                                require the motor vehicle to be placard under the
                                Hazardous Materials Regulations (CFR part 172,
                                subpart F).
                              </li>
                            </ol>
                            <li>
                              <b>“Controlled Substance”</b> - any substance
                              including those assigned by 21U.S.C. 802 and includes
                              all substances listed on Schedule I. through Schedule
                              V., as they may be revised from time to time (21 CFR
                              1308). Specifically for this policy a Controlled
                              Substance is one listed in Section 40.85 49 CFR part
                              382.
                            </li>
                            <li>
                              <b>“Driver”</b> - means any person who operates a
                              commercial motor vehicle. This includes, but is not
                              limited to: full time, regularly employed drivers;
                              casual, intermittent or occasional drivers; leased
                              drivers and independent, owner-operator contractors
                              who are either directly employed by or under lease to
                              an employer or who operate a commercial motor vehicle
                              at the direction of or with the consent of an
                              employer. For the purposes of pre-employment/pre-duty
                              testing only, the term driver includes a person
                              applying to an employer to drive a commercial motor
                              vehicle.
                            </li>
                            <li>
                              <b>“Drug Testing” or “Drug Test”</b> - scientific
                              analysis for the presence of drugs or their
                              metabolites in the human body.
                            </li>
                            <li>
                              <b>“DER”</b> (Designated Employee Representative) is
                              an individual identified by the employer as able to
                              receive communications and test results from service
                              agents and who is authorized to take immediate actions
                              to remove employees from safety-sensitive duties and
                              to make required decisions in the testing and
                              evaluation process. The individual must be an employee
                              of the Company and not be a service agent
                            </li>
                            <li>
                              <b>“Employee”</b>- individual or officer in the
                              service of the employer for compensation.
                            </li>
                            <li>
                              <b>“Employer”</b> - means any person (including the
                              United States, a State, District of Columbia or a
                              political subdivision of a State) who owns or leases a
                              commercial motor vehicle or assigns persons to operate
                              such a vehicle. The term employer includes an employer
                              agents, officers and representatives.
                            </li>
                            <li>
                              <b>“Interstate Commerce”</b> - means (1) any trade,
                              traffic, or transportation within the jurisdiction of
                              the United States between a place in a State and a
                              place outside of such State, including a place outside
                              of the United States, and (2) trade, traffic, and
                              transportation in the United States which affects any
                              trade, traffic, and transportation as described above
                              in this definition.
                            </li>
                            <li>
                              <b>"Medical Review Officer (MRO)"</b> – a licensed
                              physician responsible for receiving laboratory results
                              generated by an employer drug testing program who has
                              knowledge of substance abuse disorders and has
                              appropriate medical training to interpret and evaluate
                              an individual confirmed positive test result together
                              with his or her medical history and any other relevant
                              biomedical information.
                            </li>
                            <li>
                              <b>“Motor Carrier”</b> - means a for-hire motor
                              carrier or a private motor carrier of property. The
                              term “motor carrier” includes a motor carrier agents,
                              officers and representatives as well as employees
                              responsible for hiring, supervising, training,
                              assigning, or dispatching of drivers and employees
                              concerned with the installation, inspection, and
                              maintenance of motor vehicle equipment and/or
                              accessories.
                            </li>
                            <li>
                              <b>“On-Duty Time”</b> - means all time from the time a
                              driver begins to work or is required to be in
                              readiness to work until the time he/she is relieved
                              from work and all responsibility for performing work.
                              On duty time shall include:
                            </li>
                            <ol>
                              <li>
                                All time at a carrier or shipper plant, terminal,
                                facility, or other property, or on any public
                                property, waiting to be dispatched, unless the
                                driver has been relieved from duty by the motor
                                carrier;
                              </li>
                              <li>
                                All time inspecting equipment as required by 392.7
                                and 392.8 of this chapter or otherwise inspecting,
                                servicing, or conditioning any commercial motor
                                vehicle at any time;
                              </li>
                              <li>
                                All driving time as defined in the term driving time
                                in this section;
                              </li>
                              <li>
                                All time, other than driving time, in or upon any
                                commercial motor vehicle except time spent resting
                                in a sleeper berth as defined by the term sleeper
                                berth of this section;
                              </li>
                              <li>
                                All time loading or unloading a vehicle,
                                supervision, or assisting in the loading or
                                unloading, attending a vehicle being loaded or
                                unloaded, remaining in readiness to operate the
                                vehicle, or in giving or receiving receipts from
                                shipments loaded or unloaded;
                              </li>
                              <li>
                                All time spent performing the driver requirements of
                                392.40 and 392.41 of this chapter relating to
                                accidents;
                              </li>
                              <li>
                                All time repairing, obtaining assistance, or
                                remaining in attendance upon a disabled vehicle;
                              </li>
                            </ol>
                            <li>
                              <b>“On Duty or Safety Sensitive Function”</b> - all
                              time from the time a driver begins to work or is
                              required to be in readiness to work until the time
                              he/she is relieved from work and all responsibility
                              for performing work. This shall include:
                            </li>
                            <ol>
                              <li>All time driving.</li>
                              <li>
                                All time repairing, obtaining assistance, or
                                remaining in attendance upon a disabled vehicle.
                              </li>
                              <li>
                                All time other than driving time, in or upon any
                                commercial motor vehicle except time spent sleeping
                                or resting in a sleeper berth.
                              </li>
                              <li>
                                All time inspecting equipment or servicing a vehicle
                              </li>
                              <li>
                                All time at an employer or shipper plant, terminal,
                                facility or other property, or on any public
                                property, waiting to be dispatched, unless the
                                driver has been relieved from duty by the employer.
                              </li>
                            </ol>
                            <li>
                              <b>“Performing (a safety-sensitive function)”</b> -
                              means a driver is considered to be performing a
                              safety-sensitive function during any period in which
                              he/she is actually performing, ready to perform, or
                              immediately available to perform any safety-sensitive
                              functions.
                            </li>
                            <li>
                              <b>"Post-Accident Testing"</b> – is required when
                              there is an occurrence involving a commercial motor
                              vehicle operating on a public road in interstate or
                              intrastate commerce which results in the following:
                            </li>
                            <ol>
                              <li>a fatality; or</li>
                              <li>
                                and accident where a driver receives a moving
                                violation citation and one of the following occurs
                              </li>
                              <ol>
                                <li>
                                  injury to a person who, as a result of the injury,
                                  immediately receives medical treatment away from
                                  the scene of the accident;
                                </li>
                                <li>
                                  or one or more motor vehicles incurring disabling
                                  damage as a result of the accident, requiring the
                                  motor vehicle to be transported away from the
                                  scene by a tow truck or other motor vehicle and
                                  the driver receives a moving citation violation.
                                </li>
                              </ol>
                            </ol>
                            <li>
                              <b>“Prospective Employee”</b> - any individual who has
                              made a written or oral application to become an
                              employee of the Company.
                            </li>
                            <li>
                              <b>“Reasonable Suspicion" or "For Cause Testing”</b> -
                              an articulated belief, based on recorded specific
                              facts and reasonable inference drawn from those facts
                              that an employee is in violation of this policy.
                            </li>
                            <li>
                              <b>“Random Testing”</b> - unannounced drug testing of
                              an employee who was selected by using a method
                              uninfluenced by any personal characteristic other than
                              job category.
                            </li>
                            <li>
                              <b>“Refusal”</b> means that a driver:
                            </li>
                            <ol>
                              <li>
                                Fails to show up for any test within a reasonable
                                time after being directed to do so by the employer
                                or to remain at the testing site until the testing
                                process is complete. This includes the failure of an
                                employee (including an owner-operator) to appear for
                                a test when called by a Consortium/Third Party
                                Administrator.
                              </li>
                              <li>
                                Fails to provide a urine specimen for any drug test
                                require by the Act.
                              </li>
                              <li>
                                In the case of a directly observed or monitored
                                collection in a drug test, fails to permit the
                                observation of monitoring of the provision of a
                                specimen (Sec. Sec 40.76(k) and 40.69 (g) of this
                                title.
                              </li>
                              <li>
                                Fails to provide a sufficient amount of urine when
                                directed, unless it has been determined through a
                                required medical evaluation, that there was an
                                adequate medical explanation for the failure.
                              </li>
                              <li>
                                Fails to undergo an additional medical evaluation as
                                directed by the MRO as part of the verification
                                process or as directed by the DER concerning the
                                evaluation of the shy bladder procedures in part 40,
                                subpart I of this title.
                              </li>
                              <li>
                                Fails to cooperate with any part of the testing
                                process.
                              </li>
                              <li>
                                Fails or declines to take a second test the employer
                                has directed following a negative dilute result.
                              </li>
                            </ol>
                            <li>
                              <b>“Sample”</b> - any sample of urine, blood, breath,
                              saliva used for drug and/or alcohol testing.
                            </li>
                            <li>
                              <b>“Safety Sensitive Position”</b> - all employees who
                              possess Commercial Driver's Licenses (CDL's) and who
                              operate a vehicle with the following characteristics:
                            </li>
                            <ol>
                              <li>
                                Has a gross combination weight rating of 26,001 or
                                more pounds inclusive of a towed unit with a gross
                                vehicle weight rating of more than 10,000 pounds; or
                              </li>
                              <li>
                                Has a gross vehicle weight rating of 26,001 or more
                                pounds; or
                              </li>
                              <li>
                                Is designed to transport 16 or more passengers,
                                including the driver; or
                              </li>
                              <li>
                                Is of any size and is used in the transportation of
                                material found to be hazardous for the purposes of
                                the Hazardous Materials Transportation Act and which
                                require the motor vehicle to be placard under the
                                Hazardous Materials Regulations (CFR part 172,
                                subpart F).
                              </li>
                            </ol>
                          </ol>
                        </Typography>
                     </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography align="justify" variant="subtitle2">
                          <b>E. Alcohol Testing.</b>
                          <br />
                        </Typography>
                        <br />
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              <u>
                                <b>
                                  Pre-Employment (Background Check Only – Alcohol
                                  Testing is Optional).
                                </b>
                              </u>
                              The company must obtain and review the information
                              listed below from any employer for whom the driver
                              performed safety-sensitive functions in the previous
                              two years. The information must be obtained and
                              reviewed to later than 30 days after the driver
                              performs safety-sensitive functions (driving).
                              <ul>
                                <li>
                                  Information of the driver's alcohol test in which
                                  a breath alcohol concentration of 0.04 or greater
                                  was indicated
                                </li>
                                <li>
                                  Information on the driver’s-controlled substances
                                  test in which a positive result was indicated.
                                </li>
                                <li>
                                  Any refusal to submit to a required alcohol or
                                  controlled substance test.
                                </li>
                              </ul>
                              The company must provide to each of the driver's
                              previous employers of the past two years a written
                              authorization from the driver for the release of the
                              required information. The company may not use a driver
                              to perform safety-sensitive functions if the employer
                              obtains information indicating the driver has tested
                              positive for controlled substances, tested at or above
                              .04 breath alcohol concentration, or refused to test
                              unless the employer has evidence the driver has been
                              evaluated by a SAP, completed any required counseling,
                              passed a return-to-duty test, and been subject to
                              follow-up testing.
                            </li>
                            <li>
                              <u>Random Testing</u>
                              <ul>
                                <li>
                                  Employees in "covered" positions will be subject
                                  to random testing at any time with no advance
                                  notice. The random selection process will ensure
                                  each employee the same fair and equal chance of
                                  being selected.
                                </li>
                                <li>
                                  An employee randomly selected will be notified by
                                  his/her supervisor of the selection and instructed
                                  to immediately go to the designated
                                  alcohol-testing site.
                                </li>
                                <li>
                                  Random testing will be conducted monthly and will
                                  be administered at a 10% annualized rate. This
                                  means that the total number of tests conducted
                                  during any 12-month period will be equal to at
                                  least 10 percent of the total pool of covered
                                  employees.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <u>Reasonable Suspicion.</u>
                            </li>
                            <ul>
                              <li>
                                An employee/driver shall submit to testing, for
                                reasonable suspicion, for the use of alcohol when
                                requested to do so by the Company.
                              </li>
                              <li>
                                The employee conduct must be witnessed by at least
                                one supervisor and company official. The supervisor
                                or witnesses must have received training in the
                                specific identification of actions, appearance,
                                behavior, or conduct of a commercial motor vehicle
                                driver, which are indicative of alcohol use.
                              </li>
                              <li>
                                The supervisor shall ensure that the employee is
                                transported to the alcohol-testing site.
                              </li>
                              <li>
                                If an employee refuses to submit to the alcohol test
                                or attempts to leave Company premises and is
                                impaired to the extent that he/she would present a
                                danger to either him/herself or others, local law
                                enforcement should be contacted immediately by the
                                Company representative.
                              </li>
                              <li>
                                While waiting for an employee's alcohol test
                                results, that employee will be removed from
                                performing safety-sensitive functions and, if the
                                test results are positive, may be subject to further
                                disciplinary action up to and including termination.
                                Specific disciplinary actions are described in
                                detail in the end of this policy
                              </li>
                            </ul>
                            <li>
                              <u>Post-Accident Testing.</u>
                              <ul>
                                <li>
                                  A driver shall submit to an alcohol test within 2
                                  hours (but not later than 8 hours) of a
                                  determination by the Company officials that a test
                                  is required and that circumstances indicate the
                                  accident is reportable under the FMSCA
                                  regulations. It must be determined that the driver
                                  received a citation for a moving traffic violation
                                  arising from the accident. A DOT reportable
                                  accident is defined in 49 CFR Part 394.3 (Federal
                                  Motor Carrier Safety Regulations Pocketbook, Form
                                  2133) as;
                                </li>
                                <ul>
                                  <li>
                                    indicate the accident is reportable under the
                                    FMSCA regulations. It must be determined that
                                    the driver received a citation for a moving
                                    traffic violation arising from the accident. A
                                    DOT reportable accident is defined in 49 CFR
                                    Part 394.3 (Federal Motor Carrier Safety
                                    Regulations Pocketbook, Form 2133) as;
                                  </li>
                                  <ul>
                                    <li>
                                      An occurrence involving a commercial motor
                                      vehicle operating on a public road in
                                      commerce: see below image
                                    </li>
                                  </ul>
                                </ul>
                              </ul>
                              <img
                                src={drug_and_alcohol_policy_snapshot_1}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                              <ul style={{ listStyleType: "none" }}>
                                <li>
                                  <ul>
                                    <li>
                                      A driver who is seriously injured and cannot
                                      be tested at the time of the accident should
                                      provide the necessary authorization for
                                      obtaining hospital reports and other documents
                                      that would indicate whether there was any
                                      alcohol in his/her system.
                                    </li>
                                    <li>
                                      The results of a breath or blood test for the
                                      use of alcohol conducted by Federal, State, or
                                      Local law enforcement officials having
                                      independent authority to conduct such tests,
                                      shall be considered to meet the requirements
                                      of this section, provided such tests conform
                                      to the applicable Federal, State, or Local
                                      requirements. Company officials shall obtain
                                      such test results.
                                    </li>
                                    <li>
                                      The Company shall provide drivers with
                                      necessary information and procedures so that
                                      the driver will be able to meet the
                                      requirement as set forth in this section.
                                    </li>
                                    <li>
                                      While waiting for an employee's alcohol test
                                      results, that employee will be removed from
                                      performing safety-sensitive functions and, if
                                      the test results are positive, may be subject
                                      to further disciplinary action up to and
                                      including termination. Specific disciplinary
                                      actions are described in detail in the end of
                                      this policy.
                                    </li>
                                    <li>
                                      Employee Responsibility. As soon as
                                      practicable following an accident as defined
                                      in this plan, the employee shall make every
                                      attempt to contact his/her supervisor and the
                                      substance abuse program administrator.
                                    </li>
                                    <ul>
                                      <li>
                                        The employee will be given instructions for
                                        obtaining alcohol and substance abuse
                                        testing.
                                      </li>
                                      <li>
                                        An employee who is subject to post-accident
                                        testing must remain available for testing,
                                        or company may consider the employee to have
                                        refused to submit to testing.
                                      </li>
                                      <li>
                                        The employee subject to post-accident
                                        testing must refrain from consuming alcohol
                                        for eight hours following the accident, or
                                        until he or she submits to an alcohol test,
                                        whichever comes first.
                                      </li>
                                    </ul>
                                    <li>Company Responsibility.</li>
                                    <ul>
                                      <li>
                                        Upon receiving a report of an accident, the
                                        company shall test the employee (if no a
                                        fatality) for alcohol and controlled
                                        substances as soon as practicable.
                                      </li>
                                    </ul>
                                    <li>
                                      <u>Return to Duty.</u>
                                    </li>
                                    <ul>
                                      <li>
                                        <u>
                                          The requirements for return-to-duty
                                          testing must be performed in accordance
                                          with 49 CFR Part 40, Subpart O and that
                                          information can be found in Section V of
                                          the Alcohol Misuse Prevention plan.
                                        </u>
                                      </li>
                                    </ul>
                                    <li>
                                      <u>Follow-up Testing.</u>
                                    </li>
                                    <ul>
                                      <li>
                                        <u>
                                          The requirements for follow-up testing
                                          must be performed in accordance with 49
                                          CFR Part 40, Subpart O and that
                                          information can be found in Section V of
                                          the Alcohol Misuse Prevention plan.
                                        </u>
                                      </li>
                                    </ul>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </Typography>
                        <Typography align="left" variant="body1">
                          <b>F. Drug Testing.</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          Dilute Specimens – If the Company receives a test result,
                          which is verified positive, but dilute, it will be treated
                          as a positive test.
                          <ol>
                            <li>
                              If the Company receives a test, which is negative and
                              dilute, it will not retest the employee.
                            </li>
                          </ol>
                          Invalid Tests- If the Company receives a test result,
                          which is determined to be invalid (49 CFR 40.23) it will
                          immediately have the employee retested. The employee will
                          be given no notification of the need to retest. The test
                          will be an observed specimen collection. No action will be
                          taken on the first test result.
                          <br />
                          <br />
                          Types of Drug Testing
                          <ol>
                            <li>
                              Pre-Employment Testing.
                              <ol>
                                <li>
                                  The Company shall require a driver-applicant who
                                  they intend to hire or use to be tested for the
                                  use of controlled substance as a pre-qualification
                                  condition.
                                </li>
                                <li>
                                  A driver-applicant shall submit to controlled
                                  substance testing as a pre-qualification
                                  condition.
                                </li>
                                <li>
                                  Prior to collection of a urine sample, a
                                  driver-applicant shall be notified that the sample
                                  will be tested for the presence of controlled
                                  substances.
                                </li>
                                <li>
                                  The Company may use a driver who is a regularly
                                  employed driver of another motor carrier without
                                  complying with paragraph 1.a. above, if the driver
                                  meets the requirements of 391.65, &quot;Drivers
                                  Furnished by other Motor Carriers&quot;.
                                </li>
                                <li>
                                  The Company may use a driver who is not tested by
                                  the Company provided they assures itself:
                                  <ol>
                                    <li>
                                      That the driver has participated in a drug
                                      testing program that meets the requirements
                                      under this Plan within the previous 30 days
                                      and,
                                    </li>
                                    <li>
                                      While participating in that program was either
                                      <ol>
                                        <li>
                                          Tested for controlled substances within
                                          the past 6 months (from the date of
                                          application with the Company) or
                                        </li>
                                        <li>
                                          Participated in the drug-testing program
                                          for the previous 12 months (from the date
                                          of application with the Company).
                                        </li>
                                      </ol>
                                    </li>
                                    <li>
                                      When the Company exercises either paragraph d
                                      or e above, the Company will contact the
                                      controlled substances testing program in which
                                      the driver participates or participated and
                                      will obtain the following information;
                                      <ol>
                                        <li>Name and address of the program.</li>
                                        <li>
                                          Verification that the driver participates
                                          or participated in the program.
                                        </li>
                                        <li>
                                          Verification that the program conforms to
                                          49 CFR Part 40.
                                        </li>
                                        <li>
                                          Verification that the driver is qualified
                                          under the rules of this part including
                                          that the driver has not refused to be
                                          tested for controlled substances.
                                        </li>
                                        <li>
                                          The date the driver was last tested for
                                          controlled substances.
                                        </li>
                                        <li>
                                          The results, positive or negative, of any
                                          test taken.
                                        </li>
                                      </ol>
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                            </li>
                            <li>
                              Random Testing.
                              <ol>
                                <li>
                                  Employees in &quot;covered&quot; positions will be
                                  subject to random testing at any time with no
                                  advance notice. The random selection process will
                                  ensure each employee the same fair and equal
                                  chance of being selected.
                                </li>
                                <li>
                                  An employee randomly selected will be notified by
                                  his/her supervisor of the selection and instructed
                                  to immediately go to the designated collection
                                  site.
                                </li>
                                <li>
                                  Random testing will be conducted monthly and will
                                  be administered at a 25% annualized rate. This
                                  means that the total number of tests conducted
                                  during any 12-month period will be equal to at
                                  least 25 percent of the total pool of covered
                                  employees.
                                </li>
                              </ol>
                            </li>
                            <li>
                              Reasonable Cause.
                              <ol>
                                <li>
                                  An employee/driver shall submit to testing, for
                                  reasonable cause, for the use of controlled
                                  substances when requested to do so by the Company.
                                </li>
                                <li>
                                  The conduct should be witnessed by at least two
                                  supervisors or company officials, if feasible. If
                                  not feasible, only one supervisor or company
                                  official need witness the conduct. The witness or
                                  witnesses must have received training in the
                                  identification of actions, appearance, or conduct
                                  of a commercial motor vehicle driver, which are
                                  indicative of the use of a controlled substance.
                                </li>
                                <li>
                                  The supervisor shall transport the employee to the
                                  collection site.
                                </li>
                                <li>
                                  If an employee refuses to submit to drug testing
                                  or attempts to leave the Company? premises and is
                                  impaired, in the opinion of a trained supervisor,
                                  to the extent that he/she would present a danger
                                  to either him/herself or others, local law
                                  enforcement should be contacted immediately by the
                                  supervisor.
                                </li>
                                <li>
                                  While waiting for an employee's drug test results,
                                  that employee will be removed from their
                                  &quot;covered&quot; position until the Medical
                                  Review Officer (MRO) confirms that the employee
                                  tested negative for drugs.
                                </li>
                              </ol>
                            </li>
                            <li>
                              Post-Accident Testing.
                              <ol>
                                <li>
                                  A driver shall provide a urine sample to be tested
                                  for the use of controlled substances as soon as
                                  possible, but no later than 32 hours, after a
                                  reportable accident if the driver of the
                                  commercial vehicle received a citation for a
                                  moving traffic violation arising from the
                                  accident. A DOT reportable accident is defined in
                                  49 CFR Part 394.3 (Federal Motor Carrier Safety
                                  Regulations Pocketbook, Form 2133) as;
                                  <ol>
                                    <li>
                                      An occurrence involving a commercial motor
                                      vehicle operating on a public road in
                                      commerce:
                                    </li>
                                  </ol>
                                </li>
                                <img
                                  src={drug_and_alcohol_policy_snapshot_1}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                  }}
                                />
                              </ol>
                            </li>
                          </ol>
                          <ul style={{ listStyleType: "none" }}>
                            <li>
                              <ol start={2}>
                                <li>
                                  A driver who is seriously injured and cannot
                                  provide a specimen at the time of the accident
                                  shall provide the necessary authorization for
                                  obtaining hospital reports and other documents
                                  that would indicate whether there were any
                                  controlled substances in his/her system.
                                </li>
                                <li>
                                  The Company shall provide drivers with necessary
                                  information and procedures so that the driver will
                                  be able to meet the requirement of paragraphs 5.a.
                                  and 5.b. of this section.
                                </li>
                                <li>
                                  While waiting for an employee's drug test results,
                                  that employee will be removed from their
                                  &quot;covered&quot; position until the Medical
                                  Review Officer (MRO) confirms that the employee
                                  tested negative for drugs.
                                </li>
                              </ol>
                            </li>
                          </ul>
                          <ol start={5}>
                            <li>Return to Duty.</li>
                            <ul>
                              <li>
                                (a) The requirements for return-to-duty testing must
                                be performed in accordance with 49 CFR Part 40,
                                Subpart O
                              </li>
                            </ul>
                            <li>Follow-up Testing.</li>
                            <ul>
                              <li>
                                The requirements for follow-up testing must be
                                performed in accordance with 49 CFR Part 40, Subpart
                                O and that information can be found in Section V of
                                the Alcohol Misuse Prevention plan.
                              </li>
                            </ul>
                          </ol>
                        </Typography>
                        <Typography align="left" variant="body1">
                          <b>
                            G. Employee Admission of Alcohol and Controlled
                            Substances Use. (The Company does not have a voluntary
                            admission program. This section is not applicable.)
                          </b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              Employees who admit to alcohol misuse or controlled
                              substances use are not subject to the referral,
                              evaluation and treatment requirements of this part and
                              part 40 of this title, provided that:
                              <ol>
                                <li>
                                  (a) The admission is in accordance with a written
                                  employer-established voluntary self-identification
                                  program or policy that meets the requirements of
                                  paragraph (b) of this section;
                                </li>
                                <li>
                                  (b) The driver does not self-identify in order to
                                  avoid testing under the requirements of this part;
                                </li>
                                <li>
                                  (c) The driver makes the admission of alcohol
                                  misuse or controlled substances use prior to
                                  performing a safety sensitive function (i.e.,
                                  prior to reporting for duty); and
                                </li>
                                <li>
                                  (d) The driver does not perform a safety sensitive
                                  function until the employer is satisfied that the
                                  employee has been evaluated and has successfully
                                  completed education or treatment requirements in
                                  accordance with the self-identification program
                                  guidelines.
                                </li>
                              </ol>
                            </li>
                            <li>
                              A qualified voluntary self-identification program or
                              policy must contain the following elements:
                              <ol>
                                <li>
                                  (a) It must prohibit the employer from taking
                                  adverse action against an employee making a
                                  voluntary admission of alcohol misuse or
                                  controlled substances use within the parameters of
                                  the program or policy and paragraph (a) of this
                                  section;
                                </li>
                                <li>
                                  (b) It must allow the employee sufficient
                                  opportunity to seek evaluation, education or
                                  treatment to establish control over the employee's
                                  drug or alcohol problem;
                                </li>
                                <li>
                                  (c) It must permit the employee to return to
                                  safety sensitive duties only upon successful
                                  completion of an educational or treatment program,
                                  as determined by a drug and alcohol abuse
                                  evaluation expert, i.e., employee assistance
                                  professional, substance abuse professional, or
                                  qualified drug and alcohol counselor;
                                </li>
                                <li>
                                  (d) It must ensure that:
                                  <ol>
                                    <li>
                                      Prior to the employee participating in a
                                      safety sensitive function, the employee shall
                                      undergo a return to duty test with a result
                                      indicating an alcohol concentration of less
                                      than 0.02; and/or
                                    </li>
                                    <li>
                                      Prior to the employee participating in a
                                      safety sensitive function, the employee shall
                                      undergo a return to duty controlled substance
                                      test with a verified negative test result for
                                      controlled substances use; and
                                    </li>
                                  </ol>
                                </li>
                                <li>
                                  (e) It may incorporate employee monitoring and
                                  include non-DOT follow-up testing
                                </li>
                              </ol>
                            </li>
                          </ol>
                        </Typography>

                        <Typography align="left" variant="body1">
                          <b>H. Disciplinary Action.</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              Violation of Policy.
                              <ol>
                                <li>
                                  a) Any driver with a verified positive
                                  pre-employment drug test will not be hired. After
                                  a Return to Duty clearance the driver may be
                                  eligible for a new pre-employment after 30 days
                                  and shows qualification to drive under a Return to
                                  Duty authorization by SAP.
                                </li>
                                <li>
                                  b) Any driver with a verified positive drug test
                                  will be suspended from a safety sensitive duty and
                                  subject to disciplinary action up to and including
                                  termination.
                                </li>
                                <li>
                                  c) If Driver is not terminated for positive drug
                                  test the driver will be required to complete a
                                  treatment and counseling program that meets the
                                  requirements of the DOT for returning to duty (at
                                  the employees own expense). They employee will
                                  have to take and pass a return to duty test and
                                  will be subject to a minimum of six (6)
                                  unannounced tests in the first 12 months of
                                  returning to duty.
                                </li>
                                <li>
                                  d) Any driver with a positive alcohol test of
                                  0.02-0.039 will be suspended with out pay for one
                                  work shift or 24 hours and will be required to
                                  have a negative alcohol test before returning to a
                                  covered position.
                                </li>
                                <li>
                                  e) Any employee who consumes alcohol or drugs
                                  while “On-duty” will be terminated.
                                </li>
                                <li>
                                  f) Any employee with an alcohol level of 0.04 or
                                  greater will be subject to disciplinary action up
                                  to and including termination from employment or
                                  will be required to meet the return to duty
                                  requirements listed in subsection (c).
                                </li>
                                <li>
                                  g) Any transferring employee found in violation of
                                  the Company policy will be subject to disciplinary
                                  action up to and including termination from
                                  employment.
                                </li>
                                <li>
                                  h) Any attempt to adulterate, substitute, tamper
                                  or refuse to test will be treated as a positive
                                  test.
                                </li>
                              </ol>
                            </li>
                            <li>
                              Refusal, Adulterate or Substitute a Test.
                              <ol>
                                <li>
                                  a) No employee shall adulterate, substitute or
                                  refuse a test or to submit to a random,
                                  reasonable-suspicion, post-accident, or follow-up
                                  alcohol test.
                                </li>
                                <li>
                                  b) An employee who refuses a return-to-duty test
                                  is not in violation of the plan; however, such
                                  refusal will result in not allowing the individual
                                  to perform safety-sensitive functions and may
                                  result in disciplinary action up to and including
                                  termination of employment.
                                </li>
                                <li>
                                  c) Employees who: (1) without a legitimate reason
                                  fail to report to the alcohol testing site; or (2)
                                  without a valid medical reason fail to provide an
                                  adequate breath sample under this policy will be
                                  suspended without pay and be subject to
                                  disciplinary action up to and including
                                  termination of employment.
                                </li>
                              </ol>
                            </li>
                            <li>
                              Return to Duty.
                              <ol>
                                <li>
                                  a) An employee testing positive for alcohol may be
                                  returned to a &quot;safety-sensitive&quot;
                                  position after a return-to-duty test with an
                                  alcohol concentration of less than 0.02.
                                </li>
                                <li>
                                  b) After returning to work the employee will be
                                  subject to: 1) unannounced follow-up testing, as
                                  determined by the SAP and the Company officials;
                                  and 2) the other required types of testing which
                                  includes random.
                                </li>
                              </ol>
                            </li>
                            <li> 4. Contesting a Test Result.</li>
                            <li></li>
                            <li>
                              An employee will have 72 hours from the time a
                              positive drug test is reported to the company to
                              contest a positive drug test result.
                            </li>
                          </ol>
                        </Typography>

                        <Typography align="left" variant="body1">
                          <b>I. Alcohol Testing Overview.</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ol>
                            <li>
                              Alcohol Testing Procedures. All collection,
                              transportation, testing procedures, test evaluation
                              measures, quality control measures, substance abuse
                              professionals, record keeping, and reporting of
                              alcohol test results will conform to the Department of
                              Transportation regulations as set forth in 49 CFR Part
                              40, Procedures for Transportation Workplace Drug and
                              Alcohol Testing Programs.
                            </li>
                          </ol>
                        </Typography>

                        <Typography align="left" variant="body1">
                          <b>J. Record Retention.</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ul>
                            <li>
                              Record keeping.
                              <ul>
                                <li>
                                  The Company will retain the following records for
                                  a period of at least five (5) years:
                                  <ul>
                                    <li>
                                      Records of driver alcohol test results with
                                      results indicating a level of greater than
                                      0.02.
                                    </li>
                                    <li>
                                      Documentation of driver refusal to take
                                      required alcohol tests.
                                    </li>
                                    <li>Driver referral and evaluation records.</li>
                                  </ul>
                                </li>
                                <li>
                                  The Company will retain records regarding the
                                  alcohol collection process for two years.
                                </li>
                                <li>
                                  The Company will retain test records of drivers
                                  with alcohol concentrations of less than 0.02 for
                                  a minimum of one year.
                                </li>
                                <li>
                                  The Company will retain records confirming
                                  supervisory and employee training for at least
                                  three (3) years.
                                </li>
                              </ul>
                            </li>
                            <li>Driver Qualification Files.</li>
                            <li>
                              These records are subject to the Company? current
                              divided record keeping authority and are to be
                              maintained at authorized record keeping locations.
                              Below is a list of information to be maintained in
                              these files regarding employee alcohol abuse.
                              <ul>
                                <li>
                                  The name of the employee submitted to a alcohol
                                  test;
                                </li>
                                <li>Date the alcohol test was conducted;</li>
                                <li>Location of the alcohol test;</li>
                                <li>Test category;</li>
                                <li>Results of the alcohol test.</li>
                              </ul>
                            </li>
                            <li>
                              Record Confidentiality.
                              <ul>
                                <li>
                                  Except for the breath alcohol technician,
                                  substance abuse professional, and designated
                                  Company personnel with a need to know, the Company
                                  will not release information regarding an
                                  employee's alcohol use or rehabilitation/treatment
                                  records without the express written consent of the
                                  tested employee. The only exception is when
                                  information must be released, regardless of
                                  consent, to the Federal Motor Carrier Safety
                                  Administrator to examine all records related to
                                  the administration and results of controlled
                                  substance testing performed under this program.
                                </li>
                                <li>
                                  To maintain confidentiality, written records
                                  regarding an employee's alcohol misuse and
                                  rehabilitation will be stored in a secured
                                  location. The employee's alcohol testing and/or
                                  rehabilitation/treatment records will not be made
                                  a part of the employee's personnel file.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </Typography>

                        <Typography align="left" variant="body1">
                          <b>K. Responsibility.</b>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          <ul>
                            <li>
                              Reservation of Rights - The Company reserves the right
                              to interpret, modify, and/or revise this policy in
                              whole or in part without notice. Nothing in this
                              policy is to be construed as an employment contract
                              nor does this alter an employee's employment at-will
                              status. The employee remains free to resign his/her
                              employment at any time for any or no reason, without
                              notice. Similarly, the Company reserves the right to
                              terminate any employee's employment, for any or no
                              reason, without notice.
                            </li>
                            <li>
                              Compliance with All Laws. This policy will be amended
                              from time to time to comply with changes in Federal
                              and State Laws.
                            </li>
                          </ul>
                        </Typography>
                        <Typography align="justify" variant="body2">
                          This policy is a general summary of the Company’s Drug and
                          Alcohol Misuse Prevention Policy for Commercial Drivers.
                          IF THERE IS ANY QUESTION OR CONFLICT BETWEEN WHAT IS SAID
                          IN THE POLICY AND THE LANGUAGE IN THE DOT REGULATIONS AS
                          CODIFIED AT 49 CFR PART 40 AND 382, THE DOT REGULATIONS
                          WILL PREVAIL.
                        </Typography>
                      
                      </Grid>
                    </Grid>

                  </Paper>

                </div>
              </div>
            </Grid>
            {/* BUTTON Start */}
            <Grid item  xs={8} sm={7} md={4}>
              <Button
                type="button"
                className="col-8"
                variant="contained"
                color="primary"
                onClick={() => {
                  props.handler[1]();
                }}
              >
                Back
              </Button>
            </Grid>
            <Grid item  xs={8} sm={7} md={4}>
              <Button type="submit" className="col-8" variant="contained" color="primary">
                Next
              </Button>
            </Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
        <AlertComponent
          duration={snackbarDuratuion}
          open={snackOpen}
          onClose={handleClose}
          severity={succesOrErrorBit}
          message="Accepted the Above Terms and Conditions"
        ></AlertComponent>
      </Container>
    </div>
  );
}


