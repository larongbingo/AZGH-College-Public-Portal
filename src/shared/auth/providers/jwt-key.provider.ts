import { Provider } from "@nestjs/common";

export const JWT_KEY_PROVIDER = "JwtKeyProvider";

export const JwtKeyProvider: Provider<string> = {
  provide: JWT_KEY_PROVIDER,
  useValue:
    process.env.JWT_PRIVATE_KEY || "SUPER CALI FRAGI LISITIC EXPIALODDOCIOUS",
};
