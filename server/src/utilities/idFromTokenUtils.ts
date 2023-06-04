import jwtDecode from "jwt-decode";
const extractPayload = (jwtToken: string | undefined) => {
  if (!jwtToken) return;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedToken: any = jwtDecode(jwtToken);
    return decodedToken.sub;
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    return null;
  }
};

export default extractPayload;
