import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

//factory function
export default registerAs(
  // namespace:'jwt',
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  }),
);
