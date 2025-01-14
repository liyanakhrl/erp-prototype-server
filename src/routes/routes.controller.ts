import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('api') // Grouping for Swagger
@Controller('api')
export class RoutesController {
  @ApiOperation({ summary: 'Get a greeting message' })
  @ApiResponse({ status: 200, description: 'The greeting message.' })
  @Get('hello')
  getHello(): string {
    return 'Hello from the server!';
  }
}
