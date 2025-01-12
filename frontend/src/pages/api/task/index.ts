import type { NextApiRequest, NextApiResponse } from "next";
import { useAppSelector } from "@/hooks";
import axios from "axios";

const NEST_API_BASE_URL =
  process.env.NEST_API_BASE_URL || "http://localhost:3001";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.status(200).json({ name: "John Doe" });
  // const token = localStorage.getItem("token");
  const token = useAppSelector((state) => state.signIn.token);

  console.log("bbbbbbbbbbbbbbbbb!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  try {
    if (req.method === "GET") {
      //accessing to backend
      // const response = await axios.get(`${NEST_API_BASE_URL}/task`);
      const response = await axios.get(`${NEST_API_BASE_URL}/task`, {
        //TODO:tokenを追加する
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.status(200).json(response.data);
    }
  } catch (error: any) {
    console.error("Error calling NestJS API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
