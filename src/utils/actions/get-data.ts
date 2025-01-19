export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}//objects/678bfb1cc41bec43e4330751?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)

        if (!res.ok) {
            throw new Error("Failed to fetch dataA")
        }

        return res.json();

    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}