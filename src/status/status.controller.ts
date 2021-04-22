import { Controller, Post, Body, Get, Put, Delete,Param, Res, HttpStatus, Query} from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from './status.entity';

@Controller('api/v1/status')
export class StatusController {
    constructor(private service: StatusService) { 
        service.seed();
    }

    @Get('/:id')
    async getStatus(@Res() res, @Param('id') id) {
        try {
            const status = await this.service.findOne(id);
            if (!status) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Status not found',
                }); 
            }
            console.log("status", status);
            return res.status(HttpStatus.OK).json(status);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Status not found',
            });  
        }
    }

    @Get()
    async getAllStatus(@Res() res, @Query() queryParams,) {
        try {
            const allStatus = await this.service.findAll();
            return res.status(HttpStatus.OK).json(allStatus);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post()
    async createStatus(@Res() res, @Body() body: Status) {
        try {
            const status = await this.service.save(body);
            return res.status(HttpStatus.OK).json({
                message: 'Status created successfully',
                status,
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('/:id')
    async updateStatus(@Res() res, @Param('id') id, @Body() data: Status) {
        try {
            const status = await this.service.update(id, data);
            if (!status) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Status not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Status updated successfully',
                status,
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Status not found.',
            });
        }
    }

    @Delete('/:id')
    async deleteStatus(@Res() res, @Param() params) {
        try {
            const status = await this.service.delete(params.id);
            if (!status) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Status not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Status deleted successfully',
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Status not found.',
            });
        }
    }

}
