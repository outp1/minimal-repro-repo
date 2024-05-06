import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { HttpErrorResponseDto } from './dtos/status.dto';

export function DefaultApiErrorResponses() {
  return applyDecorators(
    ApiBadRequestResponse({ description: 'Bad Request', type: HttpErrorResponseDto }),
    ApiInternalServerErrorResponse({ description: 'Internal Server Error', type: HttpErrorResponseDto }),
  );
}
