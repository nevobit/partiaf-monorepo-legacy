import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

type PartialUser = Partial<User>;
export const changePassword = async (
  uuid: string,
  password: string
): Promise<User | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ uuid });

  if (!user) {
    throw new Error("602");
  }

  if(password){password = bcrypt.hashSync(password, 10);}
        
  user.password = password;

  await user.save();

  const token = jwt.sign({uuid: uuid, firstname: user.firstname, lastname: user.lastname, username: user.username, phone:user.phone}, process.env.JWT_SECRET_KEY || "", {expiresIn: "24h"});

  return {
      token,
      ...user._doc
  };

};
