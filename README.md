# FT-Campaigns

A single-page React application for creating, editing, deleting and listing marketing campaigns. Designed as a demo of a CRUD interface with responsive design and automated deployment.



## 🔍 What It Is

- **Frontend**: React + Vite  
- **UI**: Responsive CSS (plain or preprocessed)  
- **Data**: Mocked locally (you can swap in a real API if needed)  
- **CI/CD**: GitHub Actions builds and deploys to GitHub Pages on every push to `main`


## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:DziadoszWiktor/FT-Campaigns.git

# Install dependencies
npm install

# Run dev local server
npm run dev
# → http://localhost:5173

# Build for production
npm run build
```


## 📦 Deployment

A GitHub Actions workflow automatically:
1. Checks out the code  
2. Installs dependencies (`npm ci`)  
3. Builds the app (`npm run build`)  
4. Publishes the `dist/` folder to the `gh-pages` branch  

No local deploy commands required, just push to main branch

## 🔗 Live Demo

https://dziadoszwiktor.github.io/FT-Campaigns/
