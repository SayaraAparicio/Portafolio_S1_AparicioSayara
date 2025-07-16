document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });

    document.getElementById(targetId).style.display = 'block';
  });
});


async function downloadCV() {
    try {
        const pdfUrl = '../imgs/HV AparicioSayara.pdf';
        const response = await fetch(pdfUrl);

        if (!response.ok) {
            throw new Error('Error al cargar el archivo PDF');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'HV_SayaraAparicio.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);

    } catch (error) {
        console.error('Error al descargar el CV:', error);
        alert('Error al descargar el CV. Por favor, intenta de nuevo.');
    }
}
function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 4 + 's';
                particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Scroll suave
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                const xMove = (x - 0.5) * speed * 15;
                const yMove = (y - 0.5) * speed * 15;
                shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });

        // Efecto de brillitos
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
        });

        // Botones
        document.querySelectorAll('.service-button').forEach(button => {
            button.addEventListener('click', (e) => {
                // Style de efecto
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.5)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                console.log('Proyecto iniciado:', e.target.closest('.service-card').querySelector('.service-title').textContent);
            });
        });

        // Animación de ripple
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
  
// Contactarme
// Crear partículas brillantes
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Efecto de suave
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        const xMove = (x - 0.5) * speed * 15;
        const yMove = (y - 0.5) * speed * 15;
        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Manejar envío del formulario con Formspree (para que llegue a mi correo)
function handleSubmit(event) {
    event.preventDefault();
    
    const button = document.getElementById('buttonText');
    const notification = document.getElementById('notification');
    
    // Cambiar texto del botón
    button.textContent = 'Enviando...';
    
    const formspreeEndpoint = 'https://formspree.io/f/myzpgwvg'; 
    
    // Obtener datos del formulario
    const formData = new FormData(event.target);
    
    // Enviar a Formspree
    fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Éxito
            notification.textContent = '¡Mensaje enviado exitosamente! 🎉';
            notification.classList.add('show');
            
            // Resetear formulario
            event.target.reset();
            button.textContent = 'Enviar mensaje ✨';
            
            // Ocultar notificación después de 3 segundos
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        } else {
            throw new Error('Error al enviar');
        }
    })
    .catch(error => {
        // Error
        notification.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
        notification.classList.add('show');
        button.textContent = 'Enviar mensaje ✨';
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
}

// Efecto de escritura en tiempo real
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Efecto de focus en inputs
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
            input.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.3)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
            input.style.boxShadow = 'none';
        });
    });
});

// Animación de los iconos sociales
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const icon = link.querySelector('.social-icon');
        icon.style.transform = 'scale(1.2) rotate(360deg)';
        icon.style.transition = 'transform 0.5s ease';
    });
    
    link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('.social-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});
// Menú hamburguesa responsive
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.link-card a');

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    // Función para cerrar el menú
    function closeMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Event listener para el botón hamburguesa
    navToggle.addEventListener('click', toggleMenu);

    // Event listener para el overlay (cerrar menú al hacer clic fuera)
    navOverlay.addEventListener('click', closeMenu);

    // Cerrar menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar menú al redimensionar la ventana (útil cuando se cambia orientación)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Cerrar menú con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Smooth scroll para los enlaces internos
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar smooth scroll si es un enlace interno (comienza con #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Función adicional para mejorar la experiencia en dispositivos 
function addTouchSupport() {
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('languageToggle');
    
    toggle.addEventListener('change', function() {
        if (this.checked) {
            // Redirigir a la página en inglés
            window.location.href = 'index(en).html';
        } else {
            // Mantener en español
            window.location.href = 'index.html';
        }
    });
});