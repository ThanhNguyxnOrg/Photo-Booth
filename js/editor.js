// Photo editor functionality
class PhotoEditor {
    constructor() {
        this.currentFilter = 'none';
        this.stickers = [];
        this.nextStickerPositionIndex = 0;
        this.stickerPositions = [
            { left: -40, top: 0 },    // Top-left
            { left: 230, top: 0 },    // Top-right
            { left: -40, top: 210 },  // Middle-left
            { left: 230, top: 210 },  // Middle-right
            { left: -40, top: 420 },  // Bottom-left
            { left: 230, top: 420 }   // Bottom-right
        ];
        this.currentLanguage = localStorage.getItem('photoboothLang') || 'en';
        this.translations = translations;
        this.init();
    }

    init() {
        this.initLanguageSelector();
        this.initStickers();
        this.initBackgrounds();
        this.initFilters();
    }

    initLanguageSelector() {
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        
        const languages = Object.keys(this.translations);
        languages.forEach(lang => {
            const btn = document.createElement('button');
            btn.className = `lang-btn ${lang === this.currentLanguage ? 'active' : ''}`;
            btn.setAttribute('data-lang', lang);
            btn.innerHTML = `${this.translations[lang].flag}`;
            btn.addEventListener('click', () => this.changeLanguage(lang));
            langSelector.appendChild(btn);
        });

        // Insert language selector at the top of the controls
        const controls = document.querySelector('.controls');
        controls.insertBefore(langSelector, controls.firstChild);

        // Initial translation
        this.updateTranslations();
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('photoboothLang', lang);
        
        // Update language button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        this.updateTranslations();
    }

    updateTranslations() {
        const t = this.translations[this.currentLanguage];
        
        // Update buttons
        document.getElementById('capture-btn').textContent = t.takePicture;
        document.getElementById('submit-btn').textContent = t.submit;
        document.getElementById('preview-btn').textContent = t.preview;
        document.getElementById('download-btn').textContent = t.download;
        document.getElementById('retake-btn').textContent = t.retake;
        
        // Update labels
        document.querySelector('.stickers label').textContent = t.cuteStickers;
        document.querySelector('.backgrounds label').textContent = t.photoBackground;
        document.querySelector('.filters label').textContent = t.filters;
        document.querySelector('.upload-section h2').textContent = t.uploadPhotos;
        document.querySelector('.upload-section p').textContent = t.uploadInstruction;
        
        // Update enable date label
        const dateLabel = document.querySelector('label[for="enable-date"]');
        if (dateLabel) {
            dateLabel.childNodes[1].textContent = t.enableDate;
        }
    }

    initStickers() {
        const stickerButtons = document.querySelectorAll(".stickers button");
        const photostripContainer = document.querySelector(".photostrip-container");

        stickerButtons.forEach(button => {
            button.addEventListener("click", () => {
                const sticker = button.getAttribute("data-sticker");
                const position = this.stickerPositions[this.nextStickerPositionIndex];
                
                const stickerEl = document.createElement("span");
                stickerEl.className = "sticker";
                stickerEl.textContent = sticker;
                stickerEl.style.left = position.left + "px";
                stickerEl.style.top = position.top + "px";
                
                photostripContainer.appendChild(stickerEl);
                this.stickers.push(stickerEl);

                this.nextStickerPositionIndex = 
                    (this.nextStickerPositionIndex + 1) % this.stickerPositions.length;
            });
        });
    }

    initBackgrounds() {
        const backgroundButtons = document.querySelectorAll(".backgrounds button");
        const photostrip = document.getElementById("photostrip");

        backgroundButtons.forEach(button => {
            button.addEventListener("click", () => {
                const bgColor = button.getAttribute("data-bg");
                photostrip.style.backgroundColor = bgColor;
            });
        });
    }

    initFilters() {
        const filterButtons = document.querySelectorAll(".filters button");
        
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                this.currentFilter = button.getAttribute("data-filter");
                this.updatePhotostrip();
            });
        });
    }

    getFilterStyle(filter) {
        const filterStyles = {
            "black-and-white": "grayscale(100%)",
            "sepia": "sepia(100%)",
            "warm": "hue-rotate(-30deg) saturate(150%)",
            "cold": "hue-rotate(180deg) saturate(150%)",
            "cool": "hue-rotate(210deg) brightness(110%)",
            "none": "none"
        };
        
        return filterStyles[filter] || "none";
    }

    updatePhotostrip() {
        const photos = document.querySelectorAll(".photostrip img");
        photos.forEach(photo => {
            const filterStyle = this.getFilterStyle(this.currentFilter);
            photo.style.filter = filterStyle;
            
            // Store the filter on the element for consistency
            photo.dataset.currentFilter = this.currentFilter;
        });
    }

    clearStickers() {
        this.stickers.forEach(sticker => sticker.remove());
        this.stickers = [];
        this.nextStickerPositionIndex = 0;
    }
}
