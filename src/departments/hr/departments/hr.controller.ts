import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('HR') // Group this controller under "HR" in Swagger
@Controller('hr')
export class HrController {
  @ApiOperation({ summary: 'Get all employees' })
  @ApiResponse({ status: 200, description: 'List of employees.' })
  @Get('employees')
  getAllEmployees() {
    return { message: 'HR employees data' };
  }
}
