import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert',
  imports: [],
  templateUrl: './sweetalert.html',
  styleUrl: './sweetalert.scss',
})
export class Sweetalert {
  mostrarMensaje() {
    Swal.fire({
      title: '¡Listo!',
      text: 'La operación se realizó correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  mensajeBoton2() {
    Swal.fire({
      title: '¿Desea continuar?',
      text: 'Se iniciará el proceso',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // 1️⃣ Mostrar loading
        Swal.fire({
          title: 'Cargando...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();

            // 2️⃣ Esperar 2 segundos
            setTimeout(() => {
              console.log('cargando');

              // 3️⃣ Mostrar resultado final
              Swal.fire({
                title: 'Listo',
                text: 'El proceso terminó correctamente',
                icon: 'success',
              });
            }, 2000);
          },
        });
      }
    });
  }
}
