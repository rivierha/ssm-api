import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let whitelist = [
		'localhost:3000',
		'localhost:4200'
	]
	let matchOrigin = (origin) => {
		if (!origin) {
			return true
		}
		else {
			let flag = false
			for (let item of whitelist) {
				if (origin.indexOf(item) != -1) {
					flag = true
				}
			}
			return flag
		}
	}
	let corsOptions = {
		origin: function (origin, callback) {
			if (matchOrigin(origin)) {
				callback(null, true)
			} else {
				callback(new Error('Not allowed by CORS'))
			}
		},
		credentials: true,
	}
	app.enableCors(corsOptions);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
