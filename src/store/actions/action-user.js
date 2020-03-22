import request from "superagent";

export function getUserData() {
    return (dispatch) => {
        dispatch(getUsersDataRequested());
        request
            .get("https://jsonplaceholder.typicode.com/user")
            .set("Accept", "application/json")
            .then((response) => {
                dispatch(getUsersDataSuccess(response.body));
            })
            .catch((error) => {
                dispatch(getUsersDataFailed());
            });
    }
}

const getUsersDataRequested = () => ({
    type: "GET_USERS_REQUESTED",
    inProgress: true
});

const getUsersDataSuccess = (data) => ({
    type: "GET_USERS_SUCCESS",
    inProgress: false,
    data,
    error: ""
});

const getUsersDataFailed = () => ({
    type: "GET_USERS_FAILED",
    inProgress: false,
    error: "Failed to get users data"
});