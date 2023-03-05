import { Body, Controller, Get, Req } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get("hello")
    getHello(): string {
        return "GET on hello route";
    }
}
