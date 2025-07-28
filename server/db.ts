import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// Neon için WebSocket yapılandırması
neonConfig.webSocketConstructor = ws;

// DATABASE bağlantı URL’si (External URL)
const DATABASE_URL = "postgresql://etbsdatabase_user:UtCvKY7GwRI4BOfvyGZDsy0QKmGyJCsL@dpg-d1unan6mcj7s73emgru0-a.oregon-postgres.render.com/etbsdatabase";

// Pool üzerinden bağlantı oluşturuluyor
export const pool = new Pool({ connectionString: DATABASE_URL });

// Drizzle ORM ile bağlanıyoruz
export const db = drizzle(pool, { schema });

