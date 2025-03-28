//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

"use server"

export async function submitUserData(formData: FormData) {
  const userName = formData.get("userName") as string;
  const userLocation = formData.get("userLocation") as string;

  const response = await fetch(
    "https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level2",
    {
      method: "POST",
      body: ({ userName, userLocation }),
    }
  );

  console.log(userName, userLocation, response);
}

