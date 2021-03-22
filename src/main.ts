import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle("Notes todo app")
    .setDescription(
      "A documentation for notes"
    )
    .setVersion("1.0")
    .addTag("Notes")
    .build();
  const apppDocument = SwaggerModule.createDocument(app, options, {
    include: [AppModule]
  });
  SwaggerModule.setup("api", app, apppDocument);
  await app.listen(3000);
}
bootstrap();
