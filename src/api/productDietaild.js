import axios from "axios";
import { BASE_URL } from "./baseUrl";

const getProductDetails = async (id) => {
    try {
        const data = await axios.get(`${BASE_URL}/api/limited/getSingleProduct?id=${id}`)
        return data
    } catch (error) {
        console.log("error in  getProductDetails", error)
        throw error
    }
}

export { getProductDetails }