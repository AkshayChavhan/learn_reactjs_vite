import { Client, Account, ID } from "appwrite";
import config from "../config/config";


export class AuthServices {
    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteprojectid)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.loginAccount({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`Error occurs in appwrite for getting current user :  ${error}`)
        }
        return null;
    }

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log(`Error occurs in appwrite for login account :  ${error}`)
        }
    }

    async logoutAccount() {
        try {
            return await this.account.deleteSession();
        } catch (error) {
            console.log(`Error occurs in appwrite for logout user account :  ${error}`)
        }
    }
}


const authServices = new AuthServices(this.client);


export default authServices;

