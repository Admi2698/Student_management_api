import { getConnection } from "typeorm"
import { StudEntity } from "../database/entities/stud.entities"
import { StudRepository } from "./../repository/stud.repository"
export class StudService{
    private studRepository :StudRepository
    constructor(){
        this.studRepository=getConnection("adesh").getCustomRepository(StudRepository);
    }
    public index = async () => {
        const posts = await this.studRepository.find()
        return posts;
    }

    public findById = async (id: number) => {
        const posts = await this.studRepository.findOne(id)
        return posts;
    }

    public create = async (post: StudEntity) => {
        const newPost = await this.studRepository.save(post);
        return newPost;
    }

    public update =  async(post: StudEntity, id: number) => {
        const updatedPost = await this.studRepository.update(id, post);

        return await this.findById(id);
    } 
    public delete = async (id: number) => {
        const deletedPost = await this.studRepository.findOne(id);
        return deletedPost;
    } 
}