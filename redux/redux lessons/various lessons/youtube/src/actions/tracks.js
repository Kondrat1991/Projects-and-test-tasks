let mockApiData = [
    {
        id:1,
        name: "Vasya"
    },
    {
        id:2,
        name: "Petya"
    },
    {
        id:3,
        name: "Galya"
    },
    {
        id:4,
        name: "Gavrylo"
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log("I've got Tracks");
        dispatch({type: "FETCH_TRACKS_SUCCESS", payload: mockApiData})
    }, 2000)
};