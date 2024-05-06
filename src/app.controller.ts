import { Controller, Get, HttpCode, Post, Redirect, Req } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

import { AppService } from './app.service';
import { StatusDto } from 'src/shared/dtos/status.dto';
import { DefaultApiErrorResponses } from 'src/shared/api-error-response.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['health', 'v1/health'])
  @ApiTags('health')
  @ApiOperation({ summary: 'Check health' })
  @ApiOkResponse({ description: 'Ok', type: StatusDto })
  @DefaultApiErrorResponses()
  health(): { status: string } {
    return this.appService.health();
  }

  @Post('echo')
  @HttpCode(200)
  @ApiTags('echo')
  @ApiExcludeEndpoint()
  @ApiOperation({ summary: 'Echo return' })
  @DefaultApiErrorResponses()
  echo(@Req() req: Request): any {
    return {
      _timestamp: new Date().toJSON(),
      cookies: req.cookies,
      headers: req.headers,
      params: req.params,
      query: req.query,
      body: req.body,
    };
  }

  @Get()
  @Redirect('api-docs', 302)
  @ApiExcludeEndpoint()
  base(): void {
    return;
  }
}
