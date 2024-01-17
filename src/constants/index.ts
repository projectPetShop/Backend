import { ConfigService } from 'src/configs';

const config = ConfigService.getInstance();

export const PORT = config.getNumber('PORT') || 5000;
export const HOST = config.get('HOST') || 'localhost';
export const MONGO_URI = config.get('MONGO_URI');
export const DEFAULT_PRODUCT_IMAGE = config.get('DEFAULT_PRODUCT_IMAGE');
