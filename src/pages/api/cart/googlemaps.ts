import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

interface TGoogleMapsRequest extends NextApiRequest {
  body: {
    destinations: string;
  };
}

const origins = "50.086610,14.448785";
const key = "AIzaSyAelVTTeDWjXmX7yF_m83ebT7GbJZsNaUY";

const handler = async (
  request: TGoogleMapsRequest,
  response: NextApiResponse
) => {
  if (request.method === "GET") return;

  const googleResponse = await fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${
      request.body.destinations || ""
    }&key=${key}`,
    { mode: "no-cors" }
  );
  const data = await googleResponse.json();
  const lengthInKm = data.rows.length && data.rows[0].elements[0].distance.text;

  response.status(200).json({ lengthInKm: parseInt(lengthInKm) });
};

export default handler;
