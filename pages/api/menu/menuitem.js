import dbConnect from "../../../Utility/mongo"; // Ensure you have a MongoDB connection utility
import Product from "../../../models/Product"; // Make sure the Product model is correctly imported

export default async function handler(req, res) {
  const { method, query: { category } } = req; // Capture category query param
  await dbConnect();

  if (method === "GET") {
    try {
      // If category query param is present, filter by category
      const products = category
        ? await Product.find({ category: category }) // Fetch products for the given category
        : await Product.find(); // Fetch all products if no category is specified
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }
}
