import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogado } from 'src/app/models/usuario-logado.model';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   
   usuarioLogado?: UsuarioLogado | null ;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.obterUsuarioLogado()
  }

  deslogar() {
    this.authService.deslogar();
    this.router.navigateByUrl('/login')
  }
  
  abrirModal() {
    console.log('abrir modal');
    
  }


}
