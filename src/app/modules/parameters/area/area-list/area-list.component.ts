import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../../../services/parameters/area.service';
import { AreaModel } from 'src/app/models/parameters/area.model';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {

  recordList: AreaModel[];
  removeRecordId: String = '';

  constructor(private service: AreaService) { }

  ngOnInit(): void {
    this.getRecordList();
  }

  getRecordList() {
    this.service.getAllRecords().subscribe(
      records => {
        this.recordList = records;
        console.log("RecordList:");        
        console.log(this.recordList);
      },
      error =>{
        ShowNotificationMessage("There is a problem with backend communication.");
      }
    );
  }

  RemoveRecordConfirmation(id){
    this.removeRecordId = id;
    ShowRemoveConfirmationModal();
  }

  RemoveRecord(){
    console.log("Removing record with id: " + this.removeRecordId);
  }

}
