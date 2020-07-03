
// Forward requester to a new path
export async function handler(req: {queryStringParameters: { a?: string }}) {
  let location = "https://www.learninpublic.org"
  let qsp = req.queryStringParameters
  if (qsp && qsp.a) location += `/?a=${qsp.a}`
  return {
    statusCode: 302,
    headers: {
      location,
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
  };
}
