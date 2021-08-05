import {Router,Request,Response} from "express";
import { StudEntity } from "../database/entities/stud.entities";
import { StudService } from "../services/stud.service";
export class StudController{
    public router : Router;
    private studService:StudService;
    constructor(){
        this.studService = new StudService();
        this.router = Router();
        this.routes();
    }
    public index =async(req:Request,res:Response)=>{
        const posts = await this.studService.index()
        res.send(posts).json();
    }

    public findById =async(req:Request,res:Response)=>{
        const id = parseInt(req['params']['id']);
        res.send(await this.studService.findById(id));
    }  

    public create = async (req: Request, res: Response) => {
        const post = req['body'] as StudEntity;
        const newPost = await this.studService.create(post);
        res.send(newPost);
    
    }
    public update = async (req: Request, res: Response) => {
        const post =req['body'] as StudEntity;
        const id = parseInt(req['params']['id']);
        res.send(await this.studService.update(post,id));
    }
    public delete = async (req: Request, res: Response) => {
        const id = parseInt(req['params']['id']);
        res.send(await this.studService.delete(id));
      
    }    
    public routes(){
        this.router.get('/',this.index);
        this.router.get('/:id',this.findById);
        this.router.post('/',this.create);
        this.router.put('/:id',this.update);
        this.router.delete('/:id',this.delete);

    }

}
