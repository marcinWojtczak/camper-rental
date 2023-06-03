export async function getCampers() {
  const res = await fetch("/api/campers")
  if(!res.ok) {
    throw {
      message: "Field to fetch campers",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
}
