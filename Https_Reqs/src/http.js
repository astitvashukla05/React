export default async function fetchData() {
    const res = await fetch('http://localhost:3000/places');
    const resData = await res.json();
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return resData.places;
}
export async function setData(places) {
    const res = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places: places }),
        headers: {
            'Content-Type': 'application/json',
        }

    })
    const resData = await res.json()
    if (!res.ok) {
        throw new Error("Data not saved")
    }
    return resData.message

}
export async function getPlaces(){
    const res=await fetch('http://localhost:3000/user-places')
   const resData=await res.json() 
   return resData.places

}