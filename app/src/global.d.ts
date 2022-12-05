declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string;
        PORT: number;
        DATABASE_TYPE: MysqlConnectionOptions.type
        DATABASE_HOST: string;
        DATABASE_PORT: number;
        DATABASE_USERNAME: string;
        DATABASE_PASSWORD: string;
        DATABASE_LOGGING: boolean;
        DATABASE_SYNCRONIZE: boolean;
      }
    }
  }
  export {};
  