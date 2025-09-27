


export default async function ShowName(){
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/getname`, {cache: 'no-store'})

    const data = await res.json()

    console.log(data)

    return (<h1>{data.name.map((user: { id: number; name: string }) => (
        <p key={user.id}>Nome: {user.name}</p>
    ))}</h1>)
}