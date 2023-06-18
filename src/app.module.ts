import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { AuthzModule } from './authz/authz.module';

@Module({
	imports: [ConfigModule.forRoot(), ItemsModule, AuthzModule],
	controllers: [],
	providers: []
})
export class AppModule {}
