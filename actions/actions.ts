//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

"use server"

export async function submitUserData(userName: string, userLocation: string) {

  const response = await fetch(
    "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name: userName, location: userLocation }),
    }
  );
  const result = await response.json();
  
  return result;
}

export async function submitUserImage(userImage: string) {
  try {
    const response = await fetch(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: userImage }),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image");
  }
}

