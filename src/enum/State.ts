// State Enum
export enum State {
  OK = "Connected",
  RUNNING = "puRO is Running..",
  SHUTOFF = "puRO has Alarm",
  UNDEFINED = "UNDEFINED",
}

// State Type
export type StateType = {
  state: number;
  message: string;
  color: string;
};

// Function to get State details
export const getState = (state: number): StateType => {
  const states = [
    { state: 0, message: State.OK, color: "#90caf9" },
    { state: 1, message: State.RUNNING, color: "#aed581" },
    { state: 2, message: State.SHUTOFF, color: "#b71c1c" },
    { state: 125, message: State.UNDEFINED, color: "#000000" },
  ];

  return states.find((item) => item.state === state) || { state, message: State.UNDEFINED, color: "#000000" };
};
