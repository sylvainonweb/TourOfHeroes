import { Injectable } from '@angular/core';
import { Hero, HEROES } from '../hero';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {

        this.messageService.add('heroService: Chargement des héroes');

        const heroes: Hero[] = [];
        for (let i = 1; i < 10; i++) {
            const hero: Hero  = new Hero();
            hero.id = i;
            hero.name = 'Héro ' + i;
            heroes.push(hero);
        }

        return of(heroes);
    }
}
