import { Module } from "@nestjs/common";
import { TagController } from "./tag.controller";
import { TagService } from "./tag.service";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";

@Module({
    controllers:[TagController],
    providers:[TagService, UserService]
})

export class TagModule {}