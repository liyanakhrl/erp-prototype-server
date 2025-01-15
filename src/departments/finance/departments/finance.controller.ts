import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Finance') // Group this controller under "Finance" in Swagger
@Controller('finance')
export class FinanceController {
  @ApiOperation({ summary: 'Get all financial data' })
  @ApiResponse({ status: 200, description: 'List of financial data.' })
  @Get('data')
  getFinanceData() {
    return { message: 'Finance data' };
  }

  @ApiOperation({ summary: 'Add a financial record' })
  @ApiResponse({ status: 201, description: 'Financial record created.' })
  @Post('record')
  addFinanceRecord(@Body() body: any) {
    return { message: 'Finance record added', data: body };
  }
}
