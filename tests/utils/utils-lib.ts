import { Logger } from "tslog";

export enum LogType {
    INFO = 'INFO',
    DEBUG = 'DEBUG',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS'
}

export function delay(ms: number): Promise<number> {
    return new Promise(r => setTimeout(r, ms))
}

export function b64enc(str: string) : String {
    return Buffer.from(str).toString('base64');
}

export const logger = new Logger({
    prettyLogTemplate: "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t[{{filePathWithLine}}{{name}}]\t",
    prettyErrorTemplate: "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
    prettyErrorStackTemplate: "  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
    prettyErrorParentNamesSeparator: ":",
    prettyErrorLoggerNameDelimiter: "\t",
    stylePrettyLogs: true,
    prettyLogStyles: {
        logLevelName: {
            "*": ["bold", "black", "bgWhiteBright", "dim"],
            SILLY: ["bold", "white"],
            TRACE: ["bold", "whiteBright"],
            DEBUG: ["bold", "green"],
            INFO: ["bold", "blue"],
            WARN: ["bold", "yellow"],
            ERROR: ["bold", "red"],
            FATAL: ["bold", "redBright"],
        },
        dateIsoStr: "white",
        filePathWithLine: "white",
        name: ["white", "bold"],
        nameWithDelimiterPrefix: ["white", "bold"],
        nameWithDelimiterSuffix: ["white", "bold"],
        errorName: ["bold", "bgRedBright", "whiteBright"],
        fileName: ["yellow"],
    },
});
