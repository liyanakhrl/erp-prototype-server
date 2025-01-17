import { Module } from '@nestjs/common';
import { RoutesModule } from './routes/routes.module';
import { DatabaseModule } from './database/database.module';
import { FinanceController } from './departments/finance/departments/finance.controller';
import { FinanceModule } from './departments/finance/departments/finance.module';
import { FinanceService } from './departments/finance/departments/finance.service';
import { HrController } from './departments/hr/departments/hr.controller';
import { HrModule } from './departments/hr/departments/hr.module';
import { HrService } from './departments/hr/departments/hr.service';
import { ItController } from './departments/it/departments/it.controller';
import { ItModule } from './departments/it/departments/it.module';
import { ItService } from './departments/it/departments/it.service';
import { MarketingController } from './departments/marketing/departments/marketing.controller';
import { MarketingModule } from './departments/marketing/departments/marketing.module';
import { MarketingService } from './departments/marketing/departments/marketing.service';
import { OperationsController } from './departments/operations/departments/operations.controller';
import { OperationsService } from './departments/operations/departments/operations.service';
import { SalesController } from './departments/sales/departments/sales.controller';
import { SalesModule } from './departments/sales/departments/sales.module';
import { OperationModule } from './departments/operations/departments/operations.module';
import { SalesServices } from './departments/sales/departments/sales.service'; 
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RoutesModule, DatabaseModule,  FinanceModule, OperationModule, HrModule, ItModule, SalesModule, MarketingModule, AuthModule],
  controllers: [FinanceController, OperationsController, HrController, ItController, SalesController, MarketingController],
  providers: [FinanceService, OperationsService, HrService, ItService, SalesServices, MarketingService], // Import the RoutesModule
})
export class AppModule { }
