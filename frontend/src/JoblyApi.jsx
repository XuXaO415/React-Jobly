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
    //Changed the name of the function to signupUser to avoid confusion with the signup function in the UserSignupForm component.
    // Changed the parameters to match the API endpoint.
    static async signupUser({username, password, firstName, lastName, email}) {
        // let res = await this.request(`auth/register`, "post");
        let res = await this.request(`auth/register`, {
            username,
            firstName,
            lastName,
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
    static async login({username, password}) {
        let res = await this.request(`auth/token`, {
            username,
            password
        }, "post");
        return res.token;
    }


    //DONE: Create function that updates a users profile
    // static async updateUser(username, first_name, last_name, email, password) {
    //     let res = await this.request(`users/${username}`, {
    //         first_name,
    //         last_name,
    //         email,
    //         password
    //     }, "patch");
    //     return res.user;
    //}

    static async updateUser(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }
    /** Company */

    //DONE: Create function to get company details by handle */
    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    static async searchCompanies(search) {
        let res = await this.request(`companies`, search);
        return res.companies;
    }

    static async getCompanies(name) {
        let res = await this.request(`companies`, {
            name
        });
        return res.companies;
    }

    // static async filterCompanies(filter) {
    //     let res = await this.request(`companies`, filter);
    //     return res.companies;
    // }

    // reference findAll search filter from backend company model
    static async filterCompanies(searchFilters = {}) {
        let res = await this.request(`companies`, searchFilters);
        return res.companies;
    }

    static async getJobs() {
        let res = await this.request(`jobs`);
        return res.jobs;
    }

}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;