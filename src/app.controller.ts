import { Controller, Post, Body, Get, Put, Delete,Param, Res, HttpStatus, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Users
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

    // Teams
    @Get('teams/:id')
    async getTeam(@Res() res, @Param('id') id) {
        try {
            const team = await this.appService.getTeam(id);
            if (!team) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Team not found',
                }); 
            }
            return res.status(HttpStatus.OK).json(team);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Team not found',
            });  
        }
    }

    @Get('teams')
    async getTeams(@Res() res, @Query() queryParams,) {
        try {
            const teams = await this.appService.getAllTeams(queryParams);
            return res.status(HttpStatus.OK).json(teams);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post('teams')
    async createTeam(@Res() res, @Body() body) {
        try {
            const team = await this.appService.createTeam(body);
            return res.status(HttpStatus.OK).json({
                message: 'Team created successfully',
                team,
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('teams/:id')
    async updateTeam(@Res() res, @Param('id') id, @Body() data) {
        try {
            const team = await this.appService.updateTeam(id, data);
            if (!team) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Team not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Team updated successfully',
                team,
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Team not found.',
            });
        }
    }

    @Delete('teams/:id') // if team is referenced to a user then it cannot be deleted
    async deleteTeam(@Res() res, @Param('id') id) {
        try {
            const team = await this.appService.deleteTeam(id);
            if (!team) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Team not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Team deleted successfully',
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Team not found.',
            });

        }
    }

    // Status

}
