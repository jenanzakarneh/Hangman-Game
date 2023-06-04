import jwt from "jsonwebtoken";

export const issueJwt = (userId: string) => {
  const mySecretKey = process.env.ACCESS_TOKEN_SECRET || "secretString";
  const payload = {
    sub: userId,
  };

  const signedToken = jwt.sign(payload, mySecretKey, {});
  return {
    token: "Bearer " + signedToken,
  };
};
