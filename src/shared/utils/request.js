import axios from "axios";

/**
 * Shared request API gateway function
 *
 * @param {string} url
 * @param {Object} params
 *
 * @returns {Promise<AxiosResponse<any>>}
 */

const request = async (url= "", params = {}) => {
    // more stuff can go here like,
    // setting auth token, headers etc..
    // but for now would like to keep just get :)
    return await axios.get(url, { params });
}

export default request;
