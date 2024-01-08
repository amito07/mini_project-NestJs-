import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from './users.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //Get Request
  //route wildCard
  @Get('ab*cd')
  wildCardRequest(): string {
    return this.userService.basic();
  }

  //Redirect
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    console.log("Version", version)
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  getUser(@Param() params: any): string {
    const {id} = params;
    return this.userService.findOne(id);
  }

  //Post Request
  //Status code
  @Post('create')
  @HttpCode(201)
  createUser(@Body() userDto: createUserDTO): string {
    console.log('userDto',userDto)
    const {name, age, email} = userDto;
    return this.userService.create(name);
  }
}
