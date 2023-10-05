import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateAdminDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    readonly username: string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    readonly password: string;
}
