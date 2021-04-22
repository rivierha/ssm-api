import { Controller, Post, Body, Get, Put, Delete,Param, Res, HttpStatus, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('api/v1/users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get('/:id')
    async getUser(@Res() res, @Param('id') id) {
        try {
            const user = await this.service.findOne(id);
            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'User not found',
                }); 
            }
            console.log("user", user);
            return res.status(HttpStatus.OK).json(user);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'User not found',
            });  
        }
    }

    @Get()
    async getUsers(@Res() res, @Query() queryParams,) {
        try {
            const users = await this.service.findAll();
            return res.status(HttpStatus.OK).json(users);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post()
    async create(@Res() res, @Body() body) {
        try {
            const user = await this.service.save(body);
            return res.status(HttpStatus.OK).json({
                message: 'User created successfully',
                user,
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('/:id')
    async update(@Res() res, @Param('id') id, @Body() data: User) {
        try {
            const user = await this.service.update(id, data);
            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'User not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'User updated successfully',
                user,
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'User not found.',
            });
        }
    }

    @Delete('/:id')
    async deleteUser(@Res() res, @Param() params) {
        try {
            const user = await this.service.delete(params.id);
            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'User not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'User deleted successfully',
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'User not found.',
            });
        }
    }
}
