import Log from "./logger";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoZXNoYWphdG90dGFsaUBnbWFpbC5jb20iLCJleHAiOjE3NzgwNjM1MjIsImlhdCI6MTc3ODA2MjYyMiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjYxZmMyYTBmLTkxOTUtNGM1Ni1hMTU1LTU4NGMwM2E5MWVhNiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InRvdHRhbGkgaGVzaGFqYSIsInN1YiI6Ijc5ZTkxZWU1LWFhZjgtNDQwMC1hODJkLTkyYjg4ZmY3ZjczYyJ9LCJlbWFpbCI6Imhlc2hhamF0b3R0YWxpQGdtYWlsLmNvbSIsIm5hbWUiOiJ0b3R0YWxpIGhlc2hhamEiLCJyb2xsTm8iOiJhbS5zYy51NGNzZTIzMjY1IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiNzllOTFlZTUtYWFmOC00NDAwLWE4MmQtOTJiODhmZjdmNzNjIiwiY2xpZW50U2VjcmV0Ijoic2RCa3NKblZTVXBQZmVZeiJ9.PVaBPKWIMrhAA_Itp4OceKHw3Cr420fNx_Jq-jhIVeA";

export async function getNotifications(
  limit,
  type
) {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications"
    );

    let url =
      `http://20.207.122.201/evaluation-service/notifications?limit=${limit}&page=1`;

    if (type) {
      url += `&notification_type=${type}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    if (Array.isArray(data)) {
      return data;
    }

    if (data.notifications) {
      return data.notifications;
    }

    return [];
  } catch (error) {
    console.log(error);

    await Log(
      "frontend",
      "error",
      "api",
      "Failed to fetch notifications"
    );

    return [];
  }
}