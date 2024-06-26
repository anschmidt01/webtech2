import { Component, OnInit } from '@angular/core';
import {BackendService} from '../shared/backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Buch } from '../shared/buch';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css']
})
export class TabelleComponent implements OnInit {
  buecher!: Buch[];
  buch!: Buch;
  selectedId!: number;
  path!: Observable<string>;
  error!: HttpErrorResponse;
  closeResult = '';
  form: FormGroup;

  constructor(
    private cs: BackendService, 
    private route: ActivatedRoute,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) {
      // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
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
    this.readAll();

    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId);
    }
  }

  trackByBuch(index: number, buch: Buch): number { return buch.id; }

  readAll(): void {
      this.cs.getAllBuecher().subscribe(
      {
        next: (response) => {
        this.buecher = response;
        console.log(this.buch);
        return this.buch;
        },
        error: (err) => console.log(err),
        complete: () => console.log('getAll() completed')
      });
      
      } 
      readOne(id: number): void {
        this.cs.getBuecherById(id).subscribe(
          (response: Buch) => this.buch = response,
          error => this.error = error,
        );
      }

      deleteOne(buecherId: number): void {
        this.cs.deleteOneBuecher(buecherId);
        window.location.reload();
      }
    
      open(content: any, id: number): void {
        this.readOne(id);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log(this.closeResult);
          if (result === 'delete')
          {
            this.deleteOne(this.buch?.id);
          }
        });
      }
      update(buch: Buch): void {
        this.buch = buch;
        this.cs.update(this.buch.id, this.buch);
        this.router.navigateByUrl('/tabelle');
      }
    }
