import {enviroments} from "../../../utils/enviroments";
import {DataSource, DataSourceOptions} from "typeorm";

const options: DataSourceOptions = {
    type: "postgres",
    url: `${enviroments.PG_URL}`,
    port: parseInt(enviroments.PG_PORT as string),
    entities: ['src/**/models/*.schema{.ts,.js}'],
    migrations: ['migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_tables',
    synchronize: false,
    logging: false,
    //seeds: [MainSeeder],
    extra: {
        max: 5,
    }
};

export const AppDataSource = new DataSource(options);