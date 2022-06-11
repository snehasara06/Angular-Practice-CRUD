import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Student } from './student';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

formValue!:FormGroup;

studentObj:Student=new Student();

allStudent:any;

studentData:any=[];

btnUpdateShow:boolean = false;

btnSaveShow:boolean = true;

constructor( private formbuilder:FormBuilder,private api:ApiService) { }

ngOnInit(): void {
  this.formValue=this.formbuilder.group({
    studentId:[''],
    studentName:[''],
    studentEmail:[''],
    studentMobile:[''],
    studentDept:[''],
    studentYear:['']
  })
  this.getAllStudent();
}


// Modal Display
  display="none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  addStudentData(){
    this.studentObj.studentId=this.formValue.value.studentId;
    this.studentObj.studentName=this.formValue.value.studentName;
    this.studentObj.studentEmail=this.formValue.value.studentEmail;
    this.studentObj.studentMobile=this.formValue.value.studentMobile;
    this.studentObj.studentDept=this.formValue.value.studentDept;
    this.studentObj.studentYear=this.formValue.value.studentYear;

    this.api.postStudent(this.studentObj).subscribe({next:(v)=>{
        console.log(v);
      },
      error:(e)=>{
        console.log(e)
        alert("Error")
      },
      complete:()=>{
        console.log('complete')
        alert("Student data added!")
        this.getAllStudent();
        this.formValue.reset();
      }
    })
  }
      // res=>{console.log(res);
      // alert("Student Data added successfully!:)");
      // let ref=document.getElementById('cancel')
      // ref?.click();
      // this.formValue.reset();
      // this.getAllStudent();
    // },
    // err=>{
    //   // console.log(e);
    //   alert("Something went wrong:(")
    // })
  
  getAllStudent(){
    this.api .getStudent()
    .subscribe(res=>{
      this.studentData=res;
    })
  }
  deleteStu(data:any){
    this.api.deleteStudent(data.id).subscribe
    (res=>{
      alert("Deleted!");
      this.getAllStudent();
    })
  }
  editStudent(data:any){
    this.formValue.controls['studentId'].setValue(data.studentId);
    this.formValue.controls['studentName'].setValue(data.studentName);
    this.formValue.controls['studentEmail'].setValue(data.studentEmail);
    this.formValue.controls['studentMobile'].setValue(data.studentMobile);
    this.formValue.controls['studentDept'].setValue(data.studentDept);
    this.formValue.controls['studentYear'].setValue(data.studentYear);
    this.studentObj.studentId=data.studentId;

    // this.studentObj.id = data.id;

    this.SaveShowBtn();


  }
  updateStu(){
    this.studentObj.studentId=this.formValue.value.studentId;
    this.studentObj.studentName=this.formValue.value.studentName;
    this.studentObj.studentEmail=this.formValue.value.studentEmail;
    this.studentObj.studentMobile=this.formValue.value.studentMobile;
    this.studentObj.studentDept=this.formValue.value.studentDept;
    this.studentObj.studentYear=this.formValue.value.studentYear;

    this.api.updateStudent(this.studentObj,this.studentObj.studentId).subscribe(res=>{

      alert("Data Updated!");
      this.getAllStudent();
      this.UpdateShowBtn();

    })
  }

  UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }

}
    // ({next:(v)=>{
    //   console.log(v);
    // },
    // error:(e)=>{
    //   console.log(e)
    //   alert("Error")
    // },
    // complete:()=>{
    //   console.log('deleted')
    //   alert("Student data deleted!")
    //   this.getAllStudent();
      // this.formValue.reset();
    
  // })

  //   .subscribe(res=>{
  //     // this.studentData=res;
  //     // this.getAllStudent();
  //     alert("Student Deleted!")
  //   })
  // }
// }
