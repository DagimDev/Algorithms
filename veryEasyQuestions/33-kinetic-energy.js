// Kinetic Energy  Kinetic energy can be calculated with the following formula:

// KE = 1/2mv²

// m is mass in kg
// v is velocity in m/s
// KE is kinetic energy in J
// Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.

// Examples
// kineticEnergy(60, 3) ➞ 270

// kineticEnergy(45, 10) ➞ 2250

// kineticEnergy(63.5, 7.35) ➞ 1715
// Notes
// Expect only positive numbers for inputs.

const kineticEnergy = (m, v) => {
  return Math.round(0.5 * m * v * v);
};

// Test cases
console.log(kineticEnergy(60, 3));    // 270
console.log(kineticEnergy(45, 10));   // 2250
console.log(kineticEnergy(63.5, 7.35)); // 1715

const kineticEnergy1 = (mass, velocity) => {
  const kineticEnergyValue = 0.5 * mass * velocity ** 2;
  return Math.round(kineticEnergyValue);
};