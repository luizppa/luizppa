import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/enums/theme';
import { EducationItem } from 'src/app/interfaces/education';
import { Mark } from 'src/app/interfaces/mark';
import { I18nService } from 'src/app/services/i18n.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public theme = Theme.LIGHT;
  public education: EducationItem[] = []
  public marks: Mark[] = [];

  constructor(private profile: ProfileService, public i18n: I18nService) { }

  ngOnInit(): void {
    this.profile.get_education((education) => {
      this.education = education;
      this.marks = this.education.map(education_item => {
        return {
          date: education_item.graduation_date,
          title: education_item.title,
          description: education_item.description,
          color: '',
        }
      })
    })
  }

}
