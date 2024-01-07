import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { UserService } from './user/user.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagsService: TagService, private readonly userService: UserService) {}
  @Get()
  findAll(): string {
    // return this.tagsService.findAll(); 
    return this.userService.basic()
  }
}
