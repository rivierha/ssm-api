import { Controller, Post, Body, Get, Put, Delete,Param, Res, HttpStatus, Query} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './team.entity';

@Controller('api/v1/teams')
export class TeamsController {
    constructor(private service: TeamsService) { }

    @Get('/:id')
    async getTeam(@Res() res, @Param('id') id) {
        try {
            const team = await this.service.findOne(id);
            if (!team) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Team not found',
                }); 
            }
            console.log("team", team);
            return res.status(HttpStatus.OK).json(team);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Team not found',
            });  
        }
    }

    @Get()
    async getTeams(@Res() res, @Query() queryParams,) {
        try {
            const teams = await this.service.findAll();
            return res.status(HttpStatus.OK).json(teams);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post()
    async createTeam(@Res() res, @Body() body) {
        try {
            const team = await this.service.save(body);
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

    @Put('/:id')
    async updateTeam(@Res() res, @Param('id') id, @Body() data: Team) {
        try {
            const team = await this.service.update(id, data);
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

    @Delete('/:id')
    async deleteTeam(@Res() res, @Param() params) {
        try {
            const team = await this.service.delete(params.id);
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

}
