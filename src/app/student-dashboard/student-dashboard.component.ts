import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Student } from '../student';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

formValue!:FormGroup;
StudentData:Student=new Student();
constructor( private formbuilder:FormBuilder,
  private api:ApiService) { }

ngOnInit(): void {
  this.formValue=this.formbuilder.group({
    studentId:[''],
    studentName:[''],
    studentEmail:[''],
    studentMobile:[''],
    studentDept:[''],
    studentYear:['']
  })
}
// Modal Display
  display="none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  postStudentData(){
    this.StudentData.studentId=this.formValue.value.studentId;
    this.StudentData.studentName=this.formValue.value.studentName;
    this.StudentData.studentEmail=this.formValue.value.studentEmail;
    this.StudentData.studentMobile=this.formValue.value.studentMobile;
    this.StudentData.studentDept=this.formValue.value.studentDept;
    this.StudentData.studentYear=this.formValue.value.studentYear;

    this.api.postStudent(this.StudentData)
    .subscribe(res=>{
      console.log(res);
      alert("Student Data added successfully!:)")
    },
    err=>{
      alert("Something went wrong:(")
    }
    )
  }
}
