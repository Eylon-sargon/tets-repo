import * as GooglePlayScraper from 'google-play-scraper';
import { Injectable } from '@nestjs/common';
import { Game } from './interfaces/game.interface';
import { GameDataKeys } from './interfaces/game.data-keys';
import { unixToDate } from 'src/shared/util-functions';

@Injectable()
export class GplayService {
  async createNewGame(appId: string): Promise<Game> {
    const data = await GooglePlayScraper.app({ appId });
    let game: Game;

    GameDataKeys.forEach(field => {
      game[field] = data[field];
      if (field === 'updated') {
        game['updatedTs'] = data[field];
        game[field] = unixToDate(data[field]);
      }
    });

    return game;
  }
}
