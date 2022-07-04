export const fetchJson = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}