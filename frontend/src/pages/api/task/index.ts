//TODO: 後で消す
//not used
import type { NextApiRequest, NextApiResponse } from "next";
import axiosClient from "../../../utils/axios.config";

const NEST_API_BASE_URL =
  process.env.NEST_API_BASE_URL || "http://localhost:3001";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.status(200).json({ name: "John Doe" });
  // const token = localStorage.getItem("token");

  console.log("bbbbbbbbbbbbbbbbb!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  try {
    if (req.method === "GET") {
      //accessing to backend
      // const response = await axios.get(`${NEST_API_BASE_URL}/task`);
      const response = await axiosClient.get(`${NEST_API_BASE_URL}/task`);
      return res.status(200).json(response.data);
    }
  } catch (error: any) {
    console.error("Error calling NestJS API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
