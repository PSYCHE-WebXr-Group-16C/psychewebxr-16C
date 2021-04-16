/* TOGGLE DEBUGMODE */
export const DEBUG_MODE = true; // TURN OFF IN DEPLOYMENT

/* Menu Modes */
export const MENU_MODE = "MENU_MODE";
export const SPACECRAFT_MODE = "SPACECRAFT_MODE";
export const ASTEROID_MODE = "ASTEROID_MODE";
export const ABOUT_PSYCHE_MODE = "ABOUT_PSYCHE_MODE";
export const ABOUT_TEAM_MODE = "ABOUT_TEAM_MODE";


/* 
* Camera Presets for the Spacecraft and Asteroid to be used 
* in the teleportation menu 
*/
export const SPACECRAFT_1 = {x: 0.004, y: 1.398, z: .9, rx: 0, ry: 0, rz: 0, controls: true};
export const SPACECRAFT_2 = { x: 0.004, y: 1.398, z: 1, rx: 0, ry: 0, rz: 0, controls: false };
export const SPACECRAFT_3 = { x: 0.004, y: 1.398, z: -.584, rx: 0.115, ry: 0, rz: 0, controls: false };
export const SPACECRAFT_4 = { x: 0.004, y: 1.049, z: 0.115, rx: 0.115, ry: 0, rz: 0, controls: false };
export const SPACECRAFT_5 = { x: .008, y: -1.154, z: -0.030, rx: 90, ry: 0, rz: 0, controls: false };

export const ASTEROID_1 = {x: 0, y: 1.7, z: 0, rx: 0, ry: 0, rz: 0, controls: true};
export const ASTEROID_2 = { x: 0, y: 1.7, z: 0, rx: 0, ry: 0, rz: 0, controls: false };
export const ASTEROID_3 = { x: -0.879, y: 1.439, z: 5.201, rx: 0, ry: -100, rz: 0, controls: false };
export const ASTEROID_4 = { x: 2.5, y: 1.3, z: 3, rx: 0, ry: 100, rz: 0, controls: false };
export const ASTEROID_5 = { x: -0.131, y: 1.891, z: -1.251, rx: 0, ry: 1.686, rz: 6.381, controls: false };


/* Messages to be shown in text boxes based off teleporation menu selections */
export const DEFAULT_CONTROLLER = "DEFAULT_CONTROLLER";

export const MESSAGE_1 = "The Psyche spacecraft and solar panels, built by Maxar Technologies, are about the size of a singles tennis court. The body of the spacecraft is slightly bigger than a Smart Car and about as tall as a regulation basketball hoop. The spacecraft will include a Gamma Ray and Neutron Spectrometer, a Multispectral Imager, a Magnetometer and an x-band radio telecommunications system. Spacecraft Size ~81 ft (24.76 meters) long by ~24 ft (7.34 meters) wide Bus (Body) Size ~10 ft (3.1 meters) long by ~8 ft (2.4 meters) wide Flight Time 3.5 years Mission Cost $850 million.";
export const MESSAGE_2 = "The Multispectral Imager will provide high-resolution images of the asteroid's surface, as well as data on its composition (how much metal, how much silicate) and topography";
export const MESSAGE_3 = "The spectrometer will detect, measure, and map Psyche’s elemental composition.";
export const MESSAGE_4 = "The magnetometer will detect and measure the asteroid's magnetic field";

export const MESSAGE_6 = "Only the 16th asteroid to be discovered, Psyche was found in 1852 by Italian astronomer Annibale de Gasparis, who named it for the goddess of the soul in ancient Greek mythology. What gives asteroid Psyche great scientific interest is that it is likely rich in metal. It may consist largely of metal from the core of an early planet, one of the building blocks of the Sun’s planetary system. Through this mission, scientists will explore, for the first time ever, a world made not of rock or ice, but of metal. Dimensions: 173 x 144 x 117 mi (279 x 232 x 189 km) Density: Estimated 3,400 to 4,100 kg/m³ Diameter: 140 mi (226 km) if shown as a perfect sphere Surface Area: 246,300 mi² (641,800 km²)";
export const MESSAGE_7 = "Psyche orbits the Sun between the orbits of Mars and Jupiter at a distance ranging from 235 million to 309 million miles (378 million to 497 million kilometers) from the Sun. That’s 2.5 to 3.3 Astronomical Units (AU), with 1 AU being the distance between Earth and the Sun. Psyche takes about five Earth years to complete one orbit of the Sun, but only a bit over four hours to rotate once on its axis (a Psyche “day”).";
export const MESSAGE_8 = "Observations indicate that unlike most other asteroids that are rocky or icy bodies, Psyche seems to have a surface that is a mixture of rock and metal, with metal comprising between 30-60% of its volume. . Scientists think that these metals may be mostly iron and nickel similar to Earth’s core.";
export const MESSAGE_9 = "The asteroid is most likely a survivor of multiple violent hit-and-run collisions, common when the solar system was forming. Thus, scientists wonder whether Psyche could be an exposed core of an early planet that lost its rocky outer layers due to a number of violent collisions billions of years ago. Psyche may be able to tell us how Earth’s core and the cores of the other terrestrial planets came to be.";