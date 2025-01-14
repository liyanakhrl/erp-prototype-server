import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';

@Module({
  controllers: [RoutesController], // Register the controller
})
export class RoutesModule {}
