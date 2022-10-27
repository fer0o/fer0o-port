import { Social } from "../typings";

export const fetchSocial = async () =>{
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data = await res.json()
    const socials: Social[] = data.social

    // console.log("fetching",social)
    return socials
}