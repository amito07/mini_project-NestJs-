import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findOne(id): string{
        return `Hello Bangladesh ${id}!`
    }

    basic(): string{
        return 'Working Perfectly !'
    }

    create(name): string{
        return `User created successfully name ${name} !`
    }
}
