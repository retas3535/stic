import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from "@shared/schema";

// WebSocket desteği kaldırıldı

const DATABASE_URL = "postgresql://etbsdatabase_user:UtCvKY7GwRI4BOfvyGZDsy0QKmGyJCsL@dpg-d1unan6mcj7s73emgru0-a/etbsdatabase";

export const pool = new Pool({ connectionString: DATABASE_URL });

export const db = drizzle(pool, { schema });
