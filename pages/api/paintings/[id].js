import dbConnect from "../../../util/mongo";
import Painting from "../../../models/Painting";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies
  } = req;
  const token = cookies.token

  await dbConnect();

  if (method === "GET") {
    try {
      const painting = await Painting.findById(id);
      res.status(200).json(painting);
    } catch (err) {
      res.status(500).json(err);
      console.log("can't get")
    }
  }

  if (method === "PUT") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      const painting = await Painting.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(painting);
    } catch (err) {
      res.status(500).json(err);
      console.log("can't PUT")
    }
  }

  if (method === "DELETE") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      await Painting.findByIdAndDelete(id);
      res.status(200).json("The Painting has been deleted!");
    } catch (err) {
      res.status(500).json(err);
      console.log("can't delete")
    }
  }
}