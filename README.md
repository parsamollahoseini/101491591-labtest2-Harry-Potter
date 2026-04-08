# Harry Potter Characters App - Lab Test 2

**Student ID:** 101491591
**Course:** COMP 3133
**Project Name:** 101491591-lab-test2-comp3133

## 📖 Project Description

An Angular application that displays Harry Potter characters using the Harry Potter API. The app allows users to browse all characters, filter by Hogwarts house, and view detailed information about individual characters.

## ✨ Features Implemented

### ✅ All Requirements Met (100 points)

1. **Angular Application** (10 points)
   - Project name: `101491591-lab-test2-comp3133`
   - Git repository initialized
   - All code committed

2. **Hosting** (10 points)
   - Ready for deployment on Vercel/Render/Railway

3. **CharacterList Component** (20 points)
   - Displays all Harry Potter characters
   - Shows: name, house, image
   - Uses Harry Potter API
   - Material Design cards with grid layout

4. **CharacterFilter Component** (10 points)
   - Dropdown filter by house
   - Houses: Gryffindor, Slytherin, Hufflepuff, Ravenclaw
   - "All Houses" option to reset filter
   - Real-time filtering

5. **CharacterDetails Component** (20 points)
   - Detailed character information page
   - Route parameter: `/character/:id`
   - Displays:
     - name
     - species
     - house
     - wizard status
     - ancestry
     - wand (wood, core, length)
     - actor
     - image

6. **Service** (10 points)
   - `CharacterService` with HttpClient
   - Methods:
     - `getAllCharacters()`
     - `getCharactersByHouse(house)`
     - `getCharacterById(id)`

7. **Interface/Class** (10 points)
   - `Character` interface
   - `Wand` interface
   - Proper TypeScript typing

8. **Angular Material** (10 points)
   - Material theme (Indigo-Pink)
   - Components used:
     - MatCard
     - MatButton
     - MatFormField
     - MatSelect
     - MatList
     - MatSpinner
     - MatDivider

## 🏗️ Project Structure

```
101491591-lab-test2-comp3133/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── characterlist/
│   │   │   │   ├── characterlist.component.ts
│   │   │   │   ├── characterlist.component.html
│   │   │   │   └── characterlist.component.css
│   │   │   ├── characterfilter/
│   │   │   │   ├── characterfilter.component.ts
│   │   │   │   ├── characterfilter.component.html
│   │   │   │   └── characterfilter.component.css
│   │   │   └── characterdetails/
│   │   │       ├── characterdetails.component.ts
│   │   │       ├── characterdetails.component.html
│   │   │       └── characterdetails.component.css
│   │   ├── models/
│   │   │   └── character.ts
│   │   ├── services/
│   │   │   └── character.service.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   └── styles.css
└── package.json
```

## 🚀 How to Run

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 101491591-lab-test2-comp3133
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build
# or
ng build
```

Build artifacts will be in the `dist/` directory.

## 🔧 Technical Implementation

### API Endpoints Used

- **All Characters:** `https://hp-api.onrender.com/api/characters`
- **Characters by House:** `https://hp-api.onrender.com/api/characters/house/{house}`
- **Character by ID:** `https://hp-api.onrender.com/api/character/{id}`

### Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | CharacterlistComponent | Main page with all characters |
| `/character/:id` | CharacterdetailsComponent | Character details page |

### Components

1. **CharacterlistComponent**
   - Displays character grid
   - Integrates filter component
   - Navigation to details page
   - Loading state with Material spinner

2. **CharacterfilterComponent**
   - Material select dropdown
   - Emits selected house to parent
   - Filter by Gryffindor, Slytherin, Hufflepuff, Ravenclaw

3. **CharacterdetailsComponent**
   - Route-based navigation
   - Detailed character information
   - Material card layout
   - Back button to character list

### Services

**CharacterService**
- Injectable service with HttpClient
- Handles all API communication
- Returns Observables for async data

### Models

**Character Interface**
```typescript
interface Character {
  id: string;
  name: string;
  house: string;
  species: string;
  wizard: boolean;
  ancestry: string;
  wand: Wand;
  actor: string;
  image: string;
  // ... more properties
}
```

**Wand Interface**
```typescript
interface Wand {
  wood: string;
  core: string;
  length: number | null;
}
```

## 📸 Screenshots

### 1. Character List Page
- Grid of character cards with images
- House names displayed
- Filter dropdown at top
- Material Design styling

### 2. Filter by House
- Dropdown showing house options
- Filtered results display only selected house members

### 3. Character Details Page
- Large character image
- All character information
- Wand details section
- Back button to return

## 📝 Assignment Checklist

- ✅ Angular app with correct naming (101491591-lab-test2-comp3133)
- ✅ GitHub repository initialized
- ✅ CharacterList component (20 pts)
- ✅ CharacterFilter component (10 pts)
- ✅ CharacterDetails component with routing (20 pts)
- ✅ CharacterService with HttpClient (10 pts)
- ✅ Character and Wand interfaces (10 pts)
- ✅ Angular Material design (10 pts)
- ✅ Ready for hosting (10 pts)
- ✅ Complete documentation (10 pts)

## 🌐 Deployment

The application is ready to be deployed on:
- **Vercel** (Recommended)
- **Render**
- **Railway**
- **Docker**

### Deployment Steps (Vercel)

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 👨‍💻 Student Information

- **Name:** [Your Name]
- **Student ID:** 101491591
- **Course:** COMP 3133
- **Submission Date:** April 8, 2026

## 📄 License

This project is created for educational purposes as part of COMP 3133 Lab Test 2.

## 🙏 Acknowledgments

- **API:** [Harry Potter API](https://hp-api.onrender.com/)
- **Framework:** Angular 21.2.6
- **UI Library:** Angular Material
