import axios from "axios";
import { BASE_URL } from "./baseUrl";

const refreshExpriedToken = async () => {
    console.log("trying to refresh Expried Token")
    try {
        const res = await axios.post(
            `${BASE_URL}/api/user/refreshExpiredToken`,
            {},
            { withCredentials: true }
        );
        console.log("Token Refreshed", res);
        return res.data.success
    } catch (error) {
        console.log("error in refreshExpiredtoken", error);
        // logout(); // Only logout if refresh FAILS
    }
}

export { refreshExpriedToken }