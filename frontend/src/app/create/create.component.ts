import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Buch} from '../shared/buch';
import {BackendService} from '../shared/backend.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  buch!: Buch;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        titelControl: ['', Validators.required],
        kurzbeschreibungControl: ['', Validators.required],
        genreControl: ['', Validators.required],
        statusControl: ['', Validators.required],
      }
    );
    this.buch = { id: 0, titel: '', kurzbeschreibung: '', genre: '', status:'', };
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.form.value);
    const values = this.form.value;
    this.buch.titel = values.titelControl;
    this.buch.kurzbeschreibung = values.kurzbeschreibungControl;
    this.buch.genre = values.genreControl;
    this.buch.status = values.statusControl;
    console.log(this.buch);
    this.cs.createOneBuecher(this.buch);
    this.router.navigate(['/tabelle']);
  }

  cancel(): void {
    this.router.navigate(['/tabelle']);
  }
}