import { FormControl } from '@angular/forms';

export class CustomValidators {

  public static passwordsMatch(password: string, confirmPassword: string) {

    return (control: FormControl): { [s: string]: boolean } => {
      // getting undefined values for both variables
      console.log(password, confirmPassword);
      // if I change this condition to === it throws the error if the
      //  two fields are the same, so this part works
      if (password !== confirmPassword) {
        return { 'passwordMismatch': true };
      } else {
        // it always gets here no matter what
        return null;
      }
    };
  }


}
