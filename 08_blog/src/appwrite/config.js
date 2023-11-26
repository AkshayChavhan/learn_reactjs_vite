import { Client, Databases, ID, Query } from "appwrite";
import config from "../config/config";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteprojectid)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwritedatabaseid,
                config.appwritecollectionid,
                slug,
                {
                    title, content, featureImage, status, userId
                }
            )
        } catch (error) {
            console.log(`Error occurs in appwrite for creating post in databases :  ${error}`)
            throw error;
        }
    }

    async updatePost(slug, { title, content, featureImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                config.appwritedatabaseid,
                config.appwritecollectionid,
                slug,
                {
                    title, content, featureImage, status
                }
            )
        } catch (error) {
            console.log(`Error occurs in appwrite for updating post in databases :  ${error}`)
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appwritedatabaseid,
                config.appwritecollectionid,
                slug
            )
            return true;
        } catch (error) {
            console.log(`Error occurs in appwrite for deleting post in databases :  ${error}`)
            return false;
        }
    }
    // get post for active post only
    async getPost(queries = [Query.equal("status" , "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwritedatabaseid,
                config.appwritecollectionid,
                queries
            )
        } catch (error) {
            console.log(`Error occurs in appwrite for getting post in databases :  ${error}`)
            return false;
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwritebucketid,
                ID.unique() ,
                file
            )
        } catch (error) {
            console.log(`Error occurs in appwrite for uploading files in databases :  ${error}`)
            return false;
        }
    }

     // file delete service
     async deleteFiles(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appwritebucketid,
                fileId
            )
        } catch (error) {
            console.log(`Error occurs in appwrite for deleting files in databases :  ${error}`)
            return false;
        }
    }   

    // file preview service
    // file delete service
    async previewFiles(fileId) {
        try {
            return await this.bucket.getFilePreview(
                config.appwritebucketid,
                fileId
            )
        } catch (error) {
            console.log(`Error occurs in appwrite for previewing files in databases :  ${error}`)
            return false;
        }
    }

}


const service = new Service()


export default service;