const url = "https://random-data-api.com/api/v2"

export const getProfiles = async () => {
    const response = await fetch(`${url}/users?size=12`);
    const profiles = await response.json();
    return profiles;
}