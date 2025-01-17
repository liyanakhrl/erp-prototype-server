import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google')
{

    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,     // <- Replace this with your client id
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, // <- Replace this with your client secret
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            passReqToCallback: true,
            scope: ['profile']
        })
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
        try {
            console.log(profile);

            const jwt: string = 'placeholderJWT'
            const user =
            {
                jwt
            }

            done(null, user);
        }
        catch (err) {
            // console.log(err)
            done(err, false);
        }
    }

}