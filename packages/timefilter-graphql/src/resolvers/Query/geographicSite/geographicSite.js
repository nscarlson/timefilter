import { GeographicSite } from "models";

const geographicSite = async (object, args, context) => {
  const result = await GeographicSite.findOne({
    _id: args.id
  });

  return result;
};

export default geographicSite;
