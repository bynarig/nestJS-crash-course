import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("items")
export class ItemsController {
    @Get()
    findAll(): string {
        return "find all items";
    }

    @Get(":id")
    findOne(@Param("id") id): string{
        return `Item id = ${id}`;
    }

    @Post()
    create(@Body() UserDto: CreateUserDto): string {
        return `Name: ${UserDto.name} age: ${UserDto.age} password ${UserDto.password}`;
    }

    @Delete(":id")
    delete(@Param("id") id): string{
        return `Param deleted with id: ${id}`;
    }

    @Put(":id")
    update(@Body() updateItemDto: CreateUserDto, @Param("id") id): string{
        return `Id ${id} - name ${updateItemDto.name} updated`;
    }
}
