import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private characterService = inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);

  character: Character | null = null;
  isLoading = true;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('CharacterDetails - Loading ID:', id);
    if (id) {
      this.loadCharacterDetails(id);
    } else {
      console.error('No ID provided in route');
    }
  }

  loadCharacterDetails(id: string): void {
    console.log('Fetching character details for:', id);
    this.isLoading = true;
    this.cdr.detectChanges();
    this.characterService.getCharacterById(id).subscribe({
      next: (data) => {
        console.log('Character details loaded:', data);
        this.character = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching character details:', error);
        alert('Error loading character: ' + error.message);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      complete: () => {
        console.log('Character details API call completed');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getDefaultImage(): string {
    return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="%23999" text-anchor="middle" dominant-baseline="middle">No Image Available</text></svg>';
  }
}
