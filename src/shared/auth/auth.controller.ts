import {
  Controller,
  Get,
  UseGuards,
  Headers,
  Body,
  Post,
  UnprocessableEntityException,
  UsePipes,
  Put,
  Inject,
} from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { AuthGuard } from "@nestjs/passport";

import { CredentialsDto } from "./dto/credentials.dto";
import { AuthService } from "./auth.service";
import { LogInValidationPipe } from "./pipes/login-validation.pipe";
import { JWT_KEY_PROVIDER } from "./providers/jwt-key.provider";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject(JWT_KEY_PROVIDER) private readonly jwtPrivateKey: string,
  ) {}

  @Get("verify")
  @UseGuards(AuthGuard("bearer"))
  public async verifySession(@Headers("authorization") sessionToken: string) {
    return { iat: Date.now(), isSessionValid: true, sessionToken };
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async logOut(@Headers("authorization") sessionToken: string) {
    const user = await this.authService.validateUser(sessionToken);
    user.token = null;
    user.save();
    return { iat: Date.now() };
  }

  @Post()
  @UsePipes(new LogInValidationPipe())
  public async login(@Body() credentialDto: CredentialsDto) {
    const user = await this.authService.validateCredentials(
      credentialDto.username,
      credentialDto.password,
    );

    if (!user) {
      return new UnprocessableEntityException("Incorrect Username/Password");
    }

    user.token = sign(
      { username: user.username, id: user.id },
      this.jwtPrivateKey,
    );
    user.save();

    return { iat: Date.now(), token: user.token };
  }
}
