import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from '@shared/schema';

// Render üzerinde dış erişimli Neon DB URL'si
const DATABASE_URL = 'postgresql://etbsdatabase_user:UtCvKY7GwRI4BOfvyGZDsy0QKmGyJCsL@dpg-d1unan6mcj7s73emgru0-a.oregon-postgres.render.com/etbsdatabase';

// WebSocket kaldırıldı, sadece Pool ile bağlantı kuruluyor
export const pool = new Pool({
  connectionString: DATABASE_URL,
});

export const db = drizzle(pool, { schema });
