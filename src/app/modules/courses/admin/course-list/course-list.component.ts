import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../../models/course/course.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { CourseService } from '../../../../services/courses/course.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  page: number = 1;
  recordList: CourseModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;

  constructor(private service: CourseService,
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
