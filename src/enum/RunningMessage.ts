export enum RunningMessage {
  RunningMessage_0 = 0,
  RunningMessage_1 = "Initial Flashing...",
  RunningMessage_2 = "Soft Start - Rising Pump RPM...",
  RunningMessage_3 = "Adjusting Valves...",
  RunningMessage_4 = "Logic Achieved",
  RunningMessage_5 = "Logic Achieved and Stable",
  RunningMessage_6 = "Preventive Flashing is Active...",
  RunningMessage_7 = "puRO Is ready",
  RunningMessage_8 = "Membrane Flashing...",
  RunningMessage_9 = "puRO is in self maintenance",
  RunningMessage_10 = "puRO is in circulation procedure...",
  RunningMessage_11 = "puRO has an alarm!!!",
}


export type RunningMessageType = {
  index: number;
  message: string;
};

export const getRunningMessage = (index: number): RunningMessageType => {
  const messages = [
    { index: 0, message: "" },
    { index: 1, message: RunningMessage.RunningMessage_1 },
    { index: 2, message: RunningMessage.RunningMessage_2 },
    { index: 3, message: RunningMessage.RunningMessage_3 },
    { index: 4, message: RunningMessage.RunningMessage_4 },
    { index: 5, message: RunningMessage.RunningMessage_5 },
    { index: 6, message: RunningMessage.RunningMessage_6 },
    { index: 7, message: RunningMessage.RunningMessage_7 },
    { index: 8, message: RunningMessage.RunningMessage_8 },
    { index: 9, message: RunningMessage.RunningMessage_9 },
    { index: 10, message: RunningMessage.RunningMessage_10 },
    { index: 11, message: RunningMessage.RunningMessage_11 },
  ];

  return messages[index] || { index, message: "" };
};
