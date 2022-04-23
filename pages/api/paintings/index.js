import dbConnect from "../../../util/mongo";
import Painting from "../../../models/Painting";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const paintings = await Painting.find();
      res.status(200).json(paintings);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      const painting = await Painting.create(req.body);
      res.status(201).json(painting);
    } catch (err) {
      res.status(500).json(err);
      console.log("error in POST")
    }
  }
}