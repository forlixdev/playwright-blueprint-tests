import { APIResponse, expect } from "@playwright/test";
import { b64enc, logger } from "./utils-lib";

export async function printApiResponse(response: APIResponse) : Promise<void>{
    const headersArray = response.headersArray();
    var hdrs : string = "";
    for (const header of headersArray) {
        hdrs = hdrs + "  " + `${header.name}: ${header.value}`+"\n";
    }
    var bd : string = (await response.body()).toString();
    if (bd.length == 0) {
        bd = "  "+ "Empty"
    }
    logger.debug("Response:"+"\n"+"Headers:"+"\n"+hdrs+"Body:"+"\n"+addLeadingSpaces(bd,2));
}

function addLeadingSpaces(inputString: string, numSpaces: number): string {
    const regex = new RegExp(`^`, 'gm');
    const spaces = ' '.repeat(numSpaces);
    const result = inputString.replace(regex, spaces);
    return result;
  }

export async function isXMLString(inputString: string): Promise<boolean> {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(inputString, 'text/xml');
      return xmlDoc.documentElement.nodeName !== 'parsererror';
    } catch (error) {
      return false;
    }
  }