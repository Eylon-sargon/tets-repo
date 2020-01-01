import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameSchema } from './schemas/game.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GplayService } from './gplay.service';

@Module({
  controllers: [GameController],
  providers: [GameService, GplayService],
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
})
export class GameModule {}
