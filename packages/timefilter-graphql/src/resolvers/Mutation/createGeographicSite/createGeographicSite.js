import { GeographicSite } from "models";

const createGeographicSite = async (root, { input }, context) => {
  try {
    const newGeographicSite = new GeographicSite({
      ...input
    });

    const result = await newGeographicSite.save();

    return result;
  } catch (err) {
    throw err;
  }
};

export default createGeographicSite;
