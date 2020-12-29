import { Component, Injector, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Subject, Observable, merge } from 'rxjs';
import { Category } from '../../services/categories';
import { BasePage } from '../base-page/base-page';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'direct-message-page',
  templateUrl: 'direct-message.html',
  styleUrls: ['direct-message.scss'],
})
export class DirectMessagePage extends BasePage {

  @ViewChild(IonContent, { static: true }) container: IonContent;

  public skeletonArray: any;

  public categories: Category[] = [];

  public contentLoaded: Subject<any>;
  public loadAndScroll: Observable<any>;

  public pathPrefix: string;
  public countries = [];
  public callingCode: any;
  public phoneNumber: any;
  public whatsappMessage: any;

  constructor(injector: Injector,
              private categoryService: Category) {
    super(injector);
    this.skeletonArray = Array(12);
  }

  enableMenuSwipe() {
    return true;
  }

  ngOnInit() {
    this.setupObservables();
    this.callingCode = +91;
    const tab = this.activatedRoute.snapshot.parent.data.tab;

    if (tab === 'home') {
      this.pathPrefix = '../';
    } else if (tab === 'categories') {
      this.pathPrefix = './';
    }
  }

  setupObservables() {

    this.contentLoaded = new Subject();

    this.loadAndScroll = merge(
        this.container.ionScroll,
        this.contentLoaded,
    );
  }

  onContentLoaded() {
    setTimeout(() => {
      this.contentLoaded.next();
    }, 300);
  }

  ionViewWillEnter() {
    if (this.container) {
      this.container.scrollToTop();
    }
  }

  async ionViewDidEnter() {
    if (!this.categories.length) {
      await this.showLoadingView({ showOverlay: false });
      this.loadData();
    }

    const title = await this.getTrans('WHATSAPP_DIRECT_LINK');
    this.setPageTitle(title);

    this.setMetaTags({
      title: title
    });
  }
  getCountries(ct) {
    ct.detail.value = "India";
    const data = ct.detail.value;
    this.callingCode = '+' + data.callingCodes[0];
    console.log(this.callingCode);
  }
  sendWhatsapp() {
    window.open('https://api.whatsapp.com/send/?phone=' + this.callingCode + this.phoneNumber + '&text=' + this.whatsappMessage + '&app_absent=0');
  }
  async loadData() {

    try {

      this.categories = await this.categoryService.load();

      if (this.categories.length) {
        this.showContentView();
      } else {
        this.showEmptyView();
      }

      this.onContentLoaded();

      this.onRefreshComplete();
      fetch('./assets/Country.json').then(res => res.json())
          .then(json => {
            this.countries = json;
            console.log(this.countries);
          });

    } catch (error) {
      this.showErrorView();
      this.onRefreshComplete();
    }
  }

  onReload(event: any = {}) {
    this.refresher = event.target;
    this.loadData();
  }

}
