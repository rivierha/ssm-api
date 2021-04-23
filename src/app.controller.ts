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

    // Instances
    @Get('instances/:id')
    async getInstance(@Res() res, @Param('id') id) {
        try {
            const instance = await this.appService.getInstance(id);
            if (!instance) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                }); 
            }
            return res.status(HttpStatus.OK).json(instance);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance not found',
            });  
        }
    }

    @Get('instances')
    async getAllInstance(@Res() res, @Query() queryParams,) {
        try {
            const allInstances = await this.appService.getAllInstances(queryParams);
            return res.status(HttpStatus.OK).json(allInstances);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post('instances')
    async createInstance(@Res() res, @Body() body) {
        try {
            const instance = await this.appService.createInstance(body);
            if (!instance) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    message: 'Team cannot be null',
                });
            }
            console.log(instance);
            return res.status(HttpStatus.OK).json({
                message: 'Instance created successfully',
                instance,
            });
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('instances/:id')
    async updateInstance(@Res() res, @Param('id') id, @Body() data) {
        try {
            const instance = await this.appService.updateInstance(id, data);
            if (!instance) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Instance updated successfully',
                instance,
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance not found.',
            });
        }
    }

    @Delete('instances/:id')
    async deleteInstance(@Res() res, @Param('id') id) {
        try {
            const instance = await this.appService.deleteInstance(id);
            if (!instance) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Instance deleted successfully',
            });
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance not found.',
                error
            });
        }
    }

    // Intance-logs
    @Get('logs/:id')
    async getInstanceLog(@Res() res, @Param('id') id) {
        try {
            const log = await this.appService.getInstanceLog(id);
            if (!log) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance-log not found',
                }); 
            }
            return res.status(HttpStatus.OK).json(log);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance-log not found',
            });  
        }
    }

    @Get('logs')
    async getAllInstanceLogs(@Res() res, @Query() queryParams,) {
        try {
            const allLogs = await this.appService.getAllInstanceLogs(queryParams);
            return res.status(HttpStatus.OK).json(allLogs);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post('logs')
    async createInstanceLog(@Res() res, @Body() body) {
        try {
            const log = await this.appService.createInstanceLog(body);
            if (!log) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    message: 'Instance and User required.',
                });
            }
            return res.status(HttpStatus.OK).json({
                message: 'Instance-log created successfully',
                log,
            });
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('logs/:id')
    async updateInstanceLog(@Res() res, @Param('id') id, @Body() data) {
        try {
            const log = await this.appService.updateInstanceLog(id, data);
            if (!log) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance-log not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Instance-log updated successfully',
                log,
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance-log not found.',
            });
        }
    }

    @Delete('logs/:id')
    async deleteInstanceLog(@Res() res, @Param('id') id) {
        try {
            const log = await this.appService.deleteInstanceLog(id);
            if (!log) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance-log not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Instance-log deleted successfully',
            });
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance-log not found.',
                error
            });
        }
    }
}
