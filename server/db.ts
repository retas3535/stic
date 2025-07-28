import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from '@shared/schema';

const DATABASE_URL = 'postgresql://etbsdatabase_user:UtCvKY7GwRI4BOfvyGZDsy0QKmGyJCsL@dpg-d1unan6mcj7s73emgru0-a.oregon-postgres.render.com/etbsdatabase';

const pool = new Pool({
  connectionString: DATABASE_URL,
  // Burada webSocketConstructor parametresi KESİNLİKLE OLMAMALI
  // Çünkü WebSocket kullanımı Render üzerinde sorun çıkarıyor
});

export const db = drizzle(pool, { schema });
