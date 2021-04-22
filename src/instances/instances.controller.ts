import { Controller, Post, Body, Get, Put, Delete,Param, Res, HttpStatus, Query} from '@nestjs/common';
import { InstancesService } from './instances.service';
import { Instance } from './instance.entity';

@Controller('instances')
export class InstancesController {
    constructor(private service: InstancesService) { }

    @Get('/:id')
    async getInstance(@Res() res, @Param('id') id) {
        try {
            const instance = await this.service.findOne(id);
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
    async createInstance(@Res() res, @Body() body: Instance) {
        try {
            const instance = await this.service.save(body);
            return res.status(HttpStatus.OK).json({
                message: 'Instance created successfully',
                instance,
            });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
        
    }

    @Put('/:id')
    async updateInstance(@Res() res, @Param('id') id, @Body() data: Instance) {
        try {
            const instance = await this.service.update(id, data);
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

    @Delete('/:id')
    async deleteInstance(@Res() res, @Param() params) {
        try {
            const instance = await this.service.delete(params.id);
            if (!instance) {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                }); 
            }
            return res.instance(HttpStatus.OK).json({
                message: 'Instance deleted successfully',
            });
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Instance not found.',
            });
        }
    }
}
