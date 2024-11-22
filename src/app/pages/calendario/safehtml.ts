import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/* SafeHtml e [innerHTML]
  Aparentemente o Angular não gosta de quando você atribui elementos ao html com
  esse [innerHTML], pelo visto é uma fragilidade que pode dar brecha para hackearem
  a página ou fazerem besteira.

  Marcando os elementos que você precisa colocar com esse "SafeHtml" 
  (que foi o nome q eu escolhi pro pipe) o html entende que é tranquilo 
  e deixa os elementos entrarem de boa.

  Quando eu tentava por os elementos com classe ou estilo o html ficava bloqueando
  isso resolveu.
*/

//Tem que marcar como standalone:true pra poder usar no component
@Pipe({ name: 'safeHtml',standalone: true})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}