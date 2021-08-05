import express,{Request,Response} from "express";
import { createConnection } from "typeorm";
import { StudController } from "./controllers/stud.controller";
class Student{
    private studController:StudController;
    private app: express.Application;
    constructor(){
        this.app = express();
        this.configuration();
        this.routes();
    }
    public configuration(){
        this.app.set('port',process.env.PORT || 6000);
        this.app.use(express.json());
    }
    public async routes(){
        await createConnection({
          type: "postgres",
          host: "localhost",
          port: 3000,
          username: "postgres",
          password: "1234",
          database: "adesh",
          entities: ["build/database/entities/**/*.js"],
          synchronize: true,
          name:"adesh"       
        });

        this.studController = new StudController();

        this.app.get("/",(req:Request,res:Response)=>{
            res.send("Hello World");
        })
        this.app.use('/api/student',this.studController.router)
    }   
    public start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`server is listening ${this.app.get('port')}`)
        })
    }
}
const std = new Student();
std.start();