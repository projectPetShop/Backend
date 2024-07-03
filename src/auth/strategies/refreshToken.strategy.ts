import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'sWQpKIpQCtC3Rv/h8Gkm3/pvzS8dHktgOvawJYM669f+Um9d+NOi/WG6wzgNGRYpptHbNZibqfUYK6JGjsEtXvEup3r/fDNuydYPCadd2KPcwlZU+aq+0OBu6f59IOhak3CxHFI3iWqYKObTuFp17aWoYVfVghgqfeP8k6nc18W4VMVoNg9i4exzAPWD0LGSFmK4hgAoO46IiHFnGGc5NBu5CS2EJIwYN1vxchGYXbIUHJIR6jtDvcbk5ZHKxrHaG0oSaPDo3+SDhtyiSdUxvBaow3EVaVbJx6Sgqo9ZkLj2V8SiQx5DRAT02Hr44ZMAmGMDunNtUDmKdBfGWT9wTQ==',
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: any) {
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    return { ...payload, refreshToken };
  }
}