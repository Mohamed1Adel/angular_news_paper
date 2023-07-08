import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NewsService } from './Services/news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit ,OnInit{
  title = 'NewsApp';

  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  public sources:any=[];
  public articles:any=[];
  constructor(
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private newsServises: NewsService
  ) {}
  ngOnInit(): void {
       this.newsServises.initArticles().subscribe((res:any)=>{
         this.articles = res.articles
         console.log(res);
        });
       this.newsServises.initSources().subscribe((res:any)=>{
         this.sources = res.sources;
         console.log(res);

        });

        // console.log(this.sourses)
        // console.log(this.articles)


  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:787px)']).subscribe((res: any) => {
      if (res?.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
    this.cdr.detectChanges();
  }
}
