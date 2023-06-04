import jwtDecode from "jwt-decode";
const extractPayload=(jwtToken: string)=> {
    try {
      const decodedToken:any= jwtDecode(jwtToken);
      return decodedToken.payload;
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  }
  const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDdjMjVmNWIyODBkMzQ2MTJkNWUwYzAiLCJpYXQiOjE2ODU4NTc3OTgxNjEsImV4cCI6MTY4NTg1Nzg4NDU2MX0.IbksEb1CWdP5nOrz2NzW06ZE6AenxbzuhKqYq1A0bfY';
const payload = extractPayload(jwtToken);

if (payload) {
  console.log('JWT payload:', payload);
  // Access specific properties from the payload as needed
  const userId = payload.userId;
 console.log('userId',userId)
  // ...
} else {
  // Handle error case
  console.error('Invalid JWT token');
}
