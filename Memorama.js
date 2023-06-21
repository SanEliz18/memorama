class Memorama {
    constructor() {
      this.puntajeJugador1 = 0;
      this.puntajeJugador2 = 0;
      this.turnoJugador1 = true;
      this.cartaSeleccionada1 = null;
      this.cartaSeleccionada2 = null;
  
      this.imgArreglo = [
        '/asets/img/carta1.png',
        '/asets/img/carta2.png',
        '/asets/img/carta3.png',
      ];
  
      this.inicializar();
    }
  
    inicializar() {
      this.mostrarPuntajes();
      this.insertarFichas();
      this.agregarEventosClick();
    }
  
    insertarFichas() {
      let div = document.getElementById("divimg1");
      div.style.display = 'flex';
      div.style.justifyContent = 'center';
      div.style.alignItems = 'center';
  
      this.imgArreglo.forEach((imagen) => {
        for (let i = 0; i < 2; i++) {
          let imgElement = document.createElement("img");
          imgElement.src = imagen;
          imgElement.style.width = '200px';
          imgElement.style.height = '200px';
        
          imgElement.addEventListener('mouseenter', () => {
            imgElement.style.transform = 'scale(1.05)';
          });
          
          imgElement.addEventListener('mouseleave', () => {
            imgElement.style.transform = 'scale(1)';
          });
          
          div.appendChild(imgElement);
        }
      });
    }
  
    agregarEventosClick() {
      let imagenes = document.getElementsByTagName("img");
  
      for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", () => {
          this.validarSeleccion(imagenes[i]);
        });
      }
    }
  
    validarSeleccion(imagen) {

      if (this.cartaSeleccionada1 === null) {
        this.cartaSeleccionada1 = imagen;
      } else if (this.cartaSeleccionada2 === null) {
        this.cartaSeleccionada2 = imagen;
  
        if (this.cartaSeleccionada1.src === this.cartaSeleccionada2.src) {
          
          this.sumarPunto();
        }
  
        setTimeout(() => {
          this.cartaSeleccionada1 = null;
          this.cartaSeleccionada2 = null;
          this.cambiarTurno();
        }, 1000);
      }
    }
  
    sumarPunto() {
      if (this.turnoJugador1) {
        this.puntajeJugador1++;
      } else {
        this.puntajeJugador2++;
      }
  
      this.mostrarPuntajes();
    }
  
    cambiarTurno() {
        alert("cambio de turno")
      this.turnoJugador1 = !this.turnoJugador1;
    }
  
    mostrarPuntajes() {
      const divJugador1 = document.getElementById("puntajeJugador1");
      const divJugador2 = document.getElementById("puntajeJugador2");
  
      divJugador1.textContent = `Puntaje Jugador 1: ${this.puntajeJugador1}`;
      divJugador2.textContent = `Puntaje Jugador 2: ${this.puntajeJugador2}`;
    }
  }
  
  const memorama = new Memorama();
  