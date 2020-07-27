import { Component, OnInit } from '@angular/core';
import { FacultyModel } from '../../../../models/parameters/faculty.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { FacultyService } from '../../../../services/parameters/faculty.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-Faculty-list',
  templateUrl: './Faculty-list.component.html',
  styleUrls: ['./Faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {
  page: number = 1;
  recordList: FacultyModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;

  constructor(private service: FacultyService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();
    this.getRecordList();
  }

  getRecordList() {
    this.service.getAllRecords().subscribe(
      records => {
        this.recordList = records;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
      },
      error => {
        ShowNotificationMessage("There is a problem with backend communication.");
      }
    );
  }

  RemoveRecordConfirmation(id) {
    this.removeRecordId = id;
    ShowRemoveConfirmationModal();
  }

  RemoveRecord() {
    this.service.removeRecord(this.removeRecordId).subscribe(
      data => {
        closeModal("removeConfirmationModal");
        ShowNotificationMessage('Record has been removed successfuly.');
        this.getRecordList();
      },
      error => {
        ShowNotificationMessage('Error removing record.');
      }
    );
  }

}

