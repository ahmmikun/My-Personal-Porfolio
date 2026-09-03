import { NextResponse } from "next/server";
import { checkRateLimit } from "./rate-limit";

export interface ProblemDetails {
  type: string;
  title: string;
  status: number;
  code: string;
  message: string;
  resolution: string;
  instance?: string;
  availableEndpoints?: string[];
  invalidParams?: Array<{ name: string; reason: string }>;
}

export function createProblemResponse(
  details: ProblemDetails,
  customHeaders: Record<string, string> = {}
): NextResponse {
  const rateLimit = checkRateLimit();

  const headers: Record<string, string> = {
    "Content-Type": "application/problem+json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, HEAD",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
    "Vary": "Accept, Accept-Encoding",
    ...rateLimit.headers,
    ...customHeaders,
  };

  return NextResponse.json(details, {
    status: details.status,
    headers,
  });
}

export function notFoundError(path: string, resolution?: string): NextResponse {
  return createProblemResponse({
    type: "https://salmanahmad.tech/docs/errors#not-found",
    title: "Resource Not Found",
    status: 404,
    code: "ENDPOINT_NOT_FOUND",
    message: `The requested endpoint or resource '${path}' does not exist on salmanahmad.tech.`,
    resolution:
      resolution ||
      "Consult /openapi.json for valid API endpoints, /.well-known/mcp.json for MCP tools, or /llms.txt for full site navigation.",
    instance: path,
    availableEndpoints: [
      "/api/v1/contact",
      "/api/v1/skills",
      "/api/v1/projects",
      "/api/v1/health",
      "/api/v1/mcp",
      "/api/contact",
      "/api/skills",
      "/api/projects",
      "/api/health",
      "/api/mcp",
      "/openapi.json",
      "/.well-known/mcp.json",
      "/llms.txt",
    ],
  });
}

export function validationError(
  message: string,
  invalidParams?: Array<{ name: string; reason: string }>
): NextResponse {
  return createProblemResponse({
    type: "https://salmanahmad.tech/docs/errors#validation-error",
    title: "Validation Error",
    status: 400,
    code: "VALIDATION_ERROR",
    message,
    resolution: "Ensure all required fields are correctly supplied conforming to the schema documented in /openapi.json.",
    invalidParams,
  });
}

export function methodNotAllowedError(method: string, allowedMethods: string[]): NextResponse {
  return createProblemResponse(
    {
      type: "https://salmanahmad.tech/docs/errors#method-not-allowed",
      title: "Method Not Allowed",
      status: 405,
      code: "METHOD_NOT_ALLOWED",
      message: `HTTP method '${method}' is not supported for this endpoint.`,
      resolution: `Use one of the allowed HTTP methods: ${allowedMethods.join(", ")}. See /openapi.json for endpoint specifications.`,
    },
    {
      Allow: allowedMethods.join(", "),
    }
  );
}

export function rateLimitExceededError(retryAfterSeconds: number = 60): NextResponse {
  return createProblemResponse(
    {
      type: "https://salmanahmad.tech/docs/errors#rate-limit-exceeded",
      title: "Rate Limit Exceeded",
      status: 429,
      code: "RATE_LIMIT_EXCEEDED",
      message: "Too many requests. You have exceeded the rate limit threshold of 60 requests per minute.",
      resolution: `Throttle your requests and retry after ${retryAfterSeconds} seconds. Inspect RateLimit-Reset and Retry-After response headers.`,
    },
    {
      "Retry-After": retryAfterSeconds.toString(),
    }
  );
}

export function internalServerError(message?: string): NextResponse {
  return createProblemResponse({
    type: "https://salmanahmad.tech/docs/errors#internal-server-error",
    title: "Internal Server Error",
    status: 500,
    code: "INTERNAL_SERVER_ERROR",
    message: message || "An unexpected error occurred while processing the transmission.",
    resolution: "Retry with exponential backoff, check /api/health for system status, or reach out to xheikhsalman4422@gmail.com.",
  });
}
