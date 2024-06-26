import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Buch } from '../../shared/buch';
import { Location } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() buch!: Buch;
  @Output() updateEvent = new EventEmitter<Buch>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        titelControl: ['', Validators.required],
        kurzbeschreibungControl: ['', Validators.required],
        genreControl: ['', Validators.required],
        statusControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.buch?.id,
      titelControl: this.buch?.titel,
      kurzbeschreibungControl: this.buch?.kurzbeschreibung,
      genreControl: this.buch?.genre,
      statusControl: this.buch?.status,

    });
  }

  onSubmit(): void {
    const values = this.form.value;
    this.buch.id = values.idControl;
    this.buch.titel = values.titelControl;
    this.buch.kurzbeschreibung= values.kurzbeschreibungControl;
    this.buch.genre = values.genreControl;
    this.buch.status= values.statusControl;
    this.updateEvent.emit(this.buch);
  }

  cancel(): void {
    this.location.back();
  }
}