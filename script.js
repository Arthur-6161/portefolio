// Navigation active
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour le lien actif en fonction de la page actuelle
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Si on est sur la page d'accueil
    if (currentPage === '' || currentPage === 'index.html') {
        const homeLink = document.querySelector('a[href="index.html"]');
        if (homeLink) homeLink.classList.add('active');
    }
});

// Fonction pour aller vers un projet spécifique
function goToProject(projectUrl) {
    // Vérifier si le fichier existe (simulation)
    const existingProjects = ['projet1.html']; // Ajoutez ici les projets existants
    
    if (existingProjects.includes(projectUrl)) {
        window.location.href = projectUrl;
    } else {
        showComingSoon(projectUrl);
    }
}

// Afficher le message "à venir"
function showComingSoon(projectName) {
    const projectNames = {
        'projet1.html': 'Configuration Réseau d\'Entreprise',
        'projet2.html': 'Analyse de Protocoles',
        'projet3.html': 'Simulation Réseau',
        'projet4.html': 'Sécurité Réseau',
        'projet5.html': 'Télécommunications Mobiles',
        'projet6.html': 'IoT et Réseaux'
    };

    const displayName = projectNames[projectName] || projectName;
    
    // Créer une modal personnalisée
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>🚧 ${displayName}</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p><strong>Contenu à venir !</strong></p>
                <p>Ce projet sera bientôt disponible avec :</p>
                <ul>
                    <li>✨ Description complète du projet</li>
                    <li>🛠️ Technologies et outils utilisés</li>
                    <li>📸 Captures d'écran et démonstrations</li>
                    <li>💾 Code source et fichiers</li>
                    <li>📊 Résultats et analyses</li>
                    <li>🎯 Apprentissages et défis relevés</li>
                </ul>
                <p class="modal-note">En attendant, n'hésitez pas à explorer les autres sections du portfolio !</p>
            </div>
            <div class="modal-footer">
                <button class="modal-btn close-modal">Compris !</button>
            </div>
        </div>
    `;

    // Ajouter les styles de la modal
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .custom-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: modalFadeIn 0.3s ease;
            }

            @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .modal-content {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 20px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 255, 255, 0.2);
                animation: modalSlideIn 0.3s ease;
            }

            @keyframes modalSlideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }

            .modal-header {
                padding: 1.5rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .modal-header h3 {
                color: #a8edea;
                margin: 0;
                font-size: 1.3rem;
            }

            .close-modal {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }

            .close-modal:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(90deg);
            }

            .modal-body {
                padding: 1.5rem;
                color: white;
            }

            .modal-body p {
                margin-bottom: 1rem;
                line-height: 1.6;
            }

            .modal-body ul {
                margin: 1rem 0;
                padding-left: 1rem;
            }

            .modal-body li {
                margin-bottom: 0.5rem;
                line-height: 1.4;
            }

            .modal-note {
                background: rgba(255, 255, 255, 0.1);
                padding: 1rem;
                border-radius: 10px;
                border-left: 4px solid #feca57;
                margin-top: 1rem;
            }

            .modal-footer {
                padding: 1.5rem;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                text-align: center;
            }

            .modal-btn {
                background: linear-gradient(45deg, #ff6b6b, #feca57);
                color: white;
                border: none;
                padding: 0.8rem 2rem;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 1rem;
            }

            .modal-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            }
        `;
        document.head.appendChild(modalStyles);
    }

    // Ajouter la modal au DOM
    document.body.appendChild(modal);

    // Fermer la modal
    const closeButtons = modal.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.animation = 'modalFadeIn 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        });
    });

    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.animation = 'modalFadeIn 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
}

// Effet de parallaxe sur les éléments flottants
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.floating-element');
    const speed = 0.5;

    parallax.forEach((element, index) => {
        const yPos = -(scrolled * speed * (index + 1));
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Animation des cartes au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            entry.target.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .phase-item');
    elementsToObserve.forEach(el => observer.observe(el));
});

// Smooth scrolling pour les ancres (si utilisées)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au chargement de la page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Effet de typing pour les titres (optionnel)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Appliquer l'effet typing sur le titre principal (si souhaité)
document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.querySelector('.hero h1');
    if (mainTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const originalText = mainTitle.textContent;
        setTimeout(() => {
            typeWriter(mainTitle, originalText, 100);
        }, 500);
    }
});

// Gestion du menu mobile (si vous ajoutez un burger menu)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Détection de la taille d'écran pour optimisations
function handleResize() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Désactiver certaines animations sur mobile pour les performances
        document.querySelectorAll('.floating-element').forEach(el => {
            el.style.display = 'none';
        });
    } else {
        document.querySelectorAll('.floating-element').forEach(el => {
            el.style.display = 'block';
        });
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// Console Easter Egg
console.log(`
🌟 Portfolio Réseau & Télécom 🌟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Site développé avec ❤️
Technologies: HTML5, CSS3, JavaScript
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bonne visite ! 🚀
`);
