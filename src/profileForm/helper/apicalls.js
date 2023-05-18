import { API } from "../../backend";

export const updateProfileDetails = (userId, token, profileData) => {

    const profileObj = {
        "userInfo": profileData
    }

    console.log(profileObj);
    console.log(userId);
    console.log(token);

    return fetch(`${API}/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileObj),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));

}