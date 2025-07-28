import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from '@shared/schema';

// Render için uygun PostgreSQL bağlantı URL'si (external URL kullanılabilir)
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://etbsdatabase_user:UtCvKY7GwRI4BOfvyGZDsy0QKmGyJCsL@dpg-d1unan6mcj7s73emgru0-a.oregon-postgres.render.com/etbsdatabase';

// Bağlantı havuzu oluşturuluyor (WebSocket yok!)
const pool = new Pool({
  connectionString: DATABASE_URL,
});

// Drizzle ile ORM bağlantısı kuruluyor
export const db = drizzle(pool, { schema });
