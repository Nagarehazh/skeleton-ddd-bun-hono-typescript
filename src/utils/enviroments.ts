export const enviroments = {
    PORT: Bun.env.PORT || 3000,
    PG_PORT: Bun.env.PG_PORT,
    PG_URL: Bun.env.PG_URL,
    BASE_URL: Bun.env.BASE_URL,
    ORIGIN_BASE_URL: Bun.env.ORIGIN_BASE_URL || 'http://localhost:5173',
}
