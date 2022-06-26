import { API } from "../../backend";

export const getAllContests = (limit) => {
    console.log(limit);
    return fetch(`${API}/contests/${limit}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getAllContestsIcons = () => {
    return fetch(`${API}/hackathons/icons`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getAllPlacements = () => {
    return fetch(`${API}/placements`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};