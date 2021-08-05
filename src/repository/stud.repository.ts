import { EntityRepository, Repository } from "typeorm";
import { StudEntity } from "../database/entities/stud.entities";

@EntityRepository(StudEntity)
export class StudRepository extends Repository<StudEntity> {

}