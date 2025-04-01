//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

"use server"

export async function submitUserData(userName: string, userLocation: string) {

  const response = await fetch(
    "https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level2",
    {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({ Name: userName, Location: userLocation }),
    }
  );
  const result = await response.json();
  
  return result;
}

