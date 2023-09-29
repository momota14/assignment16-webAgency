export default async function getAllProjects() {
  const res = await fetch(process.env.BASE_URL + `/AllService`);

  if (!res.ok) {
    throw new Error("Failed to fetch team list");
  }

  return res.json();
}
