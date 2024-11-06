import { expect, test} from "@playwright/test";
import { delay, logger } from "../utils/utils-lib";
import { isXMLString, printApiResponse } from "../utils/api-lib";

test("POST request", {tag: '@api',}, async ({ request }) => {
    var str: string = `${process.env.CUSTOM_STR}`;
    const response = await request.post("https://httpbin.org/post",
        {
            "data": {
                field: str
            }
        }
    );
    expect(response.status()).toBe(200);
    logger.info((await response.body()).toString());
    var respJson = (await response.json());
    expect(respJson.json.field).toBe(str);
    expect(respJson.headers["Content-Type"]).toBe("application/json");
});

test("GET request", {tag: '@api',}, async ({ request }) => {
    const response = await request.get("https://httpbin.org/get");
    printApiResponse(response);
    expect(response.status()).toBe(200);
    var respJson = (await response.json());
    expect(respJson.headers.Host).toBe("httpbin.org");
});

test("PATCH request", {tag: '@api',}, async ({ request }) => {
    var str: string = `${process.env.CUSTOM_STR}`;
    const response = await request.patch("https://httpbin.org/patch",
        {
            "data": {
                field: str
            }
        }
    );
    printApiResponse(response);
    expect(response.status()).toBe(200);
    var respJson = (await response.json());
    expect(respJson.json.field).toBe(str);
    expect(respJson.headers["Content-Type"]).toBe("application/json");
});

test("base 64 decode", {tag: '@api',}, async ({ request }) => {
    var str: string = `${process.env.CUSTOM_STR}`;
    const response = await request.get("https://httpbin.org/base64/" + btoa(str));
    expect(response.status()).toBe(200);
    logger.info("Body: " + (await response.body()).toString());
    expect((await response.body()).toString()).toBe(str);
});

test("check headers from request", {tag: '@api',}, async ({request}) => {
    var str: string = `${process.env.CUSTOM_STR}`;
    logger.info("param value " + str);
    const response = await request.get("https://httpbin.org/response-headers", { params: {queryparam: str}});
    printApiResponse(response);
    expect(response.status()).toBe(200);
    expect(response.headers()["queryparam"].toString()).toBe(str);
});

test("retrieve an xml response", {tag: '@api',}, async ({request}) => {
    var str: string = `${process.env.CUSTOM_STR}`;
    const response = await request.get("https://httpbin.org/xml");
    printApiResponse(response);
    expect(response.status()).toBe(200);
    expect(isXMLString((await response.body()).toString())).toBeTruthy();
});
