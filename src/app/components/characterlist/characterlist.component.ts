import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { CharacterfilterComponent } from '../characterfilter/characterfilter.component';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    CharacterfilterComponent
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  private characterService = inject(CharacterService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  characters: Character[] = [];
  isLoading = true;

  ngOnInit(): void {
    console.log('CharacterList component initialized');
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    console.log('Loading all characters...');
    this.isLoading = true;
    this.cdr.detectChanges();
    this.characterService.getAllCharacters().subscribe({
      next: (data) => {
        console.log('Characters loaded:', data.length);
        this.characters = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching characters:', error);
        alert('Error loading characters: ' + error.message);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      complete: () => {
        console.log('API call completed');
      }
    });
  }

  onHouseSelected(house: string): void {
    console.log('House selected:', house);
    if (!house) {
      this.loadAllCharacters();
      return;
    }

    this.isLoading = true;
    this.cdr.detectChanges();
    this.characterService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        console.log(`Characters from ${house}:`, data.length);
        this.characters = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching characters by house:', error);
        alert('Error filtering by house: ' + error.message);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  viewCharacterDetails(character: Character): void {
    this.router.navigate(['/character', character.id]);
  }

  getDefaultImage(): string {
    return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400"><rect width="300" height="400" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="20" fill="%23999" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>';
  }
}
