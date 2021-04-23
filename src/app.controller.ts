import { Controller, Post, Body, Get, Put, Delete,Param, Res, HttpStatus, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // users
  @Get('users/:id')
    async getUser(@Res() res, @Param('id') id) {
        try {
            const user = await this.appService.getUser(id);
            if (!user) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'User not found',
                }); 
            }
            return res.status(HttpStatus.OK).json(user);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'User not found',
            });  
        }
    }

    @Get('users')
    async getUsers(@Res() res, @Query() queryParams,) {
        try {
            const users = await this.appService.getAllUsers(queryParams);
            return res.status(HttpStatus.OK).json(users);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post('users')
    async createUser(@Res() res, @Body() body) {
        try {
            const user = await this.appService.createUser(body);
            return res.status(HttpStatus.OK).json({
                message: 'User created successfully',
                user,
            });
        } catch (error) {
          console.log(error);
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('users/:id')
    async updateUser(@Res() res, @Param('id') id, @Body() data) {
        try {
            const user = await this.appService.updateUser(id, data);
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

    @Delete('users/:id')
    async deleteUser(@Res() res, @Param('id') id) {
        try {
            const user = await this.appService.deleteUser(id);
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
