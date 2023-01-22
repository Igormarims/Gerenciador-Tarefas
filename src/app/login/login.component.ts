import { AuthService } from './../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    msgErro: string = '';
    carregando: boolean = false;

   
  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router
              ){
       this.form = fb.group({
       login: [null, [Validators.required,Validators.email]],
       senha: [null, Validators.required]
    })
   }

  ngOnInit(): void {
  }

  async submit(): Promise<void> {
    if(this.form.invalid) {
      return;
    }    
    this.carregando = true;

    try {
    // autenticar o usuário e salvar o token
      await this.authService.login(this.form.value);
      this.router.navigateByUrl('/')

    } catch (e:any) {
       this.msgErro = e.error && e.error.erro ? e.error.erro : 'Ocorreu algum erro ao realizar o login, tente mais tarde'   
       
       
       
       }finally{
      this.carregando = false
    }


  }

}
