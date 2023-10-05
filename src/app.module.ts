import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';
import { CombinationModule } from './combination/combination.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesModule } from './companies/companies.module';
import { CountriesModule } from './countries/countries.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/dipayDB',{ family: 4 }),
      AdminsModule,
      CombinationModule,
      CompaniesModule,
      CountriesModule,
      AuthModule,
      UsersModule,
      EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
