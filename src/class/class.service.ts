import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { async } from 'rxjs';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepo: Repository<Class>
  ) {

  }
  create = async (createClassDto: Class): Promise<Boolean> => {
    await this.classRepo.insert({
      Name: createClassDto.Name
    })
    return true;
  }

  findAll = async (): Promise<Class[]> => {
    return this.classRepo.find();
  }

  findOne = async (id: number): Promise<Class> => {
    return this.classRepo.findOne({ where: { Id: id } });
  }

  update = async (id: number, updateClassDto: Class): Promise<boolean> => {
    await this.classRepo.update(id, updateClassDto)
    return true;
  }

  remove = async (id: number): Promise<boolean> => {
    let classes = await this.classRepo.findOne({ where: { Id: id } });
    await this.classRepo.delete(classes);
    return true
  }
}
