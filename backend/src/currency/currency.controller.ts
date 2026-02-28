import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currencies')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  /**
   * GET /api/currencies/rates?base=EUR
   * Returns latest exchange rates from frankfurter.app
   * (Global prefix 'api' is set in main.ts)
   */
  @Get('rates')
  async getRates(@Query('base') base: string = 'EUR') {
    return this.currencyService.getRates(base.toUpperCase());
  }
}
