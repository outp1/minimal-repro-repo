import { HttpStatus } from '@nestjs/common';

export class StatusDto {
  status: HttpStatus;
}

export class HttpErrorResponseDto {
  errors: string[];
  message: string;
  statusCode: HttpStatus;
  statusText: string;
  timestamp: string;
  requestId?: string;
}
