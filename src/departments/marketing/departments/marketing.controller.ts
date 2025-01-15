import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Marketing') // Group this controller under "Operations" in Swagger
@Controller('marketing')
export class MarketingController {
  @ApiOperation({ summary: 'Get operational data' })
  @ApiResponse({ status: 200, description: 'Operational data retrieved.' })
  @Get('data')
  getOperationalData() {
    return { message: 'Operations data' };
  }
}
