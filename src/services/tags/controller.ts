import  {tagModel} from "../../db/Tag";

/**
 * get all records
 */
export const get = async () => {
  return await tagModel.find();
};

/**
 * Add new record
 * @param body object
 */
export const add = async (body: any) => {
  return await tagModel.create(body);
};
