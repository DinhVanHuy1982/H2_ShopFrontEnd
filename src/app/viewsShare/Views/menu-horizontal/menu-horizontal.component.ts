import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {CommonFunction} from "../../../../core/service/utils/common-function";
import {TranslationService} from "../../../../core/_base/layout/service/translation.service";
import {environment} from "../../../../environment/environment";
import {MatDialog} from "@angular/material/dialog";
import {HomePageComponent} from "../home-page/home-page.component";
import {RegisterAccountComponent} from "../register-account/register-account.component";
import {LoginComponent} from "../login/login.component";
import {Router} from "@angular/router";
import {SearchPageComponent} from "../search-page/search-page.component";
import {UserService} from "../user.service";
import {ToastrService} from "ngx-toastr";
import {CategoriesService} from "../../../admin/Views/Pages/categories-management/categories.service";

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.scss']
})
export class MenuHorizontalComponent implements OnInit{
  domainFile = environment.DOMAIN_FILE_SERVER
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  domainFileLocal = environment.DOMAIN_FILE_LOCAL;
  listHistory: string[];
  keyword = '';
  categoriesIdSearch :any;
  categoriesNameSearch :any;
  currentUser : any;
  checkLogin: boolean = false;
  listHistoryFilter : string[];
  showHistory : boolean=false;
  showAllHistory = false;
  srcFlag = "/assets/media/img/h2Shop/flag_vn.png";
  // modalRef!: BsModalRef;

  showUserPopup = false;

  constructor(private cdr : ChangeDetectorRef,
              private translationService: TranslationService,
              private matdialog: MatDialog,
              private router: Router,
              private sagePage:SearchPageComponent,
              private userService:UserService,
              private toast:ToastrService,
              private categoriesService:CategoriesService
              ) {
    this.listHistory=[];
    this.listHistoryFilter = [];
    this.srcFlag = "/assets/media/img/h2Shop/flag_vn.png";
  }
  avatarUser:any;

  currrentUser:any;
  lstCategories:any;
  ngOnInit(): void {

    const user = localStorage.getItem("user")
    this.currrentUser = this.userService.getUserCurrent().subscribe((res:any)=>{
      if(res){
        this.currrentUser = res
        this.avatarUser = this.currrentUser.avatar;
        this.checkLogin=true
      }else{
        this.currrentUser=null;
        this.checkLogin=false;
      }

    });

    // get list danh mục
    const data={}
    this.categoriesService.getTreeCategoriesActive().subscribe((res:any)=>{
      this.lstCategories=res.data;
      console.log(this.lstCategories)
    })

    // if(user){
    //   this.currrentUser = JSON.parse(user);
    //   this.avatarUser = this.currrentUser.avatar;
    //   this.checkLogin=true
    // }else{
    //   this.currrentUser=null;
    //   this.checkLogin=false;
    // }

  }

  getHistory(){
    let history;
    this.listHistory = [];
    if(this.checkLogin){
      history = CommonFunction.getCookie(this.currentUser?.account);
    }else{
      history = CommonFunction.getCookie('user');
    }
    if(history){
      const encodedSearchHistory = JSON.parse(history);
      this.listHistory = encodedSearchHistory.map((item:any) => decodeURIComponent(item))
      if(this.keyword != ''){
        // this.listHistoryFilter = this.listHistory.filter(history =>  history.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1);
      }
    }
  }

    setHistory(){
        let index = this.listHistory.findIndex(value => value?.toLowerCase() === this.keyword.toLowerCase()) ;
        if(index >=0){
            this.listHistory.splice(index,1);
        }
        this.listHistory.unshift(this.keyword.trim() as string)
        if(this.listHistory.length > 10){
            this.listHistory.pop();
        }
        const encodedSearchHistory = this.listHistory.map((item:any) => encodeURIComponent(item));
        // if(this.checkLogin){
        //     CommonFunction.setCookie(this.currentUser?.account,JSON.stringify(encodedSearchHistory));
        // }else{
        // }
      CommonFunction.setCookie('user',JSON.stringify(encodedSearchHistory));

        this.cdr.detectChanges();
    }

    changeInputSearch(event:any){
        if(event != ''){
            this.listHistoryFilter = this.listHistory.filter((history:any) =>  history.toLowerCase().indexOf(event.toLowerCase()) !== -1);
        }
    }
    search(){
        let urlNavigate='/search-page-product';
        let  dataSearch={
          keyword:'',
          categoriesId:null,
          categoriName:''
        }
        if(this.keyword.trim().length > 0){
            this.setHistory();
            this.getHistory();
            let keyword = this.keyword.trim();
            this.sagePage.searchProduct.nameSearch=keyword;
            dataSearch.keyword=keyword;
        }
        if(this.categoriesIdSearch){
          dataSearch.categoriesId = this.categoriesIdSearch
          dataSearch.categoriName=this.categoriesNameSearch
        }
        this.router.navigate(["/search-page-product"], {queryParams: dataSearch})
        this.showHistory = false;
        this.inputSearch.nativeElement.blur();
    }

