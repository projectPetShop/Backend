import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

type JwtPayload = {
  sub: string;
  user_name: string;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'sWQpKIpQCtC3Rv/h8Gkm3/pvzS8dHktgOvawJYM669f+Um9d+NOi/WG6wzgNGRYpptHbNZibqfUYK6JGjsEtXvEup3r/fDNuydYPCadd2KPcwlZU+aq+0OBu6f59IOhak3CxHFI3iWqYKObTuFp17aWoYVfVghgqfeP8k6nc18W4VMVoNg9i4exzAPWD0LGSFmK4hgAoO46IiHFnGGc5NBu5CS2EJIwYN1vxchGYXbIUHJIR6jtDvcbk5ZHKxrHaG0oSaPDo3+SDhtyiSdUxvBaow3EVaVbJx6Sgqo9ZkLj2V8SiQx5DRAT02Hr44ZMAmGMDunNtUDmKdBfGWT9wTQ==',
    });
  } 

  validate(payload: JwtPayload) {
    return payload;
  }
}