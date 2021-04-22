import { Controller, Post, Body, Get, Put, Delete,Param, Res, HttpStatus, Query} from '@nestjs/common';
import { InstanceLogsService } from './instance-logs.service';
import { InstanceLog } from './instance-log.entity';

@Controller('api/v1/logs')
export class InstanceLogsController {
    constructor(private service: InstanceLogsService) { }

    @Get('/:id')
    async getInstance(@Res() res, @Param('id') id) {
        try {
            const log = await this.service.findOne(id);
            if (!log) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance Log not found',
                }); 
            }
            return res.status(HttpStatus.OK).json(log);
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance Log not found',
            });  
        }
    }

    @Get()
    async getAllInstance(@Res() res, @Query() queryParams,) {
        try {
            const allInstance = await this.service.findAll();
            return res.status(HttpStatus.OK).json(allInstance);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }

    @Post()
    async createInstance(@Res() res, @Body() body: InstanceLog) {
        try {
            const log = await this.service.save(body);
            return res.status(HttpStatus.OK).json({
                message: 'Instance Log created successfully',
                log,
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('/:id')
    async updateInstance(@Res() res, @Param('id') id, @Body() data: InstanceLog) {
        try {
            const log = await this.service.update(id, data);
            if (!log) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance Log not found',
                }); 
            }
            return res.status(HttpStatus.OK).json({
                message: 'Instance Log updated successfully',
                log,
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance Log not found.',
            });
        }
    }

    @Delete('/:id')
    async deleteInstance(@Res() res, @Param() params) {
        try {
            const log = await this.service.delete(params.id);
            if (!log) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance Log not found',
                }); 
            }
            return res.log(HttpStatus.OK).json({
                message: 'Instance Log deleted successfully',
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance Log not found.',
            });
        }
    }
}