    clickItemHistory(item:any){
        this.keyword = item;
        this.search();
    }

    deleteAllHistory(event: any){
        event.stopPropagation();
        this.listHistory = [];
        this.clearHistory();
    }
    clearHistory(){
        if(this.checkLogin){
            CommonFunction.deleteCookie(this.currentUser.account);
        }else{
            CommonFunction.deleteCookie('user');
        }
    }

    showAllHistoryFunc(event:any){
        event.stopPropagation();
        this.showAllHistory = true
    }

    deleteItem(index: number,event: any){
        event.stopPropagation();
        this.listHistory.splice(index,1);
        if(this.listHistory.length == 0){
            this.clearHistory();
        }else{
            if(this.checkLogin){
                CommonFunction.setCookie(this.currentUser.account,JSON.stringify(this.listHistory));
            }else{
                CommonFunction.setCookie('user',JSON.stringify(this.listHistory));
            }
        }
        if(this.keyword != ''){
            this.listHistoryFilter = this.listHistory.filter((history:any) =>  history.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1);
        }
        this.cdr.detectChanges();
    }
    changeLanguage(language:string){
        this.translationService.setLanguage(language);
        if(language==='vn'){
          this.srcFlag = '/assets/media/img/h2Shop/flag_vn.png';
        }else{
          this.srcFlag = '/assets/media/img/h2Shop/flag_en.png'
        }
        console.log("Flag: ",this.domainFileLocal + this.srcFlag)
    }
    @HostListener('document:click', ['$event.target'])
    onClickOutside(targetElement: any) {
        if (!targetElement.closest('.header-search')) {
            this.showHistory = false;
            this.showAllHistory = false;
        }
        if(!targetElement.closest('.uer-login')){
            this.showUserPopup = false;
        }
    }

    CategoriesTemplate = [
      {
        id: 1,
        categoriName: 'Bóng đá',
        categoriCode: 'FBALL',
        parentId: null,
        createTime: null,
        description: null,
        categoriesDTOList: [
          {
            id: 2,
            categoriName: 'Áo đấu',
            categoriCode: 'FBALLSHIRT',
            parentId: 1,
            createTime: null,
            description: null,
          },
          {
            id: 3,
            categoriName: 'Quần đấu',
            categoriCode: 'FBALLSHORT',
            parentId: 1,
            createTime: null,
            description: null,
          }
        ]
      },
      {
        id: 4,
        categoriName: 'Quần vợt',
        categoriCode: 'TENIST',
        parentId: null,
        createTime: null,
        description: null,
        categoriesDTOList: [
          {
            id: 5,
            categoriName: 'Áo đấu',
            categoriCode: 'FBALLSHIRTTN',
            parentId: 4,
            createTime: null,
            description: null,
          },
          {
            id: 6,
            categoriName: 'Quần đấu',
            categoriCode: 'FBALLSHORTTN',
            parentId: 4,
            createTime: null,
            description: null,
            categoriesDTOList: [
              {
                id: 7,
                categoriName: 'Quần rộng',
                categoriCode: 'BIG',
                parentId: 6,
                createTime: null,
                description: null,
              },
              {
                id: 8,
                categoriName: 'Quần bó',
                categoriCode: 'SMALL',
                parentId: 6,
                createTime: null,
                description: null,
              }
            ]
          }
        ]
      }
    ]
  openRegister(){
    this.matdialog.open(RegisterAccountComponent,{
      minWidth:'550px',
      minHeight:'30vh',
      maxWidth:'30vw'
    })
  }
  openLogin(){
    this.matdialog.open(LoginComponent,{
      minWidth:'550px',
      minHeight:'30vh',
      maxWidth:'30vw'
    })
  }

  goToAccount() {
    if(this.checkLogin){
      this.routerTo("/my-account")
    }else{
      this.toast.warning("Bạn cần đăng nhập để thực hiện chức năng này")
    }
  }

  goToChangePass() {

  }

  logout() {
    this.userService.setUserCurrent(null);
    localStorage.removeItem('sessionExpiration');
    localStorage.removeItem('user');
    this.checkLogin=false
    this.router.navigateByUrl('home-page-content')
  }

  gotoCart() {

  }

  routerTo(s: string) {
    if(this.checkLogin){
      this.router.navigateByUrl(s)
    }else{
      this.toast.warning("Bạn cần đăng nhập để thực hiện chức năng này")
    }
  }

  viewProductByCategories(item:any) {
    this.categoriesIdSearch=item.id;
    this.categoriesNameSearch=item.categoriName
    this.search();
  }

    gotoChangePass() {
        this.routerTo("/change-pass-account")
    }
}
