import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './AboutPsyche.css'
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');
const ORBIT = require('../../assets/images/orbits-v2.svg');
const TRAJECTORY = require('../../assets/images/trajectory.svg');
const IMG_ERROR = "Image Could Not Be Found"

/*
* Utilizes the react-tabs library to create a tabbed interface that
* provides additional information about the Psyche mission
*/
class AboutPsyche extends React.Component {
    render () {
        return (
            <div className="AboutPage">
                <div className="HUDElement"><Link to="/"><img className="BackButton" src={BACK_BUTTON2} alt={BACK_BUTTON}/></Link></div>
                <div className="AboutPanel">
                    <Tabs>
                        <TabList>
                            <Tab>Mission</Tab>
                            <Tab>Trajectory</Tab>
                            <Tab>Orbit</Tab>
                            <Tab>Timeline</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>About the Psyche Mission:</h2>
                            <p>Psyche is both the name of an asteroid orbiting the Sun between Mars and Jupiter — and the name of a NASA space mission to visit that asteroid, led by Arizona State University. The mission was chosen by NASA on January 4, 2017 as one of two missions for the agency’s Discovery Program, a series of relatively low-cost missions to solar system targets.</p>
                            <h3>Goals/Objectives:</h3>
                            <ul>
                                <li>Understand a previously unexplored building block of planet formation: iron cores.</li>
                                <li>Look inside terrestrial planets, including Earth, by directly examining the interior of a differentiated body, which otherwise could not be seen.</li>
                                <li>Explore a new type of world. For the first time, examine a world made not of rock and ice, but metal.</li>
                                <li>Determine whether Psyche is a core, or if it is unmelted material.</li>
                                <li>Determine the relative ages of regions of Psyche's surface.</li>
                                <li>Determine whether small metal bodies incorporate the same light elements as are expected in the Earth's high-pressure core.</li>
                                <li>Determine whether Psyche was formed under conditions more oxidizing or more reducing than Earth's core.</li>
                                <li>Characterize Psyche's topography.</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <h2>Trajectory of the Spacecraft:</h2>
                            <p>The Psyche spacecraft launched on October 13, 2023 on a roughly six-year journey to the asteroid belt. About 2.5 years after launch, it performs a Mars gravity boost (expected around May 2026). As the cruise period ends, the spacecraft’s imagers will begin photographing asteroid Psyche around June 2029, and in August 2029 the spacecraft will begin its first of 26 planned orbits around the metal-rich asteroid, mapping it and studying its properties.</p>
                            <img className="AboutPhoto" src={TRAJECTORY} alt={IMG_ERROR}></img>
                        </TabPanel>
                        <TabPanel>
                            <h2>Orbit of the Spacecraft:</h2>
                            <p>During the prime science phase, the spacecraft will spend about two years in orbit around Psyche, conducting science operations from multiple staging orbits (four planned orbits that become successively closer). This prime mission phase begins in August 2029 and continues through late 2031.</p>
                            <img className="AboutPhoto" src={ORBIT} alt={IMG_ERROR}></img>
                        </TabPanel>
                        <TabPanel>
                            <h2>Mission Timeline:</h2>
                            <ul>
                                <li>Launch: Oct 13, 2023</li>
                                <li>Solar-electric journey: about six years (with a Mars gravity assist)</li>
                                <li>Arrival at (16) Psyche: late July / August 2029 (first orbits begin)</li>
                                <li>Observation period: prime science phase ~26 months in orbit, through late 2031</li>
                            </ul>
                            <h2>Mission Events:</h2>
                            <ul>
                                <li>Oct 13, 2023 - Launch of Psyche spacecraft from Kennedy Space Center, Florida</li>
                                <li>May 2026 (expected) - Mars flyby / gravity assist</li>
                                <li>Late July / Aug 2029 - Spacecraft captured into orbit around (16) Psyche</li>
                                <li>Aug 2029 - late 2031 - Spacecraft conducts science operations from staging orbits</li>
                            </ul>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default AboutPsyche;
