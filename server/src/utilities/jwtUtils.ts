import jwt from "jsonwebtoken";

export const issueJwt = (userId: string) => {
  const expiresIn = "1d";
  const mySecretKey = process.env.ACCESS_TOKEN_SECRET || "secretString";
  const payload = {
    sub: userId,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, mySecretKey, {
    expiresIn: expiresIn,
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};
