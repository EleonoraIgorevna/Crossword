import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 1002;

async function start() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT, () => console.log(`Server started WITH port ${PORT}`));
}

start();
