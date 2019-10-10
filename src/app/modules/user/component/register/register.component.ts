import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  /**
   * 创建表单
   * 方法一： FormGroup
   */
  // registerForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  // });

  /**
   * 创建表单
   * 方法二： FormBuilder
   */
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(value => {
      console.log('Register:', value);
    });

    // this.registerForm.setValue({
    //   username: 'testuser',
    //   password: 'testpassword',
    // });

    this.registerForm.statusChanges.subscribe(status => {
      console.log('Status', status);
    });
  }

  onSubmit() {
    console.log('Submit', this.registerForm.value);
  }
}
