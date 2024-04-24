import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { map, switchMap } from 'rxjs/operators';
import { SeoService } from '@app/core/services/seo.service';

@Component({
  selector: 'bx-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  page_data: any;
  blogs$: Observable<any[]>;
  total: number;
  constructor(private api: ApiService, private seo: SeoService) {}
  ngOnInit() {
    this.blogs$ = this.api
      .get('page', 'blog', {
        $select: ['title', 'body', 'slug', 'seo'],
        published: true
      })
      .pipe(
        switchMap((resp: any) => {
          this.page_data = resp;
          this.seo.setMetaAndLinks(resp.title, resp.seo, null, null, 'article');
          return this.api.find('blog', {
            $sort: {
              createdAt: -1
            }
          });
        }),
        map((resp: any) => {
          this.total = resp.total;
          return resp.data;
        })
      );
  }
}
