import { SeoService } from '@app/core/services/seo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'bx-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog$: Observable<any>;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.blog$ = this.route.params.pipe(
      switchMap((params: any) => {
        return this.api.get('blog', params['slug']);
      }),
      tap(resp => {
        this.seo.setMetaAndLinks(resp.title, resp.seo, 'Blog', null, 'article');
      })
    );
  }
}
