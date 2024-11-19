import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get()
    getHell(): string{
        return 'hello';
    }
}
