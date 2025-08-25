import conf from '..conf/conf.js';
import { Client, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        this.setEndpoint(conf.appwriteurl)
        this.setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost ({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
            
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title, content, featuredImage, status})
    {
        try {
            return await this.databases.updateDocument(
                conf.VITE_APPWRITE_DATABASE_ID,
                conf.VITE_APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }

            )
        } catch (error) {
            throw error;
        }
    }



    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.VITE_APPWRITE_COLLECTION_ID,
                conf.VITE_APPWRITE_DATABASE_ID,
                slug
            )
            return true;
        } catch (error) {
            throw error
        }
    }

        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.VITE_APPWRITE_COLLECTION_ID,
                    conf.VITE_APPWRITE_DATABASE_ID,
                    slug
                )
            } catch (error) {
                throw error
            }
        }

        async getPosts(queries = [Query.equal("Status", "active")]){
            try {
                return await this.databases.listDocuments(
                    conf.VITE_APPWRITE_COLLECTION_ID,
                    conf.VITE_APPWRITE_DATABASE_ID,
                    queries,
                )
            } catch (error) {
                throw error
            }
        }

        //Upload File Serivce

        async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    conf.VITE_APPWRITE_BUCKET_ID,
                    ID.unique(),
                    file
                )
            } catch (error) {
                throw error
            }
        }

        async deleteFile(fileId){
            try {
                await this.bucket.deleteFile(
                    conf.VITE_APPWRITE_BUCKET_ID,
                    fileId
                )                
            } catch (error) {
                throw error
                return false;
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.VITE_APPWRITE_BUCKET_ID,
                fileId
            )
        }
}

const service = new Service()
export default service