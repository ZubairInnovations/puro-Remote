// ShutOff Enum
export enum ShutOff {
  ShutOff_0 = "NO FEED PRESSURE",
  ShutOff_1 = "LOW FEED PRESSURE",
  ShutOff_2 = "HIGH MEMBRANE PRESSURE",
  ShutOff_3 = "MOTOR CONTROLLER ALARM",
  ShutOff_4 = "LOW PUMP FLOW",
  ShutOff_5 = "HIGH PUMP FLOW",
  ShutOff_6 = "MAXIMUM RUNNING TIME REACHED 12H",
  ShutOff_7 = "HIGH FEED SALINITY - REDUCE RECOVERY RATE AND TRY AGAIN",
  ShutOff_8 = "LOGIC CANNOT BE ACHIEVED",
  ShutOff_9 = "HIGH WATER TEMPERATURE",
  ShutOff_10 = "NO WATER FLOW ON DRAIN",
  ShutOff_11 = "PRODUCT LOWERING REACHED TO MAX VALUE",
}

// ShutOff Type
export type ShutOffType = {
  reason: number;
  messageDisplay: string;
  messageDebug: string;
};

// Function to get ShutOff details
export const getShutOff = (reason: number): ShutOffType => {
  const shutoffs = [
    { reason: 0, messageDisplay: ShutOff.ShutOff_0, messageDebug: "No Feed Pressure - cannot turn on" },
    { reason: 1, messageDisplay: ShutOff.ShutOff_1, messageDebug: "Low Feed Pressure Detected - System is Off" },
    { reason: 2, messageDisplay: ShutOff.ShutOff_2, messageDebug: "High Membrane Pressure detected - System is Off" },
    { reason: 3, messageDisplay: ShutOff.ShutOff_3, messageDebug: "Motor controller internal alarm - System is Off" },
    { reason: 4, messageDisplay: ShutOff.ShutOff_4, messageDebug: "Pump flow is lower than 8 lpm and motor RPM is above 1500 - System is Off" },
    { reason: 5, messageDisplay: ShutOff.ShutOff_5, messageDebug: "Pump flow is higher than 30 lpm and motor RPM is above 1000 - System is Off" },
    { reason: 6, messageDisplay: ShutOff.ShutOff_6, messageDebug: "Maximum allowed running time reached (12 hours) - System is Off" },
    { reason: 7, messageDisplay: ShutOff.ShutOff_7, messageDebug: "Feed salinity is above 1200 ppm - System is Off" },
    { reason: 8, messageDisplay: ShutOff.ShutOff_8, messageDebug: "Logic cannot be achieved after 30 min - System is Off" },
    { reason: 9, messageDisplay: ShutOff.ShutOff_9, messageDebug: "High feed water temperature (above 45 degrees) - System is Off" },
    { reason: 10, messageDisplay: ShutOff.ShutOff_10, messageDebug: "No drain flow during recirculation - procedure stopped" },
    { reason: 11, messageDisplay: ShutOff.ShutOff_11, messageDebug: "Low Feed logic cannot compensate - System is Off" },
  ];

  return shutoffs[reason] || { reason, messageDisplay: "", messageDebug: "" };
};
