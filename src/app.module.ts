import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StudentModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
