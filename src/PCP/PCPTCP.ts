export class PCPTCP {
    private static readonly PCP_TCP_INDEX_COMMAND: number = 0;

    private static readonly PCP_TCP_COMMAND_UNKNOWN: string = '0';
    public static readonly PCP_TCP_COMMAND_START: string = '1';
    public static readonly PCP_TCP_COMMAND_STOP: string = '2';

    public static readonly PCP_TCP_COMMAND_ERROR: string = "ERROR";

    private static readonly PCP_TCP_COMMAND_START_MESSAGE: string = "puRO is Starting...";
    private static readonly PCP_TCP_COMMAND_STOP_MESSAGE: string = "puRO Stopped";

    // Generate a command string based on the command type and optional value
    public static generate(command: string, value: string = ""): string {
        switch (command) {
            case this.PCP_TCP_COMMAND_START:
                try {
                    const numericValue: number = parseInt(value, 10);

                    console.log("Value:", numericValue);

                    if (numericValue < 1 || numericValue > 2000) {
                        return this.PCP_TCP_COMMAND_ERROR;
                    }

                    return `${this.PCP_TCP_COMMAND_START}${"0000".substring(value.length)}${value}`;
                } catch (error) {
                    console.error(error);
                    return this.PCP_TCP_COMMAND_ERROR;
                }

            case this.PCP_TCP_COMMAND_STOP:
                return this.PCP_TCP_COMMAND_STOP;

            default: // Shouldn't arrive here
                return this.PCP_TCP_COMMAND_ERROR;
        }
    }

    // Parse a message string to determine the command
    public static parse(message: string): string {
        if (!message || message.length === 0) {
            return this.PCP_TCP_COMMAND_ERROR;
        }

        const command: string = message.charAt(this.PCP_TCP_INDEX_COMMAND);

        console.log("Command:", command);

        switch (command) {
            case this.PCP_TCP_COMMAND_START:
                return this.PCP_TCP_COMMAND_START_MESSAGE;

            case this.PCP_TCP_COMMAND_STOP:
                return this.PCP_TCP_COMMAND_STOP_MESSAGE;

            case this.PCP_TCP_COMMAND_UNKNOWN: // Unknown command received
                return this.PCP_TCP_COMMAND_ERROR;

            default: // Shouldn't arrive here
                return this.PCP_TCP_COMMAND_ERROR;
        }
    }
}
