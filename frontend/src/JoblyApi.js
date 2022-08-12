import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = {
            Authorization: `Bearer ${JoblyApi.token}`
        };
        const params = (method === "get") ?
            data : {};

        try {
            return (await axios({
                url,
                method,
                data,
                params,
                headers
            })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Jobs */
    //TODO: Create a functions that lists all jobs
    static async getJobs() {
        return await this.request("jobs");
    }
    

    /** User */

    /** Get current user */
    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    //DONE: Create function to signup new user
    static async signup(first_name, last_name, email, password, username) {
        // let res = await this.request(`auth/register`, "post");
        let res = await this.request(`auth/register`, {
            first_name,
            last_name,
            email,
            password
        }, "post");
        return res.token;
    }

    //DONE: Create function to login user
    // static async login(username, password) {
    //     // let res = await this.request(`auth/login`, username, password, "post");
    //     let res = await this.request(`users/${username, password}`, "post");
    //     return res.token;
    // }

    //login user
    static async login(username, password) {
        let res = await this.request(`auth/token`, { username, password }, "post");
        return res.token;
    }


    //DONE: Create function that updates a users profile
    static async updateUser(username, first_name, last_name, email, password) {
        let res = await this.request(`users/${username}`, {
            first_name,
            last_name,
            email,
            password
        }, "patch");
        return res.user;
    }

    /** Company */

    //DONE: Create function to get company details by handle */
    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }




}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;