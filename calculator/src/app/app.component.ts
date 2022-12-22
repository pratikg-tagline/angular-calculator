import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';

  display(val: string) {
    console.log(val);
    (document.getElementById('screen') as HTMLInputElement).value += val;
  }
  clearscreen() {
    (document.getElementById('screen') as HTMLInputElement).value = ' ';
    console.log('data:::dataa');
  }
  backSpace(result: string) {
    let a: string = (document.getElementById('screen') as HTMLInputElement)
      .value;
    let b = a.slice(0, a.length - 1);
    (document.getElementById('screen') as HTMLInputElement).value = b;
  }
  check(e: any): void  {
    console.log(typeof e)
    console.log(e);
    if (e.keyCode >= 97 && e.keyCode <= 122) {
      console.log(e);
      e.preventDefault();
      
    } else if (e.keyCode >= 65 && e.keyCode <= 96) {
      console.log(e);
      e.preventDefault();
     
    } else {
      console.log(e);
      return ((document.getElementById('screen') as HTMLInputElement).value =
        e.target.value);
    }
  }
  calculate = () => {
    var a = (document.getElementById('screen') as HTMLInputElement).value;
    var b = eval(a).toFixed(2);
    let c = Math.abs(eval(a));
    //   console.log(a)  
    let ar = b.substring(b.indexOf('.') + 1);
    if (ar == 0o0) {
      (document.getElementById('screen') as HTMLInputElement as any).value = c;
    } else {
      (document.getElementById('screen') as HTMLInputElement as any).value = b;
    }
  };
  ans(res: any): void {
    let getval = (document.getElementById('screen') as HTMLInputElement).value;
    document.addEventListener('keypress', (code) => {
      if (code.keyCode === 13) {
        let outdata: string = eval(getval);
        (document.getElementById('screen') as HTMLInputElement).value = outdata;
      }
    });
  }
}
