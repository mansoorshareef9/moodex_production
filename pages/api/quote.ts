// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import qs from "qs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const query = qs.stringify(req.query);
  const response = await fetch(
    `https://polygon.api.0x.org/swap/v1/quote?${query}`,
    {
      headers: {
        "0x-api-key": "d19a1155-ef1c-4f2e-88a1-a437b6615b42", // process.env.NEXT_PUBLIC_0X_API_KEY,
      },
    },
  );

  const data = await response.json();

  res.status(200).json(data);
}
