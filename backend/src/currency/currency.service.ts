import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import axios from 'axios';
import { RATES_CACHE_TTL_MS } from '../config/constants';

export interface RatesResponse {
  base: string;
  date: string;
  rates: Record<string, number>;
}

@Injectable()
export class CurrencyService {
  private readonly logger = new Logger(CurrencyService.name);
  private readonly frankfurterUrl = 'https://api.frankfurter.app';

  private cache = new Map<string, { data: RatesResponse; expiresAt: number }>();

  async getRates(base: string = 'EUR'): Promise<RatesResponse> {
    const cacheKey = `rates_${base}`;
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() < cached.expiresAt) {
      this.logger.debug(`Cache hit for base=${base}`);
      return cached.data;
    }

    try {
      this.logger.log(`Fetching rates from frankfurter.app for base=${base}`);
      const response = await axios.get<RatesResponse>(
        `${this.frankfurterUrl}/latest?from=${base}`,
      );

      const data: RatesResponse = {
        base: response.data.base,
        date: response.data.date,
        rates: response.data.rates,
      };

      this.cache.set(cacheKey, { data, expiresAt: Date.now() + RATES_CACHE_TTL_MS });
      return data;
    } catch (error) {
      this.logger.error(`Failed to fetch rates: ${error.message}`);
      throw new HttpException(
        {
          statusCode: HttpStatus.SERVICE_UNAVAILABLE,
          message: 'Currency rates service is temporarily unavailable. Please try again later.',
          error: 'Service Unavailable',
        },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
