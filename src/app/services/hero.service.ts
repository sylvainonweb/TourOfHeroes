import { Injectable } from '@angular/core';
import { Hero, HEROES } from '../hero';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    getHero(id: number): Observable<Hero> {
        this.messageService.add('heroService: getHero()');
        return of(this.getHeroesArray()
                .find(hero => hero.id === id));
    }

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {

        this.messageService.add('heroService: getHeroes()');
        return of(this.getHeroesArray());
    }

    getHeroesArray(): Hero[] {
        const heroes: Hero[] = [];
        for (let i = 1; i < 9; i++) {
            const hero: Hero  = new Hero();
            hero.id = i;
            hero.name = 'Héro ' + i;
            heroes.push(hero);
        }
        return heroes;
    }
}
