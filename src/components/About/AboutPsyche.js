import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './AboutPsyche.css'
const BACK_BUTTON = require('../../assets/images/BackButton.png');
const BACK_BUTTON2 = require('../../assets/images/BackButton2.png');
const ORBIT = require('../../assets/images/orbits-v2.svg');
const TRAJECTORY = require('../../assets/images/trajectory.svg');
const IMG_ERROR = "Image Could Not Be Found"


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
                            <p>The Psyche spacecraft is targeted to launch in summer 2022 and travel to the asteroid using solar-electric (low-thrust) propulsion, arriving in 2026, following a Mars flyby and gravity-assist in 2023. After arrival, the mission plan calls for 21 months spent at the asteroid, mapping it and studying its properties.</p>
                            <img className="AboutPhoto" src={TRAJECTORY} alt={IMG_ERROR}></img>
                        </TabPanel>
                        <TabPanel>
                            <h2>Orbit of the Spacecraft:</h2>
                            <p>Once the spacecraft arrives at the asteroid in 2026, plans call for it to spend 21 months at the asteroid, performing science operations from four staging orbits, which become successively closer.</p>
                            <img className="AboutPhoto" src={ORBIT} alt={IMG_ERROR}></img>
                        </TabPanel>
                        <TabPanel>
                            <h2>Mission Timeline:</h2>
                            <ul>
                                <li>Launch: 2022</li>
                                <li>Solar electric cruise: 3.5 years</li>
                                <li>Arrival at (16) Psyche: 2026</li>
                                <li>Observation Period: 21 months in orbit, mapping and studying Psyche's properties</li>
                            </ul>
                            <h2>Mission Events:</h2>
                            <ul>
                                <li>2022 - Launch of Psyche spacecraft from Kennedy Space Center, Florida</li>
                                <li>2023 - Mars Flyby of Psyche spacecraft</li>
                                <li>2026 - Psyche spacecraft arrives in asteroid's orbit</li>
                                <li>2026-2027 - Psyche spacecraft orbits the Psyche asteroid</li>
                            </ul>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default AboutPsyche;
