import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  Redirect
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO, createUserDTOClassValidator } from './users.dto';
import { ForbiddenException } from '@app/utils/forbidden.exception';
import { ValidationPipe } from '@app/utils/validation.pipe';

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
    console.log('Version', version);
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  //Exception
  @Get('exception')
  async printException() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
      {
        cause: 'This is a custom message',
      },
    );
  }

  //Custom Exception
  @Get('custom-exception')
  async customprintException() {
    throw new ForbiddenException();
  }

  @Get(':id')
  getUser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): string {
    return this.userService.findOne(id);
  }

  @Get('/uuid/:uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.userService.findOne(uuid);
  }

  //Post Request
  //Status code
  @Post('create')
  @HttpCode(201)
  createUser(@Body(new ValidationPipe()) userDto: createUserDTOClassValidator): string {
    console.log('userDto', userDto);
    const { name, age, email } = userDto;
    return this.userService.create(name);
  }
}
