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
            // Ajusta esta ruta según donde tengas tu archivo PDF
            const pdfUrl = '../imgs/HV\ AparicioSayara.pdf';
            
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

        // Efecto de parallax sutil
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

        // Inicializar efectos
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
        });

        // Efecto de clic en botones
        document.querySelectorAll('.service-button').forEach(button => {
            button.addEventListener('click', (e) => {
                // Efecto de ripple
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
  