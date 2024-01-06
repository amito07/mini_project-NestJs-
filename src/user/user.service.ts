import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findOne(): string{
        return `Hello Bangladesh !`
    }
}
